const quizData = [
    {
        question: "I don't know ……………… to choose for my birthday present.",
        
            a: "what",
            b: "which",
            c: "who",
            d: "whom",
        correct: "b"
    },
    {
        question: "You should see a doctor if you have been feeling unwell ……………… a few days.",
        
            a: "since",
            b: "for",
            c: "in",
            d: "during",
        correct: "b"
    },
    {
        question: "She wishes she ……………… more time to complete the project.",
        
            a: "has",
            b: "have",
            c: "had",
            d: "having",
        correct: "c"
    },
    {
        question: "I've never been to Paris, ……………… I would love to visit someday.",
        
            a: "or",
            b: "nor",
            c: "but",
            d: "and",
        correct: "c"
    },
    {
        question: "The new employee was surprised by ……………… friendly everyone was.",
        
            a: "how",
            b: "what",
            c: "when",
            d: "which",
        correct: "a"
    },
    {
        question: "The book, ……………… is on the shelf, belongs to me.",
        
            a: "whose",
            b: "which",
            c: "whom",
            d: "who",
        correct: "b"
    },
    {
        question: "I'm not interested ……………… playing video games.",
        
            a: "at",
            b: "on",
            c: "in",
            d: "with",
        correct: "c"
    },
    {
        question: "He is one of the students who ……………… always on time.",
        
            a: "is",
            b: "am",
            c: "are",
            d: "be",
        correct: "c"
    },
    {
        question: "This is ……………… movie I have ever seen.",
        
            a: "more interesting",
            b: "interesting",
            c: "the most interesting",
            d: "interestingest",
        correct: "c"
    },
    {
        question: "I am looking forward ……………… from you soon.",
        
            a: "hear",
            b: "to hear",
            c: "hearing",
            d: "heard",
        correct: "b"
    },{
        question: "I don't know ……………… to choose for my birthday present.",
        
            a: "what",
            b: "which",
            c: "who",
            d: "whom",
        correct: "b"
    },
    {
        question: "You should see a doctor if you have been feeling unwell ……………… a few days.",
        
            a: "since",
            b: "for",
            c: "in",
            d: "during",
        correct: "b"
    },
    {
        question: "She wishes she ……………… more time to complete the project.",
        
            a: "has",
            b: "have",
            c: "had",
            d: "having",
        correct: "c"
    },
    {
        question: "I've never been to Paris, ……………… I would love to visit someday.",
        
            a: "or",
            b: "nor",
            c: "but",
            d: "and",
        correct: "c"
    },
    {
        question: "The new employee was surprised by ……………… friendly everyone was.",
        
            a: "how",
            b: "what",
            c: "when",
            d: "which",
        correct: "a"
    },
    {
        question: "The book, ……………… is on the shelf, belongs to me.",
        
            a: "whose",
            b: "which",
            c: "whom",
            d: "who",
        correct: "b"
    },
    {
        question: "I'm not interested ……………… playing video games.",
        
            a: "at",
            b: "on",
            c: "in",
            d: "with",
        correct: "c"
    },
    {
        question: "He is one of the students who ……………… always on time.",
        
            a: "is",
            b: "am",
            c: "are",
            d: "be",
        correct: "c"
    },
    {
        question: "This is ……………… movie I have ever seen.",
        
            a: "more interesting",
            b: "interesting",
            c: "the most interesting",
            d: "interestingest",
        correct: "c"
    },
    {
        question: "I am looking forward ……………… from you soon.",
        
            a: "hear",
            b: "to hear",
            c: "hearing",
            d: "heard",
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