/* =================================
 Dinner Roulette V13 ❤️
 Theme System 🌙💕
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
// TOGGLE THEME
// ===============================


function toggleTheme(){



document.body.classList.toggle(
"dark"
);




const dark =

document.body.classList.contains(
"dark"
);





localStorage.setItem(

themeKey,

dark ?

"dark"

:

"light"

);





updateThemeButton(
dark
);





createThemeEffect();



}



window.toggleTheme =
toggleTheme;









// ===============================
// BUTTON
// ===============================


function updateThemeButton(dark){



const btn=

document.getElementById(
"themeBtn"
);



if(!btn)

return;




btn.innerHTML=

dark

?

"☀️ Light Mode"

:

"🌙 Dark Mode";



}









// ===============================
// EFFECT
// ===============================


function createThemeEffect(){



document.body.classList.add(
"theme-change"
);



setTimeout(()=>{


document.body.classList.remove(
"theme-change"
);



},500);



}









// ===============================
// INIT
// ===============================


document.addEventListener(

"DOMContentLoaded",

()=>{



applyTheme();




const btn=

document.getElementById(
"themeBtn"
);




if(btn){



btn.onclick=

toggleTheme;



}





}

);
