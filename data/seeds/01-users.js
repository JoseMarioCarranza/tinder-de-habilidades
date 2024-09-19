/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      "first_name": "Makayla",
      "last_name": "Smith",
      "address": "067 Ryan Drive\nSmithborough, UT 78737",
      "email": "lblevins@pennington-harmon.com",
      "password": "IYP0Vc6a&+",
      "phone": "(359)790-4817x584",
      "skills": [
        "PHP",
        "Ruby"
      ],
      "charge_hr": 68.16,
      "avg_points": 2.82
    },
    {
      "first_name": "Pamela",
      "last_name": "Baker",
      "address": "51992 Clark Points Apt. 926\nSeanburgh, VT 44746",
      "email": "patricia83@sampson.info",
      "password": "@%46AicO$z",
      "phone": "001-839-129-3331",
      "skills": [
        "React",
        "Ruby",
        "Node.js"
      ],
      "charge_hr": 134.14,
      "avg_points": 0.96
    },
    {
      "first_name": "Heather",
      "last_name": "Prince",
      "address": "2314 Justin Crossing Suite 459\nMichaelberg, MT 73998",
      "email": "alexanderkristen@yahoo.com",
      "password": "s#b@9TbRf4",
      "phone": "796.566.1382x2579",
      "skills": [
        "Kubernetes",
        "Go",
        "Ruby",
        "Python",
        "HTML"
      ],
      "charge_hr": 31.69,
      "avg_points": 3.66
    },
    {
      "first_name": "Allison",
      "last_name": "Rodriguez",
      "address": "58077 Luis Mount Apt. 329\nDanastad, IN 59961",
      "email": "bdrake@yahoo.com",
      "password": "Vwvf9ZNE$7",
      "phone": "407-598-7938x576",
      "skills": [
        "Kubernetes"
      ],
      "charge_hr": 57.73,
      "avg_points": 1.98
    },
    {
      "first_name": "Molly",
      "last_name": "Mcneil",
      "address": "37314 Paige Burg Apt. 621\nSouth Amyview, AK 09498",
      "email": "moorejonathan@hotmail.com",
      "password": "UIsL&tc((9",
      "phone": "(143)442-1650x239",
      "skills": [
        "PHP"
      ],
      "charge_hr": 56.96,
      "avg_points": 4.46
    },
    {
      "first_name": "Michelle",
      "last_name": "Thomas",
      "address": "6634 Brian Parks Apt. 184\nJermaineland, IL 95073",
      "email": "merrittdiana@browning.com",
      "password": "_lD6UrdiI@",
      "phone": "(592)642-3473x63632",
      "skills": [
        "JavaScript",
        "Python",
        "PHP",
        "Java",
        "Kubernetes"
      ],
      "charge_hr": 128.73,
      "avg_points": 0.44
    },
    {
      "first_name": "Anthony",
      "last_name": "Yates",
      "address": "285 Henry Curve\nEast Patriciashire, WV 25498",
      "email": "dana43@brown.biz",
      "password": "6f7J)sqsF)",
      "phone": "868-625-8660",
      "skills": [
        "Ruby",
        "Angular",
        "HTML",
        "JavaScript",
        "Docker"
      ],
      "charge_hr": 26.09,
      "avg_points": 2.6
    },
    {
      "first_name": "Amy",
      "last_name": "Chan",
      "address": "291 William Inlet\nAdamstad, WY 94070",
      "email": "huntbrian@thomas-bush.biz",
      "password": "^Y7Q1Y$vc5",
      "phone": "834-193-9431x67477",
      "skills": [
        "JavaScript",
        "HTML"
      ],
      "charge_hr": 147.49,
      "avg_points": 4.88
    },
    {
      "first_name": "Ryan",
      "last_name": "Davis",
      "address": "292 Waters Ville Apt. 053\nWest Katrinaville, RI 52915",
      "email": "berryvanessa@smith-ramos.com",
      "password": "#5AWK&Xg(I",
      "phone": "541.942.9452",
      "skills": [
        "CSS"
      ],
      "charge_hr": 85.13,
      "avg_points": 2.74
    },
    {
      "first_name": "Desiree",
      "last_name": "Stuart",
      "address": "15937 Goodman Vista\nChristopherhaven, TX 52684",
      "email": "richardibarra@lee-kelly.com",
      "password": "*@z49REq!$",
      "phone": "001-775-269-4507x5208",
      "skills": [
        "Docker",
        "CSS",
        "React"
      ],
      "charge_hr": 137.7,
      "avg_points": 0.83
    },
    {
      "first_name": "Benjamin",
      "last_name": "Rogers",
      "address": "2758 Powell Road\nSouth Heatherberg, IL 04691",
      "email": "jenniferclark@gmail.com",
      "password": "6^)3cLf+L#",
      "phone": "817.333.9152x105",
      "skills": [
        "C#",
        "SQL",
        "HTML",
        "PHP",
        "Kubernetes"
      ],
      "charge_hr": 134.35,
      "avg_points": 2.4
    },
    {
      "first_name": "Patricia",
      "last_name": "Allen",
      "address": "Unit 3358 Box 6688\nDPO AP 46366",
      "email": "brandon13@maldonado-horne.org",
      "password": "XM#@7XfqiC",
      "phone": "165.683.3861x215",
      "skills": [
        "Python",
        "Kubernetes",
        "Angular",
        "SQL"
      ],
      "charge_hr": 110.87,
      "avg_points": 0.65
    },
    {
      "first_name": "Keith",
      "last_name": "James",
      "address": "2273 Sarah Prairie Suite 002\nSouth Cindyberg, SC 98878",
      "email": "veronicapalmer@yahoo.com",
      "password": "B0#&&Qg%+5",
      "phone": "640-553-3243",
      "skills": [
        "Docker",
        "SQL"
      ],
      "charge_hr": 79.6,
      "avg_points": 0.2
    },
    {
      "first_name": "Jean",
      "last_name": "Brown",
      "address": "6588 Sydney Glen\nGavinmouth, KY 74833",
      "email": "nancyvaldez@hotmail.com",
      "password": "^MdDkZhPD5",
      "phone": "633-695-0797",
      "skills": [
        "Angular",
        "React",
        "Go",
        "HTML",
        "JavaScript"
      ],
      "charge_hr": 145.78,
      "avg_points": 1.07
    },
    {
      "first_name": "Barbara",
      "last_name": "Nichols",
      "address": "6145 Gloria Shoals\nNew Biancaton, LA 34459",
      "email": "solomonlorraine@tran.com",
      "password": "#r4KN$qv1L",
      "phone": "(182)517-8860x23373",
      "skills": [
        "Go",
        "Python",
        "C#"
      ],
      "charge_hr": 76.96,
      "avg_points": 4.9
    },
    {
      "first_name": "Michelle",
      "last_name": "Mckenzie",
      "address": "4065 Joshua Meadow Suite 220\nSouth Patriciafort, NE 18777",
      "email": "carlsonjohn@yahoo.com",
      "password": "Pqb0UFZz7+",
      "phone": "570-161-9947",
      "skills": [
        "Docker"
      ],
      "charge_hr": 102.21,
      "avg_points": 1.52
    },
    {
      "first_name": "Gerald",
      "last_name": "Clark",
      "address": "71643 Ronald Tunnel Suite 307\nEast Joseph, MT 83157",
      "email": "danielflores@andrews.com",
      "password": "E*2Yu^eemE",
      "phone": "8243460111",
      "skills": [
        "HTML",
        "Angular",
        "Go",
        "Node.js"
      ],
      "charge_hr": 42.15,
      "avg_points": 2.29
    },
    {
      "first_name": "Brittany",
      "last_name": "Jones",
      "address": "8305 Brandon Prairie Suite 464\nGoodmanberg, MN 83093",
      "email": "katherine48@watkins.biz",
      "password": "(4HHF5LdcO",
      "phone": "657.030.0284x83852",
      "skills": [
        "Java",
        "Go",
        "React"
      ],
      "charge_hr": 54.57,
      "avg_points": 0.02
    },
    {
      "first_name": "James",
      "last_name": "Leblanc",
      "address": "66194 Sandy Cove\nSouth Travis, ND 14584",
      "email": "cthompson@hotmail.com",
      "password": "#14CPtSoSq",
      "phone": "835-070-1337",
      "skills": [
        "React",
        "CSS",
        "SQL",
        "Java",
        "HTML"
      ],
      "charge_hr": 44.64,
      "avg_points": 0.23
    },
    {
      "first_name": "Nathan",
      "last_name": "Rivera",
      "address": "258 Stacy Alley Apt. 367\nSouth Johnmouth, AK 28052",
      "email": "mathisshane@yahoo.com",
      "password": "+9USHqyFzt",
      "phone": "(792)780-6144",
      "skills": [
        "C#",
        "HTML",
        "JavaScript",
        "Angular",
        "PHP"
      ],
      "charge_hr": 57.86,
      "avg_points": 4.99
    },
    {
      "first_name": "Patrick",
      "last_name": "Bowers",
      "address": "3521 Laura Island Apt. 446\nWest Staceyview, IL 34941",
      "email": "jason74@yahoo.com",
      "password": "CPB0ZRqZ!t",
      "phone": "(881)329-6819x77946",
      "skills": [
        "Python",
        "Java"
      ],
      "charge_hr": 87.71,
      "avg_points": 4.55
    },
    {
      "first_name": "Rachel",
      "last_name": "Davis",
      "address": "3546 Christopher Walks Apt. 746\nEast Kenneth, GA 62100",
      "email": "petersontyler@gmail.com",
      "password": "wU_mSqop#5",
      "phone": "204.384.6754x4129",
      "skills": [
        "JavaScript"
      ],
      "charge_hr": 52.44,
      "avg_points": 2.86
    },
    {
      "first_name": "Michael",
      "last_name": "Macdonald",
      "address": "2106 Amanda Throughway\nPort Wendy, HI 31880",
      "email": "cwyatt@smith-lopez.com",
      "password": "65RUwomi$X",
      "phone": "118-756-3336x5777",
      "skills": [
        "React",
        "CSS",
        "C#"
      ],
      "charge_hr": 115.03,
      "avg_points": 4.25
    },
    {
      "first_name": "Suzanne",
      "last_name": "King",
      "address": "81847 Graham Hollow Apt. 811\nMoraleschester, AZ 32659",
      "email": "leahvazquez@gmail.com",
      "password": "e$v5Ypbw+L",
      "phone": "8471614946",
      "skills": [
        "Node.js",
        "React"
      ],
      "charge_hr": 54.79,
      "avg_points": 1.86
    },
    {
      "first_name": "Kristen",
      "last_name": "Perez",
      "address": "6740 Martin Glens Suite 451\nEast Danielchester, WV 08034",
      "email": "williamstevenson@johnson-madden.org",
      "password": "$3M$Xdgos1",
      "phone": "309.023.5461",
      "skills": [
        "Node.js"
      ],
      "charge_hr": 143.61,
      "avg_points": 0.18
    },
    {
      "first_name": "Katherine",
      "last_name": "Smith",
      "address": "3238 Ruth Club Apt. 399\nLake Tammy, ND 19571",
      "email": "thaynes@henry-peters.com",
      "password": "*$1J7ecSM0",
      "phone": "(826)209-5123",
      "skills": [
        "SQL",
        "Docker",
        "Kubernetes",
        "C#",
        "React"
      ],
      "charge_hr": 47.75,
      "avg_points": 3.62
    },
    {
      "first_name": "Audrey",
      "last_name": "Walters",
      "address": "1344 Michael Summit Suite 496\nMorganmouth, MT 92853",
      "email": "sjohnson@hotmail.com",
      "password": "U@7Ot8bK(_",
      "phone": "357-441-7847",
      "skills": [
        "React"
      ],
      "charge_hr": 35.39,
      "avg_points": 2.93
    },
    {
      "first_name": "Scott",
      "last_name": "Riggs",
      "address": "326 Vargas Freeway\nRobersonside, PA 60368",
      "email": "carl13@patton.info",
      "password": "@1PrB52$Bu",
      "phone": "514.545.6420x9082",
      "skills": [
        "HTML",
        "Ruby",
        "Docker",
        "Go",
        "JavaScript"
      ],
      "charge_hr": 65.05,
      "avg_points": 3.41
    },
    {
      "first_name": "Stephanie",
      "last_name": "Allen",
      "address": "416 Zimmerman Burg\nMossport, AK 94169",
      "email": "erinhayes@shepherd.com",
      "password": "RCqfp5xlp$",
      "phone": "923-522-8560",
      "skills": [
        "Node.js",
        "Go",
        "SQL"
      ],
      "charge_hr": 28.4,
      "avg_points": 1.83
    },
    {
      "first_name": "Karen",
      "last_name": "Williams",
      "address": "5181 Tracy Brook Apt. 419\nRicebury, AK 50349",
      "email": "masonbowen@thompson.com",
      "password": "w(4P^I9lP+",
      "phone": "+1-097-032-7625x3960",
      "skills": [
        "C#",
        "SQL",
        "Kubernetes",
        "Node.js"
      ],
      "charge_hr": 98.46,
      "avg_points": 4.57
    },
    {
      "first_name": "Susan",
      "last_name": "Holt",
      "address": "2053 Hannah Inlet Apt. 286\nChristopherton, IA 87946",
      "email": "anthony31@reyes-craig.biz",
      "password": "_Z3DKzv8ok",
      "phone": "(638)756-8702x179",
      "skills": [
        "CSS",
        "Node.js",
        "React",
        "PHP",
        "Docker"
      ],
      "charge_hr": 26.0,
      "avg_points": 0.06
    },
    {
      "first_name": "Maria",
      "last_name": "Allen",
      "address": "88141 Mark Harbors Apt. 554\nKimberlyport, WY 80250",
      "email": "xwolfe@miller.com",
      "password": "sDN9SntpL)",
      "phone": "5921115539",
      "skills": [
        "Kubernetes",
        "Angular",
        "Python"
      ],
      "charge_hr": 117.16,
      "avg_points": 0.91
    },
    {
      "first_name": "Alexander",
      "last_name": "King",
      "address": "19927 Christopher Route\nWallacebury, MO 06852",
      "email": "corey54@martinez-williams.info",
      "password": "^op3OwmvtF",
      "phone": "+1-856-909-8902x6319",
      "skills": [
        "Kubernetes",
        "C#",
        "Java",
        "Go"
      ],
      "charge_hr": 80.88,
      "avg_points": 1.63
    },
    {
      "first_name": "Lisa",
      "last_name": "Miller",
      "address": "USS Thomas\nFPO AE 99646",
      "email": "rebecca90@yahoo.com",
      "password": "h80M3O3y5^",
      "phone": "233-307-8519",
      "skills": [
        "SQL",
        "Go",
        "HTML"
      ],
      "charge_hr": 44.63,
      "avg_points": 4.51
    },
    {
      "first_name": "Elizabeth",
      "last_name": "Powers",
      "address": "234 Erin Forge\nEast Julieton, KS 71738",
      "email": "opatterson@johnson.org",
      "password": "k+35T62ikP",
      "phone": "704-833-7134",
      "skills": [
        "Python"
      ],
      "charge_hr": 147.63,
      "avg_points": 3.49
    },
    {
      "first_name": "Danielle",
      "last_name": "Jordan",
      "address": "511 Davis Groves Apt. 049\nWest Gregory, MT 71320",
      "email": "garnercarol@hotmail.com",
      "password": "5DZZ1K3l_0",
      "phone": "001-018-060-4169x7754",
      "skills": [
        "Java",
        "Docker"
      ],
      "charge_hr": 42.02,
      "avg_points": 1.14
    },
    {
      "first_name": "Michael",
      "last_name": "English",
      "address": "26250 Alvarez Run Apt. 753\nMarkville, OK 82836",
      "email": "larrymorgan@hotmail.com",
      "password": "@4A1TWwtMb",
      "phone": "(574)368-3474x83367",
      "skills": [
        "CSS",
        "Go",
        "Node.js"
      ],
      "charge_hr": 79.85,
      "avg_points": 1.92
    },
    {
      "first_name": "Shelby",
      "last_name": "Lindsey",
      "address": "655 Larry River Suite 496\nWest Cindyside, NH 03561",
      "email": "isaacsmith@baker.com",
      "password": "(42DmYkD8u",
      "phone": "218-090-0198",
      "skills": [
        "HTML",
        "PHP",
        "Docker",
        "SQL",
        "React"
      ],
      "charge_hr": 99.29,
      "avg_points": 2.94
    },
    {
      "first_name": "Joseph",
      "last_name": "Castillo",
      "address": "881 Williams Road Apt. 566\nEmmatown, AL 34226",
      "email": "kellyjohnson@williams.com",
      "password": "T&jL7YbO%l",
      "phone": "513.864.4142x856",
      "skills": [
        "CSS",
        "Kubernetes"
      ],
      "charge_hr": 114.22,
      "avg_points": 0.82
    },
    {
      "first_name": "David",
      "last_name": "Ruiz",
      "address": "019 George Prairie\nPort Austinport, SC 85178",
      "email": "laurie24@gmail.com",
      "password": "#$2PgdcPH$",
      "phone": "(822)803-4496",
      "skills": [
        "SQL"
      ],
      "charge_hr": 88.77,
      "avg_points": 3.42
    },
    {
      "first_name": "Richard",
      "last_name": "Gray",
      "address": "816 Thomas Common Apt. 753\nTannerchester, WV 42207",
      "email": "michael80@gmail.com",
      "password": "+8fpkRyo*&",
      "phone": "(682)392-2058",
      "skills": [
        "Docker",
        "CSS"
      ],
      "charge_hr": 132.31,
      "avg_points": 3.83
    },
    {
      "first_name": "April",
      "last_name": "Robinson",
      "address": "774 Fletcher Land Suite 715\nMelissaport, ME 96136",
      "email": "conniewilson@lopez.com",
      "password": "DP+7A#b2x9",
      "phone": "993.546.3599",
      "skills": [
        "Angular",
        "Python"
      ],
      "charge_hr": 146.29,
      "avg_points": 2.39
    },
    {
      "first_name": "Priscilla",
      "last_name": "Kelley",
      "address": "USCGC Johnson\nFPO AE 86574",
      "email": "yzavala@gmail.com",
      "password": "8^9_BsoLK7",
      "phone": "001-107-379-4878x10586",
      "skills": [
        "SQL",
        "Node.js",
        "CSS",
        "PHP",
        "React"
      ],
      "charge_hr": 34.42,
      "avg_points": 0.28
    },
    {
      "first_name": "Emily",
      "last_name": "Mendoza",
      "address": "9840 Bradshaw Route\nWilliamsfurt, UT 81890",
      "email": "wardcourtney@gmail.com",
      "password": "%b0)5Bmv4K",
      "phone": "+1-423-898-9152x0691",
      "skills": [
        "PHP",
        "CSS",
        "Angular",
        "SQL"
      ],
      "charge_hr": 132.01,
      "avg_points": 1.17
    },
    {
      "first_name": "Fernando",
      "last_name": "Burgess",
      "address": "560 Harrison Plain\nMeghanfort, MA 35631",
      "email": "joshuahull@jones-newman.info",
      "password": "(+8TRuSuZM",
      "phone": "(072)085-9459",
      "skills": [
        "CSS",
        "Python"
      ],
      "charge_hr": 143.85,
      "avg_points": 1.66
    },
    {
      "first_name": "Jack",
      "last_name": "Rodriguez",
      "address": "Unit 8515 Box 5050\nDPO AP 75602",
      "email": "emilyhunt@kelly.net",
      "password": "!KA8NKjdqs",
      "phone": "054.205.2249x50813",
      "skills": [
        "PHP",
        "C#",
        "Python",
        "Ruby"
      ],
      "charge_hr": 48.75,
      "avg_points": 0.28
    },
    {
      "first_name": "Jose",
      "last_name": "Grant",
      "address": "09669 Molly Camp Suite 828\nKhanhaven, VT 29640",
      "email": "kelly26@hotmail.com",
      "password": "k!9*ENKta+",
      "phone": "(195)115-0870x753",
      "skills": [
        "Node.js",
        "CSS",
        "Kubernetes"
      ],
      "charge_hr": 30.64,
      "avg_points": 3.46
    },
    {
      "first_name": "Frank",
      "last_name": "Shaw",
      "address": "2346 Underwood Wells\nAlexanderport, CA 28518",
      "email": "colemanshelby@gmail.com",
      "password": "&p#O4prQU7",
      "phone": "385.323.4961x37527",
      "skills": [
        "HTML",
        "Java"
      ],
      "charge_hr": 143.6,
      "avg_points": 3.11
    },
    {
      "first_name": "Joseph",
      "last_name": "Wilson",
      "address": "903 Jessica Plains\nJoshuachester, MN 28435",
      "email": "taylorkim@hotmail.com",
      "password": "(HZoU8s$m9",
      "phone": "061-107-7770",
      "skills": [
        "PHP"
      ],
      "charge_hr": 82.92,
      "avg_points": 3.75
    },
    {
      "first_name": "Sarah",
      "last_name": "Sellers",
      "address": "22095 William Groves\nNew Angela, DE 83190",
      "email": "christina54@gmail.com",
      "password": "F__13TStVw",
      "phone": "789.168.4571",
      "skills": [
        "Angular"
      ],
      "charge_hr": 90.24,
      "avg_points": 4.0
    },
    {
      "first_name": "Daniel",
      "last_name": "Martinez",
      "address": "840 Lee Cliffs\nCrystalside, MT 84476",
      "email": "dhart@simon-jones.org",
      "password": "Op(ZX*zy(7",
      "phone": "(041)142-4407x139",
      "skills": [
        "JavaScript",
        "SQL",
        "C#",
        "Node.js"
      ],
      "charge_hr": 23.32,
      "avg_points": 0.73
    },
    {
      "first_name": "Morgan",
      "last_name": "Taylor",
      "address": "Unit 2382 Box 3305\nDPO AP 70036",
      "email": "heather63@hobbs.info",
      "password": "a(2LbIFX*l",
      "phone": "001-690-070-8258x8703",
      "skills": [
        "PHP",
        "Kubernetes"
      ],
      "charge_hr": 65.8,
      "avg_points": 4.21
    },
    {
      "first_name": "Tracy",
      "last_name": "Perez",
      "address": "0782 Harris Drive Apt. 764\nNorth Gregory, IA 89620",
      "email": "elizabethmyers@mcknight-riggs.org",
      "password": "_dLvOIsWA9",
      "phone": "001-455-355-6883x220",
      "skills": [
        "Docker",
        "Ruby",
        "Java",
        "HTML"
      ],
      "charge_hr": 124.79,
      "avg_points": 0.24
    },
    {
      "first_name": "Debra",
      "last_name": "King",
      "address": "860 Matthew Inlet\nCurtisport, MI 98771",
      "email": "leachsean@hotmail.com",
      "password": "6Ek4jQ8k(N",
      "phone": "619.988.6505x378",
      "skills": [
        "Node.js",
        "Java",
        "React"
      ],
      "charge_hr": 134.97,
      "avg_points": 0.68
    },
    {
      "first_name": "Steven",
      "last_name": "Palmer",
      "address": "161 Gregory Burgs Suite 006\nNew Crystal, UT 63876",
      "email": "virginia58@gmail.com",
      "password": "38SxlD(_&k",
      "phone": "+1-712-884-5527",
      "skills": [
        "Docker"
      ],
      "charge_hr": 139.52,
      "avg_points": 3.62
    },
    {
      "first_name": "James",
      "last_name": "Taylor",
      "address": "342 Bryan Village Suite 029\nTerristad, WI 11323",
      "email": "johnodom@yahoo.com",
      "password": "npttf(Wd*2",
      "phone": "461-158-2012x382",
      "skills": [
        "Java",
        "HTML",
        "PHP",
        "Docker",
        "Ruby"
      ],
      "charge_hr": 28.38,
      "avg_points": 2.49
    },
    {
      "first_name": "Caitlin",
      "last_name": "Mcdowell",
      "address": "5385 Aaron Corners Apt. 039\nJamesberg, IL 53761",
      "email": "hopkinsadam@caldwell-ramirez.biz",
      "password": "jr4bNuOq#y",
      "phone": "122-333-4546x56234",
      "skills": [
        "Go",
        "Kubernetes",
        "CSS",
        "Node.js"
      ],
      "charge_hr": 100.24,
      "avg_points": 1.23
    },
    {
      "first_name": "Brenda",
      "last_name": "Herrera",
      "address": "0825 Anthony Ports\nNorth Franciscoberg, MT 84809",
      "email": "collinsjulie@hotmail.com",
      "password": "APP&_vUq(5",
      "phone": "670-115-1969",
      "skills": [
        "SQL"
      ],
      "charge_hr": 120.27,
      "avg_points": 2.66
    },
    {
      "first_name": "Raymond",
      "last_name": "Smith",
      "address": "8370 Ashley Center\nLake Lynn, MT 64894",
      "email": "jimenezjohn@gmail.com",
      "password": "9EzK)2Eg0w",
      "phone": "(897)397-5691x41778",
      "skills": [
        "Python",
        "PHP",
        "SQL",
        "Kubernetes",
        "React"
      ],
      "charge_hr": 54.54,
      "avg_points": 3.44
    },
    {
      "first_name": "Brittney",
      "last_name": "Santos",
      "address": "88385 Barbara Flats\nNorth Timothyfort, SC 59613",
      "email": "fmora@gmail.com",
      "password": "_0bS5Sfc@)",
      "phone": "753.782.5787",
      "skills": [
        "Angular",
        "SQL",
        "React",
        "Kubernetes",
        "Docker"
      ],
      "charge_hr": 109.01,
      "avg_points": 3.48
    },
    {
      "first_name": "Matthew",
      "last_name": "Guzman",
      "address": "5500 Traci Passage\nLongburgh, ME 19176",
      "email": "ryan16@farley.com",
      "password": "A)3SbRcMlo",
      "phone": "+1-753-096-9301",
      "skills": [
        "HTML",
        "Go",
        "SQL"
      ],
      "charge_hr": 44.23,
      "avg_points": 2.1
    },
    {
      "first_name": "Thomas",
      "last_name": "Lewis",
      "address": "773 Steve Knoll Apt. 920\nWardland, GA 63403",
      "email": "joel33@ellis.net",
      "password": "yM+30Cb1up",
      "phone": "312-019-4355",
      "skills": [
        "Kubernetes",
        "SQL",
        "Ruby",
        "Python",
        "Java"
      ],
      "charge_hr": 139.69,
      "avg_points": 1.56
    },
    {
      "first_name": "Tara",
      "last_name": "Long",
      "address": "194 Jackson Meadows\nLake Courtney, MA 29286",
      "email": "michaelallen@gmail.com",
      "password": "^D$5EJzi3o",
      "phone": "849.859.2297",
      "skills": [
        "CSS",
        "PHP",
        "C#"
      ],
      "charge_hr": 50.24,
      "avg_points": 2.34
    },
    {
      "first_name": "Dylan",
      "last_name": "Fisher",
      "address": "529 Sara Brook Apt. 925\nEast Stevenland, OR 82044",
      "email": "wjohnson@holland.com",
      "password": "7%Qh4O5w@B",
      "phone": "5165668016",
      "skills": [
        "HTML",
        "Docker",
        "Go",
        "SQL"
      ],
      "charge_hr": 108.82,
      "avg_points": 4.59
    },
    {
      "first_name": "Luke",
      "last_name": "Berg",
      "address": "74266 Shawn Overpass Suite 293\nKellertown, NM 60178",
      "email": "obrienregina@reynolds.biz",
      "password": "pANZ98Av_@",
      "phone": "294-385-8317x3638",
      "skills": [
        "Node.js",
        "Python",
        "JavaScript",
        "HTML",
        "Java"
      ],
      "charge_hr": 111.79,
      "avg_points": 0.72
    },
    {
      "first_name": "Sean",
      "last_name": "Liu",
      "address": "33856 Jennifer Villages\nSouth Kristyberg, NM 53658",
      "email": "michaela31@griffin-johnson.com",
      "password": "^7Z)oEvNNU",
      "phone": "021.388.0361x73088",
      "skills": [
        "PHP"
      ],
      "charge_hr": 33.9,
      "avg_points": 3.28
    },
    {
      "first_name": "Jeffrey",
      "last_name": "Foster",
      "address": "USCGC Robertson\nFPO AA 22259",
      "email": "kellythomas@hotmail.com",
      "password": "T%9QMtIXMp",
      "phone": "8646440273",
      "skills": [
        "Angular"
      ],
      "charge_hr": 82.62,
      "avg_points": 1.26
    },
    {
      "first_name": "Christina",
      "last_name": "Haynes",
      "address": "5814 Silva Coves\nLake Kimberly, DE 54348",
      "email": "cookemily@kane.net",
      "password": "cQ0VuXfn_(",
      "phone": "721.271.2709x17127",
      "skills": [
        "Node.js",
        "Java",
        "Ruby",
        "Angular",
        "JavaScript"
      ],
      "charge_hr": 72.91,
      "avg_points": 2.89
    },
    {
      "first_name": "Robert",
      "last_name": "Cuevas",
      "address": "21847 Aaron Ways\nLake Colin, KY 64064",
      "email": "david35@adkins.com",
      "password": "0CSyOYuJ%9",
      "phone": "+1-775-155-8039x9775",
      "skills": [
        "React",
        "Java",
        "C#",
        "Python"
      ],
      "charge_hr": 118.41,
      "avg_points": 0.73
    },
    {
      "first_name": "Michael",
      "last_name": "Duffy",
      "address": "Unit 8714 Box 1977\nDPO AA 46931",
      "email": "dvega@yahoo.com",
      "password": "8P%DELxt%g",
      "phone": "001-687-082-7071x57780",
      "skills": [
        "SQL"
      ],
      "charge_hr": 69.99,
      "avg_points": 2.33
    },
    {
      "first_name": "Russell",
      "last_name": "Mccarty",
      "address": "USNV Joyce\nFPO AA 19637",
      "email": "biancamorgan@green-green.net",
      "password": "#vZx7gpX4u",
      "phone": "+1-994-887-6774x2355",
      "skills": [
        "Java",
        "Ruby",
        "SQL"
      ],
      "charge_hr": 20.03,
      "avg_points": 4.98
    },
    {
      "first_name": "Austin",
      "last_name": "Rivera",
      "address": "40411 Johnson Meadows\nChavezberg, WI 82542",
      "email": "kimberlyadams@ray.com",
      "password": "!r_1%xPl7m",
      "phone": "001-808-761-6018x85162",
      "skills": [
        "Go",
        "Python",
        "Kubernetes",
        "React",
        "PHP"
      ],
      "charge_hr": 124.8,
      "avg_points": 2.54
    },
    {
      "first_name": "Raymond",
      "last_name": "Meyer",
      "address": "7411 Leon Inlet Suite 817\nWest Paulburgh, VT 82702",
      "email": "rachelkline@yahoo.com",
      "password": "l7A^AKl#$M",
      "phone": "528-607-7503x69280",
      "skills": [
        "JavaScript",
        "PHP",
        "Angular",
        "Python",
        "Java"
      ],
      "charge_hr": 43.38,
      "avg_points": 0.88
    },
    {
      "first_name": "Laura",
      "last_name": "Jenkins",
      "address": "4652 Molly Grove Apt. 618\nFloresport, OK 51319",
      "email": "brenda07@gmail.com",
      "password": ")7(T+a551j",
      "phone": "353-390-3776",
      "skills": [
        "Go",
        "Kubernetes",
        "C#",
        "Python",
        "SQL"
      ],
      "charge_hr": 53.39,
      "avg_points": 2.19
    },
    {
      "first_name": "Amanda",
      "last_name": "Quinn",
      "address": "PSC 8754, Box 6183\nAPO AE 38797",
      "email": "qscott@gmail.com",
      "password": ")k6vatAa27",
      "phone": "+1-363-619-9536x33113",
      "skills": [
        "Node.js"
      ],
      "charge_hr": 63.87,
      "avg_points": 4.34
    },
    {
      "first_name": "Theresa",
      "last_name": "Torres",
      "address": "9872 Brewer Villages Suite 263\nCampbellburgh, DE 38777",
      "email": "fdean@gmail.com",
      "password": "J1Cagvi__O",
      "phone": "443.628.1746x704",
      "skills": [
        "Java",
        "Angular",
        "Ruby",
        "C#",
        "JavaScript"
      ],
      "charge_hr": 88.96,
      "avg_points": 0.88
    },
    {
      "first_name": "Breanna",
      "last_name": "Jefferson",
      "address": "50741 David Street\nLake Danielstad, TX 88165",
      "email": "ashley19@yahoo.com",
      "password": "rgmvBSd4&3",
      "phone": "731-469-3933x846",
      "skills": [
        "React",
        "HTML",
        "SQL"
      ],
      "charge_hr": 117.85,
      "avg_points": 1.77
    },
    {
      "first_name": "Dalton",
      "last_name": "Gonzalez",
      "address": "356 Brady Forge\nWagnermouth, WI 77589",
      "email": "jeffrey92@johnson.com",
      "password": "P!n@8War+0",
      "phone": "001-514-647-7048",
      "skills": [
        "Java",
        "Node.js"
      ],
      "charge_hr": 64.06,
      "avg_points": 3.71
    },
    {
      "first_name": "Andrea",
      "last_name": "Quinn",
      "address": "22950 Caleb Prairie\nPort Paulmouth, ND 42643",
      "email": "cynthiaparrish@gmail.com",
      "password": "Hy$%53Mjv8",
      "phone": "+1-528-875-4764",
      "skills": [
        "Go",
        "JavaScript",
        "Docker"
      ],
      "charge_hr": 89.65,
      "avg_points": 2.29
    },
    {
      "first_name": "Brenda",
      "last_name": "Hendricks",
      "address": "1552 Juan Stream Apt. 510\nWest Ericfort, NE 72299",
      "email": "ywalker@hotmail.com",
      "password": "i)6^KgvRFS",
      "phone": "695.288.1178",
      "skills": [
        "PHP",
        "Docker"
      ],
      "charge_hr": 21.23,
      "avg_points": 1.5
    },
    {
      "first_name": "Ethan",
      "last_name": "Gordon",
      "address": "Unit 9785 Box 6624\nDPO AP 41255",
      "email": "cheryljones@scott-miller.com",
      "password": "rm3AKJxb^_",
      "phone": "001-362-686-7779x99490",
      "skills": [
        "Node.js",
        "HTML",
        "Python",
        "C#"
      ],
      "charge_hr": 119.9,
      "avg_points": 2.66
    },
    {
      "first_name": "Rachel",
      "last_name": "Ross",
      "address": "116 Collins Oval Apt. 321\nSouth Steventown, VA 46127",
      "email": "susanmack@gmail.com",
      "password": "U0m(7S3e1!",
      "phone": "+1-551-538-4952x0563",
      "skills": [
        "Go"
      ],
      "charge_hr": 131.49,
      "avg_points": 2.33
    },
    {
      "first_name": "Andrew",
      "last_name": "Lynch",
      "address": "3768 Diaz Key\nSouth David, NY 22413",
      "email": "josephdavis@hotmail.com",
      "password": "%$5p$Z2u2e",
      "phone": "5718842775",
      "skills": [
        "Angular",
        "Node.js",
        "Kubernetes",
        "Docker",
        "HTML"
      ],
      "charge_hr": 123.19,
      "avg_points": 2.23
    },
    {
      "first_name": "Dawn",
      "last_name": "King",
      "address": "64890 Deanna Lane\nNew Vicki, KS 80197",
      "email": "xbrown@hotmail.com",
      "password": "Thp1Gs1s!S",
      "phone": "(519)325-0076",
      "skills": [
        "SQL",
        "React"
      ],
      "charge_hr": 56.66,
      "avg_points": 2.18
    },
    {
      "first_name": "Mitchell",
      "last_name": "Smith",
      "address": "USCGC Villa\nFPO AP 57000",
      "email": "danderson@burns.info",
      "password": "_#6dQAnMH5",
      "phone": "+1-838-010-8490x460",
      "skills": [
        "Node.js",
        "C#",
        "Docker",
        "PHP",
        "CSS"
      ],
      "charge_hr": 42.67,
      "avg_points": 0.31
    },
    {
      "first_name": "Dylan",
      "last_name": "Wilcox",
      "address": "9756 Sandra Pine Apt. 628\nRamosfurt, NE 39871",
      "email": "jamie31@hotmail.com",
      "password": ")&Myf%qwI2",
      "phone": "+1-006-547-5044",
      "skills": [
        "Docker",
        "C#",
        "React",
        "Ruby"
      ],
      "charge_hr": 145.11,
      "avg_points": 1.18
    },
    {
      "first_name": "Michael",
      "last_name": "Norris",
      "address": "8882 Hailey Oval\nAmandaborough, VT 06705",
      "email": "michael18@grant-johnston.com",
      "password": "&XBSJQDtR6",
      "phone": "992.209.9907",
      "skills": [
        "Node.js",
        "Angular",
        "HTML",
        "SQL"
      ],
      "charge_hr": 123.02,
      "avg_points": 1.88
    },
    {
      "first_name": "Brian",
      "last_name": "Burns",
      "address": "08158 James Forge\nJohnnyside, LA 25721",
      "email": "charles46@jacobs-valdez.com",
      "password": "c)Y9XsJNpi",
      "phone": "099.493.3553x76296",
      "skills": [
        "SQL",
        "Python",
        "Ruby",
        "CSS"
      ],
      "charge_hr": 94.9,
      "avg_points": 1.29
    },
    {
      "first_name": "Joshua",
      "last_name": "Ward",
      "address": "9915 Harris Green\nNew Danielmouth, ND 46569",
      "email": "vhaynes@garcia-martinez.com",
      "password": "$AoRQ2^+d4",
      "phone": "+1-145-077-0833",
      "skills": [
        "Docker"
      ],
      "charge_hr": 134.68,
      "avg_points": 1.99
    },
    {
      "first_name": "Amber",
      "last_name": "James",
      "address": "5784 Farrell Mountains Apt. 032\nSouth Manuel, VA 25192",
      "email": "parksdawn@yahoo.com",
      "password": "$7Z_Itd@F%",
      "phone": "+1-657-539-8278x4161",
      "skills": [
        "CSS",
        "Node.js",
        "Ruby",
        "Kubernetes"
      ],
      "charge_hr": 44.0,
      "avg_points": 4.44
    },
    {
      "first_name": "Denise",
      "last_name": "Lewis",
      "address": "050 Gonzalez Park\nFoxside, CA 55844",
      "email": "danielwong@jenkins-mclaughlin.info",
      "password": "%78CQmVIdy",
      "phone": "+1-643-096-7713x785",
      "skills": [
        "Angular",
        "Kubernetes",
        "Go",
        "Python"
      ],
      "charge_hr": 64.16,
      "avg_points": 1.57
    },
    {
      "first_name": "John",
      "last_name": "Shaw",
      "address": "92537 Chad Groves Suite 608\nShannonfort, MO 89822",
      "email": "mccoychad@watkins.com",
      "password": "4!H40BL@ml",
      "phone": "+1-039-958-7452x46349",
      "skills": [
        "C#",
        "React",
        "Angular",
        "SQL"
      ],
      "charge_hr": 27.08,
      "avg_points": 1.08
    },
    {
      "first_name": "Corey",
      "last_name": "Johnson",
      "address": "657 Morales Ridge\nNorth David, WA 89832",
      "email": "charlesroberts@gmail.com",
      "password": "x^07XZwc&$",
      "phone": "(510)542-5466",
      "skills": [
        "JavaScript",
        "Angular",
        "SQL"
      ],
      "charge_hr": 95.05,
      "avg_points": 2.88
    },
    {
      "first_name": "Laura",
      "last_name": "Rangel",
      "address": "2439 Richard Ford\nDonnamouth, AZ 87550",
      "email": "davidcruz@vargas-johnson.com",
      "password": "(l05SbM5C!",
      "phone": "(391)197-2591x131",
      "skills": [
        "React",
        "Angular"
      ],
      "charge_hr": 40.75,
      "avg_points": 3.49
    },
    {
      "first_name": "Matthew",
      "last_name": "Olsen",
      "address": "02658 Carter Turnpike\nJuliafurt, CT 15358",
      "email": "williamsjason@richardson-hayden.net",
      "password": "K!rT7Ffgy#",
      "phone": "+1-463-325-8063",
      "skills": [
        "SQL"
      ],
      "charge_hr": 128.54,
      "avg_points": 1.48
    },
    {
      "first_name": "Brian",
      "last_name": "Wagner",
      "address": "USS Rivera\nFPO AA 81942",
      "email": "dliu@lambert-gonzalez.com",
      "password": "*GCT5FPmaI",
      "phone": "304-670-0676x618",
      "skills": [
        "HTML"
      ],
      "charge_hr": 59.15,
      "avg_points": 1.96
    },
    {
      "first_name": "Sean",
      "last_name": "Moody",
      "address": "214 Richard Station Apt. 052\nSmithville, WI 50310",
      "email": "deckerjesus@hotmail.com",
      "password": "7)9IeiKvzM",
      "phone": "(370)167-7966x40872",
      "skills": [
        "HTML",
        "Node.js"
      ],
      "charge_hr": 103.51,
      "avg_points": 4.31
    },
    {
      "first_name": "Margaret",
      "last_name": "Marsh",
      "address": "2669 Wood Pines\nStantonfurt, NY 96801",
      "email": "dustinjones@morales-carter.com",
      "password": "#02OtDTskH",
      "phone": "1636448530",
      "skills": [
        "Docker"
      ],
      "charge_hr": 86.46,
      "avg_points": 3.9
    },
    {
      "first_name": "Bradley",
      "last_name": "Jennings",
      "address": "45448 Nelson Bypass\nNew Williamside, NC 21167",
      "email": "bethtaylor@garcia.org",
      "password": "SEY_1NpViz",
      "phone": "001-739-103-0819x100",
      "skills": [
        "PHP",
        "Node.js"
      ],
      "charge_hr": 112.2,
      "avg_points": 4.35
    },
    {
      "first_name": "Andre",
      "last_name": "Williams",
      "address": "PSC 8543, Box 5469\nAPO AP 52221",
      "email": "gmiller@hotmail.com",
      "password": "8eJCqlpt$b",
      "phone": "(164)879-9128x466",
      "skills": [
        "Java"
      ],
      "charge_hr": 63.57,
      "avg_points": 0.99
    },
    {
      "first_name": "Donna",
      "last_name": "Price",
      "address": "598 Jessica Street\nDickersonshire, OH 39580",
      "email": "christinacruz@hotmail.com",
      "password": "_ecD7qCr$b",
      "phone": "+1-061-833-1767x76731",
      "skills": [
        "HTML",
        "Angular"
      ],
      "charge_hr": 26.76,
      "avg_points": 1.59
    },
    {
      "first_name": "Katherine",
      "last_name": "Martinez",
      "address": "51836 Ashley View\nLake Territown, WI 86822",
      "email": "brookscindy@yahoo.com",
      "password": "(BMNX53ch6",
      "phone": "001-301-618-3496",
      "skills": [
        "Go",
        "Python",
        "CSS"
      ],
      "charge_hr": 46.91,
      "avg_points": 3.47
    },
    {
      "first_name": "Daryl",
      "last_name": "Stephenson",
      "address": "21430 Yang Spurs Apt. 306\nScottton, CO 90045",
      "email": "richard20@hunter-salazar.com",
      "password": "9@8j2UyXOb",
      "phone": "+1-252-807-9480",
      "skills": [
        "Python"
      ],
      "charge_hr": 103.56,
      "avg_points": 3.58
    },
    {
      "first_name": "Kim",
      "last_name": "Mcdonald",
      "address": "87771 Eddie Overpass\nAlvarezside, WA 75579",
      "email": "garrettedward@roberts-ferguson.com",
      "password": "+6wUMt#6Lk",
      "phone": "609.740.0579",
      "skills": [
        "Docker",
        "C#"
      ],
      "charge_hr": 131.36,
      "avg_points": 0.15
    },
    {
      "first_name": "David",
      "last_name": "Tyler",
      "address": "6161 Frazier Wells Apt. 288\nMendezville, OH 94910",
      "email": "daviddorsey@hotmail.com",
      "password": "4*jH6C%k%K",
      "phone": "001-714-616-1138",
      "skills": [
        "Go",
        "Python",
        "Node.js",
        "PHP",
        "Angular"
      ],
      "charge_hr": 125.58,
      "avg_points": 1.26
    },
    {
      "first_name": "David",
      "last_name": "Calderon",
      "address": "8928 Proctor Bridge Suite 823\nMarquezland, UT 57155",
      "email": "carolinegonzalez@gmail.com",
      "password": "5Wd!EWLs&p",
      "phone": "789.093.5523x447",
      "skills": [
        "C#",
        "HTML",
        "Ruby",
        "React",
        "JavaScript"
      ],
      "charge_hr": 48.23,
      "avg_points": 1.38
    },
    {
      "first_name": "Gail",
      "last_name": "Dominguez",
      "address": "4346 Williams Fall Apt. 929\nNew Bryan, CA 59714",
      "email": "bmonroe@gmail.com",
      "password": "$bdm4POr$5",
      "phone": "0086181056",
      "skills": [
        "Docker",
        "CSS",
        "JavaScript",
        "Ruby",
        "Python"
      ],
      "charge_hr": 119.16,
      "avg_points": 2.48
    },
    {
      "first_name": "Kelly",
      "last_name": "Griffin",
      "address": "0087 Brian Streets\nGriffinview, WA 09121",
      "email": "johnhooper@schultz-wise.com",
      "password": "O%OI3YQn@V",
      "phone": "+1-447-941-5947x43859",
      "skills": [
        "Java"
      ],
      "charge_hr": 127.07,
      "avg_points": 3.07
    },
    {
      "first_name": "Ryan",
      "last_name": "Chang",
      "address": "1699 Lowe Locks\nRussellfort, AK 17340",
      "email": "seth50@alvarez-hill.com",
      "password": ")8$69Mj3Nr",
      "phone": "(847)619-1326x80272",
      "skills": [
        "C#",
        "Go",
        "React",
        "Node.js"
      ],
      "charge_hr": 115.53,
      "avg_points": 4.12
    },
    {
      "first_name": "Caitlyn",
      "last_name": "Scott",
      "address": "18801 Kelly Key\nNorth Jorgebury, NC 16842",
      "email": "sgates@cherry.org",
      "password": "_7e7WDkb%0",
      "phone": "001-125-233-6054x881",
      "skills": [
        "Go",
        "React"
      ],
      "charge_hr": 62.21,
      "avg_points": 1.03
    },
    {
      "first_name": "Sarah",
      "last_name": "Anderson",
      "address": "08129 Miranda Canyon\nChristianmouth, MN 18143",
      "email": "washingtonkimberly@hotmail.com",
      "password": "^jp3zCjey6",
      "phone": "530-944-2969",
      "skills": [
        "Node.js",
        "Angular",
        "Kubernetes"
      ],
      "charge_hr": 100.2,
      "avg_points": 3.65
    },
    {
      "first_name": "Wendy",
      "last_name": "Cannon",
      "address": "6903 Shari Gardens\nNorth Aprilbury, OR 08774",
      "email": "troy05@hotmail.com",
      "password": "D^5#s*Un+T",
      "phone": "+1-603-658-8474x8216",
      "skills": [
        "Java",
        "Node.js",
        "Python",
        "JavaScript"
      ],
      "charge_hr": 51.18,
      "avg_points": 2.41
    },
    {
      "first_name": "Christopher",
      "last_name": "Hampton",
      "address": "448 Watson Vista Suite 601\nNorth Ashleyport, ID 46304",
      "email": "milesjoel@santana.com",
      "password": "gNYkCiXD%3",
      "phone": "484-744-8952x17112",
      "skills": [
        "React",
        "PHP"
      ],
      "charge_hr": 61.04,
      "avg_points": 0.37
    },
    {
      "first_name": "Nicole",
      "last_name": "Harris",
      "address": "1159 Daniel Estates Suite 167\nPort David, LA 75258",
      "email": "jkelly@williams-zuniga.org",
      "password": "$ie)j7YrBs",
      "phone": "072-215-6376x44338",
      "skills": [
        "Angular",
        "Docker"
      ],
      "charge_hr": 57.37,
      "avg_points": 2.26
    },
    {
      "first_name": "Brian",
      "last_name": "Lane",
      "address": "68477 Norma Trail\nFritzmouth, HI 12982",
      "email": "oliverblake@hudson.biz",
      "password": "@+8L9BQb7z",
      "phone": "7385579444",
      "skills": [
        "Kubernetes",
        "React",
        "CSS"
      ],
      "charge_hr": 74.02,
      "avg_points": 2.66
    },
    {
      "first_name": "Carolyn",
      "last_name": "Duncan",
      "address": "0235 Brandon Walk Suite 429\nHallville, MI 80607",
      "email": "joseph71@gmail.com",
      "password": "Tx2OrcP@_7",
      "phone": "001-030-656-1919x20623",
      "skills": [
        "CSS",
        "PHP",
        "JavaScript"
      ],
      "charge_hr": 43.02,
      "avg_points": 4.01
    },
    {
      "first_name": "Jason",
      "last_name": "Powell",
      "address": "438 Barbara River\nNorth Amanda, KS 80926",
      "email": "shannon64@long-pineda.com",
      "password": "$zQ*IL!y&8",
      "phone": "(906)249-8259",
      "skills": [
        "Java"
      ],
      "charge_hr": 86.81,
      "avg_points": 1.07
    },
    {
      "first_name": "Laura",
      "last_name": "Nguyen",
      "address": "915 Andrew Highway\nCopelandberg, OH 84477",
      "email": "skirk@martinez-cruz.com",
      "password": "wQ&o*4Qi49",
      "phone": "207.486.4198x483",
      "skills": [
        "Ruby",
        "Python",
        "Java",
        "C#"
      ],
      "charge_hr": 94.25,
      "avg_points": 3.63
    },
    {
      "first_name": "Samuel",
      "last_name": "Williams",
      "address": "85311 Jennifer Knoll\nEast Peter, DE 02217",
      "email": "pjones@juarez.biz",
      "password": "P4yILv&j#U",
      "phone": "537-390-5846",
      "skills": [
        "Go",
        "HTML"
      ],
      "charge_hr": 75.64,
      "avg_points": 4.84
    },
    {
      "first_name": "Lawrence",
      "last_name": "Tucker",
      "address": "05423 Neal Rue Apt. 907\nEast John, MI 40794",
      "email": "rking@rice.org",
      "password": "Y9a8DlFE@6",
      "phone": "001-324-585-7502x511",
      "skills": [
        "Docker",
        "SQL",
        "Ruby",
        "Node.js"
      ],
      "charge_hr": 80.85,
      "avg_points": 0.18
    },
    {
      "first_name": "Manuel",
      "last_name": "Byrd",
      "address": "PSC 1986, Box 6084\nAPO AA 50425",
      "email": "normansamuel@patel.com",
      "password": "@@VC@8Chx0",
      "phone": "4901763979",
      "skills": [
        "React",
        "Go",
        "JavaScript",
        "PHP",
        "Ruby"
      ],
      "charge_hr": 59.97,
      "avg_points": 1.06
    },
    {
      "first_name": "Paul",
      "last_name": "Chase",
      "address": "3792 Becker Extension Suite 949\nWest Jose, DC 68768",
      "email": "fallen@taylor.info",
      "password": "K7z4Xf6W%J",
      "phone": "197.542.0592",
      "skills": [
        "Go"
      ],
      "charge_hr": 107.48,
      "avg_points": 2.39
    },
    {
      "first_name": "Tammy",
      "last_name": "Sellers",
      "address": "6591 Scott Drive\nShermanborough, KS 38468",
      "email": "vjohnston@hotmail.com",
      "password": "g3XoeSby%j",
      "phone": "304.278.5389",
      "skills": [
        "Java",
        "Ruby"
      ],
      "charge_hr": 71.42,
      "avg_points": 4.25
    },
    {
      "first_name": "Lee",
      "last_name": "Smith",
      "address": "285 Hubbard Landing Suite 334\nCarrieton, WA 22648",
      "email": "ecastro@olson.info",
      "password": "0@_^69TsSY",
      "phone": "+1-261-239-4454",
      "skills": [
        "HTML",
        "Angular"
      ],
      "charge_hr": 97.42,
      "avg_points": 2.35
    },
    {
      "first_name": "Holly",
      "last_name": "Brown",
      "address": "4008 Patricia Fort Suite 881\nJamesbury, NJ 30993",
      "email": "pfernandez@gibson-kim.com",
      "password": "$9OR6fsj84",
      "phone": "(281)451-5782x5244",
      "skills": [
        "React"
      ],
      "charge_hr": 86.12,
      "avg_points": 1.59
    },
    {
      "first_name": "Shane",
      "last_name": "Burnett",
      "address": "50143 Mccoy Harbors\nAbigailberg, CT 60159",
      "email": "pruittcynthia@hotmail.com",
      "password": "4P6Aq7eql^",
      "phone": "970.267.3001x43357",
      "skills": [
        "Python",
        "SQL"
      ],
      "charge_hr": 139.93,
      "avg_points": 4.2
    },
    {
      "first_name": "Edward",
      "last_name": "Nguyen",
      "address": "753 Patricia Cape\nBoydfurt, IL 57096",
      "email": "tandrews@gmail.com",
      "password": ")p$kPJY82h",
      "phone": "306-367-0578x2717",
      "skills": [
        "PHP",
        "Kubernetes",
        "Go",
        "Angular",
        "Java"
      ],
      "charge_hr": 74.85,
      "avg_points": 2.49
    },
    {
      "first_name": "Mark",
      "last_name": "Gonzalez",
      "address": "037 Garrett Curve Suite 582\nLake John, OK 36887",
      "email": "rodriguezcarlos@anderson-horton.com",
      "password": "ChOPK1sC@7",
      "phone": "550.722.9773x49941",
      "skills": [
        "HTML",
        "C#",
        "Java"
      ],
      "charge_hr": 134.38,
      "avg_points": 2.49
    },
    {
      "first_name": "Melvin",
      "last_name": "Norton",
      "address": "21807 Nicholas Mission\nLake Alexandrabury, IL 43532",
      "email": "peggyhall@hotmail.com",
      "password": "b8_ta3AhkK",
      "phone": "451-974-6483",
      "skills": [
        "SQL",
        "HTML"
      ],
      "charge_hr": 61.6,
      "avg_points": 2.91
    },
    {
      "first_name": "Andrew",
      "last_name": "Ferrell",
      "address": "3094 Matthew Fall Apt. 331\nNorth Amy, IA 01809",
      "email": "paulhart@wade.com",
      "password": "G+^3F&Mpxw",
      "phone": "4363939517",
      "skills": [
        "Angular",
        "JavaScript"
      ],
      "charge_hr": 98.05,
      "avg_points": 3.88
    },
    {
      "first_name": "Luis",
      "last_name": "Green",
      "address": "212 Anthony Junction Suite 399\nNew Eric, PA 53896",
      "email": "maysamanda@gmail.com",
      "password": "e1g9x6Ts&C",
      "phone": "001-293-468-6668x40558",
      "skills": [
        "Node.js",
        "Docker"
      ],
      "charge_hr": 52.26,
      "avg_points": 4.05
    },
    {
      "first_name": "Cory",
      "last_name": "Wood",
      "address": "77235 Roberts Islands Apt. 591\nNew Davidfort, VT 14834",
      "email": "cmiller@brennan.com",
      "password": "$^RGVfeRC2",
      "phone": "(503)559-0336x2408",
      "skills": [
        "SQL",
        "PHP",
        "Kubernetes",
        "JavaScript",
        "Angular"
      ],
      "charge_hr": 44.74,
      "avg_points": 1.47
    },
    {
      "first_name": "Theresa",
      "last_name": "Brooks",
      "address": "900 Dawn Centers\nJeremiahborough, NC 14461",
      "email": "jacksonmichael@boone-king.com",
      "password": "&X7FnixQ81",
      "phone": "001-561-902-7338x2793",
      "skills": [
        "Go",
        "Ruby",
        "Angular",
        "Node.js"
      ],
      "charge_hr": 149.8,
      "avg_points": 3.41
    },
    {
      "first_name": "Peter",
      "last_name": "Tucker",
      "address": "430 Davis Summit\nNorth Jacquelinechester, WV 94118",
      "email": "yolanda16@gmail.com",
      "password": "*ATE)Zgzz4",
      "phone": "949-255-7194x6779",
      "skills": [
        "SQL",
        "Go",
        "CSS"
      ],
      "charge_hr": 47.21,
      "avg_points": 0.73
    },
    {
      "first_name": "Steven",
      "last_name": "Edwards",
      "address": "35585 Williams Fields\nNorth Williamfort, DC 14774",
      "email": "perezdavid@hotmail.com",
      "password": "_^cKFsVp1(",
      "phone": "940-584-0973x8698",
      "skills": [
        "Kubernetes",
        "Angular",
        "Docker",
        "HTML"
      ],
      "charge_hr": 67.31,
      "avg_points": 3.47
    },
    {
      "first_name": "Billy",
      "last_name": "Smith",
      "address": "Unit 2585 Box 0373\nDPO AE 51262",
      "email": "angelavery@gmail.com",
      "password": "fl^H)7AwcX",
      "phone": "+1-511-897-6553x2598",
      "skills": [
        "CSS",
        "React",
        "Python",
        "Java"
      ],
      "charge_hr": 107.88,
      "avg_points": 2.95
    },
    {
      "first_name": "Cindy",
      "last_name": "Miller",
      "address": "990 Bradley Station Suite 970\nSouth Aliciaberg, GA 34674",
      "email": "virginia88@smith.net",
      "password": "3^8@mSFsTe",
      "phone": "777-437-4788x8972",
      "skills": [
        "SQL",
        "Kubernetes",
        "PHP"
      ],
      "charge_hr": 69.03,
      "avg_points": 3.78
    },
    {
      "first_name": "Christopher",
      "last_name": "Davis",
      "address": "7545 Castro Mountain\nBrownmouth, DC 85363",
      "email": "mark27@yahoo.com",
      "password": "87QtibML^#",
      "phone": "599-624-4895x66138",
      "skills": [
        "Angular"
      ],
      "charge_hr": 142.09,
      "avg_points": 0.44
    },
    {
      "first_name": "Cindy",
      "last_name": "Gordon",
      "address": "872 Kristen Squares Apt. 830\nJosephview, SC 87070",
      "email": "natalie00@yahoo.com",
      "password": "+8$j*Qmy&9",
      "phone": "067.494.6434",
      "skills": [
        "Angular",
        "HTML",
        "React"
      ],
      "charge_hr": 44.62,
      "avg_points": 3.16
    },
    {
      "first_name": "Kelsey",
      "last_name": "Harvey",
      "address": "Unit 3467 Box 5107\nDPO AA 80646",
      "email": "cisnerosashley@ashley.com",
      "password": "NZr#P1Dsea",
      "phone": "679-936-5647",
      "skills": [
        "PHP",
        "HTML",
        "CSS",
        "Node.js"
      ],
      "charge_hr": 21.82,
      "avg_points": 4.57
    },
    {
      "first_name": "Christopher",
      "last_name": "Dougherty",
      "address": "0274 Scott Centers\nNorth Marisaville, WY 24971",
      "email": "zcopeland@gmail.com",
      "password": "4bUWj_wY%i",
      "phone": "+1-558-999-0483x2294",
      "skills": [
        "Python"
      ],
      "charge_hr": 40.14,
      "avg_points": 0.84
    },
    {
      "first_name": "Dana",
      "last_name": "Nichols",
      "address": "111 Cathy Village Suite 345\nNorth Anthonyshire, NJ 15814",
      "email": "robersonmeredith@yahoo.com",
      "password": "cVHAvG6i*4",
      "phone": "969.562.7182x67679",
      "skills": [
        "HTML",
        "Node.js",
        "Ruby",
        "PHP",
        "Kubernetes"
      ],
      "charge_hr": 39.02,
      "avg_points": 0.17
    },
    {
      "first_name": "William",
      "last_name": "Clark",
      "address": "97687 Young Centers\nWilliamsborough, NY 85324",
      "email": "ksellers@hotmail.com",
      "password": "@0CYnm@k^D",
      "phone": "3959144901",
      "skills": [
        "Node.js",
        "JavaScript",
        "HTML",
        "React"
      ],
      "charge_hr": 85.56,
      "avg_points": 0.72
    },
    {
      "first_name": "Mark",
      "last_name": "Benson",
      "address": "PSC 7837, Box 7500\nAPO AP 67401",
      "email": "drakestephen@hotmail.com",
      "password": "Iy^8W4goaG",
      "phone": "057.684.3933x999",
      "skills": [
        "CSS",
        "HTML",
        "PHP"
      ],
      "charge_hr": 123.39,
      "avg_points": 3.99
    },
    {
      "first_name": "William",
      "last_name": "Phillips",
      "address": "11780 Victor Freeway\nEast Edwinview, KY 20406",
      "email": "whitakerpaul@morrison.net",
      "password": "%8KQhr)*I1",
      "phone": "881-268-8533x77959",
      "skills": [
        "Go"
      ],
      "charge_hr": 74.03,
      "avg_points": 0.11
    },
    {
      "first_name": "Seth",
      "last_name": "Campbell",
      "address": "60451 Lopez Landing Suite 944\nNorth Andrewshire, WV 71028",
      "email": "twright@yahoo.com",
      "password": "x8#gDzCn)a",
      "phone": "001-002-466-0873x079",
      "skills": [
        "JavaScript"
      ],
      "charge_hr": 21.88,
      "avg_points": 0.88
    },
    {
      "first_name": "Robert",
      "last_name": "Mcbride",
      "address": "97113 Martin Squares Suite 413\nJudyton, NC 79010",
      "email": "pclark@yahoo.com",
      "password": "M4O^!fwJ+4",
      "phone": "001-300-503-8252x959",
      "skills": [
        "C#",
        "Ruby"
      ],
      "charge_hr": 72.73,
      "avg_points": 1.34
    },
    {
      "first_name": "Kelly",
      "last_name": "Hernandez",
      "address": "PSC 6346, Box 4879\nAPO AP 74090",
      "email": "natasha83@gmail.com",
      "password": "8wSwwT4x!t",
      "phone": "4177159012",
      "skills": [
        "Docker",
        "Kubernetes",
        "HTML"
      ],
      "charge_hr": 37.45,
      "avg_points": 3.36
    },
    {
      "first_name": "Dennis",
      "last_name": "Costa",
      "address": "3119 Lane Unions Suite 326\nEast William, OR 33333",
      "email": "xjones@hotmail.com",
      "password": "Oz8WGvDjI)",
      "phone": "001-063-761-9812x562",
      "skills": [
        "Python",
        "React"
      ],
      "charge_hr": 142.2,
      "avg_points": 4.33
    },
    {
      "first_name": "Joel",
      "last_name": "Sims",
      "address": "48270 Fitzpatrick Ridge Apt. 722\nNew Davidbury, ID 65813",
      "email": "ellisjennifer@gmail.com",
      "password": "Ub8ZFpUq4(",
      "phone": "966.978.9143x6995",
      "skills": [
        "Ruby",
        "CSS",
        "React",
        "HTML",
        "C#"
      ],
      "charge_hr": 50.73,
      "avg_points": 3.49
    },
    {
      "first_name": "Donna",
      "last_name": "Burke",
      "address": "707 West Island Suite 229\nNorth Traci, AL 68915",
      "email": "susan90@owens.net",
      "password": "k@@2#YAmlN",
      "phone": "001-980-715-0875x86861",
      "skills": [
        "JavaScript",
        "Go",
        "Kubernetes"
      ],
      "charge_hr": 67.99,
      "avg_points": 1.25
    },
    {
      "first_name": "Ronald",
      "last_name": "Diaz",
      "address": "32019 Owen Spurs Apt. 130\nLake Josephport, DC 80819",
      "email": "piercedeanna@hotmail.com",
      "password": "I6OjseN4+c",
      "phone": "+1-493-058-1728x09180",
      "skills": [
        "Kubernetes",
        "HTML"
      ],
      "charge_hr": 30.48,
      "avg_points": 1.87
    },
    {
      "first_name": "Scott",
      "last_name": "Acevedo",
      "address": "390 Chavez Court Suite 099\nNorth Cheryl, IN 12292",
      "email": "shane77@knox.org",
      "password": "D8(N66MguE",
      "phone": "+1-436-740-7031x813",
      "skills": [
        "Ruby",
        "Kubernetes",
        "Angular",
        "CSS"
      ],
      "charge_hr": 103.7,
      "avg_points": 4.92
    },
    {
      "first_name": "Jenny",
      "last_name": "Peterson",
      "address": "46025 Cynthia Inlet\nPort William, MI 46990",
      "email": "nicole86@hotmail.com",
      "password": "@n*p3QSpws",
      "phone": "+1-215-323-2709x54994",
      "skills": [
        "Java",
        "PHP"
      ],
      "charge_hr": 73.77,
      "avg_points": 4.43
    },
    {
      "first_name": "Christina",
      "last_name": "Sullivan",
      "address": "USNS Bailey\nFPO AE 39567",
      "email": "owensjames@gmail.com",
      "password": "#vLfr7J^I)",
      "phone": "(382)073-9613x0544",
      "skills": [
        "Docker",
        "Ruby"
      ],
      "charge_hr": 128.02,
      "avg_points": 1.14
    },
    {
      "first_name": "Troy",
      "last_name": "Griffin",
      "address": "88929 Young Crescent Apt. 554\nRamosland, AK 38536",
      "email": "kimberly21@yahoo.com",
      "password": "$Jt^IHiff3",
      "phone": "(300)944-6363x5716",
      "skills": [
        "C#",
        "JavaScript"
      ],
      "charge_hr": 135.47,
      "avg_points": 2.43
    },
    {
      "first_name": "Tina",
      "last_name": "Savage",
      "address": "509 Lucas Causeway\nNorth Scott, VT 09022",
      "email": "miguel84@gmail.com",
      "password": "dK^1+(VbtG",
      "phone": "207-565-8483x241",
      "skills": [
        "Kubernetes",
        "Python",
        "Java",
        "Ruby"
      ],
      "charge_hr": 78.34,
      "avg_points": 2.88
    },
    {
      "first_name": "Christopher",
      "last_name": "Nelson",
      "address": "50730 William Glens\nMichaelburgh, MS 09846",
      "email": "alexander70@gmail.com",
      "password": ")7R#BY2hT5",
      "phone": "(778)940-8544x5659",
      "skills": [
        "Python",
        "Go"
      ],
      "charge_hr": 21.44,
      "avg_points": 0.53
    },
    {
      "first_name": "Christina",
      "last_name": "Stephens",
      "address": "Unit 5427 Box 4826\nDPO AE 12856",
      "email": "cantudana@jones-smith.com",
      "password": "4KMnifd6(O",
      "phone": "+1-480-636-7090x651",
      "skills": [
        "Python",
        "PHP",
        "SQL",
        "React",
        "Docker"
      ],
      "charge_hr": 69.67,
      "avg_points": 0.0
    },
    {
      "first_name": "Julie",
      "last_name": "Sims",
      "address": "07314 Amy Lake\nNorth Stephanie, PA 14357",
      "email": "mcdonaldnoah@mendoza.net",
      "password": "nG0yE3qd$#",
      "phone": "299.711.2660x028",
      "skills": [
        "React",
        "C#",
        "Go"
      ],
      "charge_hr": 118.82,
      "avg_points": 2.67
    },
    {
      "first_name": "Carla",
      "last_name": "Wilkins",
      "address": "5604 John Springs\nPort Carrie, MO 10908",
      "email": "fnorris@leonard.com",
      "password": "^!cpDny2%6",
      "phone": "+1-019-962-5828x7770",
      "skills": [
        "Docker",
        "Python",
        "SQL",
        "React"
      ],
      "charge_hr": 34.26,
      "avg_points": 3.84
    },
    {
      "first_name": "Alvin",
      "last_name": "Smith",
      "address": "52736 Winters Loop\nGonzalesside, NM 33125",
      "email": "mdavies@adams.info",
      "password": "5#i^0OpeDy",
      "phone": "165-265-9581x536",
      "skills": [
        "Ruby",
        "CSS"
      ],
      "charge_hr": 22.14,
      "avg_points": 2.58
    },
    {
      "first_name": "Stephanie",
      "last_name": "Hammond",
      "address": "935 Yoder Mountains Apt. 056\nSouth Donald, ME 95454",
      "email": "floyddavid@yahoo.com",
      "password": "$5YztRh3(B",
      "phone": "905.197.8474",
      "skills": [
        "Angular",
        "Kubernetes"
      ],
      "charge_hr": 90.9,
      "avg_points": 0.87
    },
    {
      "first_name": "William",
      "last_name": "Chavez",
      "address": "88294 Lloyd Rue\nTammyfurt, NC 82190",
      "email": "taguilar@carter.info",
      "password": "^uFCcPa+o9",
      "phone": "+1-275-852-4887x0039",
      "skills": [
        "SQL",
        "Python",
        "Kubernetes",
        "JavaScript"
      ],
      "charge_hr": 75.41,
      "avg_points": 4.45
    },
    {
      "first_name": "Angela",
      "last_name": "Pollard",
      "address": "1491 Stout Club Suite 312\nNew Randallville, OR 67095",
      "email": "onorman@yahoo.com",
      "password": "@!WIXgP8Q7",
      "phone": "+1-438-292-8936x30533",
      "skills": [
        "Java",
        "React"
      ],
      "charge_hr": 88.19,
      "avg_points": 2.11
    },
    {
      "first_name": "Anthony",
      "last_name": "Love",
      "address": "340 Amber Walk Apt. 724\nNew Jared, OR 50457",
      "email": "jasoncarlson@santiago.org",
      "password": "&&Q1Oyn%m2",
      "phone": "001-333-174-9433x8372",
      "skills": [
        "Node.js",
        "Ruby"
      ],
      "charge_hr": 24.26,
      "avg_points": 0.07
    },
    {
      "first_name": "Brent",
      "last_name": "Serrano",
      "address": "06501 Matthew Summit Suite 663\nMyershaven, MI 09007",
      "email": "peterspatty@silva-castro.com",
      "password": "%6_NAyRhmr",
      "phone": "(876)991-9180",
      "skills": [
        "React",
        "JavaScript",
        "Python",
        "Angular"
      ],
      "charge_hr": 40.1,
      "avg_points": 2.82
    },
    {
      "first_name": "Andrea",
      "last_name": "Gilmore",
      "address": "412 Thompson Square Apt. 297\nNew John, ME 75489",
      "email": "diane94@gmail.com",
      "password": "Yr@1JtmR!Z",
      "phone": "192.021.6979x071",
      "skills": [
        "C#",
        "Java",
        "React",
        "HTML"
      ],
      "charge_hr": 81.56,
      "avg_points": 0.96
    },
    {
      "first_name": "Gloria",
      "last_name": "Wise",
      "address": "99922 Miller Gateway Suite 671\nSouth Derrickville, MI 33654",
      "email": "kathleen51@gmail.com",
      "password": "2_8Uqy%tuY",
      "phone": "241-311-8154",
      "skills": [
        "Node.js",
        "Java",
        "HTML",
        "Angular",
        "JavaScript"
      ],
      "charge_hr": 105.63,
      "avg_points": 4.72
    },
    {
      "first_name": "Travis",
      "last_name": "Weber",
      "address": "0721 Martinez Lakes Apt. 713\nSouth Jordanfurt, TN 61368",
      "email": "castilloryan@yahoo.com",
      "password": "%fNdxMd&82",
      "phone": "006.225.2379",
      "skills": [
        "Angular",
        "Node.js",
        "Go"
      ],
      "charge_hr": 87.14,
      "avg_points": 3.83
    }
  ]);
};
