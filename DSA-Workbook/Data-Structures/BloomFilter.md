## Bloom Filter 
A **Bloom Filter** is a data structure designed to tell you, rapidly and memory efficiently, whether an element is present in a set. A *Bloom Filter* is a probabilistic data structure in that it tells us that the element either _definitely is not_ in the set or _may be_ in the set. The base data structure of a Bloom Filter is a **Bit Vector**:

![Diagram1](https://www.researchgate.net/profile/Amos_Fiat/publication/2878083/figure/fig1/AS:279849227833349@1443732663249/Sparse-Bit-Vector-data-structure.png)

> A Bloom Filter is derived from a proposed technique for applications where the amount of source data would require an impractically large amount of memory if "conventional" error-free hashing techniques were applied. 