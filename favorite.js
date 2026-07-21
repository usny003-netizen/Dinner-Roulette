/* =================================
 Dinner Roulette Chompu V19 ❤️
 Favorite System ⭐
 PART 3.1
================================= */


let favoriteFoods =

JSON.parse(
localStorage.getItem("favoriteFoods")
)
||
[];




// SAVE

function saveFavorite(data){


if(!data || !data.food)
return;



favoriteFoods.unshift(data);



localStorage.setItem(
"favoriteFoods",
JSON.stringify(favoriteFoods)
);



renderFavorite();



if(typeof showToast==="function"){

showToast(
"⭐ เพิ่มเมนูโปรดแล้ว"
);

}



}



window.saveFavorite=
saveFavorite;





// RENDER

function renderFavorite(){


const list =
document.getElementById(
"favoriteList"
);



if(!list)
return;



list.innerHTML="";



if(favoriteFoods.length===0){


list.innerHTML=
`
<li>
⭐ ยังไม่มีเมนูโปรด
</li>
`;

return;

}



favoriteFoods.forEach(
(item,index)=>{


const li=
document.createElement("li");



li.innerHTML=
`
⭐ ${item.food}
<br>
🥤 ${item.drink || "-"}
<br>
🍰 ${item.dessert || "-"}

<button onclick="removeFavorite(${index})">
🗑️
</button>
`;



list.appendChild(li);



});



}



function removeFavorite(index){


favoriteFoods.splice(index,1);



localStorage.setItem(
"favoriteFoods",
JSON.stringify(favoriteFoods)
);



renderFavorite();



}



window.removeFavorite=
removeFavorite;




document.addEventListener(
"DOMContentLoaded",
renderFavorite
);
