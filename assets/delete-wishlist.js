document.addEventListener('DOMContentLoaded', function () {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const products = document.querySelectorAll('.wishlist-product');
    const wishlistContainer = document.getElementById('wishlist-products');

    // // Show products from wishlist
    // if (wishlist.length === 0) {
    //   wishlistContainer.innerHTML = '<p>Your wishlist is empty.</p>';
    // }

    // products.forEach(product => {
    //   const handle = product.dataset.handle;
    //   if (wishlist.includes(handle)) {
    //     product.style.display = 'block';
    //   }
    // });

    // Remove from Wishlist functionality
    wishlistContainer.addEventListener('click', function (e) {
      if (e.target.classList.contains('remove-from-wishlist')) {
        const handleToRemove = e.target.dataset.handle;
        const updatedWishlist = wishlist.filter(handle => handle !== handleToRemove);

        // Update localStorage
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));

        // Remove product from the DOM
        e.target.closest('.wishlist-item').remove();

        // Update wishlist count in header (if you have it)
        const wishlistCountElement = document.getElementById('wishlist-count');
        if (wishlistCountElement) {
          wishlistCountElement.innerText = updatedWishlist.length;
        }

        // Show empty message if wishlist is empty after removal
        if (updatedWishlist.length === 0) {
          wishlistContainer.innerHTML = '<p>Your wishlist is empty.</p>';
        }
      }
    });
});

