// รายการอาหาร

const foods = [

    "🥘 หมูกระทะ",

    "🍲 ชาบู",

    "🐷 หมูย่างจิ้มแจ่ว",

    "🍗 ไก่ทอด",

    "🍜 ก๋วยเตี๋ยว",

    "🍛 ข้าวมันไก่",

    "🍕 พิซซ่า",

    "🍣 ซูชิ",

    "🍝 สปาเกตตี",

    "🍔 แฮมเบอร์เกอร์",

    "🥩 ปิ้งย่าง",

    "🍜 ราเมง",

    "🌶️ อาหารเกาหลี",

    "🧋 ชานมไข่มุก"

];



// หา button

const button = document.querySelector("button");


// หาที่แสดงผล

const result = document.querySelector(".result");



// เมื่อกดปุ่ม

button.addEventListener("click", function(){


    // สุ่มตัวเลข

    const randomNumber = Math.floor(
        Math.random() * foods.length
    );


    // เอาอาหารมาแสดง

    result.innerHTML = 

    "🎉 วันนี้กิน...<br><br>" 
    + foods[randomNumber];


});
