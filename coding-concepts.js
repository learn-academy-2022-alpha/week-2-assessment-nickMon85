// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Alpha 2022"
//console.log(cohort.split(""))

// a) Your answer: It will create an a array of strings. Each letter being a string of the array.
// b) Verify and explain:I was right. It created an array string.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
//console.log(greeter("LEARN Student"))

// a) Your answer: It will console.log "Hello, Learn Student"
// b) Verify and explain:It was undefined. There was no argument pushed through the parameters. So console.log was undefined.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
 //console.log(multBy2)

// a) Your answer:It will multiply every number in the array by 2.
// b) Verify and explain: I was right. Map allowed an iteration of the array, multiplying all data to be multiplied by 2


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
//console.log(onlyOdds)

// a) Your answer:It will leave the even numbers.
// b) Verify and explain: I was wrong. This left the odd number, and separated the even numbers. It left the numbers not divisible by 2.


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
//console.log(myCodingSkills.languages[0])

// a) Your answer: It will log JavaScriptt.
// b) Verify and explain: I was correct. It used the key, value which is an array. Index 0 is JavaScript.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Alpha",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer:I think it will log the learn students name.
// b) Verify and explain:I was wrong. It initiated the class using the word new, then formatted the key:values which programmed.
