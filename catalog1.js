const groceryType = document.getElementById('groceryType');
const productGallery = document.getElementById('productGallery');
const cartItems = document.getElementById('cartItems');
const totalAmount = document.getElementById('totalAmount');
const paymentSection = document.getElementById('paymentSection');
const paymentForm = document.getElementById('paymentForm');
let cart = [];
let total = 0;

// Sample product data
const products = {
    fruits: [
        { name: 'Apple', price: 1.00, image: 'apple.jpg' },
        { name: 'Banana', price: 0.50, image: 'banana.jpg' }
    ],
    vegetables: [
        { name: 'Carrot', price: 0.80, image: 'carrot.jpg' },
        { name: 'Broccoli', price: 1.50, image: 'broccoli.jpg' }
    ],
    dairy: [
        { name: 'Milk', price: 2.00, image: 'milk.jpg' },
        { name: 'Cheese', price: 3.50, image: 'cheese.jpg' }
    ]
};

// Load products when grocery type is selected
groceryType.addEventListener('change', function() {
    const selectedType = groceryType.value;
    productGallery.innerHTML = ''; // Clear previous products

    if (products[selectedType]) {
        products[selectedType].forEach(product => {
            const img = document.createElement('img');
            img.src = product.image;
            img.alt = product.name;
            img.title = `${product.name} - $${product.price.toFixed(2)}`;
            img.addEventListener('click', () => addToCart(product));
            productGallery.appendChild(img);
        });
    }
});

// Add product to cart
function addToCart(product) {
    cart.push(product);
    total += product.price;
    updateCart();
}

// Update cart display
function updateCart() {
    cartItems.innerHTML = ''; // Clear previous cart items
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });
    totalAmount.textContent = total.toFixed(2);
}

// Handle checkout button click
document.getElementById('checkout').addEventListener('click', function() {
    if (cart.length > 0) {
        paymentSection.style.display = 'block';
    } else {
        alert('Your cart is empty.');
    }
});

// Handle payment form submission
paymentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    alert(`Proceeding with payment via ${paymentMethod}.`);
    // Redirect to a simulated payment confirmation page
    window.location.href = 'confirmation.html';
});
