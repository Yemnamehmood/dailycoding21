"use strict";
//DAY 21
//TASK 1 (Making enums)
//Making a list of vehicles 
var vehicletype;
(function (vehicletype) {
    vehicletype[vehicletype["Car"] = 0] = "Car";
    vehicletype[vehicletype["Auto"] = 1] = "Auto";
    vehicletype[vehicletype["Train"] = 2] = "Train";
})(vehicletype || (vehicletype = {}));
console.log(vehicletype.Car); //It will show 0 because enums start counting from 0
// Filling in the blueprint with an example student
let student = {
    Name: "Yemna Mehmood",
    Age: 22,
    Courses: ["English", "Science", "Islamic studies"]
};
//Showing the student info 
console.log(student);
//Describing a cricle using our Shape type
let circle = {
    kind: "circle",
    radius: 4
};
//Describing a rectangle using out Shape type 
let rectangle = {
    kind: "rectangle",
    height: 20,
    width: 11,
};
//Showing what we described
console.log(circle);
console.log(rectangle);
//We made a flexible program that can describe different shapes in detail. 
