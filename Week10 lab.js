import { Product } from './product.js';

const usersDiv = document.getElementById('users');
const loadingDiv = document.getElementById('loading');
const errorDiv = document.getElementById('error');
const productsDiv = document.getElementById('products');
const cartDiv = document.getElementById('cart');
const totalEl = document.getElementById('total');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) throw new Error('Network response was not ok');

    const users = await response.json();
    loadingDiv.style.display = 'none';

    users.forEach((user) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <strong>Name:</strong> ${user.name} <br>
        <strong>Email:</strong> ${user.email}
      `;
      usersDiv.appendChild(card);
    });
  } catch (err) {
    loadingDiv.style.display = 'none';
    errorDiv.textContent = 'Oops! Could not load users. Please try again later.';
    console.error(err);
  }
}

const products = [
  new Product('Laptop', 500),
  new Product('Mouse', 20),
  new Product('Keyboard', 50)
];

function renderProducts() {
  products.forEach((product, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <strong>Product:</strong> ${product.name} <br>
      <strong>Price:</strong> $${product.price.toFixed(2)} <br>
      <strong>Price with Tax 16%:</strong> $${product.withTax().toFixed(2)} <br>
      <button onclick="addToCart(${index})">Add to Cart</button>
    `;
    productsDiv.appendChild(card);
  });
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function renderCart() {
  cartDiv.innerHTML = '';
  if (cart.length === 0) {
    cartDiv.innerHTML = '<p>Cart is empty</p>';
    totalEl.textContent = '';
    return;
  }

  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    const itemDiv = document.createElement('div');
    itemDiv.className = 'cart-item';
    itemDiv.innerHTML = `
      <span>${item.name}</span>
      <span>$${item.price.toFixed(2)}</span>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartDiv.appendChild(itemDiv);
  });

  totalEl.textContent = `Total: $${total.toFixed(2)}`;
}

window.addToCart = function (index) {
  const product = products[index];
  cart.push({
    name: product.name,
    price: product.withTax()
  });
  saveCart();
  renderCart();
};

window.removeFromCart = function (index) {
  cart.splice(index, 1);
  saveCart();
  renderCart();
};

window.clearCart = function () {
  cart = [];
  saveCart();
  renderCart();
};

fetchUsers();
renderProducts();
renderCart();
