/* =================================
 Dinner Roulette V10 ❤️
 Theme System 🌙
================================= */



const themeBtn =

document.getElementById(
"themeBtn"
);





// ===============================
// LOAD THEME
// ===============================


let darkMode =

localStorage.getItem(
"darkMode"
)

==="true";









// ===============================
// APPLY THEME
// ===============================


function applyTheme(){



if(darkMode){



document.body.classList.add(
"dark"
);




if(themeBtn){


themeBtn.innerHTML=

"☀️ Light Mode";


}



}



else{



document.body.classList.remove(
"dark"
);




if(themeBtn){


themeBtn.innerHTML=

"🌙 Dark Mode";


}



}




}









// ===============================
// TOGGLE
// ===============================


if(themeBtn){



themeBtn.onclick=()=>{


darkMode=

!darkMode;




localStorage.setItem(

"darkMode",

darkMode

);




applyTheme();




if(typeof createHeart==="function"){


createHeart();


}



};



}









// ===============================
// INIT
// ===============================


applyTheme();
