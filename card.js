
// =====================================
// KBO 카드 시스템
// =====================================



const cardGrades = {


    일반:{
        name:"일반",
        color:"white",
        bonus:0
    },


    A:{
        name:"A",
        color:"blue",
        bonus:3
    },


    S:{
        name:"S",
        color:"green",
        bonus:6
    },


    골든글러브:{
        name:"골든글러브",
        color:"gold",
        bonus:10
    },


    시그니처:{
        name:"시그니처",
        color:"red",
        bonus:15
    },


    레전드:{
        name:"레전드",
        color:"purple",
        bonus:20
    }


};






// 카드 만들기


function createCard(player){


    let card = {


        id:player.id,


        name:player.name,


        team:player.team,


        position:player.position,


        grade:player.grade,


        stats:{},


        trait:player.trait,


        enhance:0,


        legend:player.legend || false


    };



    // 능력치 복사

    for(let stat in player.stats){


        card.stats[stat]
        =
        player.stats[stat]
        +
        cardGrades[player.grade].bonus;


    }



    return card;


}







// 카드 표시


function showCard(card){



    let html=`


    <div class="card ${getCardClass(card.grade)}">


    <div class="playerName">

    ${card.name}

    </div>



    <h3>
    ${card.grade}
    </h3>



    <p>
    ${card.team}
    /
    ${card.position}
    </p>



    <p>
    특성 : ${card.trait}
    </p>



    <p>
    강화 : ${card.enhance}강
    </p>



    </div>


    `;



    return html;


}







// 등급 CSS 변환


function getCardClass(grade){


    switch(grade){


        case "A":
            return "A";


        case "S":
            return "S";


        case "골든글러브":
            return "gold";


        case "시그니처":
            return "signature";


        case "레전드":
            return "legend";


        default:
            return "normal";


    }


}






// 선수 -> 카드 변환


function getPlayerCard(playerId){


    let player =
    players.find(
        p=>p.id===playerId
    );


    if(!player){

        return null;

    }


    return createCard(player);


}
