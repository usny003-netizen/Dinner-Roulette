/* =================================
 Dinner Roulette V13 ❤️
 Daily Mission System 💌
================================= */



// ===============================
// DATA
// ===============================


const missionKey =
"dinnerMission";



const today =

new Date()

.toLocaleDateString(
"th-TH"
);





let missions =

JSON.parse(

localStorage.getItem(
missionKey
)

);







// ===============================
// CREATE TODAY MISSION
// ===============================


function createMission(){



missions={


date:today,


open:false,


spin:false,


like:false,


share:false



};



localStorage.setItem(

missionKey,

JSON.stringify(missions)

);



}









// ===============================
// LOAD
// ===============================


function loadMission(){



if(!missions || missions.date!==today){



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



localStorage.setItem(

missionKey,

JSON.stringify(missions)

);



updateMissionUI();



}









// ===============================
// PUBLIC FUNCTIONS
// ===============================



function completeOpenMission(){



completeMission(
"open"
);



}



function completeSpinMission(){



completeMission(
"spin"
);



}



function completeLikeMission(){



completeMission(
"like"
);



}



function completeShareMission(){



completeMission(
"share"
);



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
// UI
// ===============================



function updateMissionUI(){



const open =
document.getElementById(
"openMission"
);


const spin =
document.getElementById(
"spinMission"
);


const like =
document.getElementById(
"likeMission"
);


const share =
document.getElementById(
"shareMission"
);



if(open)

open.innerHTML=

missions.open ?

"✅"

:

"⬜";




if(spin)

spin.innerHTML=

missions.spin ?

"✅"

:

"⬜";




if(like)

like.innerHTML=

missions.like ?

"✅"

:

"⬜";




if(share)

share.innerHTML=

missions.share ?

"✅"

:

"⬜";





const score =

Object.values({

open:missions.open,

spin:missions.spin,

like:missions.like,

share:missions.share

})

.filter(Boolean)

.length;






const scoreBox=

document.getElementById(
"missionScore"
);



if(scoreBox){


scoreBox.innerHTML=

`${score}/4 ❤️`;



if(score===4){


scoreBox.innerHTML=

"🎉 Mission Complete 4/4 ❤️";


createMissionReward();



}


}



}









// ===============================
// COMPLETE EFFECT
// ===============================


function createMissionReward(){



if(

document.querySelector(
".mission-popup"

)

)

return;




let box=

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
ทำ Daily Mission ครบแล้ว ❤️
</p>


💕 Chompu มีความสุขแน่นอน


`;



document.body.appendChild(
box
);




setTimeout(()=>{


box.remove();


},4000);



}









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
