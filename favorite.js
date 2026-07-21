/* =================================
 Dinner Roulette V10 ❤️
 Favorite System ⭐
================================= */


let favoriteFoods =

JSON.parse(

localStorage.getItem(
"favoriteFoods"
)

)||[];






// =========================
// SAVE FAVORITE
// =========================


function saveFavorite(data){



if(!data || !data.food)

return;





// กันซ้ำ

let exist =

favoriteFoods.some(

item=>

item.food===data.food

);




if(exist){


return;

}






favoriteFoods.push(data);





localStorage.setItem(

"favoriteFoods",

JSON.stringify(
favoriteFoods

)

);





renderFavorite();





// ส่งให้ Smart

if(typeof learnFavorite==="function"){


learnFavorite(
data.food
);


}





}









// =========================
// DISPLAY
// =========================


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

🥤 ${item.drink || "-"}

<br>

🍰 ${item.dartess || item.dessert || "-"}

</div>


<button

class="deleteFav"

data-index="${index}">

🗑️ ลบ

</button>

`;





list.appendChild(li);



});





bindDeleteFavorite();



}









// =========================
// DELETE
// =========================


function bindDeleteFavorite(){



document
.querySelectorAll(
".deleteFav"
)

.forEach(btn=>{


btn.onclick=()=>{



let index=

btn.dataset.index;



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


};



});


}









// =========================
// GET FAVORITE
// =========================


function getFavorite(){


return favoriteFoods;


}








// LOAD

document.addEventListener(

"DOMContentLoaded",

()=>{


renderFavorite();


}

);
