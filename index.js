let home = 0
let guest = 0
let homeCount = document.getElementById("home-counter")
let guestCount = document.getElementById("guest-counter")
homeCount.textContent = home
guestCount.textContent = guest
// Add Home functions
function addOneHome() {
    home += 1
    updateHomeCounter()
}
function addTwoHome() {
    home += 2
    updateHomeCounter()
}
function addThreeHome() {
    home += 3
    updateHomeCounter()
}
function updateHomeCounter() {
    homeCount.textContent = home
}
// Add Guest functions
function addOneGuest() {
    guest += 1
    updateGuestCounter()
}
function addTwoGuest() {
    guest += 2
    updateGuestCounter()
}
function addThreeGuest() {
    guest += 3
    updateGuestCounter()
}
function updateGuestCounter() {
    guestCount.textContent = guest
}

// 👇 Make them accessible from HTML
window.addOneHome = addOneHome;
window.addTwoHome = addTwoHome;
window.addThreeHome = addThreeHome;
window.addOneGuest = addOneGuest;
window.addTwoGuest = addTwoGuest;
window.addThreeGuest = addThreeGuest;