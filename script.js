const body = document.body;
const content = document.querySelector('.js-content');
const blocks = document.querySelectorAll('.block');


const updateOffset = () => {
  requestAnimationFrame(updateOffset);
  body.style.setProperty('--y', content.scrollTop);
  updateProps();
};

const updateProps = () => {
  let i = -1;
  for (let block of blocks) {
    i += 1;
    let top = blocks[i].getBoundingClientRect().top;
    if (top < window.innerHeight * 1.3 && top > window.innerHeight * -1.3) {
      body.style.setProperty(`--yBlock-${i + 1}`, top);
    } else {
      body.style.setProperty(`--yBlock-${i + 1}`, 0);
    }
  }
};

updateProps();
updateOffset();

var currentFrame = 3;
var totalFrames = 5; // Change this to the total number of frames you have

function itemChange() {
    // Get the iframe element
    var iframe = document.getElementById('auctionFrame');

    // Increment the current frame number
    currentFrame = (currentFrame % totalFrames) + 1;

    // Construct the new source URL
    var newSrc = 'auction/' + currentFrame + '.html';

    // Set the new source URL
    iframe.src = newSrc;
}



function scrollDown() {
  window.scrollTo({
    top: 1000, // Specify the desired vertical scroll position
    behavior: 'smooth' // Optionally, add smooth scrolling behavior
  });
}

function scrollToElement(elementId) {
  var element = document.getElementById(elementId);
  if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}




function calculatePrice() {
  var slider = document.getElementById("soil");
  var gallons = parseInt(slider.value); // Convert to integer for comparison
  var pricePerGallon = 3;
  
  // Calculate price without any discount
  var price = pricePerGallon * gallons;

  // Apply discounts based on the amount ordered
  if (gallons > 100) {
      // Apply 40% discount for orders over 100 gallons
      price *= 0.6; // 40% discount
  } else if (gallons > 50) {
      // Apply 25% discount for orders over 50 gallons
      price *= 0.75; // 25% discount
  } else if (gallons > 10) {
      // Apply 10% discount for orders over 10 gallons
      price *= 0.9; // 10% discount
  }

  // Update price and gallons display
  document.getElementById("price").textContent = "$" + price.toFixed(2); // Round to 2 decimal places
  document.getElementById("gallons").textContent = gallons;
}

// Call the function initially to set the default price
calculatePrice();


function orderEmail() {
  var gallons = document.getElementById('gallons').innerText;
  var price = document.getElementById('price').innerText;

  var subject = encodeURIComponent('Subscribe to Bramble Twist');
  var body = encodeURIComponent('Order Total: ' + gallons + ' Rooms\nPrice: ' + price + '\n\nPlease replace this text with your address, phone number, and indicate if you would like to opt into our newsletter.');

  var mailtoLink = 'mailto:brambletwist@gmail.com?subject=' + subject + '&body=' + body;
  window.location.href = mailtoLink;
}