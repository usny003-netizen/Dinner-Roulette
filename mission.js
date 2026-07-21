/* =================================
 Dinner Roulette V10 ❤️
 Daily Mission System 💌
================================= */



const today =

new Date()

.toLocaleDateString(
"th-TH"
);






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







// =============================
// RESET DAILY
// =============================


function checkDailyReset(){



if(missionData.date !== today){



missionData={


date:today,


open:true,


spin:false,


like:false,


share:false


};



saveMission();


}

else{


missionData.open=true;


saveMission();


}



}









// =============================
// SAVE
// =============================


function saveMission(){



localStorage.setItem(

"dinnerMission",

JSON.stringify(
missionData

)

);



renderMission();



}









// =============================
// COMPLETE
// =============================


function completeSpinMission(){



missionData.spin=true;


saveMission();



}



window.completeSpinMission=

completeSpinMission;









function completeLikeMission(){



missionData.like=true;


saveMission();


}



window.completeLikeMission=

completeLikeMission;









function completeShareMission(){



missionData.share=true;


saveMission();


}



window.completeShareMission=

completeShareMission;









// =============================
// SCORE
// =============================


function getMissionScore(){



let score=0;



if(missionData.open)

score+=1;



if(missionData.spin)

score+=1;



if(missionData.like)

score+=1;



if(missionData.share)

score+=1;



return score;



}









// =============================
// DISPLAY
// =============================


function renderMission(){



const open=

document.getElementById(
"openMission"
);



const spin=

document.getElementById(
"spinMission"
);



const like=

document.getElementById(
"likeMission"
);



const share=

document.getElementById(
"shareMission"
);



const score=

document.getElementById(
"missionScore"
);







function status(value){


return value
?
"✅"
:
"⬜";


}






if(open)

open.innerHTML=

status(
missionData.open
);



if(spin)

spin.innerHTML=

status(
missionData.spin
);



if(like)

like.innerHTML=

status(
missionData.like
);



if(share)

share.innerHTML=

status(
missionData.share
);





if(score){


score.innerHTML=

`

คะแนนวันนี้ :

${getMissionScore()}

/4 ❤️

`;



}



}









// =============================
// INIT
// =============================


document.addEventListener(

"DOMContentLoaded",

()=>{


checkDailyReset();


renderMission();


});
