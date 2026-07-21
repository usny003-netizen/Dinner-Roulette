/* =================================
 Dinner Roulette V12 ❤️
 Favorite Food System ⭐💕
================================= */



let favoriteFoods =

JSON.parse(

localStorage.getItem(
"favoriteFoods"

)

)||[];







// ===============================
// SAVE FAVORITE
// ===============================


function saveFavorite(data){



if(!data || !data.food)

return;





// กันซ้ำ

const exists =

favoriteFoods.some(

item=>

item.food === data.food

);





if(exists){



showFavoriteMessage(
"⭐ เมนูนี้มีอยู่แล้ว"
);


return;


}






favoriteFoods.push({


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



showFavoriteMessage(

`❤️ เพิ่ม ${data.food} แล้ว`

);




if(typeof createHeart==="function"){


createHeart();


}



}







window.saveFavorite =
saveFavorite;









// ===============================
// DISPLAY
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
ยังไม่มีเมนูโปรด ❤️
</li>

`;



return;


}






favoriteFoods.forEach(

(item,index)=>{



let li=

document.createElement(
"li"
);





li.innerHTML=

`

<div>

🍽️ ${item.food}

<br>

🥤 ${item.drink}

<br>

🍰 ${item.dessert}

</div>


<button

onclick="removeFavorite(${index})">

❌ ลบ

</button>

`;





list.appendChild(
li
);



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



}



window.removeFavorite =
removeFavorite;









// ===============================
// MESSAGE
// ===============================


function showFavoriteMessage(text){



const msg=

document.createElement(
"div"
);



msg.className=

"favorite-toast";



msg.innerHTML=text;



document.body.appendChild(
msg
);





setTimeout(()=>{


msg.remove();


},2000);




}









// ===============================
// INIT
// ===============================


document.addEventListener(

"DOMContentLoaded",

()=>{


renderFavorite();


});
