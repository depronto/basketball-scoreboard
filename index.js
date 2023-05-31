let homePointsBoard = document.getElementById("score-number-home")
let guestPointsBoard = document.getElementById("score-number-guest")
let homePoints = 0
let guestPoints = 0

function whoIsWinning() {
    if (homePoints > guestPoints) {
        homePointsBoard.style.color = "green"
        guestPointsBoard.style.color = "red"
    }else if (homePoints < guestPoints) {
        homePointsBoard.style.color = "red"
        guestPointsBoard.style.color = "green"
        
    }else {
        homePointsBoard.style.color = "#F94F6D"
        guestPointsBoard.style.color = "#F94F6D"
    }
    
}

function onePointHome() {
    homePoints++
    homePointsBoard.textContent = homePoints
    whoIsWinning()
}
function twoPointsHome() {
    homePoints += 2
    homePointsBoard.textContent = homePoints
    whoIsWinning()
}
function threePointsHome() {
    homePoints += 3
    homePointsBoard.textContent = homePoints
    whoIsWinning()
}
function onePointGuest() {
    guestPoints++
    guestPointsBoard.textContent = guestPoints
    whoIsWinning()
    
}
function twoPointsGuest() {
    guestPoints += 2
    guestPointsBoard.textContent = guestPoints
    whoIsWinning()
}
function threePointsGuest() {
    guestPoints += 3
    guestPointsBoard.textContent = guestPoints
    whoIsWinning()
}

function newGame() {
    homePoints = 0
    guestPoints = 0
    guestPointsBoard.textContent = guestPoints
    homePointsBoard.textContent = homePoints
    whoIsWinning()
}