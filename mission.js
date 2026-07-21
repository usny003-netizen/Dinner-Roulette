/* =================================
 Dinner Roulette V12 ❤️
 Daily Mission System 💌💕
================================= */



let missionData =

JSON.parse(

localStorage.getItem(
"dinnerMission"

)

)||{

date:"",

open:false,

spin:false,

like:false,

share:false

};









// ===============================
// CHECK DAILY RESET
// ===============================


function checkMissionDay(){



let today =

new Date()

.toLocaleDateString(
"th-TH"
);





if(missionData.date !== today){



missionData={


date:today,


open:false,


spin:false,


like:false,


share:false



};



saveMission();



}



}









// ===============================
// SAVE
// ===============================


function saveMission(){



localStorage.setItem(

"dinnerMission",

JSON.stringify(
missionData

)

);



renderMission();


}









// ===============================
// COMPLETE MISSIONS
// ===============================


function completeOpenMission(){



missionData.open=true;


saveMission();


}



window.completeOpenMission =
completeOpenMission;







function completeSpinMission(){



missionData.spin=true;


saveMission();


}



window.completeSpinMission =
completeSpinMission;








function completeLikeMission(){



missionData.like=true;


saveMission();


}



window.completeLikeMission =
completeLikeMission;








function completeShareMission(){



missionData.share=true;


saveMission();


}



window.completeShareMission =
completeShareMission;









// ===============================
// RENDER
// ===============================


function renderMission(){



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

missionData.open

? "✅"

: "⬜";




if(spin)

spin.innerHTML=

missionData.spin

? "✅"

: "⬜";




if(like)

like.innerHTML=

missionData.like

? "✅"

: "⬜";




if(share)

share.innerHTML=

missionData.share

? "✅"

: "⬜";









const score =

document.getElementById(
"missionScore"
);





let count=0;



if(missionData.open)

count++;


if(missionData.spin)

count++;


if(missionData.like)

count++;


if(missionData.share)

count++;






if(score){



score.innerHTML=

`

คะแนนวันนี้

${count}/4 ❤️

`;



}




}









// ===============================
// START TODAY
// ===============================


document.addEventListener(

"DOMContentLoaded",

()=>{



checkMissionDay();





// เปิดเว็บสำเร็จ

completeOpenMission();




renderMission();



});
