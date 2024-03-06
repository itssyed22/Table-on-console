

var number = parseInt(prompt("Which number table do you want:"));
if (!isNaN(number)) {
    console.log("Multiplication table of " + number + ":");
    for(var i=1; i<=10; i++){
        console.log(number+  " * " + i + " = " + number * i);
    }
 }else{
    console.log("Invalid input.Please enter a valid number:")
 }





