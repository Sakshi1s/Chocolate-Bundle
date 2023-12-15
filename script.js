function calculateTotalPrice() {
  const darkChocolateQuantityInput = document.getElementById(
    "darkChocolateQuantity"
  );
  const milkChocolateQuantityInput = document.getElementById(
    "milkChocolateQuantity"
  );
  const whiteChocolateQuantityInput = document.getElementById(
    "whiteChocolateQuantity"
  );
  const chocolateBallQuantityInput = document.getElementById(
    "chocolateBallQuantity"
  );
  const brownChocolateQuantityInput = document.getElementById(
    "brownChocolateQuantity"
  );
  const chocolateBarQuantityInput = document.getElementById(
    "chocolateBarQuantity"
  );
  const chocolateCupcakeQuantityInput = document.getElementById(
    "chocolateCupcakeQuantity"
  );
  const chocolateIceQuantityInput = document.getElementById(
    "chocolateIceQuantity"
  );
  const broChocolateQuantityInput = document.getElementById(
    "broChocolateQuantity"
  );
  const chocolateCakeQuantityInput = document.getElementById(
    "chocolateCakeQuantity"
  );

  let darkChocolateQuantity = parseInt(darkChocolateQuantityInput.value) || 0;
  let milkChocolateQuantity = parseInt(milkChocolateQuantityInput.value) || 0;
  let whiteChocolateQuantity = parseInt(whiteChocolateQuantityInput.value) || 0;
  let chocolateBallQuantity = parseInt(chocolateBallQuantityInput.value) || 0;
  let brownChocolateQuantity = parseInt(brownChocolateQuantityInput.value) || 0;
  let chocolateBarQuantity = parseInt(chocolateBarQuantityInput.value) || 0;
  let chocolateCupcakeQuantity =
    parseInt(chocolateCupcakeQuantityInput.value) || 0;
  let chocolateIceQuantity = parseInt(chocolateIceQuantityInput.value) || 0;
  let broChocolateQuantity = parseInt(broChocolateQuantityInput.value) || 0;
  let chocolateCakeQuantity = parseInt(chocolateCakeQuantityInput.value) || 0;

  if (darkChocolateQuantity > 8) {
    darkChocolateQuantity = 8;
    darkChocolateQuantityInput.value = 8;
    alert("Dark Chocolate quantity cannot exceed 8.");
  }

  if (milkChocolateQuantity > 8) {
    milkChocolateQuantity = 8;
    milkChocolateQuantityInput.value = 8;
    alert("Milk Chocolate quantity cannot exceed 8.");
  }

  if (whiteChocolateQuantity > 8) {
    whiteChocolateQuantity = 8;
    whiteChocolateQuantityInput.value = 8;
    alert("White Chocolate quantity cannot exceed 8.");
  }

  if (chocolateBallQuantity > 8) {
    chocolateBallQuantity = 8;
    chocolateBallQuantityInput.value = 8;
    alert("Chocolate Ball quantity cannot exceed 8.");
  }

  if (brownChocolateQuantity > 8) {
    brownChocolateQuantity = 8;
    brownChocolateQuantityInput.value = 8;
    alert("Brown Chocolate quantity cannot exceed 8.");
  }

  if (chocolateBarQuantity > 8) {
    chocolateBarQuantity = 8;
    chocolateBarQuantityInput.value = 8;
    alert("Chocolate Bar quantity cannot exceed 8.");
  }

  if (chocolateCupcakeQuantity > 8) {
    chocolateCupcakeQuantity = 8;
    chocolateCupcakeQuantityInput.value = 8;
    alert("Chocolate Cupcake quantity cannot exceed 8.");
  }

  if (chocolateIceQuantity > 8) {
    chocolateIceQuantity = 8;
    chocolateIceQuantityInput.value = 8;
    alert("Chocolate Icecream quantity cannot exceed 8.");
  }

  if (broChocolateQuantity > 8) {
    broChocolateQuantity = 8;
    broChocolateQuantityInput.value = 8;
    alert("Brown Chocolate quantity cannot exceed 8.");
  }

  if (chocolateCakeQuantity > 8) {
    chocolateCakeQuantity = 8;
    chocolateCakeQuantityInput.value = 8;
    alert("Chocolate Cake quantity cannot exceed 8.");
  }

  const totalItems =
    darkChocolateQuantity +
    milkChocolateQuantity +
    whiteChocolateQuantity +
    chocolateBallQuantity +
    brownChocolateQuantity +
    chocolateBarQuantity +
    chocolateCupcakeQuantity +
    chocolateIceQuantity +
    broChocolateQuantity +
    chocolateCakeQuantity;

  const totalPrice =
    calculatePrice(darkChocolateQuantity, 110.5) +
    calculatePrice(milkChocolateQuantity, 232.0) +
    calculatePrice(whiteChocolateQuantity, 121.5) +
    calculatePrice(chocolateBallQuantity, 452.5) +
    calculatePrice(brownChocolateQuantity, 232.0) +
    calculatePrice(chocolateBarQuantity, 521.5) +
    calculatePrice(chocolateCupcakeQuantity, 324.5) +
    calculatePrice(chocolateIceQuantity, 251.5) +
    calculatePrice(broChocolateQuantity, 173.5) +
    calculatePrice(chocolateCakeQuantity, 427.5);

  document.getElementById(
    "total-price"
  ).innerText = `Total Price: ${totalPrice.toFixed(2)}`;
}

function calculatePrice(quantity, pricePerItem) {
  return quantity * pricePerItem;
}
