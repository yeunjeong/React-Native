const quizForm = document.querySelector("#quiz");
const quizInput = document.querySelector("#quiz input");

console.log(quizInput.placeholder);
console.dir(quizForm);

function clickQuizBtnEvent(event) {
    event.preventDefault();
    const value = quizInput.value;
    if(value === ""){
        console.log("입력이 없어요오...");
    } else if(value === "심볼리 루돌프") {
        console.log("정답!");
    } else {
        console.log("뒤질래?");
    }
}
 
quizForm.addEventListener("submit", clickQuizBtnEvent);