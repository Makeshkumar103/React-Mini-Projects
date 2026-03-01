// import sm from "../assets/players/Smriti_Mandhana.jpg";
import rg from "../assets/players/Richa_Ghosh.jpg";
import sp from "../assets/players/Shreyanka_Patil.jpg";
import lb from "../assets/players/Lauren_Bell.jpg";
import gh from "../assets/players/Grace_Harris.jpg";
import ep from "../assets/players/Ellyse_Perry.jpg";
import gv from "../assets/players/Georgia_Voll.jpg";
import ry from "../assets/players/Radha_Yadhav.jpg";
import ls from "../assets/players/Linsey_Smith.jpg";
import ar from "../assets/players/Arundhati_Reddy.jpg";
import pk from "../assets/players/Prathyoosha_Kumar.jpg";
import ag from "../assets/players/Ashleigh_Gardner.jpg";
// import bm from "../assets/players/Beth_Mooney.jpg";
import lw from "../assets/players/Laura_Wolvaardt.jpg";
import pl from "../assets/players/Phoebe_Litchfield.jpg";
import dd from "../assets/players/Kim_Garth.jpg";
import bm from "../assets/players/Beth_Mooney.jpg";
import kg from "../assets/players/Kim_Garth.jpg";
import ka from "../assets/players/Kanika_Ahuja.jpg";
import tk from "../assets/players/Ayushi_Soni.jpg";
import gw from "../assets/players/Georgia_Wareham.jpg";
import as from "../assets/players/Ayushi_Soni.jpg";

  export const teams = [
    {
        id:1,
        name:"Royal Challengers Bangalore",
        shortName:"RCB",
        flag: "../assets/flags/rcb.jpg",
        side: "left",
        players: [
            {
                id: 1,
                name: "Smriti Mandhana",
                role: "Batter",
                image: "../assets/players/Smriti_Mandhana.jpg",
                foreign : false
              },
              {
                id: 2,
                name: "Richa Ghosh",
                role: "All-Rounder",
                image: rg,
                foreign : false
              },
              {
                  id: 3,
                  name: "Shreyanka Patil",
                  role:"All-Rounder",
                  image: sp,
                  foreign: false
              },
              {
                  id: 4,
                  name: "Lauren Bell",
                  role: "Bowler",
                  image: lb,
                  foreign: true
              },
              {
                  id: 5,
                  name: "Grace Harris",
                  role: "All-Rounder",
                  image: gh,
                  foreign: true
              },
              {
                  id: 6,
                  name: "Ellyse Perry",
                  role: "All-Rounder",
                  image: ep,
                  foreign: true
              },
              {
                  id: 7,
                  name: "Georgia Voll",
                  role: "Batter",
                  image: gv,
                  foreign: true
              },
              {
                  id: 8,
                  name: "Radha Yadhav",
                  role: "All-Rounder",
                  image: ry,
                  foreign: false
              },
              {
                  id: 9,
                  name: "Linsey Smith",
                  role: "Bowler",
                  image: ls,
                  foreign: true
              },
              {
                  id: 10,
                  name: "Arundhati Reddy",
                  role: "All-Rounder",
                  image: ar,
                  foreign: false
              },
              {
                  id: 11,
                  name: "Prathyoosha Kumar",
                  role: "Batter",
                  image: pk,
                  foreign: false
              },
        ]
    },
    {
        id:2,
        name:"Gujarat Giants",
        shortName:"GG",
        flag: "../assets/flags/gg.jpg",
        side:"right",
        players: [
            {
                id: 1,
                name: "Ashleigh Gardner",
                role: "All-Rounder",
                image: ag,
                foreign:true
              },
              {
                id: 2,
                name: "Beth Mooney",
                role: "All-Rounder",
                image: bm,
                foreign:true
              },
              {
                  id: 3,
                  name: "Laura Wolvaardt",
                  role: "Batter",
                  image: lw,
                  foreign: true
              },
              {
                  id: 4,
                  name: "Phoebe Litchfield",
                  role: "Batter",
                  image: pl,
                  foreign: true
              },
              {
                  id: 5,
                  name: "Deandra Dottin",
                  role: "All-Rounder",
                  image: dd,
                  foreign: true
              },
              {
                  id: 6,
                  name: "Beth Mooney",
                  role: "Wicket-keeper",
                  image: bm,
                  foreign: true
              },
              {
                  id: 7,
                  name: "Kim Garth",
                  role: "All-Rounder",
                  image: kg,
                  foreign: true
              },
              {
                  id: 8,
                  name: "Kanika Ahuja",
                  role: "All-Rounder",
                  image: ka,
                  foreign: true
              },
              {
                  id: 9,
                  name: "Tanuja Kanwar",
                  role: "Batter",
                  image: tk,
                  foreign: false
              },
              {
                  id: 10,
                  name: "Georgia Wareham",
                  role: "All-Rounder",
                  image: gw,
                  foreign: true
              },
              {
                  id: 11,
                  name: "Ayushi Soni",
                  role: "All-Rounder",
                  image: as,
                  foreign: false
              },
        ]
    }
  ]


