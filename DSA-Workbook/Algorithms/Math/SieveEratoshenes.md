## Sieve of Eratosthenes
The Sieve of Eratosthenes is a simple algorithm for identifying prime numbers up to a set limit `n`. Beginning at 2, the algorithm iterates upward. For the current number, if the number has not been marked, we identify it as prime, and then mark all multiples of that number up to our target number. So to find all primes up to 12, the strategy would be to: 
* start at 2, note 2 as prime, and mark 4, 6, 8, 10 and 12 as non-prime
* move to 3, note 3 as prime, and mark 6, 9, 12 as non-prime
* move to 4, see that it is marked, and skip it
* move to 5, note 5 as prime and mark 10 as non-prime
* move to 6, see that it is marked and skip it
* move to 7 , note 7 as prime
* see that 8-10 are marked and skip them
* move to 11, note 11 as prime
* move to 12, see that it is marked and skip it

### Implementation 
There are a number of ways to implement this algorithm in JavaScript. Below is an example which uses a limit variable and `isPrime` functionality: 

```javascript 
function generatePrimes() {
    const markedNotPrime = {};
    let valueToCheck = 2;
    while(true) {
        if (!(valueToCheck in markedNotPrime)) {
            yield valueToCheck
            markedNotPrime[valueToCheck**2] = [valueToCheck]
        } else {
            let primes =markedNotPrime[valueToCheck];
            primes.forEach(prime=> {
                let nextMultipleOfPrime = prime + valueToCheck;
                if (nextMultipleOfPrime in markedNotPrime) {
                    markedNotPrime[nextMultipleOfPrime].push(prime);
                } else {
                    markedNotPrime[nextMultipleOfPrime] = [prime];
                }
            })
            delete markedNotPrime[valueToCheck];
        }
        valueToCheck += 1
    }
}
```