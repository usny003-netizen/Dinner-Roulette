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


// เรียกช่องแสดงผล

const result = document.getElementById("result");


// เมื่อกดปุ่ม

randomBtn.addEventListener("click", function () {

    // แสดงข้อความระหว่างสุ่ม
    result.innerHTML = "🎲 กำลังสุ่ม...";


    // ลบเอฟเฟกต์เก่า

    result.classList.remove("pop");



    setTimeout(function () {


        // สุ่มอาหาร

        const randomNumber = Math.floor(
            Math.random() * foods.length
        );



        // แสดงผล

        result.innerHTML = `

        🎉 วันนี้กิน...

        <br><br>

        ${foods[randomNumber]}

        `;



        // เพิ่มเอฟเฟกต์

        result.classList.add("pop");



    }, 1000);


});
