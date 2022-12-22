const upperCase = document.querySelector(".upper-case-button");
const lowerCase = document.querySelector(".lower-case-button");
const capitalizeCase = document.querySelector(".capitalize-case-button");
const userInput = document.querySelector("#UserInput");


// event on uppercase
upperCase.addEventListener('click',()=>{
    let inputValue = userInput.value;
    let newInput = inputValue.toUpperCase();
    userInput.value = newInput
})  

// event on lowercase
lowerCase.addEventListener('click',()=>{
    let inputValue = userInput.value;
    let newInput = inputValue.toLowerCase();
    userInput.value = newInput;
})

// event on capitalize
capitalizeCase.addEventListener('click',()=>{
    const inputValue = userInput.value;
    // split into array
    const words = inputValue.split(" ");
    console.log(words)
    const newWords = [];
    // removing space from array
    for(let x of words){
         if(x!==""){
            console.log("working")
            newWords.push(x);
         }
    }

    for(let i=0;i<newWords.length;i++){
        // words[i].substr will add all charactare from index 1
         newWords[i] = newWords[i][0].toUpperCase() + newWords[i].substr(1).toLowerCase();; 
    }
    userInput.value = newWords.join(" ");
        
})


