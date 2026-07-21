/* =================================
 Dinner Roulette Chompu V17 ❤️
 Smart Food Memory System 🧠💕
================================= */


// ===============================
// STORAGE
// ===============================


let smartFoods =

JSON.parse(

localStorage.getItem(
"smartFoods"
)

)

||[];




// ===============================
// SAVE LIKE FOOD 👍
// ===============================


function saveLikeFood(food){



if(!food || food==="-")


return;



let item =

smartFoods.find(

f=>

f.name===food

);





if(item){



item.score++;



}

else{



smartFoods.push({

name:food,

score:1

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
// SMART RANDOM 💕
// ===============================


function smartRandom(list){



if(!list || list.length===0)


return null;





let memory =

smartFoods;





// หาเมนูที่เคยชอบ

let liked =

list.filter(food=>


memory.some(

m=>

m.name===food.name

)


);





// ถ้ามีเมนูที่ชอบ

if(liked.length>0){



return liked[

Math.floor(

Math.random()

*

liked.length

)

];



}





// ถ้าไม่มี

return list[

Math.floor(

Math.random()

*

list.length

)

];



}



window.smartRandom =
smartRandom;









// ===============================
// GET SMART LIST
// ===============================


function getSmartFoods(){


return smartFoods;


}



window.getSmartFoods =
getSmartFoods;









// ===============================
// RENDER SMART
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

กำลังเรียนรู้ ❤️

</li>

`;



return;


}





// เรียงคะแนนมากไปน้อย

let sort =

[...smartFoods]

.sort(

(a,b)=>

b.score-a.score

);






sort.forEach(

food=>{


let li =

document.createElement(
"li"
);



li.innerHTML=

`

💕 ${food.name}

<br>

❤️ ความชอบ ${food.score} ครั้ง

`;



list.appendChild(li);



});





}









// ===============================
// REMOVE MEMORY
// ===============================


function clearSmart(){



smartFoods=[];



localStorage.removeItem(
"smartFoods"
);



renderSmart();



}



window.clearSmart =
clearSmart;









// ===============================
// INIT
// ===============================


document.addEventListener(

"DOMContentLoaded",

()=>{


renderSmart();


}

);
