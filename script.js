

// const btn = document.addEventListener("click",()=>{
//     const div = document.createElement("div");
//     // h1.textContent = "H1 from JS";
//     div.style.backgroundColor = "red";
//     div.style.width = "100px";
//     div.style.height = "100px";
//     div.style.border = "2px solid black";
//     document.querySelector("body").appendChild(div);
// },true)

// const p = document.querySelector("p");

// p.addEventListener("mouseover",function(){
//     p.style.fontSize = "35px";
//     p.style.fontWeight = "900";
// })
// p.addEventListener("mouseout",function(){
//     p.style.fontSize = "30px";
//     p.style.fontWeight = "400";
// })


// const image = document.querySelector("img");
// const body = document.querySelector("body");
// const span = document.querySelector("h1 span");

// image.addEventListener("mouseover",function(){
//     body.style.backgroundColor = "red";
//     span.textContent = "Door reh BSDK"
//     span.style.fontSize = "30px"
// })

// image.addEventListener("mouseout",function(){
//     body.style.backgroundColor = "white";
//     span.textContent = "ab theek hai"
// })

const box = document.querySelector("#box");

box.addEventListener("click",()=>{
    let color1 = Math.floor(Math.random()*255);
    let color2 = Math.floor(Math.random()*255);
    let color3 = Math.floor(Math.random()*255);

    box.style.backgroundColor = `rgb(${color1},${color2},${color3})`;
    // const arr = [1,2,3,4,5,6,7,8,9,10];
    // console.log(Math.floor(Math.random()*arr.length)); 
})


