/* =================================
 Dinner Roulette V12 ❤️
 Smart Chompu System 🧠💕
================================= */



let smartFoods =

JSON.parse(

localStorage.getItem(
"smartFoods"

)

)||[];









// ===============================
// SAVE LIKE FOOD 👍
// ===============================


function saveLikeFood(food){



if(!food)

return;






let item =

smartFoods.find(

f => f.food === food

);







if(item){


item.count++;


}

else{


smartFoods.push({

food:food,

count:1

});


}








localStorage.setItem(

"smartFoods",

JSON.stringify(
smartFoods

)

);





renderSmart();



}





window.saveLikeFood =
saveLikeFood;









// ===============================
// SORT FAVORITE
// ===============================


function getTopFood(){



return smartFoods

.sort(

(a,b)=>

b.count-a.count

)

.slice(0,3);



}









// ===============================
// DISPLAY
// ===============================


function renderSmart(){



const list =

document.getElementById(
"smartList"
);



if(!list)

return;






list.innerHTML="";







if(smartFoods.length===0){



list.innerHTML=

`

<li>
กำลังเรียนรู้ Chompu ❤️
</li>

`;



return;


}






let top =

getTopFood();






top.forEach(

(item,index)=>{



let icon;



if(index===0)

icon="🥇";

else if(index===1)

icon="🥈";

else

icon="🥉";








let li=

document.createElement(
"li"
);





li.innerHTML=

`

${icon}

${item.food}

<br>

❤️ ชอบ ${item.count} ครั้ง

`;





list.appendChild(
li
);



});





}









// ===============================
// SMART RECOMMEND
// ===============================


function smartRecommend(){



let top =

getTopFood();





if(top.length===0)

return null;





return top[0].food;



}





window.smartRecommend =
smartRecommend;









// ===============================
// SMART MESSAGE
// ===============================


function updateSmartMessage(){



const food=

smartRecommend();




if(!food)

return;





const message=

document.getElementById(
"mainMessage"
);



if(message){



message.innerHTML=

`

🧠 Chompu น่าจะชอบ

${food}

💕


`;



}



}









// ===============================
// INIT
// ===============================


document.addEventListener(

"DOMContentLoaded",

()=>{


renderSmart();


updateSmartMessage();


});
