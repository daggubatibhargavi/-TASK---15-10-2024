// qn1
const cartItems = ["Shirt", "Saree", "Kurti"];
let totalCost = 0;
let i = 0;
while (i < cartItems.length) {
  let price = prompt(`Enter the price of ${cartItems[i]}:`, "0");
  totalCost += Number(price);
  i++;
}
if (
  confirm(`Your total is $${totalCost}. Do you want to proceed to checkout?`)
) {
  alert("Thank you for your purchase!");
} else {
  alert("Purchase canceled.");
}

// qn2
let userInput = prompt(
  "Select a Hotstar subscription of  your choice:: Basic Plan, Premium Plan, VIP Plan "
);
switch (userInput) {
  case "1":
    alert(
      "You have selected the Basic Plan. Standard definition (SD) streaming- 1 screen at a time."
    );
    break;
  case "2":
    alert(
      "You have selected the Premium Plan.  High definition (HD) and 4K streaming- 4 screens at a time."
    );
    break;
  case "3":
    alert(
      "You have selected the VIP Plan. High definition (HD) streaming- 2 screens at a time."
    );
    break;
  default:
    alert(
      "Invalid selection. Please refresh the page and select a valid subscription plan."
    );
    break;
}

// qn3
let rideType = prompt("Choose your ride: UberX, UberXL, UberBlack", "UberX");
let confirmation = confirm(
  "You selected " + rideType + ". Do you want to confirm the booking?"
);

if (confirmation) {
  alert("Your " + rideType + " is being booked...");
  setTimeout(function () {
    alert("Your ride is on its way!");
  }, 3000);
} else {
  alert("Ride booking canceled.");
}

// qn4
const products = ["Laptop", "Phone", "Headphones"];
let ratings = [];
for (let i = 0; i < products.length; i++) {
  let rating = prompt(`Rate the ${products[i]} [1-5] out of 5:`, "5");
  if (rating >= 1 && rating <= 5) {
    ratings.push(`${products[i]}: ${rating}`);
  } else {
    alert(
      "Invalid rating for " +
        products[i] +
        ". Please enter a rating between 1 and 5."
    );
  }
}
alert("Thanks for rating! Here are your ratings:\n" + ratings.join("\n"));

// qn5
const videoQualities = ["720p", "1080p", "4K"];
var userChoice = prompt(`Choose your video quality:"720p","1080p","4k"`);
switch (userChoice.toLowerCase()) {
  case "1":
    alert(`You have selected 720p quality. Enjoy your video quality`);
    break;
  case "2":
    alert(`You have selected 1080p quality. Enjoy your video quality`);
    break;
  case "3":
    alert(`You have selected 4k quality. Enjoy your video quality`);
    break;
  default:
    alert(
      "Invalid selection. Please refresh the page and select a valid video quality."
    );
    break;
}
// qn6
let confirmLogout = confirm("Are you sure you want to log out?");
if (confirmLogout) {
  alert("Logging you out...");
  setTimeout(function () {
    alert("You have been logged out.");
  }, 2000);
} else {
  alert("Logout canceled. Enjoy streaming!");
}
