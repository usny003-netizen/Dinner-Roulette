/* =================================
   Dinner Roulette V2 ❤️
   favorite.js ⭐
================================= */



let favorites =

JSON.parse(

localStorage.getItem("favorites")

)

|| [];






const favoriteBtn =

document.getElementById(

"favoriteBtn"

);



const favoriteList =

document.getElementById(

"favoriteList"

);







// ===============================
// LOAD FAVORITE ⭐
// ===============================


function showFavorites(){



if(!favoriteList)

return;





favoriteList.innerHTML="";





if(favorites.length===0){



favoriteList.innerHTML =


`
<li>
ยังไม่มีเมนูโปรด ⭐
</li>
`;



return;


}







favorites.forEach((item,index)=>{



const li =

document.createElement("li");





li.innerHTML =



`
${item}

<button 
class="deleteFavorite"
data-index="${index}">
❌
</button>

`;






favoriteList.appendChild(li);




});






// ปุ่มลบ

const deleteButtons =

document.querySelectorAll(

".deleteFavorite"

);





deleteButtons.forEach(btn=>{


btn.addEventListener(

"click",

()=>{


const index =

btn.dataset.index;




favorites.splice(

index,

1

);





saveFavorites();



showFavorites();



}

);



});



}









// ===============================
// SAVE ⭐
// ===============================



function saveFavorites(){



localStorage.setItem(

"favorites",

JSON.stringify(favorites)

);



}









// ===============================
// ADD FAVORITE
// ===============================



if(favoriteBtn){



favoriteBtn.addEventListener(

"click",

()=>{





const dinner =

window.currentDinnerSet;





if(!dinner){



alert(

"กรุณาสุ่มเมนูก่อนนะ ❤️"

);



return;


}






const menu =



`${dinner.food}

${dinner.drink}

${dinner.dessert}`;




// กันซ้ำ


if(

favorites.includes(menu)

){



alert(

"เมนูนี้มีในรายการโปรดแล้ว ⭐"

);



return;


}






favorites.push(menu);





saveFavorites();



showFavorites();





// เปลี่ยนข้อความปุ่มชั่วคราว


favoriteBtn.innerHTML =

"❤️ บันทึกแล้ว";






setTimeout(()=>{


favoriteBtn.innerHTML =

"⭐ บันทึกเมนูโปรด";



},1500);




});



}









// เริ่มโหลด

showFavorites();
