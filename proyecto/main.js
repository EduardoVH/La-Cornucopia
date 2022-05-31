//NOTIFICATION
let notiNum = document.querySelector('#notification-num')
let randomNumber = Math.floor(Math.random() * 10)
if (randomNumber === 0) {
    notiNum = document.querySelector('#notification-num').style.visibility = "hidden"
}
else {
    notiNum.textContent += randomNumber
}
function deleteNum() {
    notiNum = document.querySelector('#notification-num').style.visibility = "hidden"
}

//POST1


//LIKE-DISLIKE
let likeNum = document.querySelector('.counter')
let counter = 0
let rng = Math.floor(Math.random() * 2)
function like() {
    counter += 1
    console.log(counter)
    likeNum.textContent = counter
}
function dislike() {
    counter -= 1
    console.log(counter)
    likeNum.textContent = counter
}
if (rng === 0) {
    let rng1 = Math.floor(Math.random() * (100))
    counter = rng1
    likeNum.textContent = rng1
}
else {
    let rng2 = Math.floor(Math.random() * (-100))
    counter = rng2
    likeNum.textContent = rng2
}

//LIKE-DISLIKE2
let likeNum2 = document.querySelector('.counter3')
let counter2 = 0
function like2() {
    counter2 += 1
    console.log(counter2)
    likeNum2.textContent = counter2
}
function dislike2() {
    counter2 -= 1
    console.log(counter2)
    likeNum2.textContent = counter2
}
if (rng === 0) {
    let rng1 = Math.floor(Math.random() * (100))
    counter2 = rng1
    likeNum2.textContent = rng1
}
else {
    let rng2 = Math.floor(Math.random() * (-100))
    counter2 = rng2
    likeNum2.textContent = rng2
}

//NEW POST
let post = []
let divTop = 1140
let titleTop = 1240
let textTop = 1285
let imgTop = 1165
let usernameTop = 1180

function newPost() {
    let title = document.querySelector('.textarea-post1')
    let text = document.querySelector('.textarea1-post1')
    let newParagraph1 = document.createElement("p")
    let newParagraph2 = document.createElement("p")
    let username = document.createElement("p")
    let userImg = document.createElement("img")
    userImg.src = "images/user.png"
    let newDiv = document.createElement("div")

    if (title.value === "" && text.value === "") {
        return
    }
    usernameTop.toString()
    titleTop.toString()
    textTop.toString()
    divTop.toString()
    newDiv.setAttribute('style', `position: absolute; left: 250px; top: ${divTop}px; height: 400px;width: 550px;background-color: #5c5c5c9c;border-radius: 5px; border: 3px solid #61636b;`)
    userImg.setAttribute('style', `position: absolute; left: 270px;  top: ${imgTop}px; width: 3.5%; cursor: pointer; background-color: transparent; z-index: +1;`)
    username.setAttribute('style', `color: #edf0f1; font-family: "Montserrat", sans-serif; font-size: 22px; font-weight: bold; position: absolute; left: 335PX; top: ${usernameTop}px; cursor: pointer; background-color: transparent; z-index: +1;`)
    newParagraph1.innerHTML = title.value
    newParagraph2.innerHTML = text.value
    username.textContent = "Username"
    newParagraph1.setAttribute('style', `color: #edf0f1;font-family: "Montserrat", sans-serif; font-size: 25px; position: absolute; left: 275px; top: ${titleTop}px; z-index: +1; background-color: transparent;`)
    newParagraph2.setAttribute('style', `color: #edf0f1;font-family: "Montserrat", sans-serif; position: absolute; left: 275px; top: ${textTop}px; z-index: +1; background-color: transparent;`)
    
    document.body.appendChild(newParagraph1)
    document.body.appendChild(newParagraph2)
    document.body.appendChild(userImg)
    document.body.appendChild(username)
    document.body.appendChild(newDiv)
    titleTop += 410
    textTop += 410
    divTop += 410
    imgTop += 410
    usernameTop += 410
    
    title.value = '';
    text.value = '';
}
