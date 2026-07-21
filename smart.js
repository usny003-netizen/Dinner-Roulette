/* =================================
 Dinner Roulette V15 ❤️
 Smart Chompu AI System 🧠💕
================================= */



const smartKey =

"smartFoods";





let smartFoods =

JSON.parse(

localStorage.getItem(
smartKey
)

)||[];









// ===============================
// SAVE LIKE FOOD 👍
// ===============================


function saveLikeFood(food){



if(!food || food==="-")

return;





let item =

smartFoods.find(

f =>

f.food === food

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







saveSmart();



renderSmart();



updateSmartMessage();



}



window.saveLikeFood = saveLikeFood;









// ===============================
// SAVE DATA
// ===============================


function saveSmart(){



localStorage.setItem(

smartKey,

JSON.stringify(
smartFoods

)

);



}









// ===============================
// GET TOP FOOD 🏆
// ===============================


function getTopFood(){



return smartFoods

.sort(

(a,b)=>

b.count-a.count

)

.slice(0,3);



}



window.getTopFood = getTopFood;









// ===============================
// SMART SCORE 🎯
// ใช้ช่วยวงล้อ
// ===============================


function smartScore(food){



let item=

smartFoods.find(

f=>

f.food===food

);





if(!item)

return 0;





return item.count;



}



window.smartScore = smartScore;









// ===============================
// RECOMMEND 🧠
// ===============================


function smartRecommend(){



let top=

getTopFood();





if(top.length===0)


return null;







return top[0].food;



}



window.smartRecommend = smartRecommend;









// ===============================
// RENDER UI
// ===============================


function renderSmart(){



const list=

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

🧠 กำลังเรียนรู้ Chompu ❤️

</li>

`;



return;


}







let top=

getTopFood();







top.forEach(

(item,index)=>{



let medal=

[

"🥇",

"🥈",

"🥉"

][index];







let li=

document.createElement(
"li"
);







li.innerHTML=

`

${medal}

<strong>

${item.food}

</strong>


<br>


💕 ชอบ ${item.count} ครั้ง


`;






list.appendChild(li);



});





}









// ===============================
// SMART MESSAGE
// ===============================


function updateSmartMessage(){



const message=

document.getElementById(
"mainMessage"
);





let food=

smartRecommend();







if(message && food){



message.innerHTML=

`

🧠 Chompu น่าจะชอบ

<br>

❤️ ${food}

<br>

ลองไหม?

💕


`;



}



}



window.updateSmartMessage =
updateSmartMessage;









// ===============================
// RESET
// ===============================


function resetSmart(){



smartFoods=[];



localStorage.removeItem(
smartKey
);





renderSmart();





const message=

document.getElementById(
"mainMessage"
);





if(message){



message.innerHTML=

"🧠 เริ่มเรียนรู้ Chompu ใหม่ ❤️";



}



}



window.resetSmart = resetSmart;









// ===============================
// SMART WEIGHT RANDOM
// ใช้ใน wheel.js
// ===============================


function smartRandom(list){



let pool=[];






list.forEach(food=>{



let score=

smartScore(
food.name
);





// เพิ่มโอกาสเมนูที่ชอบ

let weight=

score+1;






for(let i=0;i<weight;i++){


pool.push(food);


}



});






return pool[

Math.floor(

Math.random()*pool.length

)

];



}



window.smartRandom = smartRandom;









// ===============================
// INIT
// ===============================


document.addEventListener(

"DOMContentLoaded",

()=>{


renderSmart();


updateSmartMessage();


});
