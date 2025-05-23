'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a03fab9198408b8cba6f03ec811c622b",
"version.json": "1eb8f12352611db6b3dd704792ab4fed",
"index.html": "75379085ad5f3bcc9d8b2967474e9f45",
"/": "75379085ad5f3bcc9d8b2967474e9f45",
"firebase-messaging-sw.js": "41062c5a0aa18b8f3201b2eb0add801e",
"main.dart.js": "d8bd1538fda99399780748ae81c622ac",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "9a3d312a1fe16dff8061a8c82cb2738f",
"icons/favicon-16x16.png": "cc01931ef253eb2d3c8b9e491285a6e4",
"icons/favicon.ico": "3319c69f48687388248a5259c9c0a6e1",
"icons/apple-touch-icon.png": "911198977c2a9d7ae4e4adfb77ff8e1b",
"icons/apple-icon.png": "2b424cee30868e3b4dc79e1a3ef0f138",
"icons/apple-icon-144x144.png": "8ec03f106041599955546af96066f5a2",
"icons/android-icon-192x192.png": "60b6ac6fb5370908f6a17912c1332c29",
"icons/apple-icon-precomposed.png": "2b424cee30868e3b4dc79e1a3ef0f138",
"icons/apple-icon-114x114.png": "a1f619b8b7aa9bf64fb596f89ec08ffb",
"icons/Icon-192.png": "1e82f8dc3e4ac44e2b46827088a2618a",
"icons/Icon-maskable-192.png": "1e82f8dc3e4ac44e2b46827088a2618a",
"icons/apple-icon-57x57.png": "4f09a3076f5d5c6360df90aab82bcb10",
"icons/apple-icon-152x152.png": "22f70986a51e8f15ff4a2fe18f0419a3",
"icons/android-icon-72x72.png": "bbceb57590e77d582eb20cbcd14ee64d",
"icons/android-icon-96x96.png": "582f065c52e7971ad91d5bd353e6fc65",
"icons/android-icon-36x36.png": "0d38c2a2e78566699d80e271b0865b55",
"icons/apple-icon-180x180.png": "a75caab31babe245fdffcb16c18b06f2",
"icons/favicon-96x96.png": "61a706496d5225fb6383978548833535",
"icons/android-icon-48x48.png": "37c2bb527747dc089cb8e1a370d5443a",
"icons/apple-icon-76x76.png": "899aea91af4bcb78e55bd61564288efa",
"icons/apple-icon-60x60.png": "9e89fd9fa0f8f6d4faa9eb6b9855ad6e",
"icons/Icon-maskable-512.png": "f05ce25da6e4b673a131580d51295f24",
"icons/android-icon-144x144.png": "6c62c4e3dbdc1c17c09abc65880ba93a",
"icons/apple-icon-72x72.png": "046374bb3ac458d7f3c0e3ac89331e20",
"icons/apple-icon-120x120.png": "d81788cd55d4d2ab1a37f545162d9f85",
"icons/Icon-512.png": "f05ce25da6e4b673a131580d51295f24",
"icons/favicon-32x32.png": "9483526573b3641b326a0b75a2ac8495",
"manifest.json": "c4802b9e200569ff9b08f5293916a9ed",
".git/config": "fd1f5df47610472ad510a05cc4eaf745",
".git/objects/0d/4559e0b26247d104e0995410ea509c2a3443fb": "bf579cda3219d1b84fd649cc6cbb99e3",
".git/objects/95/b8b41ac845b9d531d3cf19700573dfa3a66a33": "7def5aa96aaeb4c6646a81ffb23373aa",
".git/objects/92/d7fb9dbd4ee51e01597bb723e94895cfe703e4": "7d048bc361c029fcf8e205532a59cc49",
".git/objects/92/cd87fe7a01b6bfb76805e9b110c8d1d5e766d8": "5e1e9b3caebe6c93bab6c20e2521ca8d",
".git/objects/92/df6e104bbbc22cce09e5b16b7c65fcc97b9c27": "e279a90da323781521e580315c1f58ee",
".git/objects/50/07b3e65b32d179b7198b4e3d594dbb49cf7a1b": "7c6af7387cef5e3c5263a00190ab43a0",
".git/objects/50/43695eb12e78a3cc0e9f160bf3c13abd1c0b47": "759cb5e6072808498d485a31ea7de8e1",
".git/objects/68/a86d97212b89dc64d70e005f8f2c0a38f415e8": "725cdcbdd179c4ca56e41fef5415ebe5",
".git/objects/57/28e65528b9716be8328cd51b5c8ea20c20bfb0": "6899a348eea42e207ba2926df8cd5ad2",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/3b/514635761e738a2698d99fb220706dd1409041": "7358bfba3c1c67944fb0287e81d51d17",
".git/objects/3b/04531e671d940ec1a657c74237e9d4986568bb": "2df929af5c1ce6991264a40247a77490",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/fefc1ee09a11da9a41e4154c94bcf3edafabc1": "757fa6735196eebc0e6cff9a313b80ed",
".git/objects/9b/3392bf9f8f1cdba8b89221f5aed5fd2260b049": "b5ccb88973a1966efb75a6267d268400",
".git/objects/32/b35f57179cfbae6ff2ceb4a08b3c8eb8019ec6": "7c174c7ae0a723cc8054df507c75d92b",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/35/447f9b30ed83be7aa24b79738b6249cf0bb0ab": "aab9336ccdbe91e60ba38c547c18c17a",
".git/objects/69/9a8d91e7bfee115e6ae3979eaeaf37b5b58157": "2d352e75dc59586f5cfcc8882c3b774d",
".git/objects/3c/84665107f17d9ae10c1f08d7ce72b05c028c14": "91bf664ad413c37fed8004f114f9f879",
".git/objects/58/33d03565ae6c3a9c4c0c063e310f41306dbcd4": "a6244f6431caec3be52fe676a8d45c38",
".git/objects/0b/f70373813ac0741f0bfd040ebee50056db5ecd": "293a979475dead7487155595abef7c9a",
".git/objects/0b/f5da392096b1fefaa72fcf77386d3f7bdfec0f": "660f223b9ca4debbf6024ae995b96016",
".git/objects/93/43ffd86436182fbcdbb175881c02239cec3b77": "ca599e863a1b6cc6463a0bd09a31e3a7",
".git/objects/94/2a9de8ba6af3a95c2fc856da89bd84b9d6fe4d": "be099818c0e1cc5f33f3f40dd097ecf8",
".git/objects/0e/f0df4709b63626bf02df26febc98b9ae7e8df8": "c33482aff57e1aeeb28a2542f44466d3",
".git/objects/60/0dd9a8966ab3e5f740e2a34bb5669a35c99bda": "9d803b1b92beec12ab061de43beb218e",
".git/objects/60/323ed6abdf13d27724c20971cae30198b4bebc": "9a2cc7330c419dd0255f26dcd8250b07",
".git/objects/34/4339b7c581091091fd61ff48c7c7f748e53e29": "bc380831921c15f9f824015ffd7ed7f1",
".git/objects/5f/c5a040b0a128a9d82d09fc709a8aabd28c310c": "0bc7f72d73c00fe54c920ba72f2b88dd",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/33/ef539fe1a9fa918f8f8f9f74acf4581d7961b3": "73815322be6e82d6e453c4ba2ffe0c2d",
".git/objects/9d/1e92f6eae52c9f05b274f9bac015124fd730b0": "8aea9d8402ae480f834ef64dbc18da12",
".git/objects/a4/eb632817b41f8ae2702ea15a744a007443cd8d": "843945a6395f77fda951646c4e73c328",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/8721f95d71ff4fc5ebf59ebddbfe816aba49f4": "b9c0e62f058e90a68148e34a52ff15e5",
".git/objects/ac/99dbb3056b52ec2b0f17dc116340ce2bdc657a": "01fb0572389d50a235a48226d0c50ed6",
".git/objects/ad/db7cc0229f6a37470d6c58b25b6f134e2316f1": "587c3b06a331ce015ebbc85d95e439fd",
".git/objects/ad/2c1449d070a2fdb46f6c7a26cf6f1146a7b0ce": "085e48b12821d88cb4449c372cfb7535",
".git/objects/bb/e6ccd5b1d214e454b709e49cee9ddacad835eb": "0b73397562859775c743d5b9eb2da092",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/98b4bd0d41f2747365a789609b50781fc2f370": "2e15ffeca8ee9a5a00ca4fd93bcfbec9",
".git/objects/be/2b756eb4ed4b80b58caee6b078326a731facda": "4e2439ac57086da5e5464024e8a46720",
".git/objects/b3/c290badba29dfde94e89fa28a8806a04d9bf2a": "730d8dda637891de3a8f346a6aaf89ef",
".git/objects/df/e85f9553a43d846bedc18901ceeb20353cbfc9": "ca2d93e0ec92c667d683e71be42fb4f2",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/a5/9264962ff37414e66ffacc2f27c8bbb88c8cc3": "aa0bc96eb3f7fa17637452326365746d",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a5/e4a143f7b6103bfa356b683bf9bf5702229958": "6a25201c73e49df40781518aec83075f",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d1/da7a24891807f24a9ac702707374313b6b4ea5": "b8604ed925c26b2f30f98d008b13aa54",
".git/objects/d1/d890522792ff2b2de97d178482b84bed5609df": "5bd8429b8ad83719dcaa4c4c81c0e36f",
".git/objects/d6/836af6e61d25af11e068836074ecc505a6fc49": "c061ee8433fc72fd85f44f2ce846f6d4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/9efcaa37322d98220f6fd657141ce4fa18ca7c": "877e3e3c3c1512cf84e567959b8616c5",
".git/objects/bc/77192443fc3eafee41ba5dd1a25d26492be841": "885efb550db516c3a9f71e5ddf3a8d2a",
".git/objects/d8/2befbc01c8415503e0c206f20f7366f95ac769": "223980d174e8b5aa2395bb4ee95fd586",
".git/objects/d8/2b81e29cf5f97af5890eb750c072b0278cea24": "7c6ca786cb51f0ed4ce3bbbd90dcbeac",
".git/objects/e5/a8e123a5de33206df3794ecbd1aaa807922957": "6e887542de5236f5da625094326c3c2b",
".git/objects/e5/20eb058dbb4c1f4128e3e5e1edd0e42aeacd8b": "e38395772b44503c25de691efd6c080d",
".git/objects/f4/92826eb936179ac60aa1e1cfaa3cf4698ea0ef": "f933cd461c82672930261973dc830db7",
".git/objects/f4/8ff823d80966ac065c5ef68806bfdb3f31b3f6": "765be95fee0d11d094753239a360409b",
".git/objects/f4/b206a0e80443074ba06c8e38340b93ef9277e3": "142bf10a153ffc547b2033c85fbc4349",
".git/objects/f4/634cd7c3f16e8b1ffd01f2ea4a824b3b25991d": "b81b0f4a4b2e3399239e4b475a3d1a96",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/dfd85020e0ee94d5c27e3bbaf5d5568fc8a6d6": "2b127ed9ad04581bf60b0246d95a3fef",
".git/objects/c0/b7724481506aad674be65590f2274e378cd378": "ce07aa56324bee390c68d5fd3976ab63",
".git/objects/c0/196407197ca39ba1f7eac85d4647ed4a860036": "63ced391dd57bab006304a212579974f",
".git/objects/fd/0d7bb6c4ef8b24a3384c309d13c5f66902156b": "5708a49c142f6e9d34db911dec36896a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e3/323312ee6117622134c3177ae5f375f48b5903": "9cf1ecec089fab253cee02d352d9eb21",
".git/objects/cf/3709d692bd58cc73ab486a56d04fd404722035": "8b8eab90af5aae4e6e2e4192c0d09e3a",
".git/objects/ca/905b3b98153b14930182118ac7b9217553f154": "402070829052e1d6e63153147f2660b6",
".git/objects/e4/751fe5c26d981c5fb2a03046ef428bb68a2fc4": "c13d83b95e4aed72243f7af4da6e7c1d",
".git/objects/ed/771e7c3ce71c8d3b5b3ad98e0d8282644017bb": "059ed7bc8a0b1c20be675ab8a82d0724",
".git/objects/ed/7f8980cd53d01d049c13e804ad6cf01386d261": "1e08b0498b7f22f0292b3e1393bd3848",
".git/objects/ed/4eca1ecfa921f8e5382916b6bc51a39d30a563": "93451ddebbbde51f184c1bd095ba0efd",
".git/objects/c1/d60ce9370048946289af8d3e9fdcb15072b34b": "22e6afae5ebe2aed5500fcbc3e1395ce",
".git/objects/c1/0e38b7118dc20da20c4065103fb953ca3b1c28": "1ae1d9328e42bdd454d54d7d3d53d2c8",
".git/objects/c1/a0ce68b122bb5dbb663504148a5192958262f0": "c353e99ba9cde9e11b52115f79f83252",
".git/objects/4e/19ce43173a7f809d2697fccb05a4e116af9e68": "e0916aa20ab13ef8d25f0d78d9303a6b",
".git/objects/20/44a842785972791bafa81490f5fae7a8b43b35": "376f60b806345eb99a0e91e3b14bd8b4",
".git/objects/20/df0ba3811fe79fbd3625931c9123aa5024548d": "f5869768af45de6a50b115e70fff8bfe",
".git/objects/20/741e6b7125cc39ffffd9c68d70d49fec6b4ea7": "fc628ace4d08048ccf33f76269c2ac52",
".git/objects/18/eae43983a43e83deb38e1f31c0a6a9ed480508": "b44ff712943ae51ee18206a43cf03542",
".git/objects/18/516912afb51cb035da5b90a7b9d6050ab8420b": "b644ebe9ef8e0e454289fc581fd6eb8b",
".git/objects/27/7a841f699569f82803211378dfd8029e7cfa6b": "8f8fd5f2d72bec3fe8fd39872e549594",
".git/objects/11/8c3e729bb7aaf851614d118a5751d272d6b509": "04da3ed070d6e64fc12ef425dd213db5",
".git/objects/7d/64b927bf929c7a6e1842c7de1f4b9f6cb936d8": "79a33e16c14b6e376db17682d26a8c02",
".git/objects/29/57288b5b6cdf0e97e8616701bf2f09e1a277a1": "d741ab87bb995c7578f821c5742d2182",
".git/objects/29/7fbc82830aca861eb162e5d100db94f2337e66": "2f769418f8ce9d51158699ebc6ffa934",
".git/objects/16/e85256e6d48fb18d2db41399aabeb03dc0ecce": "06239a01a477e38c5fcefc71af6c5314",
".git/objects/42/7503ca7310593f39133f18706cb43e79e0096f": "d98bbe3b2b34b2e09d81470af244c8be",
".git/objects/42/f1d39dba74cfb8b69f3986a366ff5b12d74732": "2fb031fc7d147bcdb9fa316ca11ce397",
".git/objects/89/a43432d9c486e6da7d08c45c722786b7a046ff": "9172ad97e2fb5ce10fc831c311d6a6cb",
".git/objects/89/0aa6935017453cdc8afd20add7f39033811282": "d05d5d1a9fcb9527a9f35359ee1f4899",
".git/objects/45/7a01d2f993580e9c2b9bbdde19d41854a7edd6": "670f7c7610e6f879c70e572cfb0f1db4",
".git/objects/1f/59ade536229d35111667e30e0b18463204bd09": "58560d58846e83e7c77c434dc07524c7",
".git/objects/1f/12e79344ee6b47ee6204db29067d91336721e3": "6a6408a104b750c8adc433d10c159a78",
".git/objects/1f/2aa52cfa3be60812563f38dec7c6582784a239": "5d205d30001113ed069acc148e12d89c",
".git/objects/73/bc5c3eec09c981440886696fd5801c66d88dcb": "ab4cfe440383f45bb904680d8e19fd33",
".git/objects/87/b6b54bdbc9f9a3e4a2a268a7d449e003f6a9fb": "5ac43e51d0c13bed0e52e77e92d5d202",
".git/objects/80/a55f8e83327b8dd6bad8460b62c4870b839d45": "b4cdb00f8f7600b662e352576a1576c6",
".git/objects/80/0531084fa6cecc3b7ee732bc66582d0f889aed": "18ca3ebee6bd116d77e00864e95360f4",
".git/objects/1a/6c77839c0efef13827f79d5fa667132c394a46": "862f63b182f1ab8ba26326ef31396b0b",
".git/objects/1a/19d3c4e2cbbde4d8be58a3876fbd38cd0dd0e8": "3031d7ff1726f5fd4ca53e06bfb33d75",
".git/objects/7b/89e7d0cbfe537255e6f788103d3a0b646ebe02": "0b674dcbee7ee8e05a783cc35d997829",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/c89dbc67c569c55f0d2ff8d71af0b94b16adf1": "2ed6951e6061c2a48e37aa71ed78efdb",
".git/objects/8a/8b0505b77700e934afded2b1f282aa6301452f": "d1c9d9ca8d0bc0dfd756fb60f15aa7e8",
".git/objects/10/bbe3c46cbe8738ee62d71b9b3bd2b12d70165a": "d4939e5ac38b6949a07694ec7624b8bf",
".git/objects/10/5d704efd119def130d9538e32548a9777e2588": "e064e6947f8643e1ccf570e98907b062",
".git/objects/19/555ea594e3a511f83ed58f4659029c6584adee": "f5f07ef30a329f0e80211a052d024d26",
".git/objects/21/629fc1c905ddce84be81ad0b013cba5424f430": "91238af56ba568c4c6ce0b479f5fe7b6",
".git/objects/21/b23a3f6530ef0c85115702be5b599e136bf56e": "897eadc92804b81cc73fbf59e25c9312",
".git/objects/75/a0ea2daf27ddff0e1193b4df80f486814db6d2": "fb6384b1e46331aed4b36f426838b2e8",
".git/objects/86/aadd79e5f327f79669bf0fb142616065514a52": "bafd92ccc2ba13fda78146b25ca827ba",
".git/objects/72/2ee13fadf34d3d02bba020d4b65921d1a88522": "7a5cb8ebbb240b7d38c0811ee694f9a0",
".git/objects/72/57037d0311f1e5aec8176c37d18941f8ed3f2c": "9bbc710d8c0b2106e0bcc3dc195b5837",
".git/objects/72/f5d5fbff2d617a9f1a55f9b9f7ae8d97af8320": "f6347e6a89f154634301131159c46265",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/26b40846aae886bb357582b085ebd6bd289600": "ab3c21d56d34c5590d1e5d4e5e6b0c7c",
".git/objects/44/7b0bcd935e7a848d0a26b5fd115b0b311171af": "b96edb76bc95aa507312b010b0be6fab",
".git/objects/43/2d436572500e40573b854cdc1aa6c840304120": "fe155aacf46f99ca8a4edbad1340a987",
".git/objects/88/78ef674cf6c24328b32afc0736cb54d53f42f5": "5164b99040ff2f3bb760d7d71f887790",
".git/objects/88/f2125c1a040cba86bc4bea21e50849eb790510": "a5ea1eba14b9ba494df1ea47a522f944",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/07/d5127c04b17a9a62121d12aeb00b701e920500": "e2a9bf3fec6e17ec821e8b25c7bd1280",
".git/objects/38/a595359d3e00c9f0d2428d58c0a87ee9e844d1": "af9508a351b0fd3ffa81bbe870e6917b",
".git/objects/9a/95f992760fa444a6ad79e31501be4f28b5913c": "889f39434199c128c48ad9c751f2b731",
".git/objects/9a/a18a52464306b13972b5ae6d2860138eb39168": "c29ea1047174e015c86ea45cf98a07fd",
".git/objects/9a/d595964a6b4937a62a2412b544d8c942eed798": "21fbeeb2830872a4fdaffd457e59ceae",
".git/objects/9a/77032eb39dab908a92d89f75c00d970f7bd3c6": "e1c49cc65264a0a48fdb9e8ed1b2a6a5",
".git/objects/5c/a8de579a58308f90b31b00b7d57924fa9a5739": "7d14b8ee828a4ff606e9cfdd506ef9b2",
".git/objects/31/a3e0f1751edf553e5641c1cdeb02d63741f8c1": "f72a750485c5f157dcac903a63d28a19",
".git/objects/31/17e9cfc8a9ad0a609cef647437fb42adaa9159": "bf2f238b9c7566a45d86058f2f3d2179",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/65/6622af9b8f87edcd7134b59c82f61abfba4f6e": "c8b711a035e124a71b5d5fe9310aea60",
".git/objects/65/820b721d815ea39a7a61277dfdee4d00777675": "29eef9e5e9a96d8f4688720b0dbdbf7a",
".git/objects/96/c9931f3dfc00cd55f6d17ffe2a37371de1359b": "9e0cc91bb8976483b022475a8a5d8d99",
".git/objects/96/6ff630de7a141e132c2b201880146dad970cff": "9fa0337a9419a5d0f4ea8804effd561d",
".git/objects/96/4d2f8fbe091cbfaac992e4ae965e230786f027": "8f6ca9411f42b1c6d80818256fffd059",
".git/objects/3a/507776b0d473ba34625ca51126d8daec0e2ed1": "07a671b9e4435186d79988a95d15459c",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/54/340e9387ea91401b19b72fa3f222e5159d62e0": "f2a0f163a29f65999e5642426fd03b73",
".git/objects/98/9be370f03fdf5cb8d57e1929187a5589dc46ee": "e3a93cb796adc2e6adbf169305008aa6",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/53/b2a000f6b4eb193194eb3f374e218da9668fca": "bd5be205172d86ba12a136e563489ad2",
".git/objects/30/db768885f28379b137088d28a667be81ad58f2": "25a770288033422c577cb17f710b1fb8",
".git/objects/30/120e594aa8fd7c054660995bb947e085b6729e": "15a224a66afa833cea01b30fae897407",
".git/objects/5b/37680e392985cc04876472da53445b199c7215": "55d5acfb1a8b265b295afcc048627c21",
".git/objects/5b/8bcece8251b0649bb658c1e0de65bcd2b89701": "680377908a8867f4781613c101b0afe8",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/6d/d925b5b4d7bf2031386a2c6a1834b457ac077f": "6cedf5681cd1980c43939b2ff2b3ee1e",
".git/objects/06/199ea9b9bcbd1e02734647af42b11f80c6c72f": "5cbbdda47a5e88fcf91ab94a671ad560",
".git/objects/6c/b612132f65112a38881e7eb3f6a90007a37edd": "f9358316b99d0e36f0c2c5f2796f1ed4",
".git/objects/52/375a79d724c2a57f7b0c196419778785d83244": "f77dc2e8b76a042829b1b33dfe706dcd",
".git/objects/52/059c3a3da3fed017096a7f9b6189264bda150b": "cc21ad1b7a7096a79889ec3cd9661684",
".git/objects/55/a5ba76672fdf6d597c8db939ed636a14d48759": "dfab32e6efefe385805c4dc4fb7ff306",
".git/objects/97/cf1d05f96690f7f6fa4291fa6af17fe3d1adad": "1b555fe76330279f7e032955725e3996",
".git/objects/63/8345cc3fa610a937e9875f95db3b94978d8890": "6ee32b1b6fe4d1b186892e5ae0f277e6",
".git/objects/63/1c113f85e30428e21c656af56b2b248212c27c": "46af1dcfebacb564dedbe17b5538b388",
".git/objects/0a/8c3cc2e38d7f3838e5f6a08a1e870a11731c38": "3870581adef1c8a1aa3c22c9a76916f9",
".git/objects/0a/ba508eafb4702590c4386bcedc91fa818780d1": "e83c41d3da490f055610e00c998fb0d4",
".git/objects/64/15056bb16d7bd9fcc888912f78bdcf36a644c3": "d11eb56c85ef72e6109080e7d731b68b",
".git/objects/64/6009f3968e2e237003a639c69bcd70305ddee8": "3789a052996bb80c1b2478661e349388",
".git/objects/90/bb7f2e9d7f83d1a267e46a0c153a5a886825e2": "e6c848a7ddb992ead3b6d3c24987fff0",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/bf/bc25ebbdde4c81f8851e1a1d96d4f12b7d7a92": "cde69cd5412ac104e11bf8057a46f798",
".git/objects/bf/63084b6e7afff438c8ce593adf4b9d546ce71b": "b28b54f0a6393dd6a45cde0a1dee5c29",
".git/objects/d3/1b85d7c835b8714e4cf67e5a4a341c1a700aef": "9e0a90db2195e1f3f83fc4d088439759",
".git/objects/d3/23fe467c58378e635d4090346e7517a7ede56e": "d06b0c9cc1afa3c5afb01df6a634e367",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/03c02f62b162b5d3d87b971e75cc519ae9022d": "85cd711208cd4d4f4e08efc7e8cd089b",
".git/objects/ba/6f548fc9fadb6a6f7ea39be68dca64257437a8": "3f1c062a1690c5fdf600002432fe8348",
".git/objects/ba/cfa5ffc4fd79a98ae605b5e46c4b1a6bc4f57b": "4c8a20f886bfe8608cae61ed4e3fc49a",
".git/objects/a7/33643b50778d32961c3a5707a28154f43d3d18": "a40e2582ff3b448fa14592104fec83e0",
".git/objects/b8/8f876f2d8e4393e45b58f6eaf92ba807bf7cec": "8ab0e89f52722e86803fd4fb66b50727",
".git/objects/b8/0aee937bea0c4e9082140e0bf550b3aa07174b": "ecb6bbdefcbac452fcf808f2aa49522a",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/dc/a1a6ebeca18505eb361f2174e4e0efebe616cb": "45e0aa5957dc3e177f9ad06f07b2e915",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/dc/bbb23e3cee65e0afdeb1dfa307e03f12927cbd": "7e5c6cd28bbdee41d6519950e240950c",
".git/objects/b6/31aac14f8da9dade5d32051c23057aba0ed9db": "3bd9afaa217521cf65bf21ca71a0fa0e",
".git/objects/b6/497f9a877d52b75f90cf4bb6a0835d34b9d8f0": "e6ab201b6574cb2f92b1cd6940f99191",
".git/objects/b6/b34d2c7a42e24752ff4cfde1e121e3b2d2fe13": "48b83b04aece7541ff0142ca63c65441",
".git/objects/d5/32799ac090b26f0628f8613cac2276084329c7": "3b1b4d11766fc0680e789fc480da572e",
".git/objects/d5/e8690a6ef4a67b9b57b2970a817f245c4fd744": "646ae75686bcc706364c194762d4689c",
".git/objects/d2/46813172bfbc1f9883163b7872be01582dc6d6": "fa7c265b9b6c9eb30852d96f5a7b3962",
".git/objects/d2/0721980d167dae62cf5bc5eeadb2005770b916": "c370e8e7f8f4c6108228a1ef66c622ad",
".git/objects/aa/c8c2c374fbec3df0172278745b4f3b8989fa86": "9c27cd430f055f910f5d5bc6325945ca",
".git/objects/af/f746ec852c1b0210768eae4d23e7c656d9b9a4": "3cbf9fe175641c14b4bfb59af90d9d5f",
".git/objects/af/5e9a6a90173a8de8b11378fcbca94c944e028c": "11312a3ecd6f62b604f68e427f21846a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/0a281bdacfd3a13300d0cd73c076fdce442244": "be8e67019144501dbabdc046cfb9aacc",
".git/objects/db/66c1ef58dc22ca59f0dd04c756c797a004e839": "1ac9eb9f7c6c3d54e052ca077c8d33d3",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/de/2d42e40f8b58704e3925ed945a4b9619503899": "f524c798f5069404d7d6241dd3138be6",
".git/objects/de/7e5fff3e6532ef8263c107266519d286efb9af": "a6b1f9a77bbb9dc857feed84ecbf2320",
".git/objects/de/de525f9c8fbff7cffb3adcd27a3c04bb53a8f2": "ba3ee50c53fc0fa010befb3e9e955fad",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/e2a4ade05033bfafe35a2617760c5fc530eba5": "14a38181cafdc063c218f82cff3f4946",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/c3/abadf6c34d8f22880a6523f737b754e63cbefb": "e7b59e24f3c5e009b4b0b1e844cd379f",
".git/objects/c4/16e26caa8e7732d0f8093ffa3ef1ab4214d8ee": "b518adaf4784c28a7e59f53accee62aa",
".git/objects/cd/ae2fe3a2784f640c39406309d186607e4871f5": "b3f16ab46ad4cf1b10bd73111ff4b55d",
".git/objects/cc/ec0ed711021c44eaaba8d1806f1d0ca81617d2": "3ce06ef1268d46733a322bc8c05664e6",
".git/objects/cc/1ac660dfd14c4b5b310f62ab837d4622c045d4": "4bbff71ae0cd0b0f2d57c5adaba4ebac",
".git/objects/f9/7172006dcfb76700547e8c3c29dbc16641ebda": "3a4383f5c9b1f3e5bcc6ddddaae65ea4",
".git/objects/f0/94eec601f8823c32385cb37144e4afa924324d": "387975918e89c86856b21e48267179b8",
".git/objects/f0/f160a4600f8249b43f769b0cf7d61c23140da4": "b0e2b7dbba25861f8d538dd3e2edb589",
".git/objects/f7/90820fc3eb1ba84f09526d264b690172b36ed4": "79a2a23650a578f4025124729ee7aa7c",
".git/objects/f7/4aec5e0bbe5e53ff6871f928c2d267e94a8347": "bd95bf410a569bab240cc05992973ba2",
".git/objects/fa/b9e32d36281a09f4d43d3f4c25542ef0a2d944": "b437bc31bf707db64f5a36ed989de88a",
".git/objects/ff/35eb29cfd6e695c3ddcaa93d6033ebd45300e9": "bdf0ed5c566b0564c88bc9f9e864bb16",
".git/objects/c2/6a1e1d2dd746a4e4219ded6d3c488d2e7c2316": "e84b152a3679b65794b57cf44411b3a8",
".git/objects/f6/6df1884ffaf68b5ea8fafcd0c91ac01842afe3": "417c9aa80cbebb143947f3cabc69f0b1",
".git/objects/e7/32d9972e6b2126f0378c05dd28d13bd5dafa2b": "025c4d5170892745ff04c049d7f32c46",
".git/objects/f8/5d29ae5a2803a890cabe77b12b44a67ace8b2d": "cc92ad56839a6296be58baa861f12a31",
".git/objects/ce/9d4c37fd961c3571d2cf67157a4b03df5b2a95": "35f710c8c0a366d4d741fd1c77109c44",
".git/objects/ce/26e2aa813dc1080c0f11699dee004aa9059498": "f6503550ca935855085a804347189d36",
".git/objects/79/4a2957ca1fe42ed08195045c2d7be08f9cb93f": "9ccb4e1655eec8d865b6c1c9a10f3156",
".git/objects/2d/72c0fa6940e70b1d42a3ae96410de69bd07392": "5d18ca11cab7bd2be1d417c551804d56",
".git/objects/41/17f62d1a04bfe940509b7a215b2002cba4697f": "11ea997fc26a39f468df89dbda272035",
".git/objects/77/e8ad1ef528e6d3e00243ad83baf905edcc63b5": "80cba323e4ab3b5fbdb4058b18777e2f",
".git/objects/77/09a3b3412f7c97630e1030c95bc5d8f91c8722": "a88e87ee6a910359c97531759bf5e921",
".git/objects/48/bf573c22bfcd674ca217b44364a31ad105d111": "e02cb0b377d34684cd3af56c64eebc90",
".git/objects/70/a2275f25c4c07964074b5a615ea737bd7cb89c": "6c248835465cd646556e85471d86cfd4",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/24/98d090f8a1f7d40ba6a0c031df07e86e1eac1b": "12c6c183a8c4484dd5d1d65358a5c96e",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/71/9dae3a09e7bb42de90c12810464550f67329b2": "6809c10346c0448870b8132c31f7d73a",
".git/objects/76/cf1aaeb7106a6eeb2657c5a5c014fd3ed9ba33": "2a52f37e87880242d802fcbd66357a1d",
".git/objects/1c/3066a4edcc077d3bf8bb76ba4c37446eaaea06": "215f264d480636703641a836674d63ea",
".git/objects/49/a14065f913b54502add6cd590574bf66749a2f": "8d5fc3a3412d8f7bc3bea3e361d85533",
".git/objects/49/96fcbe7e3274caa616112e870511f6957f32c6": "b8f8ac5d74315fe0a120d7b6634ba0b8",
".git/objects/49/3a840e01505e37390b40f7cde6bd4f5a773531": "fb2d20cb64f25bd36de3c7ab1317a700",
".git/objects/49/d14e872aff2835ae8cdf7e2dde7a53244518db": "7da03f0ea22ae5a53b657f44d85e2c05",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/3aba74ab3d8799749d59c48ecc4cb88e2408b2": "cec3954bdbb7421256bc46321de6b866",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/2b/8f2f8950e50662a927782a0255325af242f79a": "183a0ec698562ea753cd5f0d76e26dca",
".git/objects/47/8c836902a3bb674bfb7818a1560fbbfd189430": "56796071f8a62204c8ffafe19ccf9e36",
".git/objects/47/fdee6786ead528230f19c74345f7c583b1b6b9": "d5418dcc88220ae7add984ed87487a1a",
".git/objects/7f/0c6f62b8e151d091a750c6dc5656c55ba3f97f": "312f657fc4bfe41a09dd61b596792691",
".git/objects/7f/c05bd738b985ac0b575491d82f6e7115c1ae34": "0d8f41ffd51227daef86d418bdd362cc",
".git/objects/7a/3f2d389e0109b51c6687aaf9fc807150648c36": "f0d60b4d40a344a16ff2409863089cfa",
".git/objects/14/d5a2415fd79af4d3906668a18e637bedb0302c": "2239e457a5e71973f8f7f56b6a874c4e",
".git/objects/14/f5920f570a65362a0822d351c2212f920c93bd": "cda523f20464aa008ec6aab7e0a23fa6",
".git/objects/22/97f982a70f35b29e324417ad72c924973ebb07": "a7d714611973428b2417c6fb4552d53b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6e3fe3618d580609695ef8a01481d13a",
".git/logs/refs/heads/main": "6e3fe3618d580609695ef8a01481d13a",
".git/logs/refs/remotes/origin/main": "f7da306f3d8bfd7dc8dd28fce275498f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "dc9319712df96e4b8b7d80aaf6a89a3a",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "bff22a56cae99e478ac195d3729ac799",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "fa1c55571da31db79595062894de1089",
".git/refs/remotes/origin/main": "fa1c55571da31db79595062894de1089",
".git/index": "c0c723cd326a846ce11b8086574a5df3",
".git/COMMIT_EDITMSG": "fdcbf60be9ac0e40573fe7e63bb734c9",
".git/FETCH_HEAD": "d12135d4a9e67cf985dae52af2348170",
"assets/AssetManifest.json": "371e0b393fcc2d9cf47f95835b79641e",
"assets/NOTICES": "6759f6503bcfaf7cdc366ea5effe9ea2",
"assets/FontManifest.json": "64f18e8e66e422aadd18be9a70d63be8",
"assets/AssetManifest.bin.json": "6d73b296bcf907f9a45d6e3a8f47e959",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6284b833aee65a8f601935955df9f72d",
"assets/packages/flutter_iconly/fonts/IconlyLight.ttf": "a2023f2e6ebf4b9fc99a8371297f0265",
"assets/packages/flutter_iconly/fonts/IconlyBroken.ttf": "29154d8260b60657e92db7e3f9003518",
"assets/packages/flutter_iconly/fonts/iconly_bold.ttf": "d8984bdaada3bfac387c9482c753047c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9bfbc26e9dd1055173eef2694b446b1f",
"assets/fonts/QuickSand-Bold.ttf": "e8dcee4bbf2288a2d264c76fa547f37a",
"assets/fonts/QuickSand-Medium.ttf": "fd7f304a26dd790aef9f1ae84403eab3",
"assets/fonts/QuickSand-Regular.ttf": "7194c41ffab51721bd84ca104553c4e1",
"assets/fonts/QuickSand-SemiBold.ttf": "025d26a905aa7e016827cdc2b429552f",
"assets/fonts/QuickSand-Light.ttf": "e60d43df6abf50de0980883f4596e268",
"assets/fonts/MaterialIcons-Regular.otf": "e052076f394d4d70ecde537ebccca711",
"assets/assets/svg/no_data_found.svg": "d5d6ecef814183325e52c8aa210d90b2",
"assets/assets/svg/something_went_wrong.svg": "dd3522c622db9d1f04725a178b767c7e",
"assets/assets/images/attendance_history.png": "c38e4937834ff5a834394f356a12146a",
"assets/assets/images/teams_details.png": "d9f9c35601e07df6f9c9dd30a2d737fd",
"assets/assets/images/app_icon.png": "e576b7ec52b2587cf9cafe3e4549d32b",
"assets/assets/images/payroll.png": "7035cb801cdef2de7dbd17f3ef100acb",
"assets/assets/images/company.png": "2a8877e090a1775a47169cf7ee283f22",
"assets/assets/images/splash_screen.png": "758bb6afcab1b4e2eb6a8ae801819302",
"assets/assets/images/app_logo.png": "b36ec6a27eb7d2a00704f3787cfdd89f",
"assets/assets/images/daily_log.png": "00704689001bb908787719add2c9ada3",
"assets/assets/web.env": "39b0e302942642ae0a2bfcbfe85bc720",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
