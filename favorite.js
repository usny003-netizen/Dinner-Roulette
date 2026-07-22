/* =================================
 Dinner Roulette Chompu V19 ❤️
 Favorite System FINAL ⭐
================================= */


let favoriteFoods =

JSON.parse(
localStorage.getItem("favoriteFoods")
)

||

[];





// =================================
// SAVE FAVORITE
// =================================


function saveFavorite(data){


if(!data || !data.food)

return;



// กันเมนูซ้ำ

const exists =

favoriteFoods.some(item=>

item.food === data.food

);



if(exists){


if(typeof showToast==="function"){

showToast(
"⭐ มีเมนูนี้แล้ว"
);

}

return;


}





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



window.saveFavorite =
saveFavorite;







// =================================
// RENDER FAVORITE
// =================================


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


const li =

document.createElement(
"li"
);



li.innerHTML=

`

<div>

⭐ ${item.food}

<br>

🥤 ${item.drink || "-"}

<br>

🍰 ${item.dessert || "-"}

</div>


<button onclick="removeFavorite(${index})">

🗑️

</button>

`;



list.appendChild(li);



});


}



window.renderFavorite =
renderFavorite;







// =================================
// REMOVE
// =================================


function removeFavorite(index){


favoriteFoods.splice(

index,

1

);



localStorage.setItem(

"favoriteFoods",

JSON.stringify(favoriteFoods)

);



renderFavorite();



if(typeof showToast==="function"){


showToast(
"🗑️ ลบเมนูแล้ว"
);


}



}



window.removeFavorite =
removeFavorite;








// =================================
// LIKE BUTTON 👍
// =================================


document.addEventListener(

"DOMContentLoaded",

()=>{


const likeBtn =

document.getElementById(
"likeBtn"
);



if(likeBtn){



likeBtn.onclick=function(){



const food =

window.currentFood;



if(!food){


alert(
"❤️ กรุณาหมุนวงล้อก่อน"
);


return;


}





saveFavorite({


food:
food.name,


drink:
food.drink,


dessert:
food.dessert



});





if(typeof completeLikeMission==="function"){


completeLikeMission();


}



};



}





renderFavorite();



});
