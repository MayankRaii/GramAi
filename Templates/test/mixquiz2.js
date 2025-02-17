const quizData = [
    {
        question: "Which of the following sentences uses a gerund correctly?",
        
            a: "She enjoys to swim in the ocean.",
            b: "She enjoys swimming in the ocean.",
            c: "She enjoys for swimming in the ocean.",
            d: "She enjoys swim in the ocean.",
            correct: "b"
    },
    {
        question: "Identify the correct sentence using a conjunction:",
        
            a: "I like both tea I coffee.",
            b: "I like either tea nor coffee.",
            c: "I like tea and coffee.",
            d: "I like tea or coffee.",
        correct: "c"
    },
    {
        question: "Choose the sentence with the correct use of prepositions:",
        
            a: "I am good in playing the guitar.",
            b: "I am good at playing the guitar.",
            c: "I am good with playing the guitar.",
            d: "I am good of playing the guitar.",
        correct: "b"
    },
    {
        question: "Select the correct sentence using a modal verb:",
        
            a: "She cans sing beautifully.",
            b: "She can singing beautifully.",
            c: "She can sing beautifully.",
            d: "She can sings beautifully.",
        correct: "c"
    },
    {
        question: "Which sentence uses the correct subject-verb agreement?",
        
            a: "The team are playing well.",
            b: "The team am playing well.",
            c: "The team is playing well.",
            d: "The team be playing well.",
        correct: "c"
    },
    {
        question: "Choose the correct relative pronoun:",
        
            a: "The person that I met her yesterday is my teacher.",
            b: "The person whose I met yesterday is my teacher.",
            c: "The person who I met yesterday is my teacher.",
            d: "The person whom I met yesterday is my teacher.",
        correct: "c"
    },
    {
        question: "Select the correct passive voice sentence:",
        
            a: "The book was reading by him.",
            b: "He was reading the book.",
            c: "He read the book.",
            d: "The book read by him.",
        correct: "b"
    },
    {
        question: "Choose the sentence with the correct use of articles:",
        
            a: "I want to buy a new shoes.",
            b: "I want to buy an new shoes.",
            c: "I want to buy the new shoes.",
            d: "I want to buy new shoes.",
        correct: "d"
    },
    {
        question: "Which sentence uses the correct comparative form?",
        
            a: "This is the more interesting book.",
            b: "This is the interesting book.",
            c: "This is the most interesting book.",
            d: "This is interestingest book.",
        correct: "c"
    },
    {
        question: "Choose the sentence with the correct use of gerunds and infinitives:",
        
            a: "I enjoy to swim in the ocean.",
            b: "I enjoy swimming in the ocean.",
            c: "I enjoy for swimming in the ocean.",
            d: "I enjoy swim in the ocean.",
        correct: "b"
    },
    {
        question: "Select the correct sentence using a conjunction:",
        
            a: "I prefer tea than coffee.",
            b: "I prefer tea to coffee.",
            c: "I prefer tea or coffee.",
            d: "I prefer tea nor coffee.",
        correct: "b"
    },
    {
        question: "Which sentence uses the correct preposition?",
        
            a: "She is good in singing.",
            b: "She is good at singing.",
            c: "She is good with singing.",
            d: "She is good of singing.",
        correct: "b"
    },
    {
        question: "Choose the correct sentence with a modal verb:",
        
            a: "I can plays the guitar.",
            b: "I can playing the guitar.",
            c: "I can play the guitar.",
            d: "I can to play the guitar.",
        correct: "c"
    },
    {
        question: "Which of the following sentences has the correct subject-verb agreement?",
        
            a: "The flowers smells wonderful.",
            b: "The flowers smell wonderful.",
            c: "The flowers is smelling wonderful.",
            d: "The flowers smelt wonderful.",
        correct: "b"
    },
    {
        question: "Choose the correct relative pronoun:",
        
            a: "The girl which won the race is my sister.",
            b: "The girl whose won the race is my sister.",
            c: "The girl who won the race is my sister.",
            d: "The girl whom won the race is my sister.",
        correct: "c"
    },
    {
        question: "Identify the correct passive voice sentence:",
        
            a: "The cat chased the mouse.",
            b: "The mouse is chased by the cat.",
            c: "The mouse was chased by the cat.",
            d: "The cat is chasing the mouse.",
        correct: "c"
    },
    {
        question: "Choose the sentence with the correct use of articles:",
        
            a: "I need an advice.",
            b: "I need a advice.",
            c: "I need the advice.",
            d: "I need advice.",
        correct: "d"
    },
    {
        question: "Which sentence uses the correct comparative form?",
        
            a: "She is more taller than her sister.",
            b: "She is taller than her sister.",
            c: "She is the taller than her sister.",
            d: "She is tallest than her sister.",
        correct: "b"
    },
    {
        question: "Choose the sentence with the correct use of gerunds and infinitives:",
        
            a: "I enjoy to dance at parties.",
            b: "I enjoy dancing at parties.",
            c: "I enjoy for dancing at parties.",
            d: "I enjoy dance at parties.",
        correct: "b"
    },
    {
        question: "The movie was so boring. I fell asleep ……………….",
        
            a: "during",
            b: "while",
            c: "for",
            d: "since",
        correct: "a"
    }
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
allInputs[4].nextElementSibling.innerText = data.d
allInputs[5].nextElementSibling.innerText = data.d
allInputs[6].nextElementSibling.innerText = data.d
allInputs[7].nextElementSibling.innerText = data.d
allInputs[8].nextElementSibling.innerText = data.d
allInputs[9].nextElementSibling.innerText = data.d
allInputs[10].nextElementSibling.innerText = data.d
allInputs[11].nextElementSibling.innerText = data.d
allInputs[12].nextElementSibling.innerText = data.d
allInputs[13].nextElementSibling.innerText = data.d
allInputs[14].nextElementSibling.innerText = data.d
allInputs[15].nextElementSibling.innerText = data.d
allInputs[16].nextElementSibling.innerText = data.d
allInputs[17].nextElementSibling.innerText = data.d
allInputs[18].nextElementSibling.innerText = data.d
allInputs[19].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
    // <div><h3>Answers</h3>
    // <ol>
    // <li>I have lost <b>the</b> pen you lent me.</li>
    // <li>Let's watch <b>a/the</b> movie.</li>
    // <li>The cow is a very useful animal.</li>
    // <li>Sam is the brightest student in the class.</li>
    // <li>This is the biggest city I have ever visited.</li>
    // <li>Armstrong was the first man to walk on the moon.</li>
    // <li>The last chapter of this book is very exciting.</li>
    // <li>Man is mortal.</li>
    // <li>Life is complicated.</li>
    // <li>What kind of fruit is this?</li>
    // <li>Give me a call when you are ready.</li>
    // <li>The rich are getting richer.</li>
    // </ol></div>
`
}
loadQuestion(index);

