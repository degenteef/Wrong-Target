// Links
const destTwitter = '1';
const destBuy = document.getElementById("update_on_launch").textContent;
const destTelegram = 'https://t.me/Wrong_Targetsol';
const destDext = '1';
const destBe = '1';
const name = 'WRONG TARGET';
const ticker = '$WRONGT';
const desc = "Not even Solana is safe from Yusef's natural shot";
var windowFeatures = "width=900,height=900,resizable=yes,scrollbars=yes,status=yes";

// Select all buttons and convert the NodeList to an array
const buttons = document.querySelectorAll("button");
const buttonArray = Array.from(buttons);

// Log the class name of each button
for (let i = 0; i < buttonArray.length; i++) {
    let gotodest = buttonArray[i].classList[0]
};

// Function to handle click event
function handleClick(event) {
    const firstClassName = event.target.classList[0];
    
    if (firstClassName === 'tw') {
        window.open(destTwitter, "_blank", windowFeatures);
    } else if (firstClassName === 'buy') {
        window.open(destBuy, "_blank", windowFeatures);
    } else if (firstClassName === 'tg') {
        window.open(destTelegram, "_blank", windowFeatures);
    } else if (firstClassName === 'dext') {
        window.open(destDext, "_blank", windowFeatures);
    } else if (firstClassName === 'be') {
        window.open(destBe, "_blank", windowFeatures);
    } else if (firstClassName === 'dex') {
        window.open(destDex, "_blank", windowFeatures);
    } 
    
    else {
        console.log('Unknown button class:', firstClassName);
    }
};

// Add event listener to each button
buttonArray.forEach(button => {
    button.addEventListener("click", handleClick);
});


//pumplink breakdown

const CA = destBuy.replace('https://pump.fun/', '');


//copy CA
const CA1 = document.getElementById("ca");

CA1.addEventListener("click", copyText);

function copyText() {
    navigator.clipboard.writeText(CA);
    alert("Copied CA: " + CA);
};


//change desc, ticker and name, CA

//change Name 

const coinName = document.querySelector(".coin_name");
const coinName2 = document.getElementById("coin_name");
coinName.innerHTML = name;
coinName2.innerHTML = name;

//change ticker

const tickerDOM = document.getElementById("ticker");
tickerDOM.innerHTML = ticker;

//change CA

const caDOM = document.getElementById("ca");
caDOM.innerHTML = CA;

//change desc

const descDOM = document.getElementById("desc");
descDOM.innerHTML = desc;