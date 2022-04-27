const userInput = document.querySelector(".user-input");
const userNameMsg = document.querySelector(".username-msg");         
const passInput = document.querySelector(".pass-input");       
const signinButton = document.querySelector(".signin-button");
const passWordMsg = document.querySelector(".password-msg"); 
const singninStatus = document.querySelector(".signin-status")      

signinButton.addEventListener("click", validUser)

function validUser(event){
    event.preventDefault();   
    userNameMsg.innerText = "";       
    passWordMsg.innerText = ""; 
    let ifSendData = true;        
    if(userInput.value.length === 0 || userInput.value.indexOf("@") === -1 || userInput.value.indexOf(".") === -1){
        userNameMsg.innerText = "please inter valid email";
        ifSendData = false;     
    }

    if(passInput.value === 0){
        passWordMsg.innerText = "please enter a password";
        ifSendData = false;       
    }
    else if(passInput.value.length < 4){
        passWordMsg.innerText = "your password is too short";       
        ifSendData = false;
    }
    if(ifSendData){
        const body = JSON.stringify({
            username: userInput.value,
            passInput: passInput.value,
        })
        
    
        const headers = {
            "Content-Type": "application/json"
        }
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: body,
            headers: headers,
        })
        .then(response => {
            if(response.ok){
                singninStatus.innerText = "you sign in successfully";
            }
        })
              
        
    }
}
