const quizData = [
    {
        question: "She ________ to the store yesterday.",
        
            a: "go",
            b: "goes",
            c: "went",
            d: "gone",
        correct: "c"
    },
    {
        question: "I have never ________ sushi before.",
        
            a: "eat",
            b: "ate",
            c: "eaten",
            d: "eating",
        correct: "c"
    },
    {
        question: "He couldn't find his keys, so he had to ________ a new set.",
        
            a: "buy",
            b: "buys",
            c: "buying",
            d: "bought",
        correct: "d"
    },
    {
        question: "I don't have ________ time to finish the project today.",
        
            a: "many",
            b: "much",
            c: "some",
            d: "a lot",
        correct: "b"
    },
    {
        question: "It's important to stay ________ during job interviews.",
        
            a: "calm",
            b: "calms",
            c: "calming",
            d: "calmed",
        correct: "a"
    },
    {
        question: "She is ________ student in the class.",
        
            a: "smarter",
            b: "smartest",
            c: "more smart",
            d: "smart",
        correct: "b"
    },
    {
        question: "We usually go to the beach ________ the summer.",
        
            a: "in",
            b: "on",
            c: "at",
            d: "by",
        correct: "a"
    },
    {
        question: "My sister ________ French fluently.",
        
            a: "speaks",
            b: "speak",
            c: "speaking",
            d: "spoke",
        correct: "a"
    },
    {
        question: "The children are excited ________ the amusement park.",
        
            a: "about",
            b: "on",
            c: "with",
            d: "at",
        correct: "a"
    },
    {
        question: "I'm not good ________ math, but I love English.",
        
            a: "in",
            b: "on",
            c: "with",
            d: "at",
        correct: "d"
    },{
        question: "I have been studying Spanish ________ two years.",
        
            a: "since",
            b: "for",
            c: "from",
            d: "during",
        correct: "b"
    },
    {
        question: "The cat sat ________ the windowsill and watched the birds.",
        
            a: "at",
            b: "in",
            c: "on",
            d: "by",
        correct: "c"
    },
    {
        question: "They will arrive ________ the airport at 3 PM.",
        
            a: "at",
            b: "on",
            c: "in",
            d: "by",
        correct: "a"
    },
    {
        question: "I didn't have ________ time to finish the project.",
        
            a: "enough",
            b: "much",
            c: "many",
            d: "some",
        correct: "a"
    },
    {
        question: "He is ________ person I've ever met.",
        
            a: "most friendly",
            b: "more friendly",
            c: "the friendliest",
            d: "friendlier",
        correct: "c"
    },
    {
        question: "I'm looking forward ________ the weekend.",
        
            a: "for",
            b: "to",
            c: "at",
            d: "with",
        correct: "b"
    },
    {
        question: "She is allergic ________ cats.",
        
            a: "to",
            b: "with",
            c: "at",
            d: "by",
        correct: "a"
    },
    {
        question: "I would like ________ cup of coffee, please.",
        
            a: "a",
            b: "an",
            c: "the",
            d: "some",
        correct: "b"
    },
    {
        question: "The teacher asked us ________ our homework on time.",
        
            a: "to finish",
            b: "finishing",
            c: "finish",
            d: "finished",
        correct: "a"
    },
    {
        question: "She is the ________ person for the job.",
        
            a: "better",
            b: "best",
            c: "good",
            d: "more good",
        correct: "b"
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