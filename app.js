//console.log("its working from different file");


//input
//var username = prompt("give me ursername")

//alert("this script is working " + username);

//processing
//var welcomemessage = "this script works!!" + username;

//output
//alert(welcomemessage);



var btntranslate = document.querySelector("#btn-translate");
var TxtInput = document.querySelector("#txt-input");
console.log(TxtInput)

function clickHandler(){

    console.log("clicked");
    console.log("input",TxtInput.value);
};

btntranslate.addEventListener("click", clickHandler)
 


//  console.log("clicked")
//})

