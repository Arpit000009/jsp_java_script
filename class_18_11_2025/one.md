
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        align-items: center;
        padding: 40px;

        border: 2px solid black;
      }
      .cards {
        height: 350px;
        width: 250px;
        padding: 20px;
        border: 2px solid black;
        border-radius: 20px;
        transition: 0.4s ease all;
      }
      .cards img {
        height: 50%;
        width: 100%;
      }
      .cards h3 {
        text-align: center;
      }
      .cards .desc {
        /* padding: 0px 20px; */
        text-align: center;
      }
      .cards:hover {
        transform: translateY(-10px);
        box-shadow: 10px 10px 10px 0px #a0a0a0;
      }
    </style>
  </head>
  <body>
    <script src="./products.js"></script>
  </body>

</html>






let products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
    rating: {
      rate: 3,
      count: 400,
    },
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
    rating: {
      rate: 1.9,
      count: 100,
    },
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
    rating: {
      rate: 3.3,
      count: 203,
    },
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
    rating: {
      rate: 2.9,
      count: 470,
    },
  },
  {
    id: 11,
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
    rating: {
      rate: 4.8,
      count: 319,
    },
  },
  {
    id: 12,
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png",
    rating: {
      rate: 4.8,
      count: 400,
    },
  },
  {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599,
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
    rating: {
      rate: 2.9,
      count: 250,
    },
  },
  {
    id: 14,
    title:
      "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    price: 999.99,
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
    rating: {
      rate: 2.2,
      count: 140,
    },
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
    rating: {
      rate: 2.6,
      count: 235,
    },
  },
  {
    id: 16,
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png",
    rating: {
      rate: 2.9,
      count: 340,
    },
  },
  {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png",
    rating: {
      rate: 3.8,
      count: 679,
    },
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png",
    rating: {
      rate: 4.7,
      count: 130,
    },
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
    rating: {
      rate: 4.5,
      count: 146,
    },
  },
  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
];

let container = document.createElement("section");
container.classList.add("container");

products.forEach((el) => {
  let card = document.createElement("div");
  card.classList.add("cards");
  let img = document.createElement("img");
  img.src = el.image;
  let title = document.createElement("h3");
  title.innerHTML = el.title.slice(0, 16);
  let desc = document.createElement("p");
  desc.classList.add("desc");
  desc.innerHTML = el.description.slice(0, 50);
  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(desc);
  container.appendChild(card);
});

document.body.appendChild(container);










<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      table,
      th,
      td {
        border: solid;
      }
    </style>
  </head>
  <body>
    <script>
      let body = document.body;
      let table = document.createElement("table");
      let tr1 = document.createElement("tr");
      let th1 = document.createElement("th");
      th1.innerHTML = "Name";
      let th2 = document.createElement("th");
      th2.innerHTML = "age";
      let th3 = document.createElement("th");
      th3.innerHTML = "qualification";
      let tr2 = document.createElement("tr");
      let th21 = document.createElement("td");
      th21.innerHTML = "Rohit";
      let th22 = document.createElement("td");
      th22.innerHTML = "40";
      let th23 = document.createElement("td");
      th23.innerHTML = "B.Tech";
      tr1.appendChild(th1);
      tr1.appendChild(th2);
      tr1.appendChild(th3);
      table.appendChild(tr1);
      tr2.appendChild(th21);
      tr2.appendChild(th22);
      tr2.appendChild(th23);
      table.appendChild(tr2);
      body.appendChild(table);
    </script>
  </body>
</html>






<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      table,
      th,
      td {
        border: 2px solid black;
        border-collapse: collapse;
      }
    </style>
  </head>
  <body>
    <script>
      let data = [
  {
    "name": "Virat Kohli",
    "age": 36,
    "qual": "Right-handed batsman"
  },
  {
    "name": "Rohit Sharma",
    "age": 38,
    "qual": "Right-handed batsman"
  },
  {
    "name": "Jasprit Bumrah",
    "age": 31,
    "qual": "Right-arm fast bowler"
  },
  {
    "name": "Hardik Pandya",
    "age": 32,
    "qual": "All-rounder"
  },
  {
    "name": "Ravindra Jadeja",
    "age": 37,
    "qual": "All-rounder"
  },
  {
    "name": "Shubman Gill",
    "age": 26,
    "qual": "Right-handed batsman"
  },
  {
    "name": "KL Rahul",
    "age": 33,
    "qual": "Wicket-keeper batsman"
  },
  {
    "name": "Mohammed Shami",
    "age": 35,
    "qual": "Right-arm fast bowler"
  },
  {
    "name": "Suryakumar Yadav",
    "age": 34,
    "qual": "Right-handed batsman"
  },
  {
    "name": "Kuldeep Yadav",
    "age": 30,
    "qual": "Left-arm wrist spin bowler"
  },
  {
    "name": "Yuzvendra Chahal",
    "age": 35,
    "qual": "Right-arm leg spin bowler"
  },
  {
    "name": "Rishabh Pant",
    "age": 27,
    "qual": "Wicket-keeper batsman"
  }
]

      let body = document.body;
      let table = document.createElement("table");
      let tr1 = document.createElement("tr");
      let th1 = document.createElement("th");
      th1.innerHTML = "Name";
      let th2 = document.createElement("th");
      th2.innerHTML = "Age";
      let th3 = document.createElement("th");
      th3.innerHTML = "Qualification";
      tr1.appendChild(th1);
      tr1.appendChild(th2);
      tr1.appendChild(th3);
      table.appendChild(tr1);

      data.forEach((el) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerHTML = el.name;
        let td2 = document.createElement("td");
        td2.innerHTML = el.age;
        let td3 = document.createElement("td");
        td3.innerHTML = el.qual;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr);
      });

      body.appendChild(table);
    </script>
  </body>
