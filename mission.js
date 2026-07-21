/* =================================
 Dinner Roulette Chompu V19 ❤️
 Daily Mission
 PART 4.2
================================= */


let mission =

JSON.parse(
localStorage.getItem("mission")
)
||
{

open:false,
spin:false,
like:false,
share:false

};





function saveMission(){


localStorage.setItem(
"mission",
JSON.stringify(mission)
);



updateMission();



}



function completeMission(type){


mission[type]=true;


saveMission();



}



window.completeOpenMission=
()=>completeMission("open");


window.completeSpinMission=
()=>completeMission("spin");


window.completeLikeMission=
()=>completeMission("like");


window.completeShareMission=
()=>completeMission("share");






function updateMission(){



const map={

open:"openMission",

spin:"spinMission",

like:"likeMission",

share:"shareMission"

};



let score=0;



Object.keys(map)
.forEach(key=>{


let el=
document.getElementById(
map[key]
);



if(el){


el.innerHTML =
mission[key]
?
"✅"
:
"⬜";


}



if(mission[key])

score++;


});



const total =
document.getElementById(
"missionScore"
);



if(total)

total.innerHTML=
`${score}/4 ❤️`;



}



document.addEventListener(
"DOMContentLoaded",
()=>{


completeOpenMission();

updateMission();


});
