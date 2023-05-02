const title1 = document.querySelector("div.hello h1");
const title2 = document.querySelector("div.hello h1:nth-of-type(2)");

console.dir(title1);
console.dir(title2);

function handleClickEvent(){
    title1.classList.toggle("font2");
}

title1.addEventListener("click", handleClickEvent);
