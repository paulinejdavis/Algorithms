# Algorithms

<img width="100" alt="arrow" src="https://user-images.githubusercontent.com/19231569/213458967-d77d1ede-cbb8-4cda-8d58-7ac2a1c70503.png"> &nbsp;<img width="100" alt="logo" src="https://user-images.githubusercontent.com/111147520/224722633-4514c7d6-b10e-41d0-8942-80147bdb88ff.png"> &nbsp;
<img width="100" alt="logo" src="https://user-images.githubusercontent.com/111147520/224819343-82ceb3c6-609e-48f7-9fec-d165a924545f.png">

## Algorithms in Code

* Clearly defined problem statment, input and output.
* The steps in the algorithm need to be in a very specific order.
* The steps also need to be distinct
* The algorithm should produce a result
* The algorithm should complete in a finite amount of time


## Correctness or Efficiency

Proof thorough induction or mathematical analysis. Fopr any possible input the output we expect, terrminate or end. 
Traditionally "correctness" is proved by mathematical reasoning to verify that the algorithm is correct. Specification proof.
Efficiency matters because helps solves problems faster and creates better end user experience. Measure of efficiency by
time and space complexity. Time complexitiy by how long it takes the algorithm to run - running time. Space complexity by how 
much memory is taken up by the algorithm - useful for large data sets. Evaluating the growth rate of the running time or space 
complexity gives us a better idea of how the algorithm will perform as the input size grows. Standard way to evaluate
an algorthm is to use Big O notation.

### Big O Notation
Theoretical definition of the complexity of an algorithm as a function of the size. Big O is a notation used
to describe complexitity. A function of the size of the input. Measures complexity as the input size grows.
The Big O notation describes the worst case scenario.The upper bounds of the algorithm. Measuring how the algorith performs in
the worst case scenario. Notion that condenses down to one variable. For linear search, it has a time complexity of big O(n) and
for binary search it has a time complexity of big O(log n). Own space and time complexity. Reading a value in a list is a constant time. Runtime remains the same. Quadriactic runtime and expensive quadriatic runtime. Quasilinear runtime - linear and
quadratic. Brute force algorithm - try every possible solution - inefficient.


## Linear Search
```
 Linear Search Implementations:
 https://teamtreehouse.com/library/introduction-to-algorithms/linear-search-implementations
 Best use case for linear search is when the data is not sorted.

```

## Binary Search
```
Binary Search Implementations:
https://teamtreehouse.com/library/introduction-to-algorithms/binary-search-implementations
Best use case for binary search is when the data is sorted. Returns the positon of item in the list where
the target value is 

```
