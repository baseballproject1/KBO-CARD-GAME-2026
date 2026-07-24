// =====================================
// KBO 카드게임 튜토리얼 시스템
// =====================================


let tutorialStep = 0;


const tutorialList = [


    {
        title:"⚾ KBO 카드게임에 오신 것을 환영합니다!",
        text:
        `
        당신만의 KBO 구단을 운영하는 카드게임입니다.<br><br>

        선수를 모으고 강화하여 최고의 팀을 만들어보세요!
        `
    },


    {
        title:"🏟 구단 선택",
        text:
        `
        처음 시작하면 원하는 KBO 구단을 선택합니다.<br><br>

        선택한 팀으로 시즌과 선수 영입을 진행합니다.
        `
    },


    {
        title:"🎁 시작 보상",
        text:
        `
        게임 시작 보상:<br><br>

        📄 일반 계약서 x5<br>
        ⭐ 고급 계약서 x1<br><br>

        계약서를 사용해 선수를 획득할 수 있습니다.
        `
    },


    {
        title:"🎴 카드 뽑기",
        text:
        `
        획득한 계약서로 선수를 뽑습니다.<br><br>

        일반 뽑기 확률:<br>
        일반 60%<br>
        A 20%<br>
        S 10%<br>
        골든글러브 8%<br>
        시그니처 2%<br><br>

        뽑은 카드는 자동으로 보관됩니다.
        `
    },


    {
        title:"🔥 강화 시스템",
        text:
        `
        카드를 강화하면 능력치가 상승합니다.<br><br>

        0강에서 강화 실패 시<br>
        강화 단계는 그대로 유지됩니다.<br><br>

        강화 실패 시 강화 단계가 내려갈 수 있으며
        능력치가 감소할 수 있습니다.
        `
    },


    {
        title:"🎫 강화 아이템",
        text:
        `
        🔥 강화권<br>
        → 강화 성공 확률 +10%<br><br>

        🛡 하락방지권<br>
        → 강화 실패 시 단계 하락 방지<br><br>

        💎 고급강화권<br>
        → 레전드 / 시그니처 강화 성공률 100%
        `
    },


    {
        title:"⭐ FA 시스템",
        text:
        `
        FA는 자유계약 선수 영입 시스템입니다.<br><br>

        사용 가능:<br>
        ✅ 시즌 시작 전<br><br>

        사용 불가:<br>
        ❌ 시즌 진행 중<br><br>

        원하는 선수를 자금으로 영입할 수 있습니다.
        `
    },


    {
        title:"🔄 트레이드 시스템",
        text:
        `
        필요 없는 선수를 다른 선수와 교환합니다.<br><br>

        방법:<br>
        1. 내 선수 선택<br>
        2. 상대 선수 선택<br>
        3. 조건 확인 후 교환<br><br>

        레전드 카드는 트레이드 불가능합니다.
        `
    },


    {
        title:"👑 레전드 제작",
        text:
        `
        레전드는 뽑기에서 나오지 않습니다.<br><br>

        제작 필요:<br>
        시그니처 1장<br>
        팀 골든글러브 2장<br>
        팀 S 카드 5장<br>
        제작 비용 150억<br><br>

        최고의 선수를 직접 만들어보세요!
        `
    },


    {
        title:"⚾ 시즌 시작",
        text:
        `
        리그 메뉴에서 시즌을 시작할 수 있습니다.<br><br>

        시즌 시작 후:<br>
        - FA 불가능<br>
        - 경기 진행 가능<br>
        - 난이도 상승<br><br>

        이제 당신의 시즌을 시작하세요!
        `
    }


];






// 튜토리얼 시작

function startTutorial(){


    tutorialStep = 0;


    showTutorial();


}






// 튜토리얼 출력

function showTutorial(){


    let data =
    tutorialList[tutorialStep];



    document.getElementById("content")
    .innerHTML =

    `

    <h2>${data.title}</h2>

    <p>
    ${data.text}
    </p>


    <button onclick="nextTutorial()">

    다음

    </button>

    `;


}






// 다음 단계

function nextTutorial(){


    tutorialStep++;



    if(tutorialStep >= tutorialList.length){


        finishTutorial();


        return;

    }



    showTutorial();


}






// 종료

function finishTutorial(){


    document.getElementById("content")
    .innerHTML =

    `

    <h2>🎉 튜토리얼 완료!</h2>

    <p>
    이제 KBO 카드게임을 시작하세요!
    </p>

    `;


    localStorage.setItem(
        "tutorialComplete",
        "true"
    );


}
