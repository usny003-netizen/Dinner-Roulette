// 🍜 รายการอาหารทั้งหมด

const foods = [

    "🥘 หมูกระทะ",

    "🍲 ชาบู",

    "🐷 หมูย่างจิ้มแจ่ว",

    "🍗 ไก่ทอด",

    "🍜 ก๋วยเตี๋ยวเรือ",

    "🍛 กะเพราหมู",

    "🍚 ข้าวมันไก่",

    "🍕 พิซซ่า",

    "🍣 ซูชิ",

    "🍱 อาหารญี่ปุ่น",

    "🥩 ปิ้งย่าง",

    "🍜 ราเมง",

    "🍝 สปาเกตตี",

    "🍔 แฮมเบอร์เกอร์",

    "🌶️ อาหารเกาหลี",

    "🍗 ไก่เกาหลี",

    "🍤 ต้มยำกุ้ง",

    "🥗 สลัด",

    "🧋 ชานมไข่มุก",

    "🍰 เค้ก"

];


// เรียกปุ่ม

const button = document.querySelector("button");


// เรียกพื้นที่แสดงผล

const result = document.querySelector(".result");


// ฟังก์ชันสุ่มอาหาร

button.addEventListener("click", function(){


    // สุ่มเลขจากจำนวนอาหาร

    let randomFood = Math.floor(
        Math.random() * foods.length
    );


    // แสดงอาหาร

    result.innerHTML = `

    🎉 วันนี้กิน...

    <br><br>

    <span>

    ${foods[randomFood]}

    </span>

    `;


});
