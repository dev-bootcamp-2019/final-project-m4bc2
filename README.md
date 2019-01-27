# Karma Credits
#### final-project-m4bc2 created by GitHub Classroom

## Introduction
This is an attempt to model a simplified customer engagement experience of a fictitious hearing healthcare devices company. The company, for the purposes of this demo M4BC2, wants to reward ideal behaviour among customers and partners with cryptoassets called Karma Credits.

M4BC2 sells 10 different types of devices, each at a different price range, through a network of sales companies and partners (called Karma Members), who engage with the end customers. M4BC2 has identified upto 10 different ways to engage the customer. A successful engagement of the customer will result in a reward of Karma Credits to all the relevant stakeholders (the company, the successful member and the customer). This reward will be proportional to the class of product sold (denoted by base difficulty) and the quality of engagement (denoted by task difficulty). Karma Credits can be obtained from the contract only through karma - these cannot be bought with ether.

In this simplified example,
  1.  It is assumed that a given member sells only one type of device i.e. all devices sold by a member will be in the same price range i.e. the member has a 'Base difficulty' that applies to all the devices sold.
  1.  The products are not cross verified with the CRM or PIM system. Also, there is no cross verification with customer activity logic
      and rules. Without these cross verifications, there is a scope for froudulant claims for Karma Credit. 
      1.  A very simple product register has been coded in the smart contract. However, the demo frontend application doesnt provide means to use these functionalities
      1.  The Karma credit claiming mechanism implements a rudimentary mechanism to prevent uncontrolled claiming of karma credits.

In subsequnet versions, the following will be done:
  1.  Each member will be able to sell more than one types of devices.
  1.  Products will be registred (using perhaps the hash of their unique ids) and will be mapped against sales states, customer activity
      with clear checks (rules) for awarding karma credits. For e.g. for a given product, the user can buy only once, the user can
      upgrade only once etc
  1.  Accounts trying to claim Karma Credits and failing repeatedly will be frozen for further investigation. Exact rules to be finalised
  
  
## Setup
### prerequisites:
* Truffle
* Ganache-cli

### Installation steps:
1. Pl install the following

        npm init
        npm install --save web3@1.0.0-beta.37
        npm install --save next@7.0.1 react react-dom
        npm install --save semantic-ui-react
        npm install --save next-routes

1. Pl copy the following from my repo:

        contracts
        installed_contracts
        migrations
        pages
        src
        test
        truffle-config.js
        truffle.js

1. changes to package.json
    under scripts, pl ensure that you have:
  
        "test": "mocha",  
        "dev": "node src/server.js"

### compiling contract

        truffle compile

### migrating contract

        truffle migrate

###  testing contract

        truffle test

### To view the web app:

        truffle migrate --reset
  
  copy the contract address from the output and paste the address in src> components> ContractAddress.js and save.
  An instance of the contract has been deployed on the Rinkeby network and the contract address is   
  
        0xCAd994bd15dA255343f8Af858eE7b90b424a434E
        
  In order to point the web app to the rinkeby instance, pl paste the above address in src> components> ContractAddress.js and save.
  
  From the project folder on the command prompt pl execute: 
  
        npm run dev
        
  Once the server is ready, pl open app on loalhost:3000

## About the demo Web app
The Karma Credit app caters to three types of users: 
* Karma Owner: The user who has deployed the contract on ethereum. There is only one Karma Owner.
* Karma Member Owners: The user who owns the contract instance for a given affiliate/ partner. There can be only one Karma Member Admin for a given member. There will be as many Karma Member Owners as there are Karma Members.
* Patients: End users who buy the devices and experience the different engagement schemes of M4BC2 via the affiliates

### Overview of the functionality implimented in the demo app
  1. Karma Owner will be able to create new members and administer these members. She can 
      * name and rename karma members
      * assign the difficulty levels of karma members
      * can assign an owner to karma members: After assigning the owner, the karma owner sill not be able to alter these via the web app
  1.  Karma Member Owners will be able to do the following on the members that they own:
      * chnage the name of the members
      * assign a new owner
  1. Anyone can claim Karma credits and transfer credits to one another. Any user who is not a karma owner or a karma member owner will be considered to be a patient. Patients can claim karma credits either from a generic page where they have to specify the affiliate brand or from the page of their affiliate.
  

### Some points to note:
  1. There are links in the app that point to transactions and artefacts on the blockchain (via ether scan). These will work only when the app is pointing to the rinkeby instance of the contract
  1. Pl note that only the Karma Owner can chnage the difficulty level of a member. However, this feature is not implemented in the web app even though the smart contract has the relevent function. So, to chnage the difficulty level of a member, pl use remix or truffle CLI
  1. Pl note that the web app doesnt impliment the product register features of the smart contract
  
### way ahead
  1. Product registered features will be integrated into the web app
  1. ERC20 tikens will be replaced with ERC 721 tokens

### Known problems
  1. When administering the karma member details, some errors are thrown even though the transaction went through. Will be fixed soon.
 