</html>







<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
    </style>
  </head>
  <body>
    <h1 id="first">DOM (Document Object Modal 🔥🔥😁😁)</h1>
    <h1>Hello , <b>Guest</b></h1>
    <h1 id="h">This is heading</h1>
    <p class="para"><b>Lorem </b> ipsum, dolor sit amet consectetur adipisicing elit. Ut, voluptate deserunt. Eius sapiente commodi consequuntur ut animi suscipit assumenda laudantium, nobis voluptatem voluptatum aperiam eum exercitationem aspernatur, placeat fugit neque.
    
    
    
    
    Exercitationem temporibus reprehenderit perspiciatis eos earum magnam dolorem libero vitae debitis, illum voluptatum in animi accusamus pariatur veniam provident corrupti asperiores voluptatibus doloremque accusantium explicabo! Molestiae deleniti soluta id! Veritatis.</p>
    <form action="">
      <input type="text" name="temp" />
      <input type="text" name="temp" />
    </form>
    <ul>
      <li class="even" id="demo">even-1</li>
      <li class="even">even-2</li>
      <li class="even">even-3</li>
      <li class="odd">odd-1</li>
      <li class="odd odd2">odd-2</li>
      <li class="odd">odd-3</li>
    </ul>
    <ol>
      <li id="demo">ordered list-1</li>
      <li>ordered list-2</li>
    </ol>
    <script src="./script.js" defer></script>
  </body>
</html>




console.log("DOM");
// console.dir(document);
// ! CRUD over html elements
// ! Read
// to target the dom nodes we have some dom selector methods
// !1. document.getElementById('id')
// it is used to target the htmlelement node with a specific id
// it will return a single html element node
// let li = document.getElementById("demo");
// console.log(li);
// !2. document.getElementsByTagName('tag')
// it is used to target all the html element node with a specific tag
// it will return a html collection
// let allLi = document.getElementsByTagName("li");
// console.log(allLi);
// !3. document.getElementsClassName('class')
// let evens = document.getElementsByClassName("even");
// console.log(evens);
// let odd = document.getElementsByClassName("odd");
// console.log(odd);
// // !4. document.getElementsByName('name')
// let inps = document.getElementsByName("temp");
// console.log(inps); // nodeList

// !5. document.querySelector('anycssSelector')
// it is an advance method it accepts all the css selector and based on that it will return the first matching element
// let demo = document.querySelector("#demo");
// let even = document.querySelector(".even");
// console.log(demo);
// console.log(even);

// !6. document.querySelector('anycssSelector')
// it is an advance method it accepts all the css selector and based on that it will return all the matching element
// let demo = document.querySelectorAll("#demo");
// let even = document.querySelectorAll(".even");
// console.log(demo);
// console.log(even);

// ! Update
// innerText /innerHTML / textContent

// let h1 = document.querySelector("#h");
// console.log(h1);
// console.log(h1.textContent);
// console.log(h1.innerHTML);
// console.log(h1.innerText);

// let para = document.querySelector(".para");
// console.log(para);
// console.log("-------------innerText----------------");
// it will return the content is displayed on UI
// console.log(para.innerText);
// console.log("-------------innerHTML----------------");
// it will return whatever content and tags written inside the element
// console.log(para.innerHTML);
// console.log("-------------textContent----------------");
// it will return only the context content same as it is written in the html document
// console.log(para.textContent);

// ! updating the content
// let b = document.querySelector("b");
// let username = prompt("Enter your name");
// b.innerHTML = `<i>${username}</i>`;
// setTimeout(() => {
//   b.innerHTML = "rohit";
// }, 5000);

// let li = `<ul>
// <li> Potato</li>
// <li> Tomato</li>
// </ul>`;

// let body = document.body;
// body.innerHTML = "";
// body.innerHTML = li;

// console.log(body.innerHTML);

// let body = document.body;
// let list = `<ul>
//     <li>Potato</li>
//     <li>Tomato</li>
//   </ul>`;
// body.innerHTML += list;
// body.innerHTML += "Hello";

// ! create
// let body = document.body;
// let para = document.createElement("p");
// para.innerHTML = "Hello this is para created using dom";
// console.log(para);
// body.append(para);
// body.appendChild(para);

// let body = document.body;

// let ul = document.createElement("ul");
// let li = document.createElement("li");
// li.innerHTML = "Tea";
// let li2 = document.createElement("li");
// li2.innerHTML = "coffee";
// ul.appendChild(li);
// ul.appendChild(li2);
// console.log(ul);
// body.appendChild(ul)

// ! table

// let odd2 = document.querySelector(".odd2");
// let first = document.querySelector("#first");

// odd2.remove();
// first.remove();

// let h1 = document.querySelector("h1");
// h1.remove();



<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1 style="font-size: 40px">Heading</h1>

    <script>
      // ! create and update
      let h1 = document.querySelector("h1");
      h1.style.backgroundColor = "yellow";
      h1.style.backgroundColor = "green";
      h1.style.height = "400px";
      h1.style.width = "400px";
      h1.style.border = "2px solid black";

    //   ! Read
      console.log(h1.style.getPropertyValue("font-size"));
    //   ! delete
      h1.style.removeProperty('background-color')
    </script>
  </body>
</html>




