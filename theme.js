/* =================================
 Dinner Roulette Chompu V17 ❤️
 Theme System FINAL 🌙💕
================================= */



const themeKey =
"dinnerTheme";





// ===============================
// APPLY THEME
// ===============================


function applyTheme(){



const theme =

localStorage.getItem(
themeKey
);




if(theme==="dark"){



document.body.classList.add(
"dark"
);



updateThemeButton(true);



}

else{



document.body.classList.remove(
"dark"
);



updateThemeButton(false);



}




}



window.applyTheme =
applyTheme;









// ===============================
// TOGGLE THEME 🌙
// ===============================


function toggleTheme(){



const dark =

document.body.classList.toggle(
"dark"
);





localStorage.setItem(

themeKey,

dark

?

"dark"

:

"light"

);





updateThemeButton(
dark
);





themeEffect();





if(typeof createHeart==="function"){


createHeart();


}




}



window.toggleTheme =
toggleTheme;









// ===============================
// UPDATE BUTTON
// ===============================


function updateThemeButton(dark){



const btn =

document.getElementById(
"themeBtn"
);



if(!btn)

return;





btn.innerHTML =

dark

?

"☀️ Light Mode"

:

"🌙 Dark Mode";



}









// ===============================
// EFFECT
// ===============================


function themeEffect(){



document.body.classList.add(
"theme-change"
);





setTimeout(()=>{


document.body.classList.remove(
"theme-change"
);


},600);



}









// ===============================
// AUTO DETECT SYSTEM
// ===============================


function detectSystemTheme(){



const saved =

localStorage.getItem(
themeKey
);



if(saved)

return;






if(

window.matchMedia &&

window.matchMedia(
"(prefers-color-scheme: dark)"
)

.matches

){



document.body.classList.add(
"dark"
);



}



}









// ===============================
// INIT
// ===============================


document.addEventListener(

"DOMContentLoaded",

()=>{



detectSystemTheme();



applyTheme();






const btn=

document.getElementById(
"themeBtn"
);




if(btn){



btn.onclick=()=>{


toggleTheme();


};



}



});
