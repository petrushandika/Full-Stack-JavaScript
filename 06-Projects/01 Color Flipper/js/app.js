const colors = ["#5BBCFF", "#8644A2", "#F2613F", "#D20062", "#EABE6C", "#15F5BA"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
    const randomNumber = getRandomNumber();
    
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
