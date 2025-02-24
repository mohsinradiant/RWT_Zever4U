
  document.addEventListener('DOMContentLoaded', function () {
    const wishlistBtns = document.querySelectorAll('.wishlist-btn');
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    function updateButtonState(button) {
      const productHandle = button.dataset.productHandle;
      if (wishlist.includes(productHandle)) {
        button.innerHTML = '<i class="fa-solid fa-heart"></i>';
      } else {
        button.innerHTML = '<i class="fa-regular fa-heart"></i>';
      }
    }

    wishlistBtns.forEach(button => {
      updateButtonState(button);

      button.addEventListener('click', function () {
        const productHandle = this.dataset.productHandle;

        if (wishlist.includes(productHandle)) {
          const index = wishlist.indexOf(productHandle);
          wishlist.splice(index, 1);
        } else {
          wishlist.push(productHandle);
        }

        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        
        const wishlistCountElement = document.getElementById('wishlist-count');
        if (wishlistCountElement) {
          wishlistCountElement.innerText = wishlist.length;
        }
        
        updateButtonState(this);
      });
    });
  });
