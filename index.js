let emailContainer = document.querySelector(".email-button-container")

let emailInput = document.querySelector("#email-button_user")


// Email Check
let testing = function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// Notify Me Button

let counter = 0
let notifyButton = document.querySelector(".email-button_notify")

// Error Message
let errorMessage = document.createElement("div")
errorMessage.classList = "emailError"
errorMessage.classList.add("error")

notifyButton.addEventListener("click", () => {
    if (testing(emailInput.value)){
        alert("true")
    } else if (!testing(emailInput.value)){
        if (counter === 0){
            errorMessage.innerHTML = "Please provide a valid email address"
            emailInput.parentNode.insertBefore(errorMessage, emailInput.nextSibling)
            counter = 1
            emailInput.style.borderColor = "red"
            emailInput.style.outlineColor = "red"
        } else {
            errorMessage.classList.add("repeat")
            setTimeout(() => {
                errorMessage.classList.remove("repeat")
            }, 150);
        }
    }
})


    