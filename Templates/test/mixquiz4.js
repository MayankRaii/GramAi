const quizData = [
    {
        question: "She is allergic ________ cats.",
        
            a: "to",
            b: "with",
            c: "at",
            d: "by",
        correct: "a"
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
        question: "Which sentence uses the correct comparative form?",
        
            a: "She is more taller than her sister.",
            b: "She is taller than her sister.",
            c: "She is the taller than her sister.",
            d: "She is tallest than her sister.",
        correct: "b"
    },
    {
        question: "I have been studying Spanish ________ two years.",
        
            a: "since",
            b: "for",
            c: "from",
            d: "during",
        correct: "b"
    },
    {
        question: "The concert was fantastic! I enjoyed every moment of ________ performance.",
        
            a: "a",
            b: "the",
            c: "both of above with different contexts",
            d: "no article",
        correct: "b"
    },
    {
        question: "She is ________ person I've ever met.",
        
            a: "most friendly",
            b: "more friendly",
            c: "the friendliest",
            d: "friendlier",
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
        question: "I'm looking forward ________ the weekend.",
        
            a: "for",
            b: "to",
            c: "at",
            d: "with",
        correct: "b"
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
        question: "I would like ________ cup of coffee, please.",
        
            a: "a",
            b: "an",
            c: "the",
            d: "some",
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
        question: "The cat sat ________ the windowsill and watched the birds.",
        
            a: "at",
            b: "in",
            c: "on",
            d: "by",
        correct: "c"
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
        question: "I have been studying Spanish ________ two years.",
        
            a: "since",
            b: "for",
            c: "from",
            d: "during",
        correct: "b"
    },
    {
        question: "The concert was fantastic! I enjoyed every moment of ________ performance.",
        
            a: "a",
            b: "the",
            c: "both of above with different contexts",
            d: "no article",
        correct: "b"
    },
    {
        question: "She is ________ person I've ever met.",
        
            a: "most friendly",
            b: "more friendly",
            c: "the friendliest",
            d: "friendlier",
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
        question: "I'm looking forward ________ the weekend.",
        
            a: "for",
            b: "to",
            c: "at",
            d: "with",
        correct: "b"
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
        question: "I would like ________ cup of coffee, please.",
        
            a: "a",
            b: "an",
            c: "the",
            d: "some",
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
    
// <li> here are the correct answers to the quiz questions along with explanations:</li>
// <br><br>
// <li>(1) She ________ to the store yesterday.(/li)

// <li>Correct Answer: c) "went"</li>
// <li>Explanation: "Went" is the past tense form of the verb "go," which correctly describes the action of going to the store in the past.</li><br><br>
// <li>(2) I have never ________ sushi before.</li>

// <li>Correct Answer: c) "eaten"</li>
// <li>Explanation: "Eaten" is the past participle form of the verb "eat," which is used with "have never" to indicate an action that has not occurred up to the present moment.</li><br><br>
// <li>(3) He couldn't find his keys, so he had to ________ a new set.</li>

// <li>Correct Answer: d) "bought"</li>
// <li>Explanation: "Bought" is the past tense form of the verb "buy," which correctly describes the action of purchasing a new set of keys in the past.</li><br><br>
// <li>(4) I don't have ________ time to finish the project today.</li>

// <li>Correct Answer: b) "much"</li>
// <li>Explanation: "Much" is used to describe uncountable nouns like "time," indicating a lack of a large quantity of time.</li><br><br>
// <li>(5) It's important to stay ________ during job interviews.</li>

// <li>Correct Answer: a) "calm"</li>
// <li>Explanation: "Calm" is the adjective form that describes a state of being peaceful or composed, which is desirable during job interviews.</li><br><br>
// <li>(6) She is ________ student in the class.</li>

// <li>Correct Answer: b) "smartest"</li>
// <li>Explanation: "Smartest" is the superlative form of the adjective "smart," indicating that she possesses the highest level of intelligence compared to other students in the class.</li><br><br>
// <li>(7) We usually go to the beach ________ the summer.</li>

// <li>Correct Answer: a) "in"</li>
// <li>Explanation: "In" is used to indicate a period of time during which an action occurs, such as going to the beach during the summer.</li><br><br>
// <li>(8) My sister ________ French fluently.</li>

// <li>Correct Answer: a) "speaks"</li>
// <li>Explanation: "Speaks" is the present tense form of the verb "speak," indicating the ability to communicate in French fluently.</li><br><br>
// <li>(9) The children are excited ________ the amusement park.</li>

// <li>Correct Answer: a) "about"</li>
// <li>Explanation: "About" is used to indicate the reason for excitement, expressing their enthusiasm for visiting the amusement park.</li><br><br>
// <li>(10) I'm not good ________ math, but I love English.</li>

// <li>Correct Answer: d) "at"</li>
// <li>Explanation: "At" is used to describe skill or proficiency in a particular subject, indicating a lack of proficiency in math.</li><br><br>

// <li>(11) I have been studying Spanish ________ two years.</li>

// <li>Correct Answer: b) "for"</li>
// <li>Explanation: "For" is used to indicate the duration of time over which an action has been occurring, indicating the length of time spent studying Spanish.</li><br><br>
// <li>(12) The cat sat ________ the windowsill and watched the birds.</li>

// <li>Correct Answer: c) "on"</li>
// <li>Explanation: "On" is used to indicate the position of the cat relative to the windowsill, describing where the cat was seated.</li><br><br>
// <li>(13) They will arrive ________ the airport at 3 PM.</li>

// <li>Correct Answer: a) "at"</li>
// <li>Explanation: "At" is used to indicate the specific time of arrival at a location, specifying when they will reach the airport.</li><br><br>
// <li>(14) I didn't have ________ time to finish the project.</li>

// <li>Correct Answer: a) "enough"</li>
// <li>Explanation: "Enough" is used to indicate a sufficient quantity or degree of time needed to complete the project.</li><br><br>
// <li>(15) He is ________ person I've ever met.</li>

// <li>Correct Answer: c) "the friendliest"</li>
// <li>Explanation: "The friendliest" is the superlative form of the adjective "friendly," indicating that he possesses the highest degree of friendliness among all the people the speaker has met.</li><br><br>
// <li>(16) I'm looking forward ________ the weekend.</li>

// <li>Correct Answer: b) "to"</li>
// <li>Explanation: "To" is used to indicate anticipation or expectation of a future event, expressing the speaker's excitement about the upcoming weekend.</li><br><br>
// <li>(17) She is allergic ________ cats.</li>

// <li>Correct Answer: a) "to"</li>
// <li>Explanation: "To" is used to indicate the object to which someone is allergic, specifying that she experiences allergic reactions in response to cats.</li><br><br>
// <li>(18) I would like ________ cup of coffee, please.</li>

// <li>Correct Answer: b) "an"</li>
// <li>Explanation: "An" is used before words beginning with a vowel sound, such as "cup," to indicate a single, unspecified cup of coffee.</li><br><br>
// <li>(19) The teacher asked us ________ our homework on time.</li>

// <li>Correct Answer: a) "to finish"</li>
// <li>Explanation: "To finish" is the infinitive form of the verb "finish," which correctly follows the verb "asked" to indicate the action requested by the teacher.</li><br><br>
// <li>(20) She is the ________ person for the job.</li>

// <li>Correct Answer: b) "best"</li>
// <li>Explanation: "Best" is the superlative form of the adjective "good," indicating that she is the most suitable candidate for the job compared to all others.</li>
//     </ol></div>
`
}
loadQuestion(index);