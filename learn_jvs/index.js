console.log("Hye: ");
//**promise** helps the application for a process to end before continuing//
const event = new Promise((resolve, reject) => {
    var name = "Maria";
    if(name == "Pedro"){
        resolve(name); //function call when success happens
    }
    else{
        reject("Name was not Pedro, it was: " + name); //function called when failure happens
    }
}); 

event 
    .then((name) => {
        console.log(name);
    })
    .catch((err) => {
        console.log(err);
    });