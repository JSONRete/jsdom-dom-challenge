// As a user, I should see the timer increment every second once the page has loaded.
// As a user, I can manually increment and decrement the counter using the plus and minus buttons.
// As a user, I can 'like' an individual number of the counter. I should see the count of the number of 'likes' associated with that number displayed.
// As a user, I can pause the counter, which should:
// pause the counter
// disable all buttons except the pause button
// switch the label on the button from "pause" to "resume"
// As a user, I should be able to click the "restart" button to restart the counter and re-enable the buttons.
// As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."

// If you're not sure how to create or pause a timer, look into:

// setTimeout
// setInterval
// clearinterval

// "DOMContentLoaded"


// Vanila JavaScript (in three basic steps)
// 1. query for HTML
// 2. add event listen / modify the HTML
// 3. if we need a special return


// invoke vs reference

// invoke: call method User.new(params)
// reference: tell JS what to run when its "time" CALLBACK FN


const counter = document.querySelector("#counter");
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const heartBtn = document.querySelector("#heart");
const pauseBtn = document.querySelector("#pause");
const likesUL = document.querySelector(".likes");
const buttons = [plusBtn, minusBtn, heartBtn]
const submitBtn = document.querySelector("#submit")
let isPaused = false;

const incrementNum = () => {
    if(!isPaused) {
        let num = parseInt(counter.innerText) + 1
        counter.innerText = num
    }
}

const decrementNum = () => {
    let num = parseInt(counter.innerText) - 1
   counter.innerText = num
}
const startTimer = () => {
    setInterval (incrementNum, 1000)
}

document.addEventListener("DOMContentLoaded", startTimer);

const incrementClick = (event) => {
    event.preventDefault();
    incrementNum()
};

const decrementClick = (event) => {
    event.preventDefault();
    decrementNum()
}

plusBtn.addEventListener("click", incrementClick)
minusBtn.addEventListener("click", decrementClick)

const addLike = (event) => {
    event.preventDefault()
    const li = document.createElement("li")
    let content = `${counter.innerText} likes`;
    li.innerText = content;
    likesUL.append(li);
}

const pauseCounter = () => {
    if (isPaused) {
        isPaused = false
        pauseBtn.innerText = "pause"
        buttons.forEach((btn) => {
            btn.disabled = isPaused;
        });
    } else {
        isPaused = true
        pauseBtn.innerText = "resume"
        buttons.forEach((btn) => {
            btn.disabled = isPaused
        });

        setTimeout(startTimer, 10000)
    }

};

heartBtn.addEventListener("click", addLike)

pauseBtn.addEventListener("click", pauseCounter )

const createComment = (event) => {
    const content = submitBtn.parentNode.comment.value;
    event.preventDefault();
    const listDiv = document.querySelector("#list")
    const paraEle = document.createElement("p")
    paraEle.innerText = content
    listDiv.appendChild(paraEle)
    submitBtn.parentNode.comment.value = ""
};

submitBtn.addEventListener("click", createComment);

