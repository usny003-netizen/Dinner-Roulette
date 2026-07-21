/* =================================
 Dinner Roulette V13 ❤️
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



if(!food || food==="-")

return;




let found =

smartFoods.find(

item =>

item.food===food

);





if(found){


found.count++;


}

else{


smartFoods.push({

food:food,

count:1

});


}





saveSmart();


renderSmart();



}



window.saveLikeFood =
saveLikeFood;









// ===============================
// SAVE
// ===============================


function saveSmart(){



localStorage.setItem(

"smartFoods",

JSON.stringify(
smartFoods
)

);


}









// ===============================
// TOP FOOD
// ===============================


function getTopFood(){



return smartFoods

.sort(

(a,b)=>

b.count-a.count

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

${item.food}


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



let food=

smartRecommend();



let message=

document.getElementById(
"mainMessage"
);





if(message && food){



message.innerHTML=

`

🧠 Chompu น่าจะชอบ

<br>

${food}

<br>

💕


`;



}



}









// ===============================
// RESET SMART
// ===============================


function resetSmart(){



smartFoods=[];



localStorage.removeItem(

"smartFoods"

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



window.resetSmart =
resetSmart;









// ===============================
// SMART BONUS
// เพิ่มโอกาสเมนูที่ชอบ
// ===============================


function smartScore(food){



let item=

smartFoods.find(

x=>

x.food===food

);




if(!item)

return 0;




return item.count;



}



window.smartScore =
smartScore;









// ===============================
// INIT
// ===============================


document.addEventListener(

"DOMContentLoaded",

()=>{


renderSmart();


updateSmartMessage();


}

);
