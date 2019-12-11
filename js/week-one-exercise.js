"use strict";
//Advent Of Code problem 1


//Part 1

//Array holding the mass of each fuel module
var fuelMass = [50951,69212,119076,124303,95335,65069,109778,113786,124821,103423,128775,111918,138158,141455,92800,50908,107279,77352,129442,60097,84670,143682,104335,105729,87948,59542,81481,147508,62687,64212,66794,99506,137804,135065,135748,110879,114412,120414,72723,50412,124079,57885,95601,74974,69000,66567,118274,136432,110395,88893,124962,74296,106148,59764,123059,106473,50725,116256,80314,60965,134002,53389,82528,144323,87791,128288,109929,64373,114510,116897,84697,75358,109246,110681,94543,92590,69865,83912,124275,94276,98210,69752,100315,142879,94783,111939,64170,83629,138743,141238,77068,119299,81095,96515,126853,87563,101299,130240,62693,139018];

//Create new array using .map after performing the calculations in fuelRequired()
var fuelMass2 = fuelMass.map(fuelRequired);

//function will take each fuel mass in the array and divide by 3, round down, and then subtract 2 to final output.
function fuelRequired(value){

    return (Math.floor(value/3)) - 2;

}

//Display array fuelMass2 after calculation is performed
console.log(fuelMass2);

//Display the total sum of fuel requirements using .reduce adding each value of the array fuelMass2
console.log(fuelMass2.reduce((a, b) => a + b, 0))