// ===============================
// KBO 카드게임 메인 스크립트
// ===============================


// 현재 선택 슬롯
let currentSlot = 1;


// 현재 저장 데이터
let gameData = null;



// 저장 슬롯 선택

function selectSave(slot){

    currentSlot = slot;

    alert(
        "저장 슬롯 " + slot + " 선택"
    );

}




// 게임 시작

function startGame(){


    const team =
    document.getElementById("teamSelect").value;



    if(team === ""){

        alert(
            "응원 구단을 선택해주세요."
        );

        return;

    }



    // 새 게임 데이터 생성

    gameData = {

        slot:currentSlot,


        team:team,


        money:100,


        normalContract:5,


        premiumContract:1,


        season:1,


        clearStage:0,


        players:[],


        legends:[],


        items:{


            enhanceTicket:0,


            protectTicket:0,


            statTicket:0


        }

    };



    saveGame();



    // 화면 변경

    document
    .getElementById("startScreen")
    .classList
    .add("hidden");



    document
    .getElementById("mainScreen")
    .classList
    .remove("hidden");



    updateMain();

}




// 메인 화면 정보 업데이트

function updateMain(){


    if(!gameData)
        return;



    document
    .getElementById("teamName")
    .textContent =
    gameData.team;



    document
    .getElementById("money")
    .textContent =
    gameData.money;



    document
    .getElementById("normalContract")
    .textContent =
    gameData.normalContract;



    document
    .getElementById("premiumContract")
    .textContent =
    gameData.premiumContract;


}




// 저장

function saveGame(){


    localStorage.setItem(

        "KBO_SAVE_"+currentSlot,

        JSON.stringify(gameData)

    );

}



// 불러오기

function loadGame(slot){


    const data =

    localStorage.getItem(

        "KBO_SAVE_"+slot

    );



    if(data){


        gameData =
        JSON.parse(data);


        currentSlot = slot;



        document
        .getElementById("startScreen")
        .classList
        .add("hidden");



        document
        .getElementById("mainScreen")
        .classList
        .remove("hidden");



        updateMain();



    }

    else{


        alert(
            "저장 데이터가 없습니다."
        );


    }

}




// 슬롯 버튼 연결

function loadSlot(slot){

    loadGame(slot);

}




// 메인으로 돌아가기

function backMain(){


    document
    .querySelectorAll(".screen")
    .forEach(

        s=>s.classList.add("hidden")

    );



    document
    .getElementById("mainScreen")
    .classList
    .remove("hidden");


}



// 페이지 시작

window.onload=function(){


    console.log(
        "KBO 카드게임 시작"
    );


};
