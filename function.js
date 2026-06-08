/*function calculateinterest() {
    console.log("i just called a function to return my name");
    // code to calculate interest goes here


}
//console.log(calculateinterest());


const interest = calculateinterest() => {
    return "fuction with arrow syntax";
};*/
/*
function sumnumbers(a, b) {
    const sum = a + b;
    return sum;
}


console.log(sumnumbers(5, 10));

console.log(sumnumbers(5, 80));
console.log(sumnumbers(2, 100));



function calculateinterest(principal, rate, days) {
    const interest = principal * (rate / 100) *(days / 365);
    return interest;
}

console.log(calculateinterest(1000, 5, 30));
*

let myphonenumber = "1234567890";
console.log(myphonenumber);

let myemail = "john.doe@example.com";
console.log(myemail);*/
  
function checkname(name) {
    if (name === "isabella") {
        return "name is correct";
    } else {
        return "name is incorrect";
    }
    }
    
    console.log(checkname("isabella"));

    function checkpassword(password) {
        if (password === "mypassword123") {
            return "password is correct";
        } else {
            return "password is incorrect";
        }
    }
    
    console.log(checkpassword("mypassword123"));

    function CheckResponseFromcheckname() {
        let response = checkname("isabella");
        if (response) {
            return "welcome back isabella";
        } else {
            return "Hello, Guest";
n
        } 
        
    }
    console.log(CheckResponseFromcheckname());
    
