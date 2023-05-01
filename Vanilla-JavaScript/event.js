const title1 = document.querySelector("div.hello h1");
const title2 = document.querySelector("div.hello h1:nth-of-type(2)");

console.dir(title1);
console.dir(title2);

function handleClickEvent(){
    color = title1.style.color;
    if (color === "pink"){
        title1.style.color = "black";
    } else {
        title1.style.color = "pink";
    }
}

title1.addEventListener("click", handleClickEvent);

