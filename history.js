/* =================================
   Dinner Roulette ❤️
   History System 📜
================================= */


const historyList =

document.getElementById("historyList");





let historyData = JSON.parse(

localStorage.getItem("history")

) || [];







function addHistory(food){


    const date =

    new Date()

    .toLocaleDateString("th-TH");



    historyData.unshift({


        food: food,

        date: date


    });





    // เก็บแค่ 10 รายการ

    historyData =

    historyData.slice(0,10);





    localStorage.setItem(

    "history",

    JSON.stringify(historyData)

    );



    showHistory();



}







function showHistory(){



    if(!historyList)

    return;



    historyList.innerHTML="";





    if(historyData.length===0){


        historyList.innerHTML=

        "<li>ยังไม่มีประวัติ</li>";

        return;

    }






    historyData.forEach(item=>{


        const li =

        document.createElement("li");



        li.innerHTML =


        `${item.food}<br>

        <small>${item.date}</small>`;



        historyList.appendChild(li);



    });



}




showHistory();






// รับผลจากวงล้อ

window.addEventListener(

"foodSelected",

(e)=>{


    addHistory(

    e.detail

    );


});
