/* =================================
 Dinner Roulette V12 ❤️
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









// ===============================
// TOGGLE
// ===============================


function toggleTheme(){



document.body.classList.toggle(
"dark"
);




const isDark =

document.body.classList.contains(
"dark"
);






localStorage.setItem(

themeKey,

isDark

? "dark"

: "light"

);





updateThemeButton(
isDark
);



}




window.toggleTheme =
toggleTheme;









// ===============================
// BUTTON TEXT
// ===============================


function updateThemeButton(dark){



const btn =

document.getElementById(
"themeBtn"
);




if(!btn)

return;






if(dark){



btn.innerHTML=

"☀️ Light Mode";



}

else{



btn.innerHTML=

"🌙 Dark Mode";



}



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

()=>{


toggleTheme();


};


}



});