// export const teams = [
//     {
//     "teams": [
//       {
//         "id": 1,
//         "name": "Royal Challengers Bangalore",
//         "shortName": "RCB",
//         "flag": "../assets/flags/rcb.jpg",
//         "side": "left",
//         "players": [
//           { "id": 1, "name": "Smriti Mandhana", "role": "Batter", "image": "../assets/players/Smriti_Mandhana.jpg", "foreign": false },
//           { "id": 2, "name": "Richa Ghosh", "role": "All-Rounder", "image": "../assets/players/Richa_Ghosh.jpg", "foreign": false },
//           { "id": 3, "name": "Shreyanka Patil", "role": "All-Rounder", "image": "../assets/players/Shreyanka_Patil.jpg", "foreign": false },
//           { "id": 4, "name": "Lauren Bell", "role": "Bowler", "image": "../assets/players/Lauren_Bell.jpg", "foreign": true },
//           { "id": 5, "name": "Grace Harris", "role": "All-Rounder", "image": "../assets/players/Grace_Harris.jpg", "foreign": true },
//           { "id": 6, "name": "Ellyse Perry", "role": "All-Rounder", "image": "../assets/players/Ellyse_Perry.jpg", "foreign": true },
//           { "id": 7, "name": "Georgia Voll", "role": "Batter", "image": "../assets/players/Georgia_Voll.jpg", "foreign": true },
//           { "id": 8, "name": "Radha Yadhav", "role": "All-Rounder", "image": "../assets/players/Radha_Yadhav.jpg", "foreign": false },
//           { "id": 9, "name": "Linsey Smith", "role": "Bowler", "image": "../assets/players/Linsey_Smith.jpg", "foreign": true },
//           { "id": 10, "name": "Arundhati Reddy", "role": "All-Rounder", "image": "../assets/players/Arundhati_Reddy.jpg", "foreign": false },
//           { "id": 11, "name": "Prathyoosha Kumar", "role": "Batter", "image": "../assets/players/Prathyoosha_Kumar.jpg", "foreign": false }
//         ]
//       },
//       {
//         "id": 2,
//         "name": "Gujarat Giants",
//         "shortName": "GG",
//         "flag": "../assets/flags/gg.jpg",
//         "side": "right",
//         "players": [
//           { "id": 1, "name": "Ashleigh Gardner", "role": "All-Rounder", "image": "../assets/players/Ashleigh_Gardner.jpg", "foreign": true },
//           { "id": 2, "name": "Beth Mooney", "role": "All-Rounder", "image": "../assets/players/Beth_Mooney.jpg", "foreign": true },
//           { "id": 3, "name": "Laura Wolvaardt", "role": "Batter", "image": "../assets/players/Laura_Wolvaardt.jpg", "foreign": true },
//           { "id": 4, "name": "Phoebe Litchfield", "role": "Batter", "image": "../assets/players/Phoebe_Litchfield.jpg", "foreign": true },
//           { "id": 5, "name": "Deandra Dottin", "role": "All-Rounder", "image": "../assets/players/Kim_Garth.jpg", "foreign": true },
//           { "id": 6, "name": "Beth Mooney", "role": "Wicket-keeper", "image": "../assets/players/Beth_Mooney.jpg", "foreign": true },
//           { "id": 7, "name": "Kim Garth", "role": "All-Rounder", "image": "../assets/players/Kim_Garth.jpg", "foreign": true },
//           { "id": 8, "name": "Kanika Ahuja", "role": "All-Rounder", "image": "../assets/players/Kanika_Ahuja.jpg", "foreign": true },
//           { "id": 9, "name": "Tanuja Kanwar", "role": "Batter", "image": "../assets/players/Ayushi_Soni.jpg", "foreign": false },
//           { "id": 10, "name": "Georgia Wareham", "role": "All-Rounder", "image": "../assets/players/Georgia_Wareham.jpg", "foreign": true },
//           { "id": 11, "name": "Ayushi Soni", "role": "All-Rounder", "image": "../assets/players/Ayushi_Soni.jpg", "foreign": false }
//         ]
//       }
//     ]
//   }
// ]