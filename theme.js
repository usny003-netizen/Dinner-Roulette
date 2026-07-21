/* =================================
   Dinner Roulette ❤️
   Theme System V2 🌙
================================= */


const themeBtn = document.getElementById("themeBtn");



// โหลด Theme

let darkMode =

localStorage.getItem("darkMode") === "true";





function applyTheme(){


    if(darkMode){


        document.body.classList.add(
            "dark"
        );


        themeBtn.innerHTML =
        "☀️ Light Mode";


    }

    else{


        document.body.classList.remove(
            "dark"
        );


        themeBtn.innerHTML =
        "🌙 Dark Mode";


    }



}



applyTheme();







// ปุ่มเปลี่ยน Theme


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
