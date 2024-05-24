let heading = document.getElementById("myid");
console.log(heading);
console.dir(heading);

let heading_class = document.getElementsByClassName("myclass");
console.log(heading_class);
console.dir(heading_class);

let key = document.getElementsByTagName("button");
console.log(key);
console.dir(key);

let firstelement = document.querySelector("#myid");
console.log(firstelement);
console.dir(firstelement);

let allelements = document.querySelector("div").children;
console.log(allelements);
console.dir(allelements);

let div = document.querySelector("div");
console.dir(div);

let para = document.querySelector("p");
console.dir(para);

let divs = document.querySelectorAll(".box");
let idx=1;
for (div of divs) {
    div.innerText = `new unique value ${idx}`;
    idx++;
}

let para1 = document.querySelector(".para1");
console.log(para1);
para1.style.backgroundColor ="orange";

let newbtn = document.querySelector("button");
newbtn.innerText = "press here";
console.log(newbtn);

let para2 = document.querySelector(".para1");
para2.append(newbtn);  //prepend(starting), after , before

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark"
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }

    console.log(currMode);
});