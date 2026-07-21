/* =================================
 Dinner Roulette Chompu V19 ❤️
 Smart Food System 🧠
 PART 4.1
================================= */


let likeFoods =

JSON.parse(
localStorage.getItem("likeFoods")
)
||
[];





function saveLikeFood(food){


if(!food)
return;



if(!likeFoods.includes(food)){


likeFoods.push(food);



localStorage.setItem(
"likeFoods",
JSON.stringify(likeFoods)
);



}



}



window.saveLikeFood=
saveLikeFood;







function smartRandom(list){



if(!list || list.length===0)

return null;



// มีโอกาสเลือกเมนูที่ชอบมากขึ้น

let liked =
list.filter(
item=>

likeFoods.includes(item.name)

);



if(liked.length>0 && Math.random()<0.6){


return liked[
Math.floor(
Math.random()*liked.length
)
];


}



return list[

Math.floor(
Math.random()*list.length
)

];



}



window.smartRandom=
smartRandom;
