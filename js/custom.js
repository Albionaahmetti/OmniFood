// let header = document.getElementsByClassName("open-nav");
// console.log(header);
// Metode e vjeter e kemi query selector qe  i selekton si id si klase jo ndamas
// let result = {name:"Albiona",lastname:"Ahmeti"};
// console.log(result.name + "Emri");
// me mar tdhanat prej back ne front

// let dbFullName;

// let header = document.querySelector(".hero-description .primary-header");
// header.addEventListener("mouseenter",function(){
    
    
    
//     header.textContent = "Prsh";
//     header.style.color = "white";
//     header.style.backgroundColor = "pink";
//     header.style.padding = "2rem";
//     dbFullName = header.textContent;
    
//     console.log(dbFullName);
// }
// );

let navButton = document.querySelector (".mobile-nav");
let navHeader = document.querySelector ("#header");

console.log(navButton);
console.log(navHeader);

navButton.addEventListener("click", function() {    
    navHeader.classList.toggle("open-nav");
});


let footerDate = document.querySelector(".date");
let actualDate = new Date().getFullYear();

footerDate.textContent = actualDate;



let btn = document.querySelector(".first-btn");
let spin = document.querySelector(".spin");
console.log(btn);
console.log(spin);
btn.addEventListener("click",function(){


 btn.classList.toggle("spin");

});


