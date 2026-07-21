/* =================================
 Dinner Roulette V14 ❤️
 Smart Chompu AI Taste 🧠💕
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
// SAVE LIKE 👍
// ===============================


function saveLikeFood(food){



if(!food || food==="-")

return;




let item =

smartFoods.find(

x=>x.food===food

);





if(item){


item.count++;

item.last=

Date.now();


}

else{


smartFoods.push({

food:food,

count:1,

last:Date.now()

});


}





saveSmart();


renderSmart();


updateSmartMessage();



}





window.saveLikeFood =
saveLikeFood;








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
// SORT
// ===============================


function getTopFood(){



return [

...smartFoods

]

.sort(

(a,b)=>{

return b.count-a.count;

}

)

.slice(0,3);


}



window.getTopFood =
getTopFood;








// ===============================
// SMART RECOMMEND
// ===============================


function smartRecommend(){



let top=

getTopFood();



if(top.length===0)

return null;



return top[0].food;


}



window.smartRecommend =
smartRecommend;








// ===============================
// SMART SCORE 🎯
// ===============================


function smartScore(food){



let item=

smartFoods.find(

x=>x.food===food

);



if(!item)

return 0;



return item.count;


}



window.smartScore =
smartScore;









// ===============================
// AI RANDOM BONUS 🎡
// ===============================


function getSmartBonus(food){



let score=

smartScore(food);



if(score===0)

return 1;



return score+1;


}



window.getSmartBonus =
getSmartBonus;









// ===============================
// LEVEL SYSTEM 💕
// ===============================


function getSmartLevel(){



let total=

smartFoods.reduce(

(sum,item)=>

sum+item.count,

0

);



if(total>=20)

return "💎 Soulmate Taste";


if(total>=10)

return "💖 Sweet Couple";


if(total>=5)

return "💕 Getting Closer";


return "🌱 Learning Chompu";


}





window.getSmartLevel =
getSmartLevel;








// ===============================
// RENDER
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



let medal=[

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


<br>


🧠 Level:

${getSmartLevel()}

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

${getSmartLevel()}

`;



}



}









// ===============================
// RESET
// ===============================


function resetSmart(){



smartFoods=[];



localStorage.removeItem(
smartKey

);



renderSmart();



const msg=

document.getElementById(
"mainMessage"

);



if(msg){


msg.innerHTML=

"🧠 เริ่มเรียนรู้ Chompu ใหม่ ❤️";


}



}



window.resetSmart =
resetSmart;








// ===============================
// INIT
// ===============================


document.addEventListener(

"DOMContentLoaded",

()=>{


renderSmart();


updateSmartMessage();


});
