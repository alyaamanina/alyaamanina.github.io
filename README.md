# FootwearHub

A simple online footwear store built as a coursework project. Users can log in, browse shoes by category, add stuff to a cart, and view some reports.

**Live demo:** https://alyaamanina.github.io/

## Tech Used

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat&logo=chartdotjs&logoColor=white)
![Boxicons](https://img.shields.io/badge/Boxicons-3B82F6?style=flat&logo=boxicons&logoColor=white)

All libraries are loaded from CDN so there's nothing to install.

## Features

- Login & Register pages (hardcoded login for demo)
- Shop landing page with hero, categories and featured products
- Products page with category filter
- Shopping cart with add/remove, quantity, and localStorage so it stays after refresh
- Orders page with status filter
- Customers page with search
- Reports page with 3 charts (line, doughnut, bar)
- Small chart on the dashboard too
- Responsive design, works on mobile

## Login

Use these to test the login:

```
Username: admin
Password: admin123
```

## Pages

| Page | File |
|---|---|
| Login | `index.html` |
| Register | `register.html` |
| Home / Shop | `dashboard.html` |
| Products | `products.html` |
| Cart | `cart.html` |
| Orders | `orders.html` |
| Customers | `customers.html` |
| Reports | `reports.html` |

## Folder Structure

```
.
├── index.html
├── register.html
├── dashboard.html
├── products.html
├── cart.html
├── orders.html
├── customers.html
├── reports.html
├── css/
│   └── style.css
├── js/
│   ├── auth.js
│   ├── cart.js
│   ├── data.js
│   └── nav.js
└── images/
    ├── logo.png
    ├── background.jpg
    └── products/
```

## How to Run Locally

Best way is to use a local server like MAMP or VS Code Live Server, because the CDN scripts need `http://` not `file://`.

1. Put the project in your server's web root (e.g. MAMP `htdocs`)
2. Start the server
3. Open `http://localhost:8888/` in your browser

Or just visit the live demo link above.

## Notes

- This is a front-end only project, no backend
- Data is hardcoded in `js/data.js`
- Cart is saved in browser `localStorage`
- Tested on Google Chrome

## Author

FootwearHub Team — 2026
