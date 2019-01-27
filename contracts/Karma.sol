pragma solidity ^0.5.0;
/*
Background:

These smart contracts are used to model a simplified business situation (rewarding ideal behaviour of customers and partners with Karma
Credits) of a hearing healthcare devices company. The company (for this demo M4BC2) sells 10 different types of devices - these have different
price points. M4BC2 works with a network of sales companies and partners (called Karma Members) who sell these devices to end customers.
M4BC2 has identified upto 10 different ways to engage the customer. A successful engagement of the customer will result in a Karma Credit
reward to all the relevant stakeholders (the company, the successful member and the customer). This reward will be proportional to the class of
product sold (base difficulty) and the quality of engagement (task difficulty). Karma Credits can be obtained from the contract only through karma
- these cannot be bought with ether.

In this simplified example,
  1.  It is assumed that a given member sells only one type of device (indicated by 'Base difficulty').
  2.  The products are not cross verified with the CRM or PIM system. Also, there is no cross verification with customer activity logic
      and rules. Without these cross verifications, there is a scope for frodulant claims for Karma Credit.

In subsequnet versions, the following will be done:
  1.  Each member will be able to sell more than one types of devices.
  2.  Products will be registred (using perhaps the hash of their unique ids) and will be mapped against sales states, customer activity
      with clear checks (rules) for awarding karma credits. For e.g. for a given product, the user can buy only once, the user can
      upgrade only once etc
  3.  Accounts trying to claim Karma Credits and failing repeatedly will be frozen for further investigation. Exact rules to be finalised


*/

import "zeppelin/ownership/Ownable.sol";

contract Owned is Ownable {


    //A way to read the current owner of the contract
    function getCurrentOwner() public view returns (address) {
        return _owner;
    }

    //A way to verify if a given address corresponds to that of the owner
    function isThisOwner(address _requester) public view returns (bool) {
        return (_requester==_owner);
    }
}

interface tokenRecipient { function receiveApproval(address _from, uint256 _value, address _token, bytes calldata _extraData) external ; }

contract TokenERC20 {

    string public name = "Karma Credit";
    string public symbol = "Karma";
    uint8 public decimals = 18;
    // 18 decimals is the strongly suggested default, avoid changing it
    uint256 constant initialSupply = 30000000000;
    uint256 public totalSupply;

    // This creates an array with all balances
    mapping (address => uint256) public balanceOf;
    mapping (address => mapping (address => uint256)) public allowance;

    // This generates a public event on the blockchain that will notify clients
    event Transfer(address indexed from, address indexed to, uint256 value);



    /**
     * Constrctor function
     *
     * Initializes contract with initial supply tokens to the creator of the contract
     */
    constructor() public {
        totalSupply = initialSupply * 10 ** uint256(decimals);  // Update total supply with the decimal amount
    }

    /**
     * Internal transfer, only can be called by this contract
     */
    function _transfer(address _from, address _to, uint _value) internal {
        // Prevent transfer to 0x0 address. Use burn() instead
        require(_to != 0x0000000000000000000000000000000000000000);
        // Check if the sender has enough
        require(balanceOf[_from] >= _value);
        // Check for overflows
        require(balanceOf[_to] + _value > balanceOf[_to]);
        // Save this for an assertion in the future
        uint previousBalances = balanceOf[_from] + balanceOf[_to];
        // Subtract from the sender
        balanceOf[_from] -= _value;
        // Add the same to the recipient
        balanceOf[_to] += _value;
        emit Transfer(_from, _to, _value);
        // Asserts are used to use static analysis to find bugs in your code. They should never fail
        assert(balanceOf[_from] + balanceOf[_to] == previousBalances);
    }

    /**
     * Transfer tokens
     *
     * Send `_value` tokens to `_to` from your account
     *
     * @param _to The address of the recipient
     * @param _value the amount to send
     */
    function transfer(address _to, uint256 _value) public {
        _transfer(msg.sender, _to, _value);
    }

    /**
     * Transfer tokens from other address
     *
     * Send `_value` tokens to `_to` in behalf of `_from`
     *
     * @param _from The address of the sender
     * @param _to The address of the recipient
     * @param _value the amount to send
     */
    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        require(_value <= allowance[_from][msg.sender]);     // Check allowance
        allowance[_from][msg.sender] -= _value;
        _transfer(_from, _to, _value);
        return true;
    }

    /**
     * Set allowance for other address
     *
     * Allows `_spender` to spend no more than `_value` tokens in your behalf
     *
     * @param _spender The address authorized to spend
     * @param _value the max amount they can spend
     */
    function approve(address _spender, uint256 _value) public
        returns (bool success) {
        allowance[msg.sender][_spender] = _value;
        return true;
    }

    /**
     * Set allowance for other address and notify
     *
     * Allows `_spender` to spend no more than `_value` tokens in your behalf, and then ping the contract about it
     *
     * @param _spender The address authorized to spend
     * @param _value the max amount they can spend
     * @param _extraData some extra information to send to the approved contract
     */
    function approveAndCall(address _spender, uint256 _value, bytes memory _extraData)
        public
        returns (bool success) {
        tokenRecipient spender = tokenRecipient(_spender);
        if (approve(_spender, _value)) {
            spender.receiveApproval(msg.sender, _value, address(this), _extraData);
            return true;
        }
    }

}

