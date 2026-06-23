let coins=[
{name:"Bitcoin",price:45000},
{name:"Ethereum",price:3000},
{name:"Solana",price:150}
];

function showCoins(){

let div=document.getElementById("coins");

div.innerHTML="";

coins.forEach(coin=>{

let oldPrice=coin.oldPrice||coin.price;

let change="";

if(coin.price>oldPrice){
	change="up";
}else if(coin.price<oldPrice){
	change="down";
}

div.innerHTML+=`
<div class="coin">
<h3>${coin.name}</h3>
<p class="${change}">Current: $${coin.price}</p>
<p>Old: $${oldPrice}</p>
</div>
`;

});

}


function updatePrices(){

coins.forEach(coin=>{

coin.oldPrice=coin.price;

let random=Math.floor(Math.random()*200)-100;

coin.price+=random;

});

showCoins();

}


showCoins();

setInterval(updatePrices,3000);
