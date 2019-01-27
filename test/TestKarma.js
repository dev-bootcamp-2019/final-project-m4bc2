
var Karma = artifacts.require("./Karma.sol");

contract('Karma', function(accounts) {

  const owner = accounts[0]
  const partnerAdmin1 = accounts[1];
  const partnerAdmin2 = accounts[2];
  const partnerAdmin3 = accounts[3];
  const patient1 = accounts[4];
  const patient2 = accounts[5];
  const patient3 = accounts[6];

//Testing to see if the contract deplyment goes through and if the karma credit is issued to the owner of the contract
  it("Deploys Karma contract correctly and admin compensated", async () => {
    const karma = await Karma.deployed();

    const balanceOwner = await karma.balanceOf(owner, {from: owner});
    assert.equal(balanceOwner, 1000*10**17, 'Admin compensated correctly');

  });

//Testing creating of member instances and the corresponding issue of karma credits as per the established rules
  it("Should create a member with correct details and compensate both the karma admin and the member", async () => {
    const karma = await Karma.deployed();
    const initialOwnerBalance = await karma.balanceOf(owner, {from: owner});
    const member1 = await karma.createKarmaMembers("Mom and Pop shop 1",8,{from: owner});
    const finalOwnerBalance = await karma.balanceOf(owner, {from: owner});
    const memAddress = await karma.getKarmaMembers({from: owner});
    const initialMemBalance = await karma.balanceOf(memAddress[0], {from: owner});
    const compensation = 500*10**17;

    assert.equal(finalOwnerBalance - initialOwnerBalance, compensation, "Karma admin compensated correctly");
    assert.equal(initialMemBalance, compensation, "New member compensated correctly");
  });

  it("Should allow the handover of member admin to respective admins", async () => {
    const karma = await Karma.deployed();
    await karma.createKarmaMembers("Mom and Pop shop 1",6,{from: owner});
    await karma.createKarmaMembers("Audio pro shop 1",9,{from: owner});
    await karma.createKarmaMembers("Distributor A/S",7,{from: owner});

    const memAddress = await karma.getKarmaMembers({from: owner});

    const member1 = await Karma.at(memAddress[0]);
    const member2 = await Karma.at(memAddress[1]);
    const member3 = await Karma.at(memAddress[2]);

    await member1.transferOwnership(partnerAdmin1, {from: owner});
    await member2.transferOwnership(partnerAdmin2, {from: owner});
    await member3.transferOwnership(partnerAdmin3, {from: owner});

    const adm1 = await member1.getCurrentOwner();
    const adm2 = await member2.getCurrentOwner();
    const adm3 = await member3.getCurrentOwner();

    assert.equal(adm1.toString(), partnerAdmin1, "Member 1 admin transfer successful");
    assert.equal(adm2, partnerAdmin2, "Member 2 admin transfer successful");
    assert.equal(adm3, partnerAdmin3, "Member 3 admin transfer successful");
  });



});
