const quizData = [{
    question: "I have lost ……………….. pen you lent me.",
    a: "a",
    b: "an",
    c: "the",
    d: "no article",
    correct: "c",
},
{
    question: "Let's watch ……………… movie.",
    a: "a",
    b: "the",
    c: "both of above with different contexts",
    d: "no article",
    correct: "c",
},
{
    question: "The cow is ………………… very useful animal.",
    a: "a",
    b: "an",
    c: "the",
    d: "no article",
    correct: "a",
},
{
    question: "Sam is …………………… brightest student in ………… class.",
    a: "a,the",
    b: "an,the",
    c: "the,the",
    d: "a,a",
    correct: "c",
},
{
    question: "This is ………………… biggest city I have ever visited.",
    a: "a",
    b: "the",
    c: "an",
    d: "no article",
    correct: "b",
},
{
    question: "Armstrong was ……………… first man to walk on the moon.",
    a: "a",
    b: "the",
    c: "an",
    d: "no article",
    correct: "b",
},
{
    question: "…………………. last chapter of this book is very exciting.",
    a: "a",
    b: "an",
    c: "the",
    d: "no article",
    correct: "c",
},
{
    question: "………………… man is mortal.",
    a: "a",
    b: "an",
    c: "the",
    d: "no article",
    correct: "d",
},
{
    question: "……………… life is complicated.",
    a: "a",
    b: "an",
    c: "the",
    d: "no article",
    correct: "d",
},
{
    question: "What kind of ………………… fruit is this?",
    a: "a",
    b: "an",
    c: "the",
    d: "no article",
    correct: "d",
},
{
    question: "Give me ………………… call when you are ready.",
    a: "a",
    b: "an",
    c: "the",
    d: "no article",
    correct: "a",
},
{
    question: " ………………… rich are getting richer.",
    a: "a",
    b: "an",
    c: "the",
    d: "no article",
    correct: "c",
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
    <div><h3>Answers</h3>
    <ol>
    <li>I have lost <b>the</b> pen you lent me.</li>
    <li>Let's watch <b>a/the</b> movie.</li>
    <li>The cow is a very useful animal.</li>
    <li>Sam is the brightest student in the class.</li>
    <li>This is the biggest city I have ever visited.</li>
    <li>Armstrong was the first man to walk on the moon.</li>
    <li>The last chapter of this book is very exciting.</li>
    <li>Man is mortal.</li>
    <li>Life is complicated.</li>
    <li>What kind of fruit is this?</li>
    <li>Give me a call when you are ready.</li>
    <li>The rich are getting richer.</li>
    </ol></div>
`
}
loadQuestion(index);