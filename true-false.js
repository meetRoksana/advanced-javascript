








const age = 4; //zero hole false default

if(age > 1){
    console.log("condition is true");
}
else{
    console,log("condition is false");
}

/////////////////////////////////////

const name = "Baby"; //empty string false default

if(name){
    console.log("condition is true");
}

else{
    console.log("condition is false");
}

/////////////////////////////////////

let book; //undefined false default
console.log(book); 

let book1 = null; //null means false
if(book1){
    console.log("condition is true");
}

else{
    console.log("condition is false");
}