const mongoose = require('mongoose');

const Product = require('./model/product');

const products = [
    {
        name: "Air Jordan 1 Retro High OG",
        img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/095f7378-7f3e-4940-aa95-4bfea80259c0/air-jordan-1-retro-high-og-shoes-G8hcQx.png",
        price: 130,
        desc: "Familiar but always fresh, the iconic Air Jordan 1 is remastered for today's sneakerhead culture. This Retro High OG version goes all in with premium leather, comfortable cushioning and classic design details."
    },
    {
        name: "Nike Air Force 1 LE",
        img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/a195a22c-da60-4f8a-897e-05301bf33be3/force-1-le-and-shoe-hZ24qR.png",
        price: 90,
        desc: "This is what legends are made of. The Nike Air Force 1 LE brings back the ’82 hardwood icon into an everyday style in all-white or all-black. The durability,feel and Air are still there for those who love a classic"
    },
    {
        name: "Nike Air Jorden 3",
        img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7723da6d-daa7-44e8-aa24-f63f87987859/air-jordan-3-retro-shoes-TJf2lm.png",
        price: 160,
        desc: "Crossing hardwood comfort with off-court flair, the b-ball original gets you ready for fall. Premium materials like slub canvas underlays bring a classic look, while textured leather adds sophistication to any outfit. Vintage Sail accents on the outsole and Swoosh pair with throwback labeling for a retro boost."
    },
    {
        name: "Nike SB Dunk Low",
        img: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/i1-c699becd-0bac-4ce9-9b90-dca497d085bc/sb-dunk-low-pro-muslin-release-date.jpg",
        price: 90,
        desc: "The Nike SB Dunk Low Pro “What The Paul” was released to celebrate Nike’s longstanding partnership with eight-time X-Game medalist Paul Rodriguez, who now has 10 signature shoe designs to his name. As tribute to those designs,this Dunk features some of the most iconic colorways and design details found in P-Rod’s extensive sneaker line."
    },
    {
        name: "Nike Air jorden 4",
        img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/cda632e3-ed3b-498d-a31b-e08e1b6549e6/air-jordan-4-retro-se-shoes-xjqnzm.png",
        price: 170,
        desc: "Naturally, this bold Air Jordan 4 will be easy to spot in the streets.Featuring a classic full-grain nubuck leather upper in Tour Yellow with Dark Blue Grey accents and a white midsole, this colourway is perfectly coordinated for striking fits—just let the sneakers do all the talking. If you couldn't feel the energy enough from the pictures alone, these Air Jordan 4s are certainly loud enough for any show-stopping event."
    },
    {
        name: "Nike Air Jordan 6",
        img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/af407608-9bbd-4140-8f5a-e1a24284574d/air-jordan-6-retro-shoes-4m3b9d.png",
        price: 210,
        desc: "Like many Air Jordan Retros, the AJ 6 is going to be most appreciated by people who won't play in it. Yes, it still has the chops that once made it great, but today's game has already seen a lot of better and cheaper techs. Though still functional, the AJ 6 just cannot compare anymore performance-wise."
    },
    {
        name: "Nike Air force 1 yellow",
        img: "https://sothebys-md.brightspotcdn.com/f6/c1/4f8ed9804cf4926e1a560d7aed77/n11119-cdl5s-t3-02.jpg",
        price: 110,
        desc: "Sports Matirial Imported Rubber sole Flywire cables extend from midfoot to wrap around your heel for lockdown Four independent Zoom Air units on the forefoot for low-profile, flexible, and responsive cushioning.. Two Zoom Air units located under the heel and first met head are 13mm thick for response Synthetic Rubber sole."
    },
    {
        name: "Nike Air Jorden 5",
        img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/d3d4dfad-90be-48b4-aae0-b8a7afc3f643/air-jordan-5-retro-se-shoes-nX5vlG.png",
        price: 190,
        desc: "The Air Jordan 5 Retro, inspired by the World War 2 Mustang Fighter Jet, was meant to be an attacker on the court, ready to charge aggressively into the enemy. But like other retro Jordans (including the Air Jordan 1 Retro High and retro version of the Air Jordan 6), its purpose has shifted from being a performance shoe to an iconic fashion sneaker."
    },
    {
        name: "Nike Air Jorden 13 Greay surface",
        img: "https://hypebeast.com/image/2019/02/air-jordan-13-atmosphere-grey-release-date-01-1.jpg",
        price: 260,
        desc: "The Air Jordan 13 Retro brings back the memorable game shoe that Michael Jordan wore during the '97–98 season, all the way to his 6th championship title. All the classic details are there like the quilted overlay, iconic sculpted midsole and holographic eye."
    },
    {
        name: "Nike Men's Air Jordan 16 XVI Retro",
        img: "https://m.media-amazon.com/images/I/91+sGvEDj+L._AC_UY1000_.jpg",
        price: 290,
        desc: "Designed by Nike Senior Footwear designer Wilson Smith, the Air Jordan 16 debuted in 2001 and was the first signature Air Jordan sneaker after the Air Jordan 3 to not be designed by Tinker Hatfield. The Jordan 16 borrows several design cues from previous Jordans which include the patent leather from the Air Jordan 11 and the clear outsole from the Air Jordan 5. A first for the Jordan line, the 16 introduced a gaiter which served both aesthetic and performance purposes."
    },
    {
        name: "Adidas NMD_R1 V2",
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f30c73e15f174bce90d5afb90120c1cc_9366/NMD_R1_V2_Shoes_Grey_IE2251_01_standard.jpg",
        price: 205,
        desc: "These adidas NMD_R1 V2 Shoes are effortlessly cool and super versatile. The breathable fabric upper features the iconic 3-Stripes with text overlays for a cyberpunk look."
    }
    ,
    {
        name: "Adidas NMD_V3 SHOES",
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b531c2c85ad44c2b841caf8e013ea21c_9366/NMD_V3_Shoes_Brown_FZ6496_01_standard.jpg",
        price: 215,
        desc: "These adidas NMD_V3 Shoes update a staple pair of trainers with technical details. The textile upper provides a snug fit, and the TPU plugs and heel clip play on the different transparencies. NMD print on the sides adds some extra edge. "
    },
    {
        name: "Nike Air force 1 Black",
        img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5eed4ad4-be65-4e3b-b0b2-40bc4e53b257/air-force-1-07-shoe-NMmm1B.png",
        price: 80,
        desc: "This iteration of our iconic Nike Air Force 1 '07 LV8 has hoops-inspired performance features that provide a comfortable base with flashing-light-activated design details."
    },
    {
        name: "Nike Air Jordan 1 PSG",
        img: "https://sneakerbardetroit.com/wp-content/uploads/2020/12/Air-Jordan-1-Zoom-Comfort-PSG-DB3610-105-Release-Date-4-1068x712.jpg",
        price: 110,
        desc: "Step into style with the Air Jordan 1 Zoom Air Comfort x Paris Saint-Germain. Adding another chapter to the iconic silhouette's history, this version uses a soft suede with a microfibre lining and upgraded full-length Zoom cushioning underfoot. Building on a long-time partnership with Jordan Brand, this colourway features hues and details inspired by the historic French football club."
    },
    {
        name: "Nike killshot 2",
        img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1551536143-L0362_EB1676.jpg?crop=1xw:1xh;center,top&resize=980:*",
        price: 140,
        desc: "Nike Killshot 2 throws out a perfectly executed classic tennis styling that's simple and clean. Tossing it with different wardrobes is fun and easy. If there's something this go-to killer kick is guilty of, it has a well-cushioned foam that's gentle on the feet and legs. If you're up for reasonably-priced sneaks, you might find this Nike retro arresting."
    },
    {
        name: "PUMA Smash v2 Unisex Sneakers",
        img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/365215/03/fnd/IND/fmt/png/PUMA-Smash-v2--Unisex-Sneakers",
        price: 115,
        desc: "Smash was such a hit on the courts, we’ve decided to take these classic sports shoes and deem them an all-around fashion icon. Updated with an improved feel and fit, we’re pretty sure they’ll earn top-seed status."
    }
    ,
    {
        name: "Puma Trinity Men's Sneakers",
        img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1350,h_1350/global/389289/05/sv01/fnd/IND/fmt/png/Trinity-Men's-Sneakers",
        price: 115,
        desc: "The Trinity is all about our Futro aesthetic, taking heritage inspiration and reinterpreting it with a modern twist. This edition features a mesh base with cool overlay details and a sporty silhouette, for sneakers that pack a punch. Best of all, the SoftFoam+ sockliner keeps you feeling comfortable all day long."
    }
    ,
    {
        name: "RS-X Reinvention Unisex Sneakers",
        img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1350,h_1350/global/369579/13/sv01/fnd/IND/fmt/png/RS-X-Reinvention-Unisex-Sneakers",
        price: 315,
        desc: "One of the first running shoe models to focus on the technical aspects of the sport in addition to the aesthetics, the RS series is back from the '80s archives and better than ever. With a retro design, these trainers pays homage to the original iteration, but with a lightweight midsole for cushioning and superior energy control. Today's RS-X Reinvention Unisex Sneakers never looked better."
    }
    ,
    {
        name: "PUMA x SPONGEBOB ",
        img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1350,h_1350/global/391970/01/sv01/fnd/IND/fmt/png/PUMA-x-SPONGEBOB-Future-Rider-Unisex-Sneakers",
        price: 165,
        desc: "Who lives in a pineapple under the sea? PUMA x SPONGEBOB! When you’re heading out to see friends – or go jellyfishing with SpongeBob and the gang – slip on these colourful Future Rider sneakers."
    }
    ,
    {
        name: "TRIGUST Men's Sneakers",
        img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1350,h_1350/global/392910/01/sv01/fnd/IND/fmt/png/TRIGUST-Men's-Sneakers",
        price: 205,
        desc: "Ring in the new season with Style with a pair of PUMA shoes perfect to make this summer, better !"
    }
]

const seedDB = async () => {
    await Product.insertMany(products);
    console.log("DB SEEDED");
}

module.exports = seedDB;


