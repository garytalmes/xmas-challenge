// Here we select the area where the answer will be displayed, so we can reveal it later
var resultsArea = document.querySelector(".result-content");
var resultH1Tag = document.querySelector(".result-content h2");

// Here we select the button so that later we will know when it's clicked
var button = document.querySelector("button")


function chooseTheReindeer(){
  // Here we determine which of the radio buttons was clicked for favColor. Can you do the same for the other two?
  var favColor = document.querySelector('input[name="favColor"]:checked').value



  // console.log the answers to verify all is good so far
  console.log(`${favColor} || ${favSport} || ${favCookie}`)

  /*
    TODO: Each of the values selectable by the user has an actual numeric value. 
    See if you can figure out how to get the numeric value using the arrays below
    There are much easier ways to do this, but this is a good exercise for parsing objects.
    Hint: you can use variables in place of actual object keys with bracket notation.
  */

  var realColorValues = { red: 1, blue: 2, green: 3, brown: 4, purple: 5 }
  var realSportValues = { none: 1, baseball: 2, football: 3, hockey: 4, basketball: 5 }
  var realCookieValues = { oatmeal: 1, chocolate: 2, snickerdoodle: 3, sugar: 4, raisin: 5 }


  /*
    TODO: uncomment below and finish the statements to assign the correct numeric value for the user for each answer
    HINT: remember I mentioned how you can pass a variable into dot notation when you don't know the exact property 
    key you are looking for.
  */

  // var userColorValue = 
  // var userSportValue = 
  // var userCookieValue = 


  // TODO: total up the values
  // var totalScore = userColorValue + userSportValue + userCookieValue


  // Finally, use if statements to assign a reindeer based on the score. For instance, for a score of 3 to 8, the user is Dasher. For a score of 9 to 12, the user is Dancer. Come up with whatever logic you like.

  var chosenReindeer = ""


  // Once you have a final answer, this code will write it to the screen (you'll learn about this later)
  resultH1Tag.textContent = `We have decided that you would be the reindeer: ${chosenReindeer}`
  resultsArea.classList.add("visible")
}


// this code listens for the button click, which initiates everything above
button.addEventListener("click", (e) => {
  e.preventDefault()
  chooseTheReindeer()
})


/*
  Bonus activities:
  ---------------------
  1. Add more questions to the list
  2. Come up with a different mechanism for determining an answer
  3. Add validation that alerts the user if they didn't answer all the questions first
  4. Style the page and give it a festive look (no Katy green!)

*/