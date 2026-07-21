/* =================================
 Dinner Roulette Chompu V17 ❤️
 Daily Mission + Couple Streak 💌
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

)

||null;







// ===============================
// CREATE MISSION
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

missions.date!==getToday()

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





window.completeOpenMission =
completeOpenMission;


window.completeSpinMission =
completeSpinMission;


window.completeLikeMission =
completeLikeMission;


window.completeShareMission =
completeShareMission;









// ===============================
// UPDATE UI
// ===============================


function updateMissionUI(){



if(!missions)
return;





const map={



open:"openMission",


spin:"spinMission",


like:"likeMission",


share:"shareMission"



};







Object.keys(map)

.forEach(type=>{



const el=

document.getElementById(
map[type]
);



if(el){



el.innerHTML=

missions[type]

?

"❤️"

:

"⬜";



}



});









let score=

[

missions.open,

missions.spin,

missions.like,

missions.share

]

.filter(Boolean)

.length;






const scoreBox=

document.getElementById(
"missionScore"
);



if(scoreBox){



scoreBox.innerHTML=

score===4

?

"🎉 Mission Complete ❤️"

:

`${score}/4 ❤️`;



}



}









// ===============================
// COMPLETE CHECK
// ===============================


function checkComplete(){



if(

missions.open &&

missions.spin &&

missions.like &&

missions.share &&

!missions.reward

){



missions.reward=true;



saveMission();



showMissionReward();



addStreak();



}



}









// ===============================
// POPUP
// ===============================


function showMissionReward(){



const old=

document.querySelector(
".mission-popup"
);



if(old)

return;







const popup=

document.createElement(
"div"
);



popup.className=
"mission-popup";



popup.innerHTML=

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
popup
);





if(typeof createHeart==="function"){


createHeart();


}





setTimeout(()=>{


popup.remove();


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

)

||{


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

)

||{


count:0

};



}



window.getStreak =
getStreak;









// ===============================
// INIT
// ===============================


document.addEventListener(

"DOMContentLoaded",

()=>{


loadMission();


// เปิดเว็บสำเร็จ

completeOpenMission();



}

);
