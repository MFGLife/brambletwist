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

document.addEventListener('DOMContentLoaded', function() {

  const form = document.getElementById('maintenanceRequestForm');

  form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission

      const name = document.getElementById('name').value;
      const company = document.getElementById('company').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const issue = document.getElementById('issue').value;
      const immediate = document.getElementById('immediate').checked ? 'Immediate attention is required' : '';

      const subject = encodeURIComponent('Brambletwist Maintenance Request');
      let body = `Name: ${encodeURIComponent(name)}\n`;
      body += `Company: ${encodeURIComponent(company)}\n`;
      body += `Contact Email: ${encodeURIComponent(email)}\n`;
      body += `Contact Phone Number: ${encodeURIComponent(phone)}\n`;
      body += `Issue with Property: ${encodeURIComponent(issue)}\n`;
      body += `${immediate}`;

      const mailtoLink = `mailto:brambletwist@gmail.com?subject=${subject}&body=${body}`;

      window.location.href = mailtoLink;
  });

  document.getElementById('shop-button').addEventListener('click', function() {
      openWindowSafely('cart/index.html');
  });

  document.getElementById('shop-button2').addEventListener('click', function() {
      openWindowSafely('blog/rust.html');
  });

  document.getElementById('getQuote').addEventListener('click', function() {
    orderEmail();
});

  document.getElementById('contactUs').addEventListener('click', function() {
    scrollToElement('formSubmit');
});

  document.getElementById('soil').addEventListener('input', function() {
  calculatePrice();
});

  document.getElementById('userInput').addEventListener('input', function() {
  checkPasscode();
});

document.getElementById('userInput').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') { // Check if Enter key is pressed
      event.preventDefault(); // Prevent default behavior (e.g., form submission)
      sendMessage();
  }
});

});

function openWindowSafely(url) {
  // Basic URL validation to ensure it's a relative path
  if (url && !url.includes('://') && (url.endsWith('.html') || url.endsWith('/'))) {
      window.open(url);
  } else {
      console.error('Invalid URL:', url);
  }
}
