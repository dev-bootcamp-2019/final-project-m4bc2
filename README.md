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