/******************************************/
/*       ADVANCED TOKEN STARTS HERE       */
/******************************************/

contract Karma is Owned, TokenERC20 {

    //uint256 public sellPrice;
    //uint256 public buyPrice;
    uint8 public calDecimals = 17;

    mapping (address => bool) public frozenAccount;
    address[] public karmaMembers;
    mapping (address => string) private KarmaMemberName;
    mapping (bytes32 => uint) private productRegister;
    mapping (bytes32 => uint) public simpleProdCanBeSold;
    bool private pauseThis = false; //key variable for circuitbreaker

    /* This generates a public event on the blockchain that will notify clients */
    event FrozenFunds(address target, bool frozen);

    /* Initializes contract with a Karma Credit for the creator of the contract for successful deployment*/
    constructor() public {
        uint temp1;
        temp1 = 1000 * (10 ** uint256(calDecimals));
        _awardKarma(_owner,temp1);
    }

    /// A modifier to implement the circuitbreaker
    modifier whenUnpaused() {
        require(!pauseThis);
        _;
    }

    ///A function used to activate the circuitbreaker
    function pauseThisNow() whenUnpaused onlyOwner private {
        pauseThis = true;
    }

    /// A function to deactivate the circuitbreaker
    function unpauseThisNow() onlyOwner private {
        require(pauseThis);
        pauseThis = false;
    }

    /* Internal transfer, only can be called by this contract */
    function _transfer(address _from, address _to, uint _value) whenUnpaused internal {
        require (_to != 0x0000000000000000000000000000000000000000);                               // Prevent transfer to 0x0 address. Use burn() instead
        require (balanceOf[_from] >= _value);               // Check if the sender has enough
        require (balanceOf[_to] + _value >= balanceOf[_to]); // Check for overflows
        require(!frozenAccount[_from]);                     // Check if sender is frozen
        require(!frozenAccount[_to]);                       // Check if recipient is frozen
        balanceOf[_from] -= _value;                         // Subtract from the sender
        balanceOf[_to] += _value;                           // Add the same to the recipient
        emit Transfer(_from, _to, _value);
    }

    ///A simple implimentation of a project register in order to reduce fake karma credit claims
    /// @param _refNo - hash of the product's unique reference number
    /// @param _difficulty - a number that represents the price range of the product
    function registerProduct(bytes32 _refNo, uint _difficulty) whenUnpaused onlyOwner internal {
      require(_difficulty>0 && _difficulty<11); //difficulty must be within range
      require(productRegister[_refNo] ==0); //A product can be entered only once in the register
      productRegister[_refNo] = _difficulty; //The register tracks the difficulty of the product against the hash of the unique ref no
      simpleProdCanBeSold[_refNo] = 1; //product available in the register and can be sold
    }

    ///A simple implimentation of a sales register
    /// @param _refNo - hash of the product's unique reference number
    /// @param affiliate - a number that represents the price range of the product
    function registerSale(bytes32 _refNo, address affiliate) whenUnpaused public returns (bool success){
      //only the owner of the affiliate contract can report that a given product has been sold
      KarmaMemberships localMem = KarmaMemberships(affiliate);
      require (localMem.isThisOwner(msg.sender));
      require (simpleProdCanBeSold[_refNo]!=0);//product must be available in the register
      simpleProdCanBeSold[_refNo] = 2;//product is marked to be sold
      return true;
    }

    ///A simple lookup of a product's sold staus from a sales register
    /// @param _refNo - hash of the product's unique reference number
    function getSoldStatus(bytes32 _refNo) whenUnpaused public returns (uint) {
      return simpleProdCanBeSold[_refNo];
    }

    /// A function that deploys a karam memberships contract instance for each new member being onboarded
    /// @param _memberName - name of the newly onboardrd affiliate
    /// @param _difficulty - a number that represents the price range of the product sold by the affiliate.
    function createKarmaMembers(string memory _memberName, uint _difficulty) whenUnpaused onlyOwner public  {
        require(_difficulty>0 && _difficulty<11); //difficulty must be within range
        //create a new membership instance
        KarmaMemberships newKarmaMem = new KarmaMemberships(address(this),_memberName,_difficulty);
        uint temp;
        //push the properties of the instance to the registers
        karmaMembers.push(address(newKarmaMem));
        KarmaMemberName[address(newKarmaMem)]= _memberName;
        //The karma contract owner gets a reward for bringing a new affiliate onboard
        temp = 500* (10 ** uint256(calDecimals)); //logic of calculating the karma credit
        _awardKarma(address(newKarmaMem), temp);
        _awardKarma(_owner,temp);
    }

    /// Claculate the karma credit award for the specified awardee in response to the specified task
    /// @param awardee Address of the recipient of the karma credits
    /// @param taskDifficulty specifies the level of difficulty of the activity that resulted in the karma credit award
    /// @param affiliate specifies the address of the membership contract that corresponds to the affiliate
    function calKarmaAward(address awardee, uint taskDifficulty, address affiliate) whenUnpaused public {
        uint awardAmount;
        KarmaMemberships localMem = KarmaMemberships(affiliate); //access the instance of the membership contract at the adress specified (affiliate)
        require(localMem.isThisOwner(msg.sender)); //this can only be called by the owner of the affiliate contract
        require(taskDifficulty>0 && taskDifficulty<10); //the task difficulty must be in range
        //neither the awardee nor the affiliate can be null
        require(awardee != 0x0000000000000000000000000000000000000000 && affiliate != 0x0000000000000000000000000000000000000000);

        awardAmount = localMem.getMemberDifficulty() * taskDifficulty * (10 ** uint256(calDecimals)); //award calculation logic

        _awardKarma(awardee,awardAmount); //awardee gets the karma credits
        _awardKarma(affiliate,awardAmount); //affiliate gets the karma credits
        _awardKarma(_owner,awardAmount); //owner of the karma contract owner
    }

    /// Award the specified amount of karma credits to the awardee
    /// @param awardee Address of the recipient of the karma credits
    /// @param awardAmount signified the size of the karma credit award to the recipient
    function _awardKarma(address awardee, uint awardAmount) whenUnpaused internal {
        require(awardee != 0x0000000000000000000000000000000000000000);//ensure that the awaredee is not null
        require(!frozenAccount[awardee]);                     // Check if recipient is frozen
        require(totalSupply > awardAmount); //check that the award is lower than the total supply in the contract
        totalSupply -= awardAmount;
        balanceOf[awardee] += awardAmount;
        emit Transfer(address(this), awardee, awardAmount);

    }


    /// @notice `freeze? Prevent | Allow` `target` from sending & receiving tokens
    /// @param target Address to be frozen
    /// @param freeze either to freeze it or not
    function freezeAccount(address target, bool freeze) whenUnpaused onlyOwner public {
        frozenAccount[target] = freeze;
        emit FrozenFunds(target, freeze);
    }

    ///A function to read the list of instance addressed of all members
    function getKarmaMembers() whenUnpaused public view returns (address[] memory){
      return karmaMembers;
    }

    ///A function to read the name of the member
    /// @param _deployedAddress Address of member contract instance
    function getKarmaMemberName(address _deployedAddress) whenUnpaused onlyOwner public view returns (string memory){
      return KarmaMemberName[_deployedAddress];
    }


/*
    /// @notice Allow users to buy tokens for `newBuyPrice` eth and sell tokens for `newSellPrice` eth
    /// @param newSellPrice Price the users can sell to the contract
    /// @param newBuyPrice Price users can buy from the contract
    function setPrices(uint256 newSellPrice, uint256 newBuyPrice) onlyOwner public {
        sellPrice = newSellPrice;
        buyPrice = newBuyPrice;
    }

    /// @notice Buy tokens from contract by sending ether
    function buy() payable public {
        uint amount = msg.value / buyPrice;               // calculates the amount
        _transfer(this, msg.sender, amount);              // makes the transfers
    }

    /// @notice Sell `amount` tokens to contract
    /// @param amount amount of tokens to be sold
    function sell(uint256 amount) public {
        require(this.balance >= amount * sellPrice);      // checks if the contract has enough ether to buy
        _transfer(msg.sender, this, amount);              // makes the transfers
        msg.sender.transfer(amount * sellPrice);          // sends ether to the seller. It's important to do this last to avoid recursion attacks
    }
*/
}

