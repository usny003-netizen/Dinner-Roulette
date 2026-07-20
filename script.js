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

randomBtn.addEventListener("click", function(){


    let randomNumber = Math.floor(
        Math.random() * foods.length
    );


    result.innerHTML = `

    🎉 วันนี้กิน...

    <br><br>

    ${foods[randomNumber]}

    `;


});
