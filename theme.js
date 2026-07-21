/* =================================
   Dinner Roulette V2 ❤️
   theme.js 🌙
================================= */



const themeBtn =

document.getElementById(

"themeBtn"

);






// ===============================
// โหลด Theme เดิม
// ===============================



let darkMode =

localStorage.getItem(

"darkMode"

)

===

"true";









// ===============================
// ใช้งาน Theme
// ===============================


function applyTheme(){



if(darkMode){



document.body.classList.add(

"dark"

);



if(themeBtn){


themeBtn.innerHTML =

"☀️ Light Mode";



}



}

else{



document.body.classList.remove(

"dark"

);



if(themeBtn){


themeBtn.innerHTML =

"🌙 Dark Mode";



}



}



}









// เรียกตอนเปิดเว็บ

applyTheme();









// ===============================
// ปุ่มเปลี่ยน Theme
// ===============================



if(themeBtn){



themeBtn.addEventListener(

"click",

()=>{



darkMode = !darkMode;






localStorage.setItem(

"darkMode",

darkMode

);







applyTheme();






});



}
