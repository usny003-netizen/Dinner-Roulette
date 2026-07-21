/* =================================
 Dinner Roulette Chompu V17 ❤️
 Favorite Food System FINAL ⭐
================================= */


let favoriteFoods =

JSON.parse(

localStorage.getItem(
"favoriteFoods"
)

)

||[];




// ===============================
// SAVE FAVORITE ⭐
// ===============================


function saveFavorite(data){



// รองรับทั้ง object และ string

if(typeof data==="string"){


data={

food:data

};


}



if(!data.food)
return;




let exist =

favoriteFoods.find(

item=>

item.food===data.food

);



if(exist){


showToast(
"⭐ เมนูนี้อยู่ในรายการโปรดแล้ว"
);


return;


}





favoriteFoods.unshift({


food:data.food,


drink:data.drink ||

"🥤 น้ำหวาน",



dessert:data.dessert ||

"🍰 ของหวาน",



date:

new Date()

.toLocaleDateString(
"th-TH"
)


});





localStorage.setItem(

"favoriteFoods",

JSON.stringify(
favoriteFoods
)

);





renderFavorite();





if(typeof saveLikeFood==="function"){


saveLikeFood(
data.food
);


}




showToast(
"⭐ เพิ่มเมนูโปรดแล้ว"
);




}




window.saveFavorite =
saveFavorite;








// ===============================
// RENDER FAVORITE
// ===============================


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

document.createElement(
"li"
);



li.innerHTML=

`

<div>

⭐ ${item.food}

<br>

🥤 ${item.drink}

<br>

🍰 ${item.dessert}

<br>

📅 ${item.date}

</div>


<button onclick="removeFavorite(${index})">

🗑️ ลบ

</button>


`;



list.appendChild(li);



});





}









// ===============================
// REMOVE
// ===============================


function removeFavorite(index){



favoriteFoods.splice(

index,

1

);




localStorage.setItem(

"favoriteFoods",

JSON.stringify(
favoriteFoods
)

);



renderFavorite();



showToast(
"🗑️ ลบเมนูแล้ว"
);



}



window.removeFavorite =
removeFavorite;









// ===============================
// GET FAVORITE
// ===============================


function getFavoriteFoods(){


return favoriteFoods;


}



window.getFavoriteFoods =
getFavoriteFoods;









// ===============================
// CHECK
// ===============================


function isFavorite(food){



return favoriteFoods.some(

item=>

item.food===food

);



}



window.isFavorite =
isFavorite;









// ===============================
// CHOMPU SMART PICK 💕
// ===============================


function getChompuFavorite(){


return favoriteFoods.map(

item=>

({


name:item.food,


drink:item.drink,


dessert:item.dessert


})



);



}



window.getChompuFavorite =
getChompuFavorite;









// ===============================
// INIT
// ===============================


document.addEventListener(

"DOMContentLoaded",

()=>{


renderFavorite();


}

);
