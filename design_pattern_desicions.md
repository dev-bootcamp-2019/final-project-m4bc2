# Design Pattern Decisions

## Design patterns used
1. Circuit breaker: I have used this pattern in the main Karma Contract order to be able to pause it when necessary. The main contract implements the most fundamental aspects of the Karma Credit approach and so it is crucial that there is a way to pause the contract if something unexpected happens
2. Maximum usage: I have implemented max usage limits for Karma Credit claims from members and patients in order to curtail the fraudulent claims.
3. I have avoided delegation calls as I was unsure - chose to reuse reliable code in the contracts I own rather than using externally owned contracts with same code.
4. Checks-Effects-Interactions Pattern: Used modifiers with robust input requirements

## Vulnerabilities that I have to address
1. Integer Overflow and Underflow
