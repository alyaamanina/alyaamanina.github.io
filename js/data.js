// All sample data for the shop

var products = [
  { id: 1,  name: "Air Runner Pro",       category: "Running",  price: 299.00, stock: 25, image: "images/products/Air%20Runner%20Pro.png" },
  { id: 2,  name: "Urban Sneaker X",      category: "Sneakers", price: 219.00, stock: 32, image: "images/products/Urban%20Sneaker%20X.webp" },
  { id: 3,  name: "Classic Oxford",       category: "Formal",   price: 349.00, stock: 12, image: "images/products/Classic%20Oxford.webp" },
  { id: 4,  name: "Hiking Trail Boots",   category: "Boots",    price: 459.00, stock: 18, image: "images/products/Hiking%20Trail%20Boots.avif" },
  { id: 5,  name: "Beach Slide Sandals",  category: "Sandals",  price: 79.00,  stock: 50, image: "images/products/Beach%20Slide%20Sandals.webp" },
  { id: 6,  name: "Marathon Lite",        category: "Running",  price: 379.00, stock: 14, image: "images/products/Marathon%20Lite.png" },
  { id: 7,  name: "Retro High-Top",       category: "Sneakers", price: 259.00, stock: 22, image: "images/products/Retro%20High-Top.webp" },
  { id: 8,  name: "Leather Derby",        category: "Formal",   price: 399.00, stock: 9,  image: "images/products/Leather%20Derby.avif" },
  { id: 9,  name: "Snow Winter Boots",    category: "Boots",    price: 499.00, stock: 11, image: "images/products/Snow%20Winter%20Boots.jpg" },
  { id: 10, name: "Sport Flip Flops",     category: "Sandals",  price: 49.00,  stock: 60, image: "images/products/Sport%20Flip%20Flops.webp" },
  { id: 11, name: "CloudStep Trainer",    category: "Running",  price: 329.00, stock: 17, image: "images/products/CloudStep%20Trainer.webp" },
  { id: 12, name: "Canvas Low Sneaker",   category: "Sneakers", price: 169.00, stock: 40, image: "images/products/Canvas%20Low%20Sneaker.jpg" }
];

var orders = [
  { id: "ORD-1001", customer: "Aliah Razak",    product: "Air Runner Pro",      date: "2026-05-28", total: 299.00, status: "Delivered" },
  { id: "ORD-1002", customer: "Suvin Tan",      product: "Urban Sneaker X",     date: "2026-05-29", total: 219.00, status: "Shipped" },
  { id: "ORD-1003", customer: "Aisha Lim",      product: "Classic Oxford",      date: "2026-05-30", total: 349.00, status: "Pending" },
  { id: "ORD-1004", customer: "John Doe",       product: "Hiking Trail Boots",  date: "2026-05-31", total: 459.00, status: "Delivered" },
  { id: "ORD-1005", customer: "Maria Garcia",   product: "Beach Slide Sandals", date: "2026-06-01", total: 79.00,  status: "Cancelled" },
  { id: "ORD-1006", customer: "Hafiz Ahmad",    product: "Marathon Lite",       date: "2026-06-01", total: 379.00, status: "Shipped" },
  { id: "ORD-1007", customer: "Siti Nurhaliza", product: "Retro High-Top",      date: "2026-06-02", total: 259.00, status: "Pending" },
  { id: "ORD-1008", customer: "Daniel Wong",    product: "Leather Derby",       date: "2026-06-02", total: 399.00, status: "Delivered" },
  { id: "ORD-1009", customer: "Nurul Iman",     product: "CloudStep Trainer",   date: "2026-06-03", total: 329.00, status: "Shipped" },
  { id: "ORD-1010", customer: "Kevin Lee",      product: "Canvas Low Sneaker",  date: "2026-06-03", total: 169.00, status: "Pending" }
];

var customers = [
  { id: "C-01", name: "Aliah Razak",    email: "aliah@email.com",  phone: "012-3456789", orders: 5, joined: "2025-01-10" },
  { id: "C-02", name: "Suvin Tan",      email: "suvin@email.com",  phone: "013-9876543", orders: 3, joined: "2025-02-15" },
  { id: "C-03", name: "Aisha Lim",      email: "aisha@email.com",  phone: "017-2233445", orders: 8, joined: "2024-11-20" },
  { id: "C-04", name: "John Doe",       email: "john@email.com",   phone: "011-5566778", orders: 2, joined: "2025-04-05" },
  { id: "C-05", name: "Maria Garcia",   email: "maria@email.com",  phone: "019-1122334", orders: 6, joined: "2024-12-12" },
  { id: "C-06", name: "Hafiz Ahmad",    email: "hafiz@email.com",  phone: "014-7788990", orders: 4, joined: "2025-03-22" },
  { id: "C-07", name: "Siti Nurhaliza", email: "siti@email.com",   phone: "016-4455667", orders: 7, joined: "2024-10-08" },
  { id: "C-08", name: "Daniel Wong",    email: "daniel@email.com", phone: "018-3344556", orders: 1, joined: "2025-05-30" },
  { id: "C-09", name: "Nurul Iman",     email: "nurul@email.com",  phone: "012-2233557", orders: 3, joined: "2025-02-28" },
  { id: "C-10", name: "Kevin Lee",      email: "kevin@email.com",  phone: "013-9988776", orders: 2, joined: "2025-05-12" }
];

// data used for the charts
var salesData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  values: [4200, 5100, 4800, 6200, 7100, 8300]
};

var catData = {
  labels: ["Running", "Sneakers", "Formal", "Boots", "Sandals"],
  values: [12500, 9800, 6800, 5200, 2400]
};

// fallback image if a product photo is missing
var noImg = "https://placehold.co/300x200/e5e7eb/64748b?text=Shoe";
