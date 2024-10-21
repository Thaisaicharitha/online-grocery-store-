// Product data for each category
const products = {
    fruits: [
        { name: 'Apple', price: 120, image: 'https://up.yimg.com/ib/th?id=OIP.kori7Y8NQzmHi4RLlD-T9AHaE5&pid=Api&rs=1&c=1&qlt=95&w=168&h=110' },
        { name: 'Banana', price: 40, image: 'https://tse2.mm.bing.net/th?id=OIP.VWk3BpwznL_qitkaxUwFcAHaFe&pid=Api&P=0&h=180' },
        { name: 'Orange', price: 60, image: 'https://tse2.mm.bing.net/th?id=OIP._1oK1I26Ku1yLqsT7gcvYQHaE8&pid=Api&P=0&h=180' },
        { name: 'Mango', price: 150, image: 'https://tse4.mm.bing.net/th?id=OIP.Nwhu4wrBm-c4Dz3IPZuGXgHaE8&pid=Api&P=0&h=180' },
        { name: 'Muskmelon', price: 95, image: 'https://tse4.mm.bing.net/th?id=OIP.hdPyYeZPdDwkoyjGU7mLkQHaGh&pid=Api&P=0&h=180' },
        { name: 'Grapes', price: 100, image: 'https://tse3.mm.bing.net/th?id=OIP.mhEQxYzDIWGxiMAmqGtlYgHaEo&pid=Api&P=0&h=180' },
        { name: 'Watermelon', price: 50, image: 'https://tse1.mm.bing.net/th?id=OIP.kh2qdvKJp89ePy4YFLBeJwHaFj&pid=Api&P=0&h=180' },
        { name: 'Strawberry', price: 120, image: 'https://tse2.mm.bing.net/th?id=OIP.vNPkLpIfOmJEMEWUYg2f_wHaF1&pid=Api&P=0&h=180' },
        { name: 'Guava', price: 75, image: 'https://tse4.mm.bing.net/th?id=OIP.gHHwNXzq_P6NpIo06jjaGAHaE8&pid=Api&P=0&h=180' },
        { name: 'Pineapple', price: 45, image: 'https://tse2.mm.bing.net/th?id=OIP.eN9--Rq_Tu_kx_iBOniJtwHaFx&pid=Api&P=0&h=180' },
        { name: 'Chickoo', price: 60, image: 'https://tse2.mm.bing.net/th?id=OIP.C5n_InwYdN-uGa2qezwT-wHaHa&pid=Api&P=0&h=180' },
        { name: 'Papaya', price: 70, image: 'https://tse2.mm.bing.net/th?id=OIP.kXAU46jo_QZgpiqSvuk77QHaHa&pid=Api&P=0&h=180' },

    ],
    vegetables: [
        { name: 'Carrot', price: 50, image: 'https://tse3.mm.bing.net/th?id=OIP.tr38uLM7QBOLElGJHG88eQHaEi&pid=Api&P=0&h=180' },
        { name: 'Potato', price: 30, image: 'https://tse2.mm.bing.net/th?id=OIP.F0aQXnmCDGEadfNivihUAQHaF8&pid=Api&P=0&h=180' },
        { name: 'Tomato', price: 35, image: 'https://tse1.mm.bing.net/th?id=OIP.DKED3M1L4ZPm5_okuB0V1AHaFL&pid=Api&P=0&h=180' },
        { name: 'Spinach', price: 20, image: 'https://tse2.mm.bing.net/th?id=OIP.B78McfypSwcNIi6gX4cQxQHaFy&pid=Api&P=0&h=180' },
        { name: 'Onions', price: 70, image: 'https://tse3.mm.bing.net/th?id=OIP.Wx6vzEAXKItnAlYqn-nKqwHaE8&pid=Api&P=0&h=180' },
        { name: 'Chillies', price: 25, image: 'https://tse1.mm.bing.net/th?id=OIP.4fTU2OCSXb06OGt0b2zbTwHaFj&pid=Api&P=0&h=180' },
        { name: 'Brinjal', price: 70, image: 'https://tse1.mm.bing.net/th?id=OIP.tAJ4WJk8l01gKWewmjkucwHaHa&pid=Api&P=0&h=180' },
        { name: 'Beans', price: 20, image: 'https://tse2.mm.bing.net/th?id=OIP.ayjhsXM80N___cl-3y8qvQHaHa&pid=Api&P=0&h=180' },
        { name: 'Curry leaves', price: 10, image: 'https://tse3.mm.bing.net/th?id=OIP.KFuyRC2yq4o9YYNwf2DRzAHaHa&pid=Api&P=0&h=180' },
        { name: 'Coriander', price: 15, image: 'https://tse2.mm.bing.net/th?id=OIP.dGrb3S6s0VfKP3LTO2H5sgHaFb&pid=Api&P=0&h=180' },
        { name: 'Radish', price: 35, image: 'https://tse4.mm.bing.net/th?id=OIP.nYpTXENfVQp03UQCZ5hEQQHaE8&pid=Api&P=0&h=180' },
        { name: 'Bittergourd', price: 30, image: 'https://tse3.mm.bing.net/th?id=OIP.5-d0B6W8Rt4FouwKzA5WRgHaEK&pid=Api&P=0&h=180' },
    ],
    laundry: [
        { name: 'Tide surf', price: 10, image: 'https://tse3.mm.bing.net/th?id=OIP.w1OI4i_bLzKoQWNUG6x0SAAAAA&pid=Api&P=0&h=180' },
        { name: 'Surfxl surf', price: 10, image: 'https://tse1.mm.bing.net/th?id=OIP.LuooqB_yHuOjqHmaVoNHAAHaHa&pid=Api&P=0&h=180' },
        { name: 'Aireal surf', price: 10, image: 'https://tse4.mm.bing.net/th?id=OIP.ehdplfX60cUB3b-RY7j5pQAAAA&pid=Api&P=0&h=180' },
        { name: 'Rin surf', price: 10, image: 'https://tse3.mm.bing.net/th?id=OIP.LCxhvw5pFSLtnEL8ARpIPAHaHa&pid=Api&P=0&h=180' },
        { name: 'Tide liquid', price: 20, image: 'https://tse2.mm.bing.net/th?id=OIP.ktofWM-D-I0w7gOuXuDJUAHaHa&pid=Api&P=0&h=180' },
        { name: 'Surfxl liquid', price: 20, image: 'https://tse4.mm.bing.net/th?id=OIP.RqPaWLATsGFfRaypGuQcDwHaHa&pid=Api&P=0&h=180' },
        { name: 'Aireal liquid', price: 20, image: 'https://tse3.mm.bing.net/th?id=OIP.7aFCrOzbRVD0wObgHU1XfQHaHa&pid=Api&P=0&h=180' },
        { name: 'Rin liquid', price: 20, image: 'https://tse1.mm.bing.net/th?id=OIP.dZm76VVfPwpjl2q8yig0NgHaHa&pid=Api&P=0&h=180' },
        { name: 'Tide bar', price: 15, image: 'https://tse2.mm.bing.net/th?id=OIP.Q5f5_4U6oFi8-n9IWyImJgHaHa&pid=Api&P=0&h=180' },
        { name: 'Surfxl bar', price: 15, image: 'https://tse4.mm.bing.net/th?id=OIP.YYDoIQDJLUjQOenyDNCvmwHaHa&pid=Api&P=0&h=180' },
        { name: 'Aireal bar', price: 15, image: 'https://tse1.mm.bing.net/th?id=OIP.1YhbCwbf2Lw-UhEV5S2qbgHaHa&pid=Api&P=0&h=180' },
        { name: 'Rin bar', price: 15, image: 'https://tse4.mm.bing.net/th?id=OIP.M9r6O8OCT4-RcBOZiQxkQAHaHa&pid=Api&P=0&h=180' },
    ],

    dairyproducts: [
        { name: 'Milk', price: 25, image: 'https://tse2.mm.bing.net/th?id=OIP.1xz0ZBlUbiidScjLqPBfYQHaHa&pid=Api&P=0&h=180' },
        { name: 'Cheese', price: 100, image: 'https://tse3.mm.bing.net/th?id=OIP.mLYJEvIJSQJfL0aVmF4UhAHaHa&pid=Api&P=0&h=180' },
        { name: 'Butter', price:25 , image: 'https://tse4.mm.bing.net/th?id=OIP.UiG8BdKDvgh0ev_hfa_6mwHaHa&pid=Api&P=0&h=180' },
        { name: 'Yogurt', price: 30, image: 'https://tse3.mm.bing.net/th?id=OIP.ml73a0fz4ep3TtPGOnZfkgHaHa&pid=Api&P=0&h=180' },
        { name: 'Curd', price: 10, image: 'https://tse3.mm.bing.net/th?id=OIP.Lnqt3JowD1yYd8Uv0vBfLwHaEK&pid=Api&P=0&h=180' },
        { name: 'Panneer', price: 110, image: 'https://tse3.mm.bing.net/th?id=OIP.k_trt-_MPrJWMLkyNga3KwHaHa&pid=Api&P=0&h=180' },
        { name: 'Condensedmilk', price: 150, image: 'https://tse3.mm.bing.net/th?id=OIP.9e9TcgjUit_rAX2omX5A4QHaHa&pid=Api&P=0&h=180' },
        { name: 'Malai', price: 90, image: 'https://tse3.mm.bing.net/th?id=OIP.AfKom5dHWTeDlog-CMkzXgHaKf&pid=Api&P=0&h=180' },
    ],
    conditioners: [
        { name: 'Sunsilk', price: 60, image: 'https://tse3.mm.bing.net/th?id=OIP.Uytf_dOTSUZ_OT19NJgfXwHaHa&pid=Api&P=0&h=180' },
        { name: 'Meera', price: 45, image: 'https://tse4.mm.bing.net/th?id=OIP.ivKh3gWGU5_YrKisMOwGoQHaHa&pid=Api&P=0&h=180' },
        { name: 'Dove', price: 80, image: 'https://tse3.mm.bing.net/th?id=OIP.JBXm4J1jXSS8tkHEgvFg3gHaHa&pid=Api&P=0&h=180' },
        { name: 'Clinicplus', price: 50, image: 'https://tse3.mm.bing.net/th?id=OIP.dV1vIE_5Zguq2mnweIF-bAHaHa&pid=Api&P=0&h=180' },
        { name: 'Loreal', price: 60, image: 'https://tse3.mm.bing.net/th?id=OIP.193KPsSchJ2HKYjVT-ce9AHaHa&pid=Api&P=0&h=180' },
        { name: 'Chick', price: 45, image: 'https://tse1.mm.bing.net/th?id=OIP.sV2skx5TqkwVd9yvdVaAPwAAAA&pid=Api&P=0&h=180' },
        { name: 'Headandshoulders', price: 80, image: 'https://tse1.mm.bing.net/th?id=OIP.0mEPBMI80QYjg98T-xxJhgHaHa&pid=Api&P=0&h=180' },
        { name: 'Tresme', price: 50, image: 'https://tse3.mm.bing.net/th?id=OIP.B1MZ5a8P5gDK93XEC9-PxwHaHa&pid=Api&P=0&h=180' },
    ],
    
    snacks: [
        { name: 'Lays', price: 20, image: 'https://tse3.mm.bing.net/th?id=OIP.FiViHdsssJBP5KEND4SzzQAAAA&pid=Api&P=0&h=180' },
        { name: 'Snickers', price: 20, image: 'https://tse1.mm.bing.net/th?id=OIP.FDOBrj-EqHvMwk8clQY1VgHaHa&pid=Api&P=0&h=180' },
        { name: 'Bourbon ', price: 10, image: 'https://tse2.mm.bing.net/th?id=OIP.-W9ZY7wypnHggWleVaSt9gHaHa&pid=Api&P=0&h=180' },
        { name: 'Bingo', price: 10, image: 'https://tse3.mm.bing.net/th?id=OIP.b2NNFbnMsT61f0D-ir4PLQHaHa&pid=Api&P=0&h=180' },
        { name: 'Moongdal', price: 10, image: 'https://tse1.mm.bing.net/th?id=OIP.Z5tsf-S7svURD2ZL4mHAfAHaHa&pid=Api&P=0&h=180' },
        { name: 'Kurkure', price: 10, image: 'https://tse4.mm.bing.net/th?id=OIP.MyKaoQfvWEIVGxuk1Bp2_QHaHa&pid=Api&P=0&h=180' },
        { name: 'Madangles', price: 20, image: 'https://tse2.mm.bing.net/th?id=OIP.UiMFdQd0JyTpVEp_kjMkHwHaHa&pid=Api&P=0&h=180' },
        { name: 'Puffcorn', price: 20, image: 'https://tse2.mm.bing.net/th?id=OIP.7pSJciiIhAqzKrwEMLoqbgHaHa&pid=Api&P=0&h=180' },
        { name: 'MarieGold', price: 10, image: 'https://tse4.mm.bing.net/th?id=OIP.7SJp_lSQvrI9ZnUYjNlb-QHaHa&pid=Api&P=0&h=180' },
        { name: 'Cookies', price: 10, image: 'https://tse4.mm.bing.net/th?id=OIP._YRQkNFJa9lXv3LSZ0n4NwHaHa&pid=Api&P=0&h=180' },
        { name: 'Tasty Nuts', price: 10, image: 'https://tse4.mm.bing.net/th?id=OIP.mt1hc7rPbL4in7SG10roLgHaHa&pid=Api&P=0&h=180' },
        { name: 'Kitkat', price: 20, image: 'https://tse2.mm.bing.net/th?id=OIP.e09ga9EaxngD2oprvFMvnAHaHa&pid=Api&P=0&h=180' },
        { name: 'DairyMilk', price: 80, image: 'https://tse1.mm.bing.net/th?id=OIP.D7SvC_ejwaMUJrRFJrWtMgHaHa&pid=Api&P=0&h=180' },
        { name: 'Perk', price: 10, image: 'https://tse3.mm.bing.net/th?id=OIP.t2XPgtDF3f62_UIc4Aa5TwHaHa&pid=Api&P=0&h=180' },
        { name: 'Munch', price: 10, image: 'https://tse2.mm.bing.net/th?id=OIP.x5huv9gk925c-lDPGvwtqQHaHa&pid=Api&P=0&h=180' },
        { name: '5Star', price: 20, image: 'https://tse3.mm.bing.net/th?id=OIP._AMKaLqS1e3LJwCO1jjJKAHaHa&pid=Api&P=0&h=180' },
 ],
 grainsandflours: [
    { name: 'Rice', price: 60, image: 'https://tse1.mm.bing.net/th?id=OIP.RNOIRgInm-mQNtviHXm33AHaFj&pid=Api&P=0&h=180' },
    { name: 'moongdal', price: 35, image: 'https://tse3.mm.bing.net/th?id=OIP.jjkyQ8D5bbu7JiHkdu1xnQHaFZ&pid=Api&P=0&h=180' },
    { name: 'urad dal', price: 90, image: 'https://tse4.mm.bing.net/th?id=OIP.fJc5Fs17fPnwqWLla04dGAHaHa&pid=Api&P=0&h=180' },
    { name: 'gramdal', pice: 60, image: 'https://tse1.mm.bing.net/th?id=OIP.g7_JuYmpNyp5PpwShO4D0QHaE4&pid=Api&P=0&h=180' },
    { name: 'toordal', price: 35, image: 'https://tse4.mm.bing.net/th?id=OIP.T2po5ix4FXF-NBbNeKD45AHaGK&pid=Api&P=0&h=180' },
    { name: 'semia', price: 40, image: 'https://tse1.mm.bing.net/th?id=OIP.BDnnqhPcrTobTtYa9mYonAHaHa&pid=Api&P=0&h=180' },
    { name: 'wheatflour', price: 55, image: 'https://tse2.mm.bing.net/th?id=OIP.L3QudhO6F3LfvajGYHLWaAHaHa&pid=Api&P=0&h=180' },
    { name: 'ragiflour', price: 35, image: 'https://tse4.mm.bing.net/th?id=OIP.rPeR5KsefeRw_fyAflApWQHaHa&pid=Api&P=0&h=180' },
    { name: 'gramflour', price: 28, image: 'https://tse3.mm.bing.net/th?id=OIP.5YmiSb3Pql2dgkr4CD3ciQAAAA&pid=Api&P=0&h=180' },
    { name: 'maida ', price: 32, image: 'https://tse4.mm.bing.net/th?id=OIP.udq1KEPVfCy0CxFnvMwoyAHaLW&pid=Api&P=0&h=180' },
    { name: 'idly flour', price: 34, image: 'https://tse2.mm.bing.net/th?id=OIP.Mwgb6ZZ0iYTVhUGdGkkSwwHaKx&pid=Api&P=0&h=180' },
    { name: 'sooji ', price: 26, image: 'https://tse3.mm.bing.net/th?id=OIP.QXx3tptzgLomT_yw2z9dfgHaHa&pid=Api&P=0&h=180' },
    { name: 'sugar', price: 55, image: 'https://tse3.mm.bing.net/th?id=OIP.y1mfIiKOxays4TQghhXREQHaHa&pid=Api&P=0&h=180' },
    { name: 'jaggery', price: 60, image: 'https://tse4.mm.bing.net/th?id=OIP.hKOskFMJeTx8BWqX42fFUgHaFj&pid=Api&P=0&h=180' }
    
],
toothpasteandbrushes: [
    { name: 'Colgate ', price: 60, image: 'https://tse3.mm.bing.net/th?id=OIP.pnxqmV-mvDYL1x44BROEsQHaHa&pid=Api&P=0&h=180' },
    { name: 'Dabur red ', price: 45, image: 'https://tse1.mm.bing.net/th?id=OIP.1IBM2F0wRhXuS_0eRL-TNAHaHa&pid=Api&P=0&h=180' },
    { name: 'Sensodyne ', price: 80, image: 'https://tse3.mm.bing.net/th?id=OIP.a49RoMeVorAsH1TAwkMRzwHaHa&pid=Api&P=0&h=180' },
    { name: 'Closeup', price: 50, image: 'https://tse2.mm.bing.net/th?id=OIP.u12R9rO_lhsHPgQM1h6ucQHaHa&pid=Api&P=0&h=180' },
    { name: 'Colgate zigzag', price: 60, image: 'https://tse3.mm.bing.net/th?id=OIP.emuKfWBnUpwBhFvcGJ2FDAHaHa&pid=Api&P=0&h=180' },
    { name: 'Oral-B', price: 45, image: 'https://tse2.mm.bing.net/th?id=OIP.-yZ2ZbUBPQ3if_nf2voN5wHaJJ&pid=Api&P=0&h=180' },
    { name: 'Sensodyne Brush ', price: 80, image: 'https://tse3.mm.bing.net/th?id=OIP.mvsHbTKs4TtT-p24IAboIgHaHa&pid=Api&P=0&h=180' },
    { name: 'Colagate Baby Brush', price: 50, image: 'https://tse3.mm.bing.net/th?id=OIP.lmYGg_uhtEHdzHkrvOqYHQHaHa&pid=Api&P=0&h=180' },
],
    breadsandcakes: [
        { name: 'Bread', price: 25, image: 'https://tse1.mm.bing.net/th?id=OIP.Yw2pBVw7dPAfcRPA8jSXNQHaFt&pid=Api&P=0&h=180' },
        { name: 'Buns', price: 20, image: 'https://tse1.mm.bing.net/th?id=OIP.3C9-4Au1NjUBtfa01VUW_gHaHa&pid=Api&P=0&h=180' },
        { name: 'Britannia Cake', price: 15, image: 'https://tse1.mm.bing.net/th?id=OIP.IYeGeZ5DNAt1xyfXq2FnAgHaHa&pid=Api&P=0&h=180' },
        { name: 'Pilsbury Cake Mix', price: 50, image: 'https://tse2.mm.bing.net/th?id=OIP.ysXdIuAQFfgxz2SQPqCu3gHaEm&pid=Api&P=0&h=180' },
        { name: 'Chocolate Fudge', price: 15, image: 'https://tse1.mm.bing.net/th?id=OIP.CeKYayYEawdrVq6Gt3i7nAHaHa&pid=Api&P=0&h=180' },
        { name: 'Raisin Cake', price: 60, image: 'https://tse3.mm.bing.net/th?id=OIP.FAN3kVW_WqW54z80BDXVtAHaE8&pid=Api&P=0&h=180' },
        { name: 'Plain Cake', price: 45, image: 'https://tse1.mm.bing.net/th?id=OIP.NmBZRxkGNBfkKkDzA3cChAHaEK&pid=Api&P=0&h=180' },
        { name: 'Chocolate Cake ', price: 50, image: 'https://tse4.mm.bing.net/th?id=OIP.plJtFlV4TqXJ3GdTuvTVtQHaHa&pid=Api&P=0&h=180' },
    ],
    // Add other categories as needed
};




