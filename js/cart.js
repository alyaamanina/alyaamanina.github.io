// Cart is saved in localStorage so items stay after page refresh

function getCart() {
  var cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(id) {
  var cart = getCart();

  // find the product
  var item = null;
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      item = products[i];
      break;
    }
  }
  if (item === null) {
    return;
  }

  var found = false;
  for (var j = 0; j < cart.length; j++) {
    if (cart[j].id === id) {
      cart[j].qty = cart[j].qty + 1;
      found = true;
      break;
    }
  }

  if (!found) {
    cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      qty: 1
    });
  }

  saveCart(cart);
  updateBadge();
  showToast(item.name + " added to cart!");
}

function removeFromCart(id) {
  var cart = getCart();
  var arr2 = [];
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id !== id) {
      arr2.push(cart[i]);
    }
  }
  saveCart(arr2);
  updateBadge();
}

function changeQty(id, num) {
  var cart = getCart();
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart[i].qty = cart[i].qty + num;
      if (cart[i].qty < 1) {
        cart[i].qty = 1;
      }
      break;
    }
  }
  saveCart(cart);
  updateBadge();
}

function clearCart() {
  localStorage.removeItem("cart");
  updateBadge();
}

function countItems() {
  var cart = getCart();
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total = total + cart[i].qty;
  }
  return total;
}

function totalPrice() {
  var cart = getCart();
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total = total + (cart[i].price * cart[i].qty);
  }
  return total;
}

// shows the red number on the cart icon
function updateBadge() {
  var count = countItems();
  var badges = document.querySelectorAll(".cart-badge");
  for (var i = 0; i < badges.length; i++) {
    badges[i].textContent = count;
    if (count > 0) {
      badges[i].classList.remove("hidden");
    } else {
      badges[i].classList.add("hidden");
    }
  }
}

function showToast(msg) {
  var old = document.getElementById("toastMsg");
  if (old) {
    old.remove();
  }
  var toast = document.createElement("div");
  toast.id = "toastMsg";
  toast.className = "fixed bottom-6 right-6 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm z-50";
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(function () {
    toast.remove();
  }, 2000);
}
