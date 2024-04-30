const colors= ["green","blue","white","orange","red","purple"];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8 , 9 , "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");

const color = document.querySelector(".color")

btn.addEventListener("click", function(){
    const random = getRandom();
    console.log(random)

    document.body.style.backgroundColor = colors[random]
    color.textContent = colors[random]
})

btn2.addEventListener("click", function(){
    let hexColor= '#';
    for(let i =0; i<6; i++){
        hexColor += hex[hexRandom()]
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor
})



function getRandom(){
    return Math.floor(Math.random() * colors.length)
}

function hexRandom(){
    return Math.floor(Math.random() * hex.length)
}

