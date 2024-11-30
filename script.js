// Initialize cart as an empty array
let cart = [];

// Update cart count in the navbar
function updateCartCount() {
  const cartCount = document.getElementById('cart-count');
  cartCount.textContent = cart.length;
}

// Update cart items section
function updateCartItems() {
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
  } else {
    cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <p>${item.name}</p>
        <p>$${item.price}</p>
        <button class="remove-from-cart" data-product="${item.name}">Remove</button>
      `;
      cartItemsContainer.appendChild(cartItem);
    });
  }
}

// Handle add to cart button click
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', (e) => {
    const productName = e.target.getAttribute('data-product');
    const productPrice = parseFloat(e.target.getAttribute('data-price'));

    // Add product to cart
    cart.push({ name: productName, price: productPrice });
    updateCartCount();
    updateCartItems();
  });
});

// Handle remove from cart
document.getElementById('cart-items').addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-from-cart')) {
    const productName = e.target.getAttribute('data-product');

    // Remove item from cart
    cart = cart.filter(item => item.name !== productName);
    updateCartCount();
    updateCartItems();
  }
});

// Handle checkout button
document.getElementById('checkout-btn').addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Your cart is empty!');
  } else {
    alert('Proceeding to checkout...');
    cart = []; // Clear the cart after checkout
    updateCartCount();
    updateCartItems();
  }
});
// Initialize cart as an empty array
let cart = [];

// Update cart count in the navbar
function updateCartCount() {
  const cartCount = document.getElementById('cart-count');
  cartCount.textContent = cart.length;
}

// Update cart items section
function updateCartItems() {
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
  } else {
    cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <p>${item.name}</p>
        <p>$${item.price}</p>
        <button class="remove-from-cart" data-product="${item.name}">Remove</button>
      `;
      cartItemsContainer.appendChild(cartItem);
    });
  }
}

// Handle add to cart button click
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', (e) => {
    const productName = e.target.getAttribute('data-product');
    const productPrice = parseFloat(e.target.getAttribute('data-price'));

    // Add product to cart
    cart.push({ name: productName, price: productPrice });
    updateCartCount();
    updateCartItems();
  });
});

// Handle remove from cart
document.getElementById('cart-items').addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-from-cart')) {
    const productName = e.target.getAttribute('data-product');

    // Remove item from cart
    cart = cart.filter(item => item.name !== productName);
    updateCartCount();
    updateCartItems();
  }
});

// Handle checkout button
document.getElementById('checkout-btn').addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Your cart is empty!');
  } else {
    alert('Proceeding to checkout...');
    cart = []; // Clear the cart after checkout
    updateCartCount();
    updateCartItems();
  }
});
