const quizData = [
    {
        question: "Choose the correct meaning of the phrase: 'Bite the bullet.'",
        
            a: "To eat something hard.",
            b: "To face a difficult situation with courage.",
            c: "To avoid problems.",
            d: "To chew gum.",
        correct: "b"
    },
    {
        question: "What does the phrase 'Hit the hay' mean?",
        
            a: "To hit someone with a piece of hay.",
            b: "To go to bed or sleep.",
            c: "To harvest hay in the field.",
            d: "To play a game involving hay.",
        correct: "b"
    },
    {
        question: "What is the meaning of the phrase 'Burn the midnight oil'?",
        
            a: "To start a fire at night.",
            b: "To work late into the night.",
            c: "To extinguish a lamp.",
            d: "To sleep with the lights on.",
        correct: "b"
    },
    {
        question: "Choose the correct interpretation of the phrase 'Jump on the bandwagon.'",
        
            a: "To literally jump on a moving bandwagon.",
            b: "To join a popular activity or trend.",
            c: "To criticize a musical band.",
            d: "To avoid a crowd.",
        correct: "b"
    },
    {
        question: "What does the phrase 'Break the ice' mean?",
        
            a: "To shatter ice into pieces.",
            b: "To make a situation less tense or awkward.",
            c: "To swim in cold water.",
            d: "To freeze water.",
        correct: "b"
    },
    {
        question: "What is the meaning of the phrase 'Cry over spilled milk'?",
        
            a: "To literally cry over spilled milk.",
            b: "To regret something that has already happened.",
            c: "To clean up a mess.",
            d: "To celebrate a spill.",
        correct: "b"
    },
    {
        question: "Choose the correct interpretation of the phrase 'Hit the nail on the head.'",
        
            a: "To physically hit a nail with a hammer.",
            b: "To correctly identify the main point.",
            c: "To avoid a situation.",
            d: "To miss the target.",
        correct: "b"
    },
    {
        question: "What does the phrase 'Kick the bucket' mean?",
        
            a: "To literally kick a bucket.",
            b: "To die.",
            c: "To play a sport involving a bucket.",
            d: "To clean a bucket.",
        correct: "b"
    },
    {
        question: "What is the meaning of the phrase 'Let the cat out of the bag'?",
        
            a: "To release a cat from a bag.",
            b: "To reveal a secret.",
            c: "To play with a cat in a bag.",
            d: "To keep a secret.",
        correct: "b"
    },
    {
        question: "Choose the correct interpretation of the phrase 'Spill the beans.'",
        
            a: "To accidentally drop beans on the floor.",
            b: "To disclose a secret.",
            c: "To cook beans.",
            d: "To hide the beans.",
        correct: "b"
    },
    {
        question: "What does the phrase 'Cost an arm and a leg' mean?",
        
            a: "To buy something at a cheap price.",
            b: "To be very expensive.",
            c: "To lose body parts.",
            d: "To have a sale on arms and legs.",
        correct: "b"
    },
    {
        question: "Choose the correct meaning of the phrase: 'A piece of cake.'",
        
            a: "A literal piece of cake.",
            b: "Something very easy to do.",
            c: "A difficult challenge.",
            d: "A bakery item.",
        correct: "b"
    },
    {
        question: "What is the meaning of the phrase 'Throw in the towel'?",
        
            a: "To literally throw a towel.",
            b: "To give up or surrender.",
            c: "To dry oneself after a shower.",
            d: "To play a sport involving towels.",
        correct: "b"
    },
    {
        question: "Choose the correct interpretation of the phrase 'Hit the road.'",
        
            a: "To physically hit a road.",
            b: "To start a journey or leave.",
            c: "To build a road.",
            d: "To stop traveling.",
        correct: "b"
    },
    {
        question: "What does the phrase 'Bite off more than you can chew' mean?",
        
            a: "To eat too quickly.",
            b: "To take on a task that is too difficult.",
            c: "To chew gum aggressively.",
            d: "To avoid eating.",
        correct: "b"
    },
    {
        question: "What is the meaning of the phrase 'Hit the sack'?",
        
            a: "To hit someone with a sack.",
            b: "To go to bed or sleep.",
            c: "To fill a sack with items.",
            d: "To play a sport involving sacks.",
        correct: "b"
    },
    {
        question: "Choose the correct interpretation of the phrase 'Burn the midnight oil.'",
        
            a: "To start a fire at midnight.",
            b: "To work late into the night.",
            c: "To extinguish a lamp.",
            d: "To sleep with the lights on.",
        correct: "b"
    },
    {
        question: "What does the phrase 'Cut to the chase' mean?",
        
            a: "To physically cut something quickly.",
            b: "To get to the main point without unnecessary details.",
            c: "To cut a movie scene.",
            d: "To stop talking abruptly.",
        correct: "b"
    },
    {
        question: "Choose the correct meaning of the phrase: 'Hear it on the grapevine.'",
        
            a: "To hear something through a grapevine.",
            b: "To receive information through rumors.",
            c: "To listen to a grapevine.",
            d: "To grow grapes.",
        correct: "b"
    },
    {
        question: "What is the meaning of the phrase 'Spill the beans'?",
        
            a: "To accidentally drop beans on the floor.",
            b: "To disclose a secret.",
            c: "To cook beans.",
            d: "To hide the beans.",
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
//     <div><h3>Answers</h3>
//     <ol>
//     <li>I have lost <b>the</b> pen you lent me.</li>
//     <li>Let's watch <b>a/the</b> movie.</li>
//     <li>The cow is a very useful animal.</li>
//     <li>Sam is the brightest student in the class.</li>
//     <li>This is the biggest city I have ever visited.</li>
//     <li>Armstrong was the first man to walk on the moon.</li>
//     <li>The last chapter of this book is very exciting.</li>
//     <li>Man is mortal.</li>
//     <li>Life is complicated.</li>
//     <li>What kind of fruit is this?</li>
//     <li>Give me a call when you are ready.</li>
//     <li>The rich are getting richer.</li>
//     </ol></div>
// `
}
loadQuestion(index);