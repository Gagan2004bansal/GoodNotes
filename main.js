let icon = document.querySelector(".icon");
let info = document.querySelector(".info");
let close = document.querySelector(".close");
let btn = document.querySelector(".btn");
let T = document.querySelector(".T");
let D = document.querySelector(".D");
let body = document.querySelector("body");

let title;
let description;
icon.addEventListener("click",() => {info.classList.add("active");});

close.addEventListener("click",() => {info.classList.remove("active");});

btn.addEventListener("click",() => {
    title = T.value;
    description = D.value;
    let div = document.createElement("div");
    div.classList.add("note");
    let h2 = document.createElement("h2");
    h2.innerText = title;
    div.append(h2)
    let p = document.createElement("p");
    p.innerText = description;
    div.append(p);
    let secdiv = document.createElement("div");
    secdiv.classList.add("dt");
    let h4 = document.createElement("h4");
    secdiv.append(h4);
    div.append(secdiv);
    body.append(div);
    console.log(div)

    info.classList.remove("active");

});