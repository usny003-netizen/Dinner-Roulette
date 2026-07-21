/* =================================
   Dinner Roulette ❤️
   Wheel Spin System 🎡 V2.2
================================= */


const canvas = document.getElementById("wheel");


if (canvas) {


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



let spinning = false;

let currentFood = "";




// =======================
// เสียง
// =======================


const clickSound = new Audio("click.mp3");

const winSound = new Audio("win.mp3");





// =======================
// วาดวงล้อ
// =======================


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



    foods.forEach((food,index)=>{


        ctx.beginPath();



        ctx.moveTo(
            center,
            center
        );



        ctx.arc(

            center,
            center,
            radius,

            index * slice,

            (index+1)*slice

        );



        ctx.fillStyle =

        index % 2 === 0

        ? "#ffd1e5"

        : "#fff2b8";



        ctx.fill();




        // ข้อความ


        ctx.save();



        ctx.translate(
            center,
            center
        );


        ctx.rotate(

            index * slice + slice / 2

        );



        ctx.textAlign = "right";

        ctx.fillStyle="#555";

        ctx.font="16px Arial";



        ctx.fillText(

            food,

            radius - 15,

            5

        );



        ctx.restore();



    });


}



drawWheel();







// =======================
// ปุ่มหมุน
// =======================


const spinBtn = document.getElementById("spinBtn");



if(spinBtn){


spinBtn.addEventListener(

"click",

spinWheel

);


}







function spinWheel(){



    if(spinning)

    return;



    spinning = true;



    // เสียงคลิก

    clickSound.currentTime = 0;

    clickSound.play()
    .catch(()=>{});





    const random =

    Math.floor(

        Math.random() * foods.length

    );



    currentFood = foods[random];





    const angle =

    360 / foods.length;




    const rotate =

    360 * 6 +

    (360 - random * angle);





    canvas.style.transition =

    "transform 5s cubic-bezier(.17,.67,.24,1)";



    canvas.style.transform =

    `rotate(${rotate}deg)`;







    setTimeout(()=>{


        spinning = false;



        // เสียงชนะ

        winSound.currentTime = 0;

        winSound.play()
        .catch(()=>{});



        showResult(currentFood);



    },5000);



}







// =======================
// แสดงผล
// =======================


function showResult(food){



    const result =

    document.getElementById(
        "foodResult"
    );



    if(result){


        result.innerHTML = food;


    }



    // ส่งค่าให้ระบบอื่น

    window.currentFood = food;



}



}
