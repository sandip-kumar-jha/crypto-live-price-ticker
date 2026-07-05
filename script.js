// =====================================
// COINGECKO API
// =====================================

const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false";

const coinContainer = document.getElementById("coinContainer");
const loading = document.getElementById("loading");
const emptyState = document.getElementById("emptyState");

const refreshBtn = document.getElementById("refreshBtn");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

let coins = [];


// =====================================
// SANITIZE (XSS)
// =====================================

function sanitize(text){

    return String(text)
        .replace(/</g,"&lt;")
        .replace(/>/g,"&gt;")
        .trim();

}


// =====================================
// LOADING
// =====================================

function showLoading(){

    loading.style.display = "block";

    emptyState.style.display = "none";

    coinContainer.innerHTML = "";

}

function hideLoading(){

    loading.style.display = "none";

}


// =====================================
// FETCH COINS
// =====================================

async function fetchCoins(){

    try{

        showLoading();

        const response = await fetch(API_URL);

        if(!response.ok){

            throw new Error("Unable to fetch data");

        }

        const data = await response.json();

        coins = data;

        hideLoading();

        renderCoins(coins);

    }

    catch(error){

        hideLoading();

        emptyState.style.display = "block";

        emptyState.textContent =
            "Unable to load coin prices. Please try again.";

        console.error(error);

    }

}


// =====================================
// RENDER CARDS
// =====================================

function renderCoins(data){

    coinContainer.innerHTML = "";

    if(data.length===0){

        emptyState.style.display="block";

        emptyState.textContent="No data found";

        return;

    }

    emptyState.style.display="none";

    data.forEach((coin)=>{

        coinContainer.innerHTML += `

        <div class="coin-card">

            <h3>${sanitize(coin.name)}</h3>

            <p><strong>Symbol:</strong> ${sanitize(coin.symbol.toUpperCase())}</p>

            <p><strong>Price:</strong> $${coin.current_price}</p>

            <p><strong>Market Cap:</strong> $${coin.market_cap.toLocaleString()}</p>

            <p><strong>24H Change:</strong> ${coin.price_change_percentage_24h.toFixed(2)}%</p>

        </div>

        `;

    });

}


// =====================================
// REFRESH BUTTON
// =====================================

refreshBtn.addEventListener("click",()=>{

    console.log(
        "[Analytics] User interacted with Live Coin Price Ticker"
    );

    fetchCoins();

});




// =====================================
// SEARCH FUNCTIONALITY
// =====================================

function filterCoins(query){

    const q = sanitize(query.toLowerCase());

    if(q === ""){

        renderCoins(coins);

        return;

    }

    const filtered = coins.filter((coin)=>{

        return (
            coin.name.toLowerCase().includes(q) ||
            coin.symbol.toLowerCase().includes(q)
        );

    });

    renderCoins(filtered);
}


// Search button click
searchBtn.addEventListener("click",()=>{

    console.log(
        "[Analytics] User interacted with Live Coin Price Ticker"
    );

    filterCoins(searchInput.value);
});


// Enter key support
searchInput.addEventListener("keydown",(e)=>{

    if(e.key === "Enter"){

        filterCoins(searchInput.value);

    }

});


// =====================================
// INITIAL LOAD
// =====================================

window.addEventListener("load",()=>{

    fetchCoins();

    console.log(
        "[Analytics] User interacted with Live Coin Price Ticker"
    );

});


// =====================================
// SIMPLE INPUT VALIDATION (SEARCH)
// =====================================

searchInput.addEventListener("input",()=>{

    const value = searchInput.value;

    if(value.length > 30){

        searchInput.style.border = "2px solid red";

    } else {

        searchInput.style.border = "1px solid #CBD5E1";

    }

});