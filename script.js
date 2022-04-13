const calculateButton = document.querySelector("#submit-btn")
const section = document.querySelector("section")

calculateButton.addEventListener("click", calculateLove)

function calculateLove(event){
    event.preventDefault;
    let loveScore = Math.floor((Math.random() * 100) + 1);
    let loveResult = document.createElement("p");
    loveResult.innerText = "Your Crush Loves You " + loveScore + "%";
    section.appendChild(loveResult);
    
    if (loveScore = 100) {
        let loveMessage = document.createElement("p");
        loveMessage.innerText = "You love each other like Kanye loves Kanye 💕";
        loveMessage.style.color = "green"
        section.appendChild(loveMessage);
    } else if (loveScore > 80 && loveScore < 100) {
        let loveMessage = document.createElement("p");
        loveMessage.innerText = "You love each other very much 💕";
        section.appendChild(loveMessage);
    } else if (loveScore > 50 && loveScore<80) {
        let loveMessage = document.createElement("p");
        loveMessage.innerText = "There is a bit of hope ✨";
        section.appendChild(loveMessage);
    } else {
        let loveMessage = document.createElement("p");
        loveMessage.innerText = "I am sorry but you are friend zoned";
        section.appendChild(loveMessage);
    }
 }