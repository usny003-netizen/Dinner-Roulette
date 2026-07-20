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


// เรียกปุ่ม

const randomBtn = document.getElementById("randomBtn");


// เรียกพื้นที่แสดงผล

const result = document.getElementById("result");



// เมื่อกดปุ่ม

randomBtn.addEventListener("click", function () {


    // ป้องกันกดรัว

    randomBtn.disabled = true;


    // ใส่เอฟเฟกต์กำลังสุ่ม

    result.classList.remove("pop");

    result.innerHTML = `

    🎲 กำลังสุ่ม...

    <br>

    💕 รอแป๊บนะ

    `;



    setTimeout(function () {


        // สุ่มอาหาร

        const randomNumber = Math.floor(
            Math.random() * foods.length
        );


        const selectedFood = foods[randomNumber];



        // แสดงผลลัพธ์

        result.innerHTML = `

        🎉 วันนี้กิน...

        <br><br>

        ❤️ ${selectedFood}

        `;



        // เพิ่ม Animation

        result.classList.add("pop");



        // เปิดให้กดใหม่

        randomBtn.disabled = false;



    }, 1000);


});
