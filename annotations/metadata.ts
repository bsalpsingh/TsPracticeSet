import "reflect-metadata";
// injects global variable  called  Reflect
const car = { brand: "honda" };
Reflect.defineMetadata("color", "red", car);

//? the 4th arg to defineMetadata method is optional
//? if 4th arg is defined , the metadata is binded to property of object
//? instead of  the object itself

const carMetaData = Reflect.getMetadata("color", car);
Reflect.defineMetadata("origin", "japan", car, "brand");
const brandMetaData = Reflect.getMetadata("origin", car, "brand");

// ? getmetadata with 4th arg will get the metadata of the property
//? that is passed as 4th arg

console.log("car Meta Data: ", carMetaData);
console.log("brnad Meta data: ", brandMetaData);
