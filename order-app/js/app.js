let cart = [];

function addToCart(name, price) {
  const found = cart.find(item => item.name === name);
  if (found) {
    found.qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  updateCart();
}

function updateCart() {
  const list = document.getElementById('cart-items');
  const total = document.getElementById('cart-total');
  const count = document.getElementById('cart-count');

  let totalAmount = 0;
  list.innerHTML = '';
  cart.forEach(item => {
    totalAmount += item.price * item.qty;
    list.innerHTML += `<li>${item.name} x ${item.qty} - ${item.price * item.qty} ₫</li>`;
  });

  total.textContent = totalAmount.toLocaleString('vi-VN') + ' ₫';
  count.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
}

document.getElementById('cart-button').onclick = () => {
  document.getElementById('cart').classList.toggle('hidden');
};

function checkout() {
  alert('Đơn hàng của bạn đã được gửi!');
  cart = [];
  updateCart();
  document.getElementById('cart').classList.add('hidden');
}
// Lấy mã bàn từ URL
const urlParams = new URLSearchParams(window.location.search);
const tableNumber = urlParams.get('table');

// Hiển thị mã bàn trên giao diện
if (tableNumber) {
  const banner = document.createElement('div');
  banner.className = 'fixed top-0 left-0 right-0 bg-yellow-400 text-black text-center py-2 font-semibold z-50';
  banner.textContent = `🪑 Bạn đang gọi món tại BÀN SỐ ${tableNumber}`;
  document.body.appendChild(banner);
}
function checkout() {
    if (!tableNumber) {
      alert("Không xác định được bàn. Vui lòng quét đúng mã QR.");
      return;
    }
  
    const order = {
      table: tableNumber,
      items: cart
    };
  
    console.log("Gửi đơn hàng:", order);
    // Gửi về server hoặc Google Sheets tại đây
  
    alert(`Đơn hàng bàn ${tableNumber} đã gửi!`);
    cart = [];
    updateCart();
    document.getElementById('cart').classList.add('hidden');
  }
  
