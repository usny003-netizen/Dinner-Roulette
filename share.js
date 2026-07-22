/* =================================
 Dinner Roulette Chompu V19 ❤️
 Share System FINAL
 PART 3/6
================================= */


// =================================
// UPDATE SHARE CARD
// =================================

function updateShareCard(data){

    if(!data)
    return;


    const food =
    document.getElementById("shareFood");

    const drink =
    document.getElementById("shareDrink");

    const dessert =
    document.getElementById("shareDessert");

    const date =
    document.getElementById("shareDate");



    if(food)
    food.innerHTML =
    "🍜 " + data.food;



    if(drink)
    drink.innerHTML =
    data.drink;



    if(dessert)
    dessert.innerHTML =
    data.dessert;



    if(date)
    date.innerHTML =
    "📅 " +
    new Date()
    .toLocaleDateString("th-TH");


}



window.updateShareCard =
updateShareCard;





// =================================
// SAVE IMAGE 📸
// =================================


function saveShareImage(){


    const card =
    document.getElementById(
        "shareCard"
    );


    if(!card){

        alert(
        "ไม่พบ Share Card"
        );

        return;

    }



    if(typeof html2canvas !== "function"){


        alert(
        "ไม่พบระบบบันทึกรูป html2canvas"
        );


        return;

    }





    html2canvas(card,{

        scale:2,

        backgroundColor:null

    })

    .then(canvas=>{


        const link =
        document.createElement(
            "a"
        );


        link.download =
        "Dinner-Roulette-Chompu.png";



        link.href =
        canvas.toDataURL(
            "image/png"
        );



        link.click();



        if(typeof completeShareMission==="function"){

            completeShareMission();

        }



        if(typeof showToast==="function"){

            showToast(
            "📸 บันทึกรูปแล้ว"
            );

        }



    })

    .catch(err=>{


        console.error(
            "SAVE IMAGE ERROR",
            err
        );


        alert(
        "บันทึกรูปไม่สำเร็จ"
        );


    });



}



window.saveShareImage =
saveShareImage;








// =================================
// SHARE CHOMPU 💕
// =================================


function shareToChompu(){



const food =

document.getElementById(
"shareFood"
)?.innerText
||
"วันนี้กินอะไรดี ❤️";



const text =

`
❤️ Dinner Roulette Chompu

${food}

กินด้วยกันนะ 💕

`;





if(navigator.share){


navigator.share({

title:
"Dinner Roulette Chompu",

text:text


})

.catch(()=>{});


}

else{


navigator.clipboard.writeText(text);



if(typeof showToast==="function"){

showToast(
"📋 คัดลอกข้อความแล้ว"
);

}


}




if(typeof completeShareMission==="function"){

completeShareMission();

}



}



window.shareToChompu =
shareToChompu;
