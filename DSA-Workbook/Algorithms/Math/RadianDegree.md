## Radian and Degree 
The *Radian* is the SI unit for measuring angles and is the standard unit of angular measure in many areas of mathematics. One radian is the angle made at the center of a circle by an arc whose length is equal to the radius of the circle. Whereas a full circle is equal to 360 degrees a full circle is also just over 6 radians. 

![Diagram 1](https://github.com/Jzbonner/ProgrammingConcepts/blob/master/img-media/radian.png?raw=true)

The *Degree* is a measurement of plane angle, defined so that a full rotation is 360 degrees. It is not technically an SI Unit, however it is mentioned in the SI brochure as an accepted unit. 

The `Math.x()`  JavaScript a built in object that has properties and methods for mathematical constants and functions. `Math` is not a constructor nor a function object. An example of Radian to Degree conversion using the `Math` object in JavaScript can be seen below: 

### Implementation 
```javascript 
// Converts from degrees to radians.
Math.radians = function(degrees) {
  return degrees * Math.PI / 180;
};
 
// Converts from radians to degrees.
Math.degrees = function(radians) {
  return radians * 180 / Math.PI;
};
 
```