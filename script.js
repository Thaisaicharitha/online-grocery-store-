document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const nameInput = document.getElementById('name').value.trim();
    const mobileInput = document.getElementById('mobile').value.trim();
    const mobilePattern = /^[0-9]{10}$/;

    // Validate the name input
    if (nameInput === '') {
        alert('Please enter your name.');
        return;
    }

    // Validate the mobile number input
    if (!mobilePattern.test(mobileInput)) {
        alert('Please enter a valid 10-digit mobile number.');
        return;
    }

    // If validation passes, redirect to the catalog page
    window.location.href = 'catalog.html';
});
