/* =================================
   Dinner Roulette V2 ❤️
   Wheel Spin System 🎡
================================= */


const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");



const foods = [

    "🥘 หมูกระทะ",

    "🍲 ชาบู",

    "🐷 หมูย่างจิ้มแจ่ว",

    "🍗 ไก่ทอด",

    "🍜 ก๋วยเตี๋ยว",

    "🍣 ซูชิ",

    "🥩 ปิ้งย่าง",

    "🍕 พิซซ่า",

    "🍔 เบอร์เกอร์",

    "🍱 อาหารญี่ปุ่น"

];





let currentRotation = 0;

let spinning = false;





// เสียงชนะ

const winSound = new Audio(
    "win.mp3"
);





/* =========================
   วาดวงล้อ
========================= */


function drawWheel(){


    const center = canvas.width / 2;

    const radius = center;


    const slice =
    (Math.PI * 2) / foods.length;



    ctx.clearRect(

        0,
        0,
        canvas.width,
        canvas.height

    );



    for(let i=0;i<foods.length;i++){



        ctx.beginPath();



        ctx.moveTo(

            center,
            center

        );



        ctx.arc(

            center,
            center,
            radius,
            i * slice,
            (i+1)*slice

        );



        ctx.fillStyle =

        i % 2 === 0

        ?

        "#ffd1e5"

        :

        "#fff2b8";



        ctx.fill();




        ctx.save();



        ctx.translate(

            center,
            center

        );



        ctx.rotate(

            i*slice + slice/2

        );



        ctx.textAlign="right";


        ctx.fillStyle="#555";


        ctx.font="18px Arial";



        ctx.fillText(

            foods[i],

            radius-20,
            8

        );



        ctx.restore();



    }


}



drawWheel();







/* =========================
   หมุนวงล้อ
========================= */


document
.getElementById("spinBtn")
.addEventListener(

"click",

spinWheel

);





function spinWheel(){


    if(spinning)
    return;



    spinning=true;



    const random =

    Math.floor(

        Math.random()*foods.length

    );



    const sliceAngle =

    360 / foods.length;




    const target =

    360*6 +

    (360 - random*sliceAngle);



    currentRotation += target;



    canvas.style.transition =

    "transform 5s cubic-bezier(.17,.67,.24,1)";



    canvas.style.transform =

    `rotate(${currentRotation}deg)`;





    setTimeout(()=>{


        spinning=false;



        winSound.play();



        showResult(

            foods[random]

        );



    },5000);



}







/* =========================
   แสดงผล
========================= */


function showResult(food){



    const result =

    document.getElementById(
        "foodResult"
    );



    if(result){


        result.innerHTML = food;


    }




    // เอฟเฟกต์ง่าย ๆ

    document.body.classList.add(
        "win"
    );



    setTimeout(()=>{


        document.body.classList.remove(
            "win"
        );


    },1000);



}
