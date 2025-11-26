<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .container {
        padding: 50px;
        width: 100vw;
        /* border: 2px solid black; */
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        flex-wrap: wrap;
      }
      .products {
        /* height: 300px; */
        width: 250px;
        border: 2px solid black;
        border-radius: 30px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;
        align-items: center;
        transition: 0.5s ease all;
        padding: 20px;
      }
      .products img {
        height: 150px;
      }
      .products:hover {
        transform: translateY(-20px);
        box-shadow: 10px 10px 10px 0px rgb(101, 101, 101);
      }
    </style>
  </head>
  <body>

    <!-- <script src="./timer.js"></script> -->
    <!-- <script src="./promise.js"></script> -->
    <script src="./ajax.js"></script>
  </body>
</html>




// ! ajax
// ajax is a technique used by web developers to change the specific section of the webpage without a full page reload
// ! we use
// 1. XMLHttpRequest
//! 2. fetch(url)
// fetch is used to make a http request to the server , it will accept two arguments
// 1st argument is the url(address of the server )
// 2nd argument is an optional object
// ! steps to fetch an api
// 1 -> fetch will return a promise
// 2 -> after consuming that promise we will get response object
// 3 -> response object is having a method called as json() , we need to call that
// 4 -> json method will again return a promise that we can return from one  than block and can handle in anther than block , after that we will recieve data
// let op = fetch("https://fakestoreapi.com/products");
// op.then((res) => {
//   return res.json();
// })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// ! using async await to fetch an api
var a;
async function getData() {
  try {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    fun(data);
  } catch (err) {
    console.log(err);
  }
}
getData();

/*    <div class="container">
      <div class="products">
        <img
          src="https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1__en-IN.jpg?v=1759733974"
          alt=""
        />
        <h1>Apple</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
          officia.
        </p>
      </div>
    </div> */
let body = document.body;
let container = document.createElement("div");
container.classList.add("container");
function fun(a) {
  console.log(a);
  a.forEach((el) => {
    let product = document.createElement("div");
    product.classList.add("products");
    let img = document.createElement("img");
    img.src = el.image;
    let title = document.createElement("h1");
    title.innerHTML = el.title.slice(0, 10);
    let desc = document.createElement("p");
    desc.innerHTML = el.description.slice(0,70);
    product.appendChild(img);
    product.appendChild(title);
    product.appendChild(desc);
    container.appendChild(product);
  });
}

body.appendChild(container);

