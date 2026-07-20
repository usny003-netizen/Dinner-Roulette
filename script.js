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



// เชื่อมกับ HTML

const randomBtn = document.getElementById("randomBtn");

const result = document.getElementById("result");




// เมื่อกดปุ่มสุ่มอาหาร

randomBtn.addEventListener("click", function(){


    // ❤️ หัวใจลอย

    createHeart();



    // 🎲 แสดงกำลังสุ่ม

    result.classList.remove("pop");


    result.innerHTML = `

    🎲 กำลังสุ่ม...

    <br>

    💕 รอแป๊บนะ

    `;



    // ปิดปุ่มกันกดรัว

    randomBtn.disabled = true;



    // รอ 1 วินาที

    setTimeout(function(){



        // สุ่มอาหาร

        const randomNumber = Math.floor(
            Math.random() * foods.length
        );



        const selectedFood = foods[randomNumber];



        // แสดงผล

        result.innerHTML = `

        🎉 วันนี้กิน...

        <br><br>

        ❤️ ${selectedFood}

        `;



        // ✨ Animation

        result.classList.add("pop");



        // 🎊 Confetti

        createConfetti();



        // เปิดปุ่มอีกครั้ง

        randomBtn.disabled = false;



    },1000);


});






// ❤️ ฟังก์ชันหัวใจลอย

function createHeart(){


    const heart = document.createElement("div");


    heart.className = "heart";


    heart.innerHTML = "❤️";



    heart.style.left =
    Math.random() * 100 + "vw";



    heart.style.fontSize =
    Math.random() * 20 + 20 + "px";



    document.body.appendChild(heart);



    setTimeout(function(){

        heart.remove();

    },3000);


}






// 🎊 ฟังก์ชัน Confetti

function createConfetti(){


    for(let i = 0; i < 30; i++){


        const confetti = document.createElement("div");


        confetti.className = "confetti";


        confetti.innerHTML = "🎊";



        confetti.style.left =
        Math.random() * 100 + "vw";



        confetti.style.animationDuration =
        Math.random() * 2 + 2 + "s";



        document.body.appendChild(confetti);



        setTimeout(function(){

            confetti.remove();

        },3000);


    }


}
