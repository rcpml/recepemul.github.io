//Pure JS Parts
//jQuery Parts - start ready
$(function () {

    
    var emojiList = [
        '&#x1F601;',
        '&#x1F923;',
        '&#x1F604;',
        '&#x1F60A;',
        '&#x1F60E;',
        '&#x1F60D;',
        '&#x1F618;',
        '&#x1F914;',
        '&#x1F644;',
        '&#x1F62E;',
        '&#x1F625;',
        '&#x1F62A;',
        '&#x1F634;',
        '&#x1F60C;',
        '&#x1F913;',
        '&#x1F632;',
        '&#x1F641;',
        '&#x1F61E;',
        '&#x1F628;',
        '&#x1F62C;',
        '&#x1F631;',
        '&#x1F635;',
        '&#x1F621;',
        '&#x1F620;',
        '&#x1F607;',
        '&#x1F920;',
        '&#x1F921;',
        '&#x1F925;',
        '&#x1F912;',
        '&#x1F922;',
        '&#x1F608;',
        '&#x1F479;',
        '&#x1F480;',
        '&#x1F47B;',
        '&#x1F47D;',
        '&#x1F916;',
        '&#x1F638;',
        '&#x1F63B;',
        '&#x1F63C;',
        '&#x1F63E;',
        '&#x1F648;',
        '&#x1F649;',
        '&#x1F64A;',
        '&#x1F467;',
        '&#x1F468;',
        '&#x1F474;',
        '&#x1F475;',
        '&#x1F476;',
        '&#x1F47C;',
        '&#x1F46E;',
        '&#x1F575;',
        '&#x1F482;',
        '&#x1F477;',
        '&#x1F471;',
        '&#x1F385;',
        '&#x1F936;',
        '&#x1F478;',
        '&#x1F934;',
        '&#x1F470;',
        '&#x1F935;',
        '&#x1F472;',
        '&#x1F64D;',
        '&#x1F64E;',
        '&#x1F645;',
        '&#x1F646;',
        '&#x1F481;',
        '&#x1F64B;',
        '&#x1F647;',
        '&#x1F926;',
        '&#x1F937;',
        '&#x1F486;',
        '&#x1F487;',
        '&#x1F6B6;',
        '&#x1F3C3;',
        '&#x1F483;',
        '&#x1F57A;',
        '&#x1F46F;',
        '&#x1F574;',
        '&#x1F464;',
        '&#x1F46B;',
        '&#x1F491;',
        '&#x1F46A;',
        '&#x1F4AA;',
        '&#x1F933;',
        '&#x1F448;',
        '&#x1F449;',
        '&#x1F447;',
        '&#x1F91E;',
        '&#x1F918;',
        '&#x1F919;',
        '&#x1F590;',
        '&#x1F44C;',
        '&#x1F44D;',
        '&#x1F44E;',
        '&#x1F44A;',
        '&#x1F91A;',
        '&#x1F44B;',
        '&#x1F485;',
        '&#x1F442;',
        '&#x1F443;',
        '&#x1F463;',
        '&#x1F440;',
        '&#x1F493;',
        '&#x1F494;',
        '&#x1F49A;',
        '&#x1F48C;',
        '&#x1F4A4;',
        '&#x1F4A6;',
        '&#x1F4AC;',
        '&#x1F453;',
        '&#x1F455;',
        '&#x1F457;',
        '&#x1F456;',
        '&#x1F45A;',
        '&#x1F45C;',
        '&#x1F45E;',
        '&#x1F45F;',
        '&#x1F460;',
        '&#x1F451;',
        '&#x1F393;',
        '&#x1F48D;',
        '&#x1F48E;',
        '&#x1F435;',
        '&#x1F412;',
        '&#x1F98D;',
        '&#x1F436;',
        '&#x1F415;',
        '&#x1F43A;',
        '&#x1F98A;',
        '&#x1F431;',
        '&#x1F408;',
        '&#x1F981;',
        '&#x1F42F;',
        '&#x1F405;',
        '&#x1F406;',
        '&#x1F434;',
        '&#x1F40E;',
        '&#x1F98C;',
        '&#x1F984;',
        '&#x1F42E;',
        '&#x1F402;',
        '&#x1F403;',
        '&#x1F404;',
        '&#x1F437;',
        '&#x1F416;',
        '&#x1F417;',
        '&#x1F40F;',
        '&#x1F411;',
        '&#x1F410;',
        '&#x1F42B;',
        '&#x1F418;',
        '&#x1F98F;',
        '&#x1F42D;',
        '&#x1F401;',
        '&#x1F439;',
        '&#x1F430;',
        '&#x1F407;',
        '&#x1F987;',
        '&#x1F43B;',
        '&#x1F428;',
        '&#x1F43C;',
        '&#x1F43E;',
        '&#x1F983;',
        '&#x1F414;',
        '&#x1F423;',
        '&#x1F424;',
        '&#x1F426;',
        '&#x1F427;',
        '&#x1F54A;',
        '&#x1F985;',
        '&#x1F986;',
        '&#x1F989;',
        '&#x1F438;',
        '&#x1F40A;',
        '&#x1F422;',
        '&#x1F98E;',
        '&#x1F40D;',
        '&#x1F432;',
        '&#x1F409;',
        '&#x1F433;',
        '&#x1F42C;',
        '&#x1F41F;',
        '&#x1F420;',
        '&#x1F988;',
        '&#x1F419;',
        '&#x1F41A;',
        '&#x1F980;',
        '&#x1F990;',
        '&#x1F991;',
        '&#x1F98B;',
        '&#x1F40C;',
        '&#x1F41B;',
        '&#x1F41C;',
        '&#x1F41D;',
        '&#x1F41E;',
        '&#x1F577;',
        '&#x1F578;',
        '&#x1F982;',
        '&#x1F490;',
        '&#x1F338;',
        '&#x1F4AE;',
        '&#x1F3F5;',
        '&#x1F339;',
        '&#x1F940;',
        '&#x1F33A;',
        '&#x1F33B;',
        '&#x1F33C;',
        '&#x1F337;',
        '&#x1F331;',
        '&#x1F332;',
        '&#x1F333;',
        '&#x1F334;',
        '&#x1F335;',
        '&#x1F33E;',
        '&#x1F33F;',
        '&#x2618;',
        '&#x1F340;',
        '&#x1F341;',
        '&#x1F342;',
        '&#x1F343;',
        '&#x1F347;',
        '&#x1F348;',
        '&#x1F349;',
        '&#x1F34A;',
        '&#x1F34B;',
        '&#x1F34C;',
        '&#x1F34D;',
        '&#x1F34E;',
        '&#x1F34F;',
        '&#x1F350;',
        '&#x1F351;',
        '&#x1F352;',
        '&#x1F353;',
        '&#x1F345;',
        '&#x1F955;',
        '&#x1F33D;',
        '&#x1F336;',
        '&#x1F344;',
        '&#x1F95C;',
        '&#x1F35E;',
        '&#x1F950;',
        '&#x1F9C0;',
        '&#x1F356;',
        '&#x1F357;',
        '&#x1F354;',
        '&#x1F35F;',
        '&#x1F355;',
        '&#x1F32D;',
        '&#x1F32E;',
        '&#x1F373;',
        '&#x1F958;',
        '&#x1F372;',
        '&#x1F957;',
        '&#x1F37F;',
        '&#x1F358;',
        '&#x1F35A;',
        '&#x1F35C;',
        '&#x1F35D;',
        '&#x1F363;',
        '&#x1F366;',
        '&#x1F368;',
        '&#x1F369;',
        '&#x1F36A;',
        '&#x1F382;',
        '&#x1F370;',
        '&#x1F36B;',
        '&#x1F36D;',
        '&#x1F36F;',
        '&#x1F37C;',
        '&#x1F95B;',
        '&#x2615;',
        '&#x1F375;',
        '&#x1F378;',
        '&#x1F379;',
        '&#x1F37D;',
        '&#x1F383;',
        '&#x1F384;',
        '&#x1F386;',
        '&#x1F388;',
        '&#x1F389;',
        '&#x1F38A;',
        '&#x1F380;',
        '&#x1F381;',
        '&#x1F3AB;',
        '&#x1F3C6;',
        '&#x1F947;',
        '&#x26BD;',
        '&#x26BE;',
        '&#x1F3C0;',
        '&#x1F3D0;',
        '&#x1F3C8;',
        '&#x1F3BE;',
        '&#x1F3B3;',
        '&#x1F94A;',
        '&#x1F94B;',
        '&#x1F3A3;',
        '&#x1F3BD;',
        '&#x1F3BF;',
        '&#x1F93A;',
        '&#x1F3C7;',
        '&#x26F7;',
        '&#x1F3C2;',
        '&#x1F3CC;',
        '&#x1F3C4;',
        '&#x1F6A3;',
        '&#x1F3CA;',
        '&#x26F9;',
        '&#x1F6B4;',
        '&#x1F938;',
        '&#x1F93C;',
        '&#x1F939;',
        '&#x1F3AE;',
        '&#x1F3B2;',
        '&#x1F0CF;',
        '&#x1F30D;',
        '&#x1F30E;',
        '&#x1F30F;',
        '&#x1F5FA;',
        '&#x1F3D4;',
        '&#x26F0;',
        '&#x1F30B;',
        '&#x1F5FB;',
        '&#x1F3D5;',
        '&#x1F3D6;',
        '&#x1F3DC;',
        '&#x1F3DD;',
        '&#x1F3DE;',
        '&#x1F3DF;',
        '&#x1F3DB;',
        '&#x1F3D8;',
        '&#x1F3DA;',
        '&#x1F3E1;',
        '&#x1F3E2;',
        '&#x1F3E5;',
        '&#x1F3E6;',
        '&#x1F3E8;',
        '&#x1F3EB;',
        '&#x1F3F0;',
        '&#x1F5FD;',
        '&#x26F2;',
        '&#x26FA;',
        '&#x1F301;',
        '&#x1F303;',
        '&#x1F304;',
        '&#x1F305;',
        '&#x2668;',
        '&#x1F3A0;',
        '&#x1F3A1;',
        '&#x1F3A2;',
        '&#x1F3AA;',
        '&#x1F3AD;',
        '&#x1F3A8;',
        '&#x1F682;',
        '&#x1F683;',
        '&#x1F684;',
        '&#x1F686;',
        '&#x1F69E;',
        '&#x1F68C;',
        '&#x1F691;',
        '&#x1F692;',
        '&#x1F693;',
        '&#x1F695;',
        '&#x1F697;',
        '&#x1F699;',
        '&#x1F69A;',
        '&#x1F69C;',
        '&#x1F6F5;',
        '&#x1F3CE;',
        '&#x1F68F;',
        '&#x1F6A7;',
        '&#x1F6A6;',
        '&#x2693;',
        '&#x26F5;',
        '&#x1F6F6;',
        '&#x1F6A4;',
        '&#x2708;',
        '&#x1F6EB;',
        '&#x1F6EC;',
        '&#x1F681;',
        '&#x1F680;',
        '&#x1F6F0;',
        '&#x1F6AA;',
        '&#x1F6CF;',
        '&#x1F6CB;',
        '&#x1F6BF;',
        '&#x1F6C1;',
        '&#x23F3;',
        '&#x23F0;',
        '&#x1F551;',
        '&#x1F311;',
        '&#x1F312;',
        '&#x1F313;',
        '&#x1F314;',
        '&#x1F315;',
        '&#x1F319;',
        '&#x1F31A;',
        '&#x1F31B;',
        '&#x1F321;',
        '&#x2600;',
        '&#x1F31D;',
        '&#x2B50;',
        '&#x1F320;',
        '&#x2601;',
        '&#x26C5;',
        '&#x26C8;',
        '&#x1F327;',
        '&#x1F328;',
        '&#x1F329;',
        '&#x1F32A;',
        '&#x1F32B;',
        '&#x1F308;',
        '&#x1F302;',
        '&#x2614;',
        '&#x26A1;',
        '&#x2744;',
        '&#x2603;',
        '&#x2604;',
        '&#x1F525;',
        '&#x1F4A7;',
        '&#x1F509;',
        '&#x1F4E3;',
        '&#x1F514;',
        '&#x1F3BC;',
        '&#x1F3B6;',
        '&#x1F3A7;',
        '&#x1F4FB;',
        '&#x1F3B7;',
        '&#x1F3B8;',
        '&#x1F3B9;',
        '&#x1F3BA;',
        '&#x1F3BB;',
        '&#x1F941;',
        '&#x1F4F1;',
        '&#x1F50B;',
        '&#x1F50C;',
        '&#x1F4BB;',
        '&#x1F5A5;',
        '&#x1F3A5;',
        '&#x1F39E;',
        '&#x1F3AC;',
        '&#x1F4F7;',
        '&#x1F4F8;',
        '&#x1F50E;',
        '&#x1F52C;',
        '&#x1F52D;',
        '&#x1F4E1;',
        '&#x1F56F;',
        '&#x1F4A1;',
        '&#x1F526;',
        '&#x1F4D5;',
        '&#x1F4D6;',
        '&#x1F4DA;',
        '&#x1F4F0;',
        '&#x1F4B0;',
        '&#x1F4B5;',
        '&#x1F4B8;',
        '&#x2709;',
        '&#x1F4E7;',
        '&#x1F4E9;',
        '&#x1F4E6;',
        '&#x1F4EB;',
        '&#x270F;',
        '&#x1F4BC;',
        '&#x1F4C5;',
        '&#x2702;',
        '&#x1F512;',
        '&#x1F513;',
        '&#x1F50F;',
        '&#x1F510;',
        '&#x1F511;',
        '&#x1F5DD;',
        '&#x1F528;',
        '&#x2694;',
        '&#x1F527;',
        '&#x2696;',
        '&#x1F517;',
        '&#x1F489;',
        '&#x1F48A;',
        '&#x26B0;',
        '&#x26B1;',
        '&#x1F5FF;',
        '&#x1F6E2;',
        '&#x1F52E;',
        '&#x1F6D2;',
        '&#x1F4A3;',
        '&#x1F4A5;'
    ];


    var emojiStories = [
        ["&#x1F3D5; &#x1F46B; &#x1F432; &#x1F631;"],
        ["&#x1F934; &#x1F478; &#x1F6F6; &#x1F420; &#x1F42C; &#x1F3DD;"],
        ["&#x23F0; &#x1F6CF; &#x1F6B6; &#x1F327; &#x1F302; &#x1F914; &#x1F3E1; &#x1F62E;"],
        ["&#x1F332; &#x1F333; &#x1F42D; &#x1F422; &#x1F407; &#x23F3;"],
        ["&#x1F320; &#x1F6CF; &#x1F647; &#x1F47D; &#x1F916; &#x1F632;"],
        ["&#x1F329; &#x1F319; &#x1F46B; &#x1F3F0; &#x1F526; &#x1F47B; &#x1F578; &#x1F933;"],
        ["&#x1F471; &#x1F31A; &#x1F52D; &#x2604; &#x1F632; &#x1F385; &#x1F607;"],
        ["&#x1F43B; &#x1F43E; &#x1F440; &#x1F36F; &#x1F41D; &#x1F631;"],
        ["&#x1F3E1; &#x1F647; &#x1F914; &#x1F3C3; &#x1F3AD; &#x1F4F8;"],
        ["&#x1F940; &#x1F64D; &#x1F4A7; &#x1F337; &#x1F481; &#x1F33A;"],
        ["&#x1F46B; &#x1F45F; &#x1F383; &#x1F303; &#x1F440; &#x1F984;"],
        ["&#x1F680; &#x1F319; &#x1F47D; &#x1F62E; &#x1F4A4; &#x1F6CF; &#x1F60A;"],
    ];



    
    //add random emoji story senctence with the each click/tap
    function emojiStorifier() {
        let randomizer = Math.floor(Math.random() * emojiStories.length);
        let element = document.getElementById("emojistoriesbed");
        document.getElementById('emojistoriesbed').innerHTML = emojiStories[randomizer];
        element.classList.add("fadeIn2");
        $('.fadeIn2').hide().fadeIn(500);
        twemoji.parse(document.body);
    }
    document.getElementById('emojiStorifier').addEventListener('click', emojiStorifier);



}); // end ready