/* =================================
   Dinner Roulette ❤️
   Favorite System ⭐
================================= */


const favoriteBtn = 
document.getElementById("favoriteBtn");


const favoriteList = 
document.getElementById("favoriteList");




// โหลดข้อมูล

let favorites = JSON.parse(

localStorage.getItem("favorites")

) || [];




// แสดงรายการ

function showFavorites(){


    if(!favoriteList)
    return;



    favoriteList.innerHTML="";



    if(favorites.length === 0){


        favoriteList.innerHTML =

        "<li>ยังไม่มีเมนูโปรด</li>";

        return;

    }



    favorites.forEach(food=>{


        const li = document.createElement("li");


        li.innerHTML =

        "⭐ " + food;



        favoriteList.appendChild(li);


    });



}



showFavorites();







// บันทึกเมนู


if(favoriteBtn){


favoriteBtn.addEventListener(

"click",

()=>{


    const food =

    window.currentFood;



    if(!food){


        alert(

        "กรุณาสุ่มอาหารก่อน ❤️"

        );

        return;

    }





    if(!favorites.includes(food)){


        favorites.push(food);



        localStorage.setItem(

        "favorites",

        JSON.stringify(favorites)

        );



        showFavorites();



        alert(

        "⭐ เพิ่มเมนูโปรดแล้ว"

        );


    }

    else{


        alert(

        "เมนูนี้มีในรายการแล้ว"

        );


    }



});


}
