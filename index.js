let homeNum = document.getElementById("homeScore")
let home = 0

let guestNum = document.getElementById("guestScore")
let guest = 0

function homeSumOne() {
    home += 1
    homeNum.textContent = home
}

function homeSumTwo() {
    home += 2
    homeNum.textContent = home
}

function homeSumThree() {
    home += 3
    homeNum.textContent = home
}
// Guest Score
function guestSumOne() {
    guest += 1
    guestNum.textContent = guest
}

function guestSumTwo() {
    guest += 2
    guestNum.textContent = guest
}

function guestSumThree() {
    guest += 3
    guestNum.textContent = guest
}
