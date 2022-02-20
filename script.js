/*Fetching the API*/

const API = "https://api.adviceslip.com/advice";
random = document.getElementById("random")

function getAdvice(API) {
    fetch(API)
        .then(response => {
            return response.json()

        })
        .then(data => {
            console.log(data);
            const adviceN = data.slip["id"]
            let advice = data.slip["advice"]
            document.getElementById("adviceN").innerText = "Advice #" + adviceN
            document.getElementById("advice").innerText = "❝" + advice + "❞ "
            console.log(advice)
        })
}

window.addEventListener("DOMContentLoaded", function() {
    document.getElementById("container").style.display = "inline";
});
//To initialize the Advice
window.addEventListener('load', () => {
    getAdvice(API)
})

random.addEventListener('click', () => {
    getAdvice(API)
})