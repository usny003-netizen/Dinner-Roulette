/* =================================
 Dinner Roulette V14 ❤️
 Daily Mission + Streak System 💌
================================= */


const missionKey =
"dinnerMission";


const streakKey =
"dinnerStreak";




// ===============================
// DATE
// ===============================


function getToday(){

return new Date()
.toISOString()
.split("T")[0];

}







let missions =

JSON.parse(

localStorage.getItem(
missionKey
)

)||null;







// ===============================
// CREATE
// ===============================


function createMission(){


missions={

date:getToday(),

open:false,

spin:false,

like:false,

share:false,

reward:false

};



saveMission();


}







function saveMission(){


localStorage.setItem(

missionKey,

JSON.stringify(
missions

)

);


}







// ===============================
// LOAD
// ===============================


function loadMission(){



if(

!missions ||

missions.date !== getToday()

){


createMission();


}




updateMissionUI();


}







// ===============================
// COMPLETE
// ===============================


function completeMission(type){



if(!missions)

createMission();




missions[type]=true;



saveMission();



updateMissionUI();




checkComplete();



}








function completeOpenMission(){

completeMission("open");

}



function completeSpinMission(){

completeMission("spin");

}



function completeLikeMission(){

completeMission("like");

}



function completeShareMission(){

completeMission("share");

}





window.completeOpenMission=
completeOpenMission;


window.completeSpinMission=
completeSpinMission;


window.completeLikeMission=
completeLikeMission;


window.completeShareMission=
completeShareMission;








// ===============================
// UI
// ===============================


function updateMissionUI(){



if(!missions)

return;




const list={


open:"openMission",

spin:"spinMission",

like:"likeMission",

share:"shareMission"


};





Object.keys(list)

.forEach(type=>{



const el=

document.getElementById(
list[type]
);



if(el){



el.innerHTML=

missions[type]

?

"✅"

:

"⬜";

}



});







const score=

Object.values({

open:missions.open,

spin:missions.spin,

like:missions.like,

share:missions.share

})

.filter(Boolean)

.length;







const box=

document.getElementById(
"missionScore"
);



if(box){



box.innerHTML=

`${score}/4 ❤️`;



if(score===4){


box.innerHTML=

"🎉 Mission Complete ❤️";


}



}



}










// ===============================
// COMPLETE REWARD
// ===============================


function checkComplete(){



const complete =

missions.open &&

missions.spin &&

missions.like &&

missions.share;





if(

complete &&

!missions.reward

){



missions.reward=true;


saveMission();



showMissionReward();


addStreak();


}



}







function showMissionReward(){



const old=

document.querySelector(
".mission-popup"
);



if(old)

return;






const box=

document.createElement(
"div"
);



box.className=
"mission-popup";



box.innerHTML=

`

<h2>
🎉 เก่งมาก!
</h2>

<p>

Daily Mission ครบแล้ว ❤️

</p>


<p>

💕 Couple Level เพิ่มขึ้น

</p>

`;




document.body.appendChild(
box
);





setTimeout(()=>{


box.remove();


},4000);



}









// ===============================
// STREAK 🔥
// ===============================


function addStreak(){



let data=

JSON.parse(

localStorage.getItem(
streakKey

)

)||{


count:0,

last:null

};





if(data.last!==getToday()){


data.count++;


data.last=getToday();



}




localStorage.setItem(

streakKey,

JSON.stringify(data)

);



}





function getStreak(){



return JSON.parse(

localStorage.getItem(
streakKey

)

)||{


count:0

};



}



window.getStreak=getStreak;









// ===============================
// INIT
// ===============================


document.addEventListener(

"DOMContentLoaded",

()=>{


loadMission();



// เปิดเว็บวันนี้

completeOpenMission();



}

);
