var p1btn = document.querySelector("#p1");
var p2btn = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var p1score = document.querySelector("#p1score");
var p2score = document.querySelector("#p2score");
var input = document.querySelector("input");
var winnerresult = document.querySelector("#winnerresult");

var matchpoint = 5;
var gameover = false;

var p1count = 0;
var p2count = 0;

p1btn.addEventListener("click",function(){
    if(!gameover){
        p1count++;
        p1score.textContent = p1count;
        if(p1count === matchpoint){
            gameover = true;
            p1score.classList.add("green");
            winnerresult.textContent = "Player 1 has won the game!";
        }
    }

});

p2btn.addEventListener("click",function(){
    if(!gameover){
        p2count++;
        p2score.textContent = p2count;
        if(p2count === matchpoint){
            gameover = true;
            p2score.classList.add("green");
            winnerresult.textContent = "Player 2 has won the game!";
        }
    }
});

function resetvalue(){
    p1count = 0;
    p2count = 0;
    p1score.textContent = 0;
    p2score.textContent = 0;
    p1score.classList.remove("green");
    p2score.classList.remove("green");
    gameover = false;
    winnerresult.textContent = "";
};

reset.addEventListener("click",function(){
    resetvalue();
});

input.addEventListener("change",function(){
    document.querySelector("#winningscore").textContent = input.value;
    matchpoint = Number(input.value);
    resetvalue();
});
