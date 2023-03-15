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

Proof thorough induction or mathematical analysis. For any possible input the output we expect, terrminate or end. 
Traditionally "correctness" is proved by mathematical reasoning to verify that the algorithm is correct. Specification proof.
Efficiency matters because helps solves problems faster and creates better end user experience. Measure of efficiency by
time and space complexity. Time complexitiy by how long it takes the algorithm to run - running time. Space complexity by how 
much memory is taken up by the algorithm - useful for large data sets. Evaluating the growth rate of the running time or space 
complexity gives us a better idea of how the algorithm will perform as the input size grows. Standard way to evaluate
an algorthm is to use Big O notation. Space complexity is measured in big O notation.

### Big O Notation
Theoretical definition of the complexity of an algorithm as a function of the size. Big O is a notation used
to describe complexitity. A function of the size of the input. Measures complexity as the input size grows.
The Big O notation describes the worst case scenario.The upper bounds of the algorithm. Measuring how the algorith performs 
in the worst case scenario. Notion that condenses down to one variable. For linear search, it has a time complexity of big 
O(n) and for binary search it has a time complexity of big O(log n). Own space and time complexity. Reading a value in
a list is a constant time. Runtime remains the same. Common runtimes: constant, linear, logarithmic and quadriactic runtime 
and expensive quadriatic runtime. Quasilinear runtime - linear andquadratic. Brute force algorithm - try every 
possible solution - inefficient. Big O tells you number of operation is performed. Doesn't describe duration of operation.
A useful tool for quickly describing how the runtime of an algorithm increases as the data set it's operating on gets bigger.

### Algorithms with polynominal run times


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
Best use case for binary search is when the data is sorted and constant time. Returns the positon of item in the list where
the target value is. Logarithmic time and constant space. 

```

# Data Structures

A data storage format. It is the collection of values and the format they are stored in, the relationship
between the values in the collection as well as the operations applied on the data stored in the structure.


## Arrays
* A contingous data structure  - no gaps. Stores a value including a reference to where the next value is.
* Follows a pointer to the next value.
* Arrays can be homongenous (containing the same type of value) or heterogenous(where any type of value can be mixed).

## Operations on Arrays
* Access and read values
* Search for an arbitrary value
* Insert values at any point into the structure
* Delete values in the structure

## Exploring Arrays:

### Array Characteristics and Storage
https://teamtreehouse.com/library/introduction-to-data-structures/array-characteristics-and-storage

### Operations on Arrays
https://teamtreehouse.com/library/introduction-to-data-structures/operations-on-arrays

## Building a Linked List:

### Singly and Doubly Linked Lists
https://teamtreehouse.com/library/introduction-to-data-structures/singly-and-doubly-linked-lists

### Linked List Operations
https://teamtreehouse.com/library/introduction-to-data-structures/linked-lists-operations


## The Merge Sort Algorithm:

### Merge Sort Implementations:
https://teamtreehouse.com/library/introduction-to-data-structures/merge-sort-implementations

### Alternate Versions of Merge Sort: 
https://teamtreehouse.com/library/introduction-to-data-structures/alternate-versions-of-merge-sort

## Merge Sort and Linked Lists:

### Implementing Merge Sort on Linked Lists
https://teamtreehouse.com/library/introduction-to-data-structures/implementing-merge-sort-on-linked-lists