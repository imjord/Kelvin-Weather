const kelvin = 293; // var const named kelvin its const because the value 293 will stay the same.


// getting the value of celsius by subtracting kelvin 
const celsius = kelvin - 273;


// getting the value of fahrenheit by using the formula * celsius 
let fahrenheit = celsius * (9/5) + 32;

// rounding down fahrenheit value using math.floor 
fahrenheit = Math.floor(fahrenheit);



// logging what the temp is.
console.log(`The tempature is ${fahrenheit} degrees fahrenheit.`);



// bonus
let newton = celsius * (33/100);

newton = Math.floor(newton);

console.log(` The tempature is ${newton} degrees newton.`);