/* =================================
 Dinner Roulette V15 ❤️
 Favorite Food System ⭐💕
================================= */



let favoriteFoods =

JSON.parse(

localStorage.getItem(
"favoriteFoods"
)

)||[];







// ===============================
// SAVE FAVORITE ⭐
// ===============================


function saveFavorite(data){



if(!data || !data.food)

return;





let exists =

favoriteFoods.find(

item =>

item.food === data.food

);





if(exists){


showToast(

"⭐ เมนูนี้อยู่ในรายการโปรดแล้ว"

);


return;


}






favoriteFoods.unshift({

food:data.food,

drink:data.drink || "🥤 น้ำหวาน",

dessert:data.dessert || "🍰 ของหวาน",

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


saveLikeFood(data.food);


}





}



window.saveFavorite=

saveFavorite;









// ===============================
// RENDER ⭐
// ===============================


function renderFavorite(){



const list=

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

🍰 ${item.tdessert || item.dessert}

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



window.removeFavorite=

removeFavorite;









// ===============================
// GET FAVORITE
// ===============================


function getFavoriteFoods(){



return favoriteFoods;



}



window.getFavoriteFoods=

getFavoriteFoods;









// ===============================
// CHECK FAVORITE
// ===============================


function isFavorite(food){



return favoriteFoods.some(

item=>

item.food===food

);



}



window.isFavorite=

isFavorite;









// ===============================
// INIT
// ===============================


document.addEventListener(

"DOMContentLoaded",

()=>{


renderFavorite();


});
