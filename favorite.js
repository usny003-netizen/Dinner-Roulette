/* =================================
   Dinner Roulette V2.5 ❤️
   favorite.js ⭐
================================= */



let favoriteData =

JSON.parse(

localStorage.getItem("favorite")

)

|| [];





const favoriteList =

document.getElementById(

"favoriteList"

);






// ===============================
// แสดง Favorite
// ===============================


function showFavorite(){


if(!favoriteList)

return;




favoriteList.innerHTML="";






if(favoriteData.length===0){


favoriteList.innerHTML=

`
<li>
ยังไม่มีเมนูโปรด ⭐
</li>
`;

return;


}






favoriteData.forEach((item,index)=>{



let li =

document.createElement("li");




li.innerHTML =


`
❤️ ${item.food}

<br>

🥤 ${item.drink}

<br>

🍰 ${item.dessert}



<button class="deleteFavorite"
data-id="${index}">

❌

</button>

`;





favoriteList.appendChild(li);



});







// ปุ่มลบ

document

.querySelectorAll(".deleteFavorite")

.forEach(btn=>{


btn.onclick=()=>{



let id =

btn.dataset.id;




favoriteData.splice(

id,

1

);



saveFavorite();



};



});




}









// ===============================
// Save
// ===============================


function saveFavorite(){



localStorage.setItem(

"favorite",

JSON.stringify(favoriteData)

);



showFavorite();


}









// ===============================
// เพิ่ม Favorite
// ===============================



const favoriteBtn =

document.getElementById(

"favoriteBtn"

);






if(favoriteBtn){



favoriteBtn.onclick=()=>{



let dinner =

window.currentDinnerSet;



if(!dinner){



alert(

"กรุณาสุ่มเมนูก่อน ❤️"

);



return;


}






// เช็กซ้ำ


let duplicate =

favoriteData.some(item=>


item.food === dinner.food &&

item.drink === dinner.drink &&

item.dessert === dinner.dessert


);






if(duplicate){



alert(

"เมนูนี้มีในรายการโปรดแล้ว ⭐"

);



return;


}








favoriteData.unshift({


food:dinner.food,


drink:dinner.drink,


dessert:dinner.dessert



});







saveFavorite();





createFavoriteEffect();





};





}









// ===============================
// Effect
// ===============================


function createFavoriteEffect(){



for(let i=0;i<10;i++){


let heart =

document.createElement("div");



heart.className="heart";



heart.innerHTML="⭐";



heart.style.left=

Math.random()*100+"%";



document.body.appendChild(heart);



setTimeout(()=>{


heart.remove();


},2000);



}


}









// โหลดตอนเปิดเว็บ

showFavorite();
