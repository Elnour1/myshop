document.addEventListener("DOMContentLoaded", function () {
    // تحديد العناصر
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartList = document.getElementById("cart-items"); 
    const totalPriceElement = document.getElementById("total-price");
    const clearCartButton = document.getElementById("clear-cart");
    let cart = [];
    let total = 0;    
    // عند الضغط على زر "إضافة إلى السلة"
    addToCartButtons.forEach((button) => {
        button.addEventListener("click", function () {
            let product = this.parentElement;
            let productName = product.querySelector("h2").textContent; // اسم المنتج
            let productPrice = parseInt(product.querySelector(".price").textContent);
                    // إضافة العنصر إلى السلة
            let li = document.createElement("li");
            li.textContent = `${productName} - price: ${productPrice} `;

            cartList.appendChild(li);

            // تحديث المجموع الكلي
            total += productPrice;
            totalPriceElement.textContent = total;
        });
    });
    // تحديث السلة وعرض الأسعار داخل ul li
    function updateCart() {
        cartList.innerHTML = ""; // مسح المحتوى القديم
        let total = 0;
        cart.forEach((price, index) => {
            let li = document.createElement("li");
            li.textContent = `price: ${price} `;
            cartList.appendChild(li);
            total += price;
        });

        totalPriceElement.textContent = total;
    }

    });