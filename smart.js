/* =================================
 Dinner Roulette V10 ❤️
 Smart Learning System 🧠
================================= */



let smartFoods =

JSON.parse(

localStorage.getItem(
"smartFoods"
)

)||[];







// =============================
// SAVE LIKE FOOD 👍
// =============================


function saveLikeFood(food){



if(!food)

return;





let item =

smartFoods.find(

data=>

data.food===food

);





if(item){


item.score++;


}

else{


smartFoods.push({

food:food,

score:1

});


}





saveSmart();



renderSmart();





}







window.saveLikeFood =

saveLikeFood;









// =============================
// FAVORITE LEARNING ⭐
// =============================


function learnFavorite(food){



if(!food)

return;




let item =

smartFoods.find(

data=>

data.food===food

);





if(item){


item.score+=2;


}

else{


smartFoods.push({

food:food,

score:2

});


}





saveSmart();


renderSmart();



}



window.learnFavorite=

learnFavorite;









// =============================
// SAVE DATA
// =============================


function saveSmart(){


localStorage.setItem(

"smartFoods",

JSON.stringify(
smartFoods

)

);


}









// =============================
// RANKING
// =============================


function getTopFoods(){



return smartFoods

.sort(

(a,b)=>

b.score-a.score

)

.slice(0,5);



}









// =============================
// DISPLAY
// =============================


function renderSmart(){



const list=

document.getElementById(
"smartList"
);



if(!list)

return;





list.innerHTML="";






let top=

getTopFoods();






if(top.length===0){



list.innerHTML=

`

<li>
ยังไม่มีข้อมูล ❤️
</li>

`;

return;


}








top.forEach(

item=>{


let li=

document.createElement(
"li"
);



li.innerHTML=

`

🧠 ${item.food}

<br>

❤️ ความชอบ:

${item.score}

ครั้ง

`;



list.appendChild(li);



});




}









// =============================
// SMART RECOMMEND
// =============================


function getSmartRecommend(){



let top=

getTopFoods();




if(top.length===0)

return null;





return top[0].food;



}




window.getSmartRecommend=

getSmartRecommend;









// =============================
// RESET SMART
// =============================


function resetSmart(){



smartFoods=[];



localStorage.removeItem(

"smartFoods"

);



renderSmart();



}




window.resetSmart=

resetSmart;









// =============================
// LOAD
// =============================


document.addEventListener(

"DOMContentLoaded",

()=>{


renderSmart();


});
