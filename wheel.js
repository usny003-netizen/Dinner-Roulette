/* =================================
   Dinner Roulette V2.1 ❤️
   Wheel Spin System 🎡
================================= */


const canvas = document.getElementById("wheel");

if(canvas){

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



// เก็บผลล่าสุด
let currentFood = "";


// การหมุน
let spinning = false;


// เสียง

const winSound = new Audio(
    "win.mp3"
);


const clickSound = new Audio(
    "click.mp3"
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

        ?

        "#ffd1e5"

        :

        "#fff2b8";



        ctx.fill();




        // ตัวหนังสือ

        ctx.save();



        ctx.translate(
            center,
            center
        );


        ctx.rotate(

            index*slice + slice/2

        );



        ctx.textAlign="right";

        ctx.fillStyle="#555";

        ctx.font="17px Arial";



        ctx.fillText(

            food,

            radius-15,

            8

        );



        ctx.restore();



    });


}



drawWheel();






/* =========================
   ปุ่มหมุน
========================= */


const spinBtn = 

document.getElementById("spinBtn");



if(spinBtn){


spinBtn.onclick = spinWheel;


}







function spinWheel(){


    if(spinning)
    return;



    spinning=true;



    clickSound.play();



    let random =

    Math.floor(

        Math.random()*foods.length

    );



    currentFood = foods[random];



    let sliceAngle =

    360 / foods.length;



    let rotation =

    360*6 +

    (360-(random*sliceAngle));



    canvas.style.transition =

    "transform 5s cubic-bezier(.17,.67,.24,1)";



    canvas.style.transform =

    `rotate(${rotation}deg)`;






    setTimeout(()=>{


        spinning=false;



        winSound.play();



        showResult(
            currentFood
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




    // ส่งค่าออกไปใช้ไฟล์อื่น

    window.currentFood = food;



}






}
