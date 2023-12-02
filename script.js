const shopText = document.querySelectorAll('.shop')

for(let i = 0; i < shopText.length; i++) {
  shopText[i].innerHTML = "Shop"
}

function getRandomNumber() {
    // Generate a random number between 1 and 59
    return Math.floor(Math.random() * 14) + 1;
}

function changeBackgroundImage() {
    let randomNumber = getRandomNumber(); // Generate one random number
    const gridDivs = document.querySelectorAll('.grid div'); // Select all divs inside .grid

    gridDivs.forEach(div => {
        // Change only the background image, preserving other styles
        div.style.backgroundImage = 'url("./database/loc (' + randomNumber + ').png")';
    });
}

// Change the background image every 3 seconds
setInterval(changeBackgroundImage, 3000);
