# Avoiding common attacks

## Measures taken to ensure that contracts are not susceptible to common attacks
1. Avoided delegation to external contracts - chose to duplicate audited code in a contract that i controlled and deployed
1. Avoided time stamp dependent logic
1. None of my functions are payable
1. Robust use of require() to ensure
    1. No trasfer to zero functions
    1. That the values of key variables is within legal limits
    1. that crucial functions can be triggered only by the owner
