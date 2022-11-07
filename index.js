const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const questionEL = document.getElementById("question");
const formEl = document.querySelector("#form");
const inputEl = document.querySelector("#input");
const scoreEl = document.querySelector("#score");

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

scoreEl.innerText = `score: ${score}`

questionEL.innerText = `What is ${num1} multiply by ${num2}?`

const correctAns = num1 * num2;


formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value;
    if(userAns === correctAns){
        score++;
        updateScoreLocalStorage()
    }

    else{
        if(score<=0){
            score = 0;
        }
        else{
            score--;
            updateScoreLocalStorage()
        }        
    }
})

function updateScoreLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}

function refreshPage(){
    if(!score){
        score = 0;
    }
    else{
        score = 0;
    }
    updateScoreLocalStorage()
    location.reload();
}
