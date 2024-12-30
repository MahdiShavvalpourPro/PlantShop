function changeImage(thumbnail) {
  const mainImage = document.getElementById('currentImage');
  const thumbnails = document.querySelectorAll('.thumbnails img');
  mainImage.src = thumbnail.src;

  thumbnails.forEach(img => img.classList.remove('active'));
  thumbnail.classList.add('active');
}


// basket
let quantity = 0;

function addToCart() {
  quantity++;
  updateQuantityDisplay();
}

function decreaseQuantity() {
  if (quantity > 0) {
    quantity--;
    updateQuantityDisplay();
  }
}

function updateQuantityDisplay() {
  document.getElementById("quantity").textContent = quantity;
}