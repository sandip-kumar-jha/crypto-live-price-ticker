📌 Crypto Live Coin Price Ticker :-

A responsive and interactive Live Cryptocurrency Price Tracker built using HTML, CSS, and Vanilla JavaScript.

This project fetches real-time data using the CoinGecko API and displays live market prices in a clean dashboard UI.

🚀 Live Demo :-
     https://funny-melomakarona-6d5410.netlify.app/
✨ Features:-

📊 Live cryptocurrency price tracking
🔄 Refresh prices button
🔍 Search coin by name or symbol
⚡ Real-time API data (CoinGecko)
⏳ Loading indicator while fetching data
❌ Empty state handling ("No data found")
🛡️ XSS input sanitization
📱 Fully responsive design
♿ Accessibility support (ARIA + keyboard friendly)
📈 Analytics simulation via console logs
🎨 Modern corporate dashboard UI

🛠️ Tech Stack:-

HTML5
CSS3
JavaScript (Vanilla JS)
Fetch API
Async / Await
CoinGecko API

📂 Project Structure :-

crypto-price-ticker/
│
├── index.html
├── style.css
├── script.js
└── README.md

⚙️ How to Run the Project :-

Clone the repository:
git clone https://github.com/your-username/crypto-price-ticker.git
Open the project folder:
cd crypto-price-ticker
Open index.html in your browser.


📡 API Used

This project uses the CoinGecko Public API

Example endpoint:
https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd
No API key required.

🧠 Key Functionalities :-

📊 Live Data Fetching-
Uses fetch() and async/await
Fetches real-time crypto prices.

🔍 Search Feature-
Search coins by name or symbol
Instant filtering of results.

🔄 Refresh Feature-
Reloads latest prices manually
⚠️ Error Handling
API failure handling
Empty result handling
Input validation
🖥️ UI Features
Modern dashboard layout
Card-based coin design
Hover animations
Gradient hero section
Responsive grid system
Clean corporate styling.

📱 Responsive Design :-

Optimized for:

💻 Desktop
💻 Laptop
📱 Mobile
📟 Tablets
🔐 Security Features
XSS protection using input sanitization
No unsafe innerHTML usage for user input
Safe DOM rendering
📊 Analytics (Simulation)

Console logs on user actions:

[Analytics] User interacted with Live Coin Price Ticker
❗ Edge Case Handling
Empty search → "No data found"
API failure → error message displayed
Invalid input → highlighted field
Slow network → loading indicator shown.

📌 Note

This project is built for learning + internship submission purposes

👨‍💻 Author

Sandip Kumar Jha
