## Complex Number
Complex Numbers have a wide variety of applications, like calculation of AC voltage, representation of rotations in 2D, Discrete Fourier Transform, complex geometry and much more. A complex number is a number that can be expressed int he form of `a + b * i`. Where `i` is considered a solution of the equation `x^2 = -1`.

![Diagram1](https://github.com/Jzbonner/ProgrammingConcepts/blob/master/img-media/complex-number.png?raw=true)

### Mathematical Operations 
When working with complex numbers the main focus is to simplify and combine like terms and then apply the standard method of operation. For example:

```
Addition ~ (2 + 3i) + (1 - 6i) ==> (2+1) + (3i - 6i) = 3 - 3i

Subtraction ~ (16i - 5i) ==> (16 - 5)i = 11i 

Multiplication ~ (3 + 2i)(1 + 7i) ==> = -11 + 23i where { i^2 = -1 } 

Conjugation ~ (2 + 3i) / (4 - 5i) ==> -7/41 + (22/41)i 
```

### Implementation 
```javascript 
function Complex(real, imaginary) {
  this.real = 0;
  this.imaginary = 0;
  this.real = (typeof real === 'undefined') ? this.real : parseFloat(real);
  this.imaginary = (typeof imaginary === 'undefined') ? this.imaginary : parseFloat(imaginary);
}

Complex.transform = function(num) {
  var complex;
  complex = (num instanceof Complex) ? num : complex;
  complex = (typeof num === 'number') ? new Complex(num, 0) : num;
  return complex;
};

function display_complex(re, im) {
  if(im === '0') return '' + re;
  if(re === 0) return '' + im + 'i';
  if(im < 0) return '' + re + im + 'i';
  return '' + re + '+' + im + 'i';
};

function complex_num_add(first, second) {
  var num1, num2;
  num1 = Complex.transform(first);
  num2 = Complex.transform(second);
  var real = num1.real + num2.real;
  var imaginary = num1.imaginary + num2.imaginary;
  return display_complex(real, imaginary);
};

var a = new Complex(2, -7);
var b = new Complex(4,  3);
console.log(complex_num_add(a,b));

```