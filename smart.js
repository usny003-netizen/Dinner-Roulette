/* =================================
   Dinner Roulette V6 ❤️
   Smart Preference System 🧠
================================= */


let likedFoods = JSON.parse(

localStorage.getItem(
"likedFoods"
)

) || {};





// เมื่อกดชอบ

function saveLikedFood(food){


if(!food)

return;



if(!likedFoods[food]){


likedFoods[food]=1;


}

else{


likedFoods[food]++;


}




localStorage.setItem(

"likedFoods",

JSON.stringify(
likedFoods
)

);



showLiked();



}








// แสดงเมนูที่ชอบ


function showLiked(){


const list =

document.getElementById(
"smartList"
);



if(!list)

return;



list.innerHTML="";



let foods =

Object.entries(
likedFoods
);



if(foods.length===0){


list.innerHTML=

`
<li>
ยังไม่มีข้อมูล ❤️
</li>
`;

return;

}




foods.sort(

(a,b)=>b[1]-a[1]

);





foods.forEach(item=>{



let li=

document.createElement(
"li"
);



li.innerHTML=

`
⭐ ${item[0]} 
<br>
เลือกแล้ว ${item[1]} ครั้ง
`;



list.appendChild(li);



});


}








// สุ่มแบบฉลาด


function smartRandom(list){



let result=[];



list.forEach(food=>{


let score=

likedFoods[food] || 0;



// เมนูที่ชอบเพิ่มน้ำหนัก

for(let i=0;i<score+1;i++){


result.push(food);


}


});




return result[

Math.floor(

Math.random()*result.length

)

];


}







showLiked();