// Display products when a category is clicked
function displayProducts(category) {
    const productGallery = document.getElementById('productGallery');
    productGallery.innerHTML = ''; // Clear existing products

    products[category].forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product-item';

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p>${product.name}</p>
            <p>₹${product.price}</p>
            <div class="quantity-control">
                <button onclick="decreaseQuantity('${category}', ${index})">-</button>
                <span id="${category}-quantity-${index}">0</span>
                <button onclick="increaseQuantity('${category}', ${index})">+</button>
            </div>
            <button onclick="addToCart('${category}', ${index})">Add to Cart</button>
        `;

        productGallery.appendChild(productDiv);
    });
}

// Function to increase the quantity
function increaseQuantity(category, index) {
    const quantitySpan = document.getElementById(`${category}-quantity-${index}`);
    let quantity = parseInt(quantitySpan.textContent);
    quantity += 1;
    quantitySpan.textContent = quantity;
}

// Function to decrease the quantity
function decreaseQuantity(category, index) {
    const quantitySpan = document.getElementById(`${category}-quantity-${index}`);
    let quantity = parseInt(quantitySpan.textContent);
    if (quantity > 0) {
        quantity -= 1;
    }
    quantitySpan.textContent = quantity;
}

// Add product to cart
function addToCart(category, index) {
    const quantity = parseInt(document.getElementById(`${category}-quantity-${index}`).textContent);
    if (quantity > 0) {
        const product = products[category][index];
        const cartItems = document.getElementById('cartItems');
        const totalAmount = document.getElementById('totalAmount');

        const existingItem = document.querySelector(`#cart-${category}-${index}`);
        if (existingItem) {
            const qtyElement = existingItem.querySelector('.cart-quantity');
            const newQuantity = parseInt(qtyElement.textContent) + quantity;
            qtyElement.textContent = newQuantity;
        } else {
            const cartItem = document.createElement('li');
            cartItem.id = `cart-${category}-${index}`;
            cartItem.innerHTML = `
                ${product.name} - ₹${product.price} x <span class="cart-quantity">${quantity}</span>
                <button onclick="removeFromCart('${category}', ${index})">Remove</button>
            `;
            cartItems.appendChild(cartItem);
        }

        updateTotal();
    }
}

// Remove product from cart
function removeFromCart(category, index) {
    const cartItem = document.getElementById(`cart-${category}-${index}`);
    if (cartItem) {
        cartItem.remove();
        updateTotal();
    }
}

// Update the total amount
function updateTotal() {
    const cartItems = document.querySelectorAll('#cartItems li');
    let total = 0;

    cartItems.forEach(item => {
        const price = parseInt(item.textContent.split('₹')[1]);
        const quantity = parseInt(item.querySelector('.cart-quantity').textContent);
        total += price * quantity;
    });

    document.getElementById('totalAmount').textContent = total.toFixed(2);
}


// Initial display of the first category (optional)
displayProducts('fruits');
