// =====================================
// KBO 카드게임 MAIN SCRIPT
// =====================================


// 플레이어 데이터

let user = {

    team:null,

    money:10000000000, // 100억

    normalContract:5,

    premiumContract:1,

    seasonStarted:false,

    difficulty:1,

    cards:[]

};





// 게임 시작

function startGame(){


    const select =
        document.getElementById("teamSelect");


    user.team = select.value;



    document.getElementById("startScreen")
    .style.display="none";


    document.getElementById("mainScreen")
    .style.display="block";



    document.getElementById("myTeam")
    .innerHTML =
    "⚾ 선택 구단 : "
    + user.team;



    saveGame();


    showMessage(
        "게임 시작!<br>일반 계약서 5개와 고급 계약서 1개 지급"
    );

}




// 메시지 출력

function showMessage(text){


    document.getElementById("content")
    .innerHTML=text;

}





// 리그

function openLeague(){


    let html = `

    <h2>⚾ 리그</h2>


    <button onclick="startSeasonMenu()">
    시즌 시작
    </button>


    <button onclick="leagueExit()">
    나가기
    </button>


    `;


    showMessage(html);


}




// 시즌 시작 선택

function startSeasonMenu(){


    if(user.seasonStarted){


        showMessage(
        "이미 시즌이 진행 중입니다."
        );

        return;

    }



    let html = `

    <h2>현재 가능한 난이도</h2>


    <button onclick="startSeason(1)">
    1단계
    </button>


    `;


    showMessage(html);


}





// 시즌 시작

function startSeason(level){


    user.seasonStarted=true;

    user.difficulty=level;


    saveGame();


    showMessage(

    "시즌 시작!<br>"
    +"난이도 : "+level+"단계"

    );


}




// 리그 나가기

function leagueExit(){

    showMessage(
    "리그 메뉴를 나갔습니다."
    );

}





// 뽑기

function openGacha(){

    if(typeof gachaMenu==="function"){

        gachaMenu();

    }else{

        showMessage(
        "뽑기 시스템 준비중"
        );

    }

}





// 강화

function openEnhance(){

    if(typeof enhanceMenu==="function"){

        enhanceMenu();

    }else{

        showMessage(
        "강화 시스템 준비중"
        );

    }

}





// 상점

function openShop(){

    if(typeof shopMenu==="function"){

        shopMenu();

    }else{

        showMessage(
        "상점 준비중"
        );

    }

}





// 보관함

function openInventory(){


    let html=

    "<h2>📦 보관함</h2>";



    if(user.cards.length===0){

        html+="보유 카드 없음";

    }

    else{


        user.cards.forEach(card=>{


            html+=`

            <div class="card">

            ${card.name}<br>

            ${card.grade}<br>

            강화 ${card.enhance}강

            </div>

            `;


        });


    }


    showMessage(html);


}





// 돈 표시

function updateUI(){


    document.getElementById("money")
    .innerHTML =
    Math.floor(user.money/100000000)
    +"억";



    document.getElementById("normalContract")
    .innerHTML =
    user.normalContract;



    document.getElementById("premiumContract")
    .innerHTML =
    user.premiumContract;


}





// 저장 불러오기

window.onload=function(){


    if(typeof loadGame==="function"){

        loadGame();

    }


    updateUI();

}