contract KarmaMemberships is Owned{
    uint public baseDifficulty; //refers to the price range of the product sold by the affiliate member
    string public memberName; //name of the member
    address public deployedKarmaBase; //the address of the karma contract that activates this instance

    //temporary variables to control fraudulant karma credit claims
    mapping (address => bool) private cantClaim;
    mapping (address => uint) private claimCount;
    uint public claimCountLimit = 50;

    ///Constructor function
    constructor(address _deployedKarmaBase, string memory _memberName, uint _difficulty) public {
        deployedKarmaBase = _deployedKarmaBase;
        memberName = _memberName;
        baseDifficulty = _difficulty;

        Karma deployedKarma = Karma(deployedKarmaBase);
        _owner = deployedKarma.getCurrentOwner();
    }

    /// A function that allows the member owner to verify and reward patients engaging with the products. This is a temporary
    /// approach. This currently doesnt take the product register or the product sales register into consideration. This will be
    /// replaced by the 2 functions below that are currently commented.
    /// @param awardee Address of the recipient of the karma credits
    /// @param taskDifficulty signified the activity undertkane by the patient as apart of the engagement with the products
    function claimKarma(address awardee, uint taskDifficulty) public onlyOwner{
      //We need to ensure that a given address can only register one new product. Every subsequent purchase is considered as an upgrade
        require(taskDifficulty>0 && taskDifficulty<10); //Task must be within the specified range
        if (taskDifficulty == 9) { //task 9 means new product purchase
            require ((!cantClaim[awardee]) && (claimCount[awardee]<claimCountLimit)); //check if the address has already claimed
        }
        else {
            require (claimCount[awardee]<claimCountLimit);
        }
        Karma(deployedKarmaBase).calKarmaAward(awardee,taskDifficulty,address(this));
        if (taskDifficulty == 9) {
          cantClaim[awardee] = true; //if the address has claimed a new product registration reward, she cant claim again
        }
        claimCount[awardee]++; //only a certain number of claims are allowed - this logic is evolving
    }

    /// The below functions are evolving and will eventually replace the above function

/*
    function claimKarma(address awardee, uint taskDifficulty, bytes32 _refNo) public onlyOwner{
        require (taskDifficulty != 8);
        require (taskDifficulty>0 && taskDifficulty<10);
        if (taskDifficulty == 9) {
            require ((!cantClaim[awardee]) && (claimCount[awardee]<claimCountLimit));
            require (Karma(deployedKarmaBase).registerSale(_refNo, address(this)));
        }
        else{
            require (claimCount[awardee]<claimCountLimit);
            require (Karma(deployedKarmaBase).getSoldStatus(_refNo) == 2);
        }
        Karma(deployedKarmaBase).calKarmaAward(awardee,taskDifficulty,address(this));
        if (taskDifficulty == 9) {
          cantClaim[awardee] = true;
        }
        claimCount[awardee]++;
    }

    function claimKarma(address awardee, uint taskDifficulty, bytes32 _oldRefNo, bytes32 _newRefNo) public onlyOwner{
        require (taskDifficulty == 8);
        require (Karma(deployedKarmaBase).getSoldStatus(_refNo) == 2);
        require (Karma(deployedKarmaBase).registerSale(_newRefNo, address(this)));
        require (claimCount[awardee]<claimCountLimit);
        Karma(deployedKarmaBase).calKarmaAward(awardee,taskDifficulty,address(this));
        claimCount[awardee]++;
    }
*/
    /// A function to get the name of the member
    function getMemberName() public view returns (string memory) {
      return memberName;
    }

    /// A function to get the current difficulty level of the member- this is an indication of the price range of the products carried by the member
    function getMemberDifficulty() public view returns (uint) {
      // This can only be called either by the owner of the karma contract or the owner of this instance
      Karma deployedKarma = Karma(deployedKarmaBase);
      require((msg.sender == deployedKarma.getCurrentOwner())  || (msg.sender == _owner));
      return baseDifficulty;
    }

    ///A function to update the name of the member
    /// @param newName A string denoting the new name of the member
    function setMemberName(string memory newName) public {
      Karma deployedKarma = Karma(deployedKarmaBase);
      require((msg.sender == deployedKarma.getCurrentOwner()) || (msg.sender == _owner)); //Member name can be chnaged only by the Karma owner or the member owner
      memberName = newName;
    }

    ///A function to update the difficulty of the member - done if the range of price of the products carried by the member changes
    /// @param newDifficulty A string denoting the new name of the memeber
    function setMemberDifficulty(uint newDifficulty) public {
      require(newDifficulty>0 && newDifficulty<11); //difficulty must be within range
      Karma deployedKarma = Karma(deployedKarmaBase);
      require(msg.sender == deployedKarma.getCurrentOwner()); // Member difficulty cn only be chnaged by the Karma owner
      baseDifficulty = newDifficulty;
    }

}
