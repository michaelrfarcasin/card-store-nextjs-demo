import { Currency, Item } from './types'


export const currencies: Currency[] = [
  {
    "key": "us",
    "symbol": "$",
    "usdCoef": 1
  },
  {
    "key": "eu",
    "symbol": "€",
    "usdCoef": 0.907907
  },
  {
    "key": "bp",
    "symbol": "£",
    "usdCoef": 0.805220
  },
  {
    "key": "ir",
    "symbol": "₹",
    "usdCoef": 81.844596
  },
  {
    "key": "jy",
    "symbol": "¥",
    "usdCoef": 133.816252
  },
  {
    "key": "cy",
    "symbol": "¥",
    "usdCoef": 6.871441
  }
];


export const items: Item[] = [
  {
    "priceWithShipping": 0.1,
    "productName": "Plains (267) - Full Art",
    "productId": 475524,
    "setName": "Phyrexia: All Will Be One",
    "priceCurrency": "us"
  },
  {
    "priceWithShipping": 0.13,
    "productName": "Mountain (270) - Full Art",
    "productId": 475525,
    "setName": "Phyrexia: All Will Be One",
    "priceCurrency": "us"
  },
  {
    "priceWithShipping": 0.13,
    "productName": "Forest (271) - Full Art",
    "productId": 475523,
    "setName": "Phyrexia: All Will Be One",
    "priceCurrency": "us"
  },
  {
    "priceWithShipping": 0.18,
    "productName": "Island (268) - Full Art",
    "productId": 475526,
    "setName": "Phyrexia: All Will Be One",
    "priceCurrency": "us"
  },
  {
    "priceWithShipping": 0.48,
    "productName": "Swamp (269) - Full Art",
    "productId": 475527,
    "setName": "Phyrexia: All Will Be One",
    "priceCurrency": "eu"
  },
  {
    "priceWithShipping": 0.01,
    "productName": "Plains (262) - Full Art",
    "productId": 475503,
    "setName": "Phyrexia: All Will Be One",
    "priceCurrency": "eu"
  },
  {
    "priceWithShipping": 0.01,
    "productName": "Mountain (265) - Full Art",
    "productId": 475501,
    "setName": "Phyrexia: All Will Be One",
    "priceCurrency": "eu"
  },
  {
    "priceWithShipping": 0.01,
    "productName": "Swamp (264) - Full Art",
    "productId": 475502,
    "setName": "Phyrexia: All Will Be One",
    "priceCurrency": "eu"
  },
  {
    "priceWithShipping": 0.28,
    "productName": "Swamp (237) (Borderless)",
    "productId": 256994,
    "setName": "Unfinity",
    "priceCurrency": "bp"
  },
  {
    "priceWithShipping": 0.2,
    "productName": "Mountain (238) (Borderless)",
    "productId": 257002,
    "setName": "Unfinity",
    "priceCurrency": "bp"
  },
  {
    "priceWithShipping": 0.01,
    "productName": "Island (263) - Full Art",
    "productId": 475500,
    "setName": "Phyrexia: All Will Be One",
    "priceCurrency": "bp"
  },
  {
    "priceWithShipping": 0.05,
    "productName": "Forest (266) - Full Art",
    "productId": 475504,
    "setName": "Phyrexia: All Will Be One",
    "priceCurrency": "bp"
  },
  {
    "priceWithShipping": 0.28,
    "productName": "Island (236) (Borderless)",
    "productId": 256998,
    "setName": "Unfinity",
    "priceCurrency": "bp"
  },
  {
    "priceWithShipping": 1.29,
    "productName": "Forest (239) (Borderless)",
    "productId": 256997,
    "setName": "Unfinity",
    "priceCurrency": "ir"
  },
  {
    "priceWithShipping": 1.12,
    "productName": "Plains (235) (Borderless)",
    "productId": 257000,
    "setName": "Unfinity",
    "priceCurrency": "ir"
  },
  {
    "priceWithShipping": 1.2,
    "productName": "Faithful Mending",
    "productId": 247968,
    "setName": "Innistrad: Midnight Hunt",
    "priceCurrency": "ir"
  },
  {
    "priceWithShipping": 10.99,
    "productName": "Dandan",
    "productId": 3384,
    "setName": "Chronicles",
    "priceCurrency": "ir"
  },
  {
    "priceWithShipping": 60.24,
    "productName": "Swamp (Phyrexian) - Full Art (Oil Slick Raised Foil)",
    "productId": 475562,
    "setName": "Phyrexia: All Will Be One",
    "priceCurrency": "ir"
  },
  {
    "priceWithShipping": 300.24,
    "productName": "Plains (Phyrexian) - Full Art (Oil Slick Raised Foil)",
    "productId": 475564,
    "setName": "Phyrexia: All Will Be One",
    "priceCurrency": "jy"
  },
  {
    "priceWithShipping": 200.53,
    "productName": "Mountain (Phyrexian) - Full Art (Oil Slick Raised Foil)",
    "productId": 475561,
    "setName": "Phyrexia: All Will Be One",
    "priceCurrency": "jy"
  },
  {
    "priceWithShipping": 100.64,
    "productName": "Consider",
    "productId": 246015,
    "setName": "Innistrad: Midnight Hunt",
    "priceCurrency": "jy"
  },
  {
    "priceWithShipping": 100.5,
    "productName": "Forest",
    "productId": 206026,
    "setName": "Theros Beyond Death",
    "priceCurrency": "jy"
  },
  {
    "priceWithShipping": 10.55,
    "productName": "Mountain",
    "productId": 206025,
    "setName": "Theros Beyond Death",
    "priceCurrency": "cy"
  },
  {
    "priceWithShipping": 10.36,
    "productName": "Swamp",
    "productId": 206024,
    "setName": "Theros Beyond Death",
    "priceCurrency": "cy"
  },
  {
    "priceWithShipping": 10.44,
    "productName": "Mountain (Showcase)",
    "productId": 279833,
    "setName": "Dominaria United",
    "priceCurrency": "cy"
  },
  {
    "priceWithShipping": 10.15,
    "productName": "Bonecrusher Giant",
    "productId": 199035,
    "setName": "Throne of Eldraine",
    "priceCurrency": "cy"
  },
  {
    "priceWithShipping": 30.19,
    "productName": "Forest (Phyrexian) - Full Art (Oil Slick Raised Foil)",
    "productId": 475560,
    "setName": "Phyrexia: All Will Be One",
    "priceCurrency": "cy"
  },
  {
    "priceWithShipping": 0.27,
    "productName": "Plains",
    "productId": 206022,
    "setName": "Theros Beyond Death",
    "priceCurrency": "us"
  },
  {
    "priceWithShipping": 0.4,
    "productName": "Island",
    "productId": 206023,
    "setName": "Theros Beyond Death",
    "priceCurrency": "us"
  },
  {
    "priceWithShipping": 0.3,
    "productName": "Sheoldred's Edict",
    "productId": 478441,
    "setName": "Phyrexia: All Will Be One",
    "priceCurrency": "us"
  },
  {
    "priceWithShipping": 0.52,
    "productName": "Forest (Showcase)",
    "productId": 279834,
    "setName": "Dominaria United",
    "priceCurrency": "us"
  },
  {
    "priceWithShipping": 0.61,
    "productName": "Island (Showcase)",
    "productId": 279831,
    "setName": "Dominaria United",
    "priceCurrency": "eu"
  },
  {
    "priceWithShipping": 7.41,
    "productName": "Staff of the Storyteller",
    "productId": 478421,
    "setName": "Commander: Phyrexia: All Will Be One",
    "priceCurrency": "eu"
  },
  {
    "priceWithShipping": 0.49,
    "productName": "Tyvar's Stand",
    "productId": 478819,
    "setName": "Phyrexia: All Will Be One",
    "priceCurrency": "eu"
  },
  {
    "priceWithShipping": 1.76,
    "productName": "Venerated Rotpriest",
    "productId": 478443,
    "setName": "Phyrexia: All Will Be One",
    "priceCurrency": "eu"
  },
  {
    "priceWithShipping": 0.75,
    "productName": "Plains (Showcase)",
    "productId": 279830,
    "setName": "Dominaria United",
    "priceCurrency": "eu"
  },
  {
    "priceWithShipping": 109.39,
    "productName": "March of the Machine - Set Booster Display",
    "productId": 475579,
    "setName": "March of the Machine",
    "priceCurrency": "bp"
  },
  {
    "priceWithShipping": 3.25,
    "productName": "Rat Colony",
    "productId": 162175,
    "setName": "Dominaria",
    "priceCurrency": "bp"
  },
  {
    "priceWithShipping": 0.99,
    "productName": "Plains (293) - JP Full Art",
    "productId": 257676,
    "setName": "Kamigawa: Neon Dynasty",
    "priceCurrency": "bp"
  },
  {
    "priceWithShipping": 0.03,
    "productName": "Helper Card",
    "productId": 454382,
    "setName": "The Brothers' War",
    "priceCurrency": "bp"
  },
  {
    "priceWithShipping": 0.78,
    "productName": "Snow-Covered Forest",
    "productId": 190653,
    "setName": "Modern Horizons",
    "priceCurrency": "bp"
  },
  {
    "priceWithShipping": 0.2,
    "productName": "Vampire Hexmage",
    "productId": 33465,
    "setName": "Zendikar",
    "priceCurrency": "bp"
  },
  {
    "priceWithShipping": 0.19,
    "productName": "Snow-Covered Swamp (281)",
    "productId": 230101,
    "setName": "Kaldheim",
    "priceCurrency": "bp"
  },
  {
    "priceWithShipping": 3,
    "productName": "Island (Phyrexian) - Full Art (Oil Slick Raised Foil)",
    "productId": 475563,
    "setName": "Phyrexia: All Will Be One",
    "priceCurrency": "bp"
  },
  {
    "priceWithShipping": 0.89,
    "productName": "Conduit of Worlds",
    "productId": 478445,
    "setName": "Phyrexia: All Will Be One",
    "priceCurrency": "bp"
  },
  {
    "priceWithShipping": 0.09,
    "productName": "Forest (276)",
    "productId": 246244,
    "setName": "Innistrad: Midnight Hunt",
    "priceCurrency": "eu"
  },
  {
    "priceWithShipping": 26.5,
    "productName": "March of the Machine - Prerelease Pack",
    "productId": 475588,
    "setName": "March of the Machine",
    "priceCurrency": "eu"
  },
  {
    "priceWithShipping": 1.35,
    "productName": "Mountain (299) - JP Full Art",
    "productId": 257682,
    "setName": "Kamigawa: Neon Dynasty",
    "priceCurrency": "us"
  }
];
