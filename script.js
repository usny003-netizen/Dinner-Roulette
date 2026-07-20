// 🍜 รายการอาหาร

const foods = [
    "🥘 หมูกระทะ",
    "🍲 ชาบู",
    "🐷 หมูย่างจิ้มแจ่ว",
    "🍗 ไก่ทอด",
    "🍜 ก๋วยเตี๋ยว",
    "🍛 ข้าวมันไก่",
    "🍚 ข้าวผัด",
    "🍝 สปาเกตตี",
    "🍕 พิซซ่า",
    "🍔 แฮมเบอร์เกอร์",
    "🍣 ซูชิ",
    "🍱 อาหารญี่ปุ่น",
    "🥩 ปิ้งย่าง",
    "🍜 ราเมง",
    "🌶️ อาหารเกาหลี",
    "🍗 ไก่เกาหลี",
    "🍤 ต้มยำกุ้ง",
    "🥗 สลัด",
    "🍧 ของหวาน",
    "🧋 ชานมไข่มุก"
];


// เรียกปุ่มจาก HTML

const randomBtn = document.getElementById("randomBtn");


// เรียกช่องผลลัพธ์

const result = document.getElementById("result");



// เมื่อกดปุ่มสุ่มอาหาร

randomBtn.addEventListener("click", function () {


    // สร้างหัวใจลอย

    createHeart();


    // ปิดปุ่มชั่วคราว

    randomBtn.disabled = true;



    // ลบ Animation เก่า

    result.classList.remove("pop");



    // ข้อความระหว่างสุ่ม

    result.innerHTML = `
    
    🎲 กำลังสุ่ม...

    <br>

    💕 รอแป๊บนะ

    `;



    // รอ 1 วินาที

    setTimeout(function () {



        // สุ่มอาหาร

        const randomNumber = Math.floor(
            Math.random() * foods.length
        );



        // เก็บเมนูที่ได้

        const selectedFood = foods[randomNumber];



        // แสดงผล

        result.innerHTML = `

        🎉 วันนี้กิน...

        <br><br>

        ❤️ ${selectedFood}

        `;



        // เล่น Animation

        result.classList.add("pop");



        // เปิดปุ่มกลับมา

        randomBtn.disabled = false;



    }, 1000);


});





// ❤️ ฟังก์ชันสร้างหัวใจลอย

function createHeart() {


    const heart = document.createElement("div");


    heart.className = "heart";


    heart.innerHTML = "❤️";



    // สุ่มตำแหน่งหัวใจ

    heart.style.left =
    Math.random() * 100 + "vw";



    // สุ่มขนาดหัวใจ

    heart.style.fontSize =
    Math.random() * 20 + 20 + "px";



    // ใส่ลงหน้าเว็บ

    document.body.appendChild(heart);



    // ลบออกหลัง 3 วินาที

    setTimeout(function(){

        heart.remove();

    },3000);


}
// 🎵 ระบบเพลง

const bgMusic = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicBtn");



let musicPlaying = false;



musicBtn.addEventListener("click", function(){



    if(musicPlaying === false){


        bgMusic.play();


        musicBtn.innerHTML = "🔇 ปิดเพลง";


        musicPlaying = true;



    }else{


        bgMusic.pause();


        musicBtn.innerHTML = "🎵 เปิดเพลง";


        musicPlaying = false;


    }



});
