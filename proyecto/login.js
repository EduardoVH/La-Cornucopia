const userList = [
    {user: "eduardo", password: "213370"},
    {user: "adrian", password: "213371"},
    {user: "juan", password: "213372"},
    {user: "luis", password: "213373"},]
    
function login() {
    let userLogin = document.getElementById("txtuser").value;
    let passwordLogin = document.getElementById("txtpassword").value;
    let correctoP = document.getElementById("correcto")
    let incorrectoP = document.getElementById("incorrecto")

    console.log(userLogin)
    console.log(passwordLogin)

    correctoP.textContent = ""
    incorrectoP.textContent = ""

    for (let i = 0; i <= 5; i++) {
        if (userLogin === userList[i].user && passwordLogin === userList[i].password) {
            incorrectoP.textContent = ""
            correctoP.textContent = "Correcto"
            console.log("correcto")
            window.location.href="main.html"
            break;
        }
        else {
            incorrectoP.textContent = "Incorrecto"
            console.log("incorrecto")
        }
        
    }
}
