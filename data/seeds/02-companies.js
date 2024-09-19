/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('companies').del()
  await knex('companies').insert([
    {
      "name": "Diana Anderson",
      "address": "3238 Sarah Keys\nSouth Michaelborough, CT 68344",
      "email": "jenniferwalters@gmail.com",
      "password": "$bFG%AN4R0",
      "phone": "318.216.5799",
      "active": true
    },
    {
      "name": "Heather Fitzgerald",
      "address": "24331 Andrew Brook Suite 800\nRichardview, IL 82548",
      "email": "watkinskristin@hotmail.com",
      "password": "#@^#cKoQM0",
      "phone": "+1-688-207-8836x19590",
      "active": true
    },
    {
      "name": "Brian Stephens",
      "address": "61521 Pennington Circles\nHolderview, GA 29776",
      "email": "robertnolan@gutierrez.info",
      "password": "fL6i&#Rfg$",
      "phone": "(399)706-4210x97158",
      "active": true
    },
    {
      "name": "Kelly Miller",
      "address": "89484 English View\nSextonside, PA 25231",
      "email": "teresapadilla@mullen.com",
      "password": "d22Bc76w@3",
      "phone": "931.739.0436x9149",
      "active": true
    },
    {
      "name": "Jim Rhodes",
      "address": "Unit 7848 Box 8499\nDPO AA 53587",
      "email": "andrewsimmons@hotmail.com",
      "password": "$T3DPhtL5D",
      "phone": "944.498.5679x3293",
      "active": true
    },
    {
      "name": "Stacy Lewis",
      "address": "7996 Walker Pass\nWest Jessicachester, NJ 38306",
      "email": "olowe@jones.info",
      "password": "@3JFjMLb7@",
      "phone": "783.739.9632",
      "active": true
    },
    {
      "name": "Michael Nguyen",
      "address": "804 Barry Ford Apt. 952\nKathleenport, AZ 96654",
      "email": "hansenrichard@rogers-werner.info",
      "password": "!Y!3H@zn8L",
      "phone": "001-853-272-8160",
      "active": true
    },
    {
      "name": "Rachel Myers",
      "address": "USNV Hall\nFPO AE 06408",
      "email": "toddrobinson@gmail.com",
      "password": "wXc^$GXK@6",
      "phone": "001-694-118-1430x664",
      "active": true
    },
    {
      "name": "Robert Martin",
      "address": "171 Kim Tunnel\nFloresborough, WV 12605",
      "email": "angela28@yahoo.com",
      "password": "XYWP1fs3+0",
      "phone": "010-361-8538",
      "active": true
    },
    {
      "name": "Drew Jackson",
      "address": "1100 Bishop Road\nSouth Christopherton, NE 05847",
      "email": "antoniojones@ingram.com",
      "password": "Twt0oB+#R(",
      "phone": "001-282-790-9004x84516",
      "active": true
    },
    {
      "name": "Lindsey Hall",
      "address": "615 Hernandez Springs\nNew Rodneyshire, GA 52738",
      "email": "vwilkins@hotmail.com",
      "password": "9*8HrBmO2Q",
      "phone": "714-600-6710x2977",
      "active": true
    },
    {
      "name": "Susan Murray",
      "address": "0370 Berry Common\nGloriaville, NM 70485",
      "email": "cassandra94@frey.biz",
      "password": "+9W7vV6Bh*",
      "phone": "1034463479",
      "active": true
    },
    {
      "name": "Jacob Newton",
      "address": "96247 Long Course Apt. 628\nNew Brian, AR 86663",
      "email": "erikdalton@larson-mcbride.org",
      "password": "*j1OPacn_6",
      "phone": "001-877-061-3036",
      "active": true
    },
    {
      "name": "Clinton Nelson",
      "address": "43550 James Union\nMedinaville, WA 21148",
      "email": "stephenbrady@gmail.com",
      "password": "1Q)m8CJh^F",
      "phone": "4904353209",
      "active": true
    },
    {
      "name": "Cassandra Calhoun",
      "address": "7880 Hoffman Mission Apt. 479\nGalvanmouth, CO 84710",
      "email": "yvonneolson@rojas.com",
      "password": "^_BjBaoR12",
      "phone": "766.016.8724x41320",
      "active": true
    },
    {
      "name": "Jonathan Edwards",
      "address": "48426 Lauren Stravenue\nStevenstad, NM 99778",
      "email": "melindaclark@moore-cooley.com",
      "password": "GsXM1W^fj$",
      "phone": "659-533-3723",
      "active": true
    },
    {
      "name": "Edward Griffin",
      "address": "044 Short Ports Suite 950\nLindsayland, KY 94145",
      "email": "lunaamy@barnes-hughes.com",
      "password": "&n2UoGijz*",
      "phone": "312-128-7536",
      "active": true
    },
    {
      "name": "Cathy Parker",
      "address": "423 Russell Curve Apt. 416\nWest Jessica, OH 56555",
      "email": "clifford49@marshall.biz",
      "password": "m1cZHIEp%r",
      "phone": "6694049916",
      "active": true
    },
    {
      "name": "Charles Ramirez",
      "address": "5905 Kristen Route\nShannonstad, NE 71542",
      "email": "danielburgess@gmail.com",
      "password": "+7y5#E+jNR",
      "phone": "704.246.8512",
      "active": true
    },
    {
      "name": "Lisa Moore",
      "address": "651 Justin Stream\nClaytonchester, LA 02599",
      "email": "annettemaldonado@yahoo.com",
      "password": "iYTabI2%$6",
      "phone": "501-217-4052",
      "active": true
    },
    {
      "name": "Heidi Collins",
      "address": "11208 Arthur Valleys Suite 245\nNew Nicholasstad, AZ 10649",
      "email": "martinpark@gmail.com",
      "password": "fLW4Jjl_y@",
      "phone": "374.069.6266x509",
      "active": true
    },
    {
      "name": "Brandon Brown",
      "address": "PSC 7412, Box 2555\nAPO AP 61598",
      "email": "jeffreydecker@hotmail.com",
      "password": "%!K0LGb(oX",
      "phone": "(910)331-1213x3067",
      "active": true
    },
    {
      "name": "Travis Frank",
      "address": "33075 Michael Island Suite 801\nEast David, OK 21755",
      "email": "rmarsh@hotmail.com",
      "password": "91__NYBP(d",
      "phone": "170.444.0413x281",
      "active": true
    },
    {
      "name": "Deborah Trujillo",
      "address": "1940 Kelly Pines Suite 434\nKatherineshire, MS 66176",
      "email": "elliottbrianna@hammond-smith.com",
      "password": "t5tGBGvL&e",
      "phone": "4342565938",
      "active": true
    },
    {
      "name": "James Young",
      "address": "00064 Adam Ford\nHayshaven, MS 26253",
      "email": "daughertybonnie@hotmail.com",
      "password": "oD1zT_xyt@",
      "phone": "973.302.3971",
      "active": true
    },
    {
      "name": "Rose Weiss",
      "address": "140 Caitlyn Plain\nEast Andrewborough, ND 35672",
      "email": "travis33@beasley.net",
      "password": "D8gEUltu!B",
      "phone": "001-544-035-0893",
      "active": true
    },
    {
      "name": "Laura Chase",
      "address": "42746 Michele Manors Suite 902\nJamesville, ID 07456",
      "email": "josepierce@yahoo.com",
      "password": "@1n)1S92jP",
      "phone": "8821729676",
      "active": true
    },
    {
      "name": "Jessica Diaz",
      "address": "568 Rebekah Ville Suite 444\nWest Alanfort, ID 84101",
      "email": "uvargas@hotmail.com",
      "password": "Hv%^1OAd_U",
      "phone": "302-601-1607",
      "active": true
    },
    {
      "name": "Kristina White",
      "address": "65941 Singleton Track\nTracifort, IL 07013",
      "email": "ashley09@green.com",
      "password": "pVNFKeZ@$5",
      "phone": "3608788359",
      "active": true
    },
    {
      "name": "Sandra Gould",
      "address": "PSC 5219, Box 8674\nAPO AA 67140",
      "email": "bishoperic@coleman-manning.com",
      "password": "A0SUirHK%2",
      "phone": "762.624.1939",
      "active": true
    }
  ]);
};
