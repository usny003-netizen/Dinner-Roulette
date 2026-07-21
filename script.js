// =========================
// 🍜 รายการอาหาร
// =========================

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


// =========================
// 🎯 เชื่อมกับ HTML
// =========================

const randomBtn = document.getElementById("randomBtn");
const result = document.getElementById("result");

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");


// =========================
// 🎲 สุ่มอาหาร
// =========================

randomBtn.addEventListener("click", () => {

    randomBtn.disabled = true;

    result.classList.remove("pop");

    result.innerHTML = `
        🎲 กำลังสุ่ม...
        <br>
        💕 รอแป๊บนะ
    `;

    createHeart();

    setTimeout(() => {

        const randomFood =
            foods[Math.floor(Math.random() * foods.length)];

        result.innerHTML = `
            🎉 วันนี้กิน...
            <br><br>
            ❤️ ${randomFood}
        `;

        result.classList.add("pop");

        createConfetti();

        randomBtn.disabled = false;

    }, 1000);

});


// =========================
// ❤️ หัวใจลอย
// =========================

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (20 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 3000);

}


// =========================
// 🎊 Confetti
// =========================

function createConfetti() {

    for (let i = 0; i < 30; i++) {

        const confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.innerHTML = "🎊";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.animationDuration =
            (2 + Math.random() * 2) + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 3000);

    }

}


// =========================
// 🎵 เพลง
// =========================

if (musicBtn && bgMusic) {

    musicBtn.addEventListener("click", () => {

        if (bgMusic.paused) {

            bgMusic.play();

            musicBtn.textContent = "🔇 ปิดเพลง";

        } else {

            bgMusic.pause();

            musicBtn.textContent = "🎵 เปิดเพลง";

        }

    });

}

console.log("✅ script.js โหลดสำเร็จ");
