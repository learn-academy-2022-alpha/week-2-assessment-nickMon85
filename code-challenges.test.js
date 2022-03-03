// ASSESSMENT 2: Coding Practical Questions with Jest




// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

//const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
//const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

//create function numberArg
//Has to be divisble by 3



// a describe method that lists the name of the function OR naming of the particular test.
describe("numberArg", () => {

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("returns a number divisble by 3", () => {
        const num1 = 15
        //Expected output: "15 is divisible by three"
        const num2 = 0
        // Expected output: "0 is divisible by three"        
        const num3 = -7
        // Expected output: "-7 is not divisible by three"
        
      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(numberArg(num1)).toEqual("15 is divisible by three")
      expect(numberArg(num2)).toEqual("0 is divisible by three")
      expect(numberArg(num3)).toEqual("-7 is not divisible by three")
    })
})

const numberArg =(number) =>{
     if(number%3===0)
    return `${number} is divisible by three`
 }
//I'm having trouble testing the values within the the terminal.
  


// b) Create the function that makes the test pass.

//create function variable




// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
describe("wordCap",()=>{
// // a) Create a test with expect statements for each of the variables provided.
    

        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
         // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
//         // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]


      
    it("returns an array with all the words capitalized", ()=>{  
        expect(wordCap(randomNouns1)).toEqual("Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew")
        expeect(wordCap(randomNouns2)).toEqual("Temperature", "Database", "Chopsticks", "Mango", "Deduction")
    })
})
 //b) Create the function that makes the test pass.
//make a function that loops or map all strings with arr.
//with capitalize at index (0)
//



// declare a function that takes in an array
const wordCap = (array) => {
  // create a local variable that maps through the array
  let eachItem = array.map(value => {
    // with each value access the first index and capitalize the letter then concatenate the remainder of the word
    return value[0].toUpperCase() + value.substring(1)
  })
  // return the local variable joined into a string
  return eachItem.join(" ")
}



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

//a) Create a test with expect statements for each of the variables provided.
//create function = firstVowel
//takes strings and logs index of first vowel


describe("firstVowel",()=>{
    const vowelTester1 = "learn"
    // Expected output: 1
    const vowelTester2 = "academy"
    // Expected output: 0
    const vowelTester3 = "challenges"
    // Expected output: 2
    
    
    it("takes in a string and logs the index of the first vowel", ()=>{
       expeect(firstVowel(vowelTester1)).toEqual("1")
    })
})
const firstVowel=(string)=>{
    let vowel = string.split("")
    return vowel.indexof("e")
}

// b) Create the function that makes the test pass.
