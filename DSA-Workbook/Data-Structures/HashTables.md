## Hash Tables 
Hashing is a technique that is used to uniquely identify a specific object from a group of similar objects. Some examples include: 
* In universities, each student is assigned a unique roll number that can be used to retrieve information about them. 
* In libraries, each book is assigned a unique number that can be used to determine information about the book, such as its exact position in the library or the users it has been issued to. 

In hashing, large keys are converted into small keys by using **hash functions**. The values are then stored in a data structure called **hash table**. The goal of hashing is to distribute entries (key/value pairs) uniformly across an array. Each element is assigned a key and by using that key you can access the element. Using the key, the algorithm (hash function) computes an index that suggest where an entry can be found or inserted. Hashing is implemented in two steps: 
* An element is converted into an integer by using a hash function. This element can be used as an index to store the original element, which falls into the hash table
* The element is stored in the hash table where it can be quickly retrieved using hashed key 

### Hash Functions
A hash function is a function that can be used to map a data set of an arbitrary size to a data set of fixed size, which falls into the hash table. The values returned by a hash function are called hash values, hash codes, hash sums or simply hashes. Necessary requirements for a "good" hash function include: 
* Easy to compute: it should be easy to compute and must not become an algorithm itself 
* Uniform distribution: it should provide a uniform distribution across the hash table and should not result in clustering
* Less collisions: collisions occur when pairs of elements are mapped to the same hash value; these should be avoided. 

![Diagram1]()