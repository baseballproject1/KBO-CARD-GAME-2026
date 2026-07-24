
// =====================================
// KBO 카드게임 팀 데이터
// =====================================


const teams = [

    {
        id:"SSG",
        name:"SSG 랜더스",
        money:10000000000,
        legendCount:5
    },


    {
        id:"KIA",
        name:"KIA 타이거즈",
        money:10000000000,
        legendCount:5
    },


    {
        id:"KT",
        name:"KT 위즈",
        money:10000000000,
        legendCount:5
    },


    {
        id:"삼성",
        name:"삼성 라이온즈",
        money:10000000000,
        legendCount:5
    },


    {
        id:"두산",
        name:"두산 베어스",
        money:10000000000,
        legendCount:5
    },


    {
        id:"롯데",
        name:"롯데 자이언츠",
        money:10000000000,
        legendCount:5
    },


    {
        id:"LG",
        name:"LG 트윈스",
        money:10000000000,
        legendCount:5
    },


    {
        id:"한화",
        name:"한화 이글스",
        money:10000000000,
        legendCount:5
    },


    {
        id:"키움",
        name:"키움 히어로즈",
        money:10000000000,
        legendCount:5
    },


    {
        id:"NC",
        name:"NC 다이노스",
        money:10000000000,
        legendCount:5
    }

];





// 팀 찾기

function getTeam(teamId){


    return teams.find(
        team=>team.id===teamId
    );


}
