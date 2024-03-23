//DAY 21
//TASK 1 (Making enums)
//Making a list of vehicles 
 enum vehicletype {
    Car,
    Auto,
    Train,
 }
 console.log(vehicletype.Car); //It will show 0 because enums start counting from 0

 //Task 2 (Making a student template)
 //Creating a blueprint (interface) for student info
 interface Student {
    Name:string;
    Age: number
    Courses: string[];
 }
 // Filling in the blueprint with an example student
 let student: Student={
    Name: "Yemna Mehmood",
    Age: 22,
    Courses: ["English","Science","Islamic studies"]

 };

 //Showing the student info 
 console.log(student); 

 //Task 3 (Shape shifter)
 //Creating a custom type (type alias) for shapes that could be cricles or rectangles
 type shape = {
    kind: "circle" | "rectangle";
    radius?: number; //only for circles
    width?: number; //only for rectangles
    height?: number; //only for rectangles
 };

 //Describing a cricle using our Shape type
 let circle: shape = {
    kind: "circle",
    radius: 4
 };

 //Describing a rectangle using out Shape type 
 let rectangle: shape= {
    kind: "rectangle",
    height: 20,
    width: 11,
 };

 //Showing what we described
 console.log(circle); 
 console.log(rectangle);
 //We made a flexible program that can describe different shapes in detail. 