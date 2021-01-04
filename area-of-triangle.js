/** Calculating area of triangle using Heron's Formula **/

const side1 = 5;
const side2 = 6;
const side3 = 7;
const s = (side1+side2+side3) / 2; // s is the perimeter of triangle
const areaOfTriangle = Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
console.log(areaOfTriangle);