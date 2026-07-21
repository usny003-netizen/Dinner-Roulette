/* =================================
 Dinner Roulette V15 ❤️
 Avoid Food System 🚫💕
================================= */


let avoidFoods =

JSON.parse(

localStorage.getItem(
"avoidList"
)

)||[];








// ===============================
// GET AVOID LIST
// ===============================


function getAvoidList(){


return avoidFoods;


}


window.getAvoidList = getAvoidList;









// ===============================
// ADD AVOID 🚫
// ===============================


function addAvoid(food){



if(!food || food==="-")


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







// update wheel


if(typeof changeCategory==="function"){


changeCategory("all");


}







showAvoidMessage(

`🚫 ไม่เลือก ${food}`

);





}



window.addAvoid = addAvoid;









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







showAvoidMessage(

"❤️ เพิ่มเมนูกลับแล้ว"

);



}



window.removeAvoid = removeAvoid;









// ===============================
// RESET
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







showAvoidMessage(

"✨ ล้างรายการไม่กินแล้ว"

);



}



window.resetAvoid = resetAvoid;









// ===============================
// RENDER 🚫
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

<li class="empty-avoid">

❤️ ยังไม่มีเมนูที่ไม่กิน

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




li.className=

"avoid-card";







li.innerHTML=

`

<div class="avoid-food">

🚫 ${food}

</div>



<button onclick="removeAvoid(${index})">

❤️ เอากลับ

</button>


`;







list.appendChild(li);



});



}









// ===============================
// TOAST MESSAGE
// ===============================


function showAvoidMessage(text){



if(typeof showToast==="function"){


showToast(text);


return;


}







const toast=

document.createElement(
"div"
);



toast.className=

"avoid-toast";



toast.innerHTML=text;





document.body.appendChild(
toast
);







setTimeout(()=>{


toast.remove();


},2000);




}



window.showAvoidMessage =
showAvoidMessage;









// ===============================
// INIT
// ===============================


document.addEventListener(

"DOMContentLoaded",

()=>{


renderAvoid();






const resetBtn=

document.getElementById(
"resetAvoidBtn"
);





if(resetBtn){



resetBtn.onclick=()=>{


resetAvoid();


};


}



});
