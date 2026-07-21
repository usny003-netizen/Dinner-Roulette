/* =================================
 Dinner Roulette V12 ❤️
 Avoid Food System 🚫💕
================================= */



let avoidFoods =

JSON.parse(

localStorage.getItem(
"avoidList"

)

)||[];







// ===============================
// GET AVOID
// ===============================


function getAvoidList(){


return avoidFoods;


}



window.getAvoidList =
getAvoidList;









// ===============================
// ADD AVOID
// ===============================


function addAvoid(food){



if(!food)

return;






if(avoidFoods.includes(food)){



showAvoidMessage(
"🚫 เมนูนี้อยู่ในรายการแล้ว"
);


return;


}






avoidFoods.push(food);





localStorage.setItem(

"avoidList",

JSON.stringify(
avoidFoods

)

);





renderAvoid();






showAvoidMessage(

`🚫 ไม่เลือก ${food} อีก`

);







// วาดวงล้อใหม่


if(typeof changeCategory==="function"){


changeCategory("all");


}





}





window.addAvoid =
addAvoid;









// ===============================
// REMOVE
// ===============================


function removeAvoid(index){



avoidFoods.splice(

index,

1

);






localStorage.setItem(

"avoidList",

JSON.stringify(
avoidFoods

)

);





renderAvoid();






if(typeof changeCategory==="function"){


changeCategory("all");


}



}





window.removeAvoid =
removeAvoid;









// ===============================
// RESET ALL
// ===============================


function resetAvoid(){



avoidFoods=[];



localStorage.removeItem(
"avoidList"
);



renderAvoid();






if(typeof changeCategory==="function"){


changeCategory("all");


}



}





window.resetAvoid =
resetAvoid;









// ===============================
// DISPLAY
// ===============================


function renderAvoid(){



const list =

document.getElementById(
"avoidList"
);




if(!list)

return;






list.innerHTML="";






if(avoidFoods.length===0){



list.innerHTML=

`

<li>
ยังไม่มีเมนูที่ไม่กิน ❤️
</li>

`;



return;


}







avoidFoods.forEach(

(food,index)=>{


const li=

document.createElement(
"li"
);






li.innerHTML=

`

<div>

🚫 ${food}

</div>



<button onclick="removeAvoid(${index})">

❤️ เอากลับมา

</button>

`;






list.appendChild(
li
);



});





}









// ===============================
// TOAST
// ===============================


function showAvoidMessage(text){



const toast=

document.createElement(
"div"
);



toast.className=

"favorite-toast";



toast.innerHTML=text;





document.body.appendChild(
toast
);





setTimeout(()=>{


toast.remove();


},2000);



}









// ===============================
// INIT
// ===============================


document.addEventListener(

"DOMContentLoaded",

()=>{


renderAvoid();



const resetBtn =

document.getElementById(
"resetAvoidBtn"
);



if(resetBtn){


resetBtn.onclick=

()=>{


resetAvoid();


};



}



});
