// =================================
// KBO 카드게임 - 구단 데이터
// =================================


const teams = {


    SSG: {

        name:"SSG 랜더스",

        stadium:"인천 SSG 랜더스필드",

        color:"#e4002b",

        legends:[
            "양현종"
        ]

    },


    LG: {

        name:"LG 트윈스",

        stadium:"서울 잠실야구장",

        color:"#c30452",

        legends:[

        ]

    },


    KIA: {

        name:"KIA 타이거즈",

        stadium:"광주-기아 챔피언스 필드",

        color:"#ea0029",

        legends:[

        ]

    },


    KT: {

        name:"KT 위즈",

        stadium:"수원 KT 위즈파크",

        color:"#000000",

        legends:[

        ]

    },


    삼성: {

        name:"삼성 라이온즈",

        stadium:"대구 삼성 라이온즈파크",

        color:"#074ca1",

        legends:[

        ]

    },


    두산: {

        name:"두산 베어스",

        stadium:"서울 잠실야구장",

        color:"#131230",

        legends:[

        ]

    },


    롯데: {

        name:"롯데 자이언츠",

        stadium:"부산 사직야구장",

        color:"#041e42",

        legends:[

        ]

    },


    한화: {

        name:"한화 이글스",

        stadium:"대전 한화생명 볼파크",

        color:"#ff6600",

        legends:[

        ]

    },


    키움: {

        name:"키움 히어로즈",

        stadium:"서울 고척스카이돔",

        color:"#570514",

        legends:[

        ]

    },


    NC: {

        name:"NC 다이노스",

        stadium:"창원 NC파크",

        color:"#315288",

        legends:[

        ]

    }


};




// 팀 선택 함수

function getTeam(teamCode){


    return teams[teamCode];


}
