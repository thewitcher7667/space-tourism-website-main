function mob() {
    document.getElementById("elements").style.display = "block";
    document.getElementById("closee").style.display = "block";
    console.log("hi")
}

function mobclose() {
    document.getElementById("elements").style.display = "none";
    document.getElementById("closee").style.display = "none";
}



const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.headrectangle a');
navLinks.forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('active');
        console.log(link);
    }
})

const activePage2 = window.location.pathname;
const navLinks2 = document.querySelectorAll('.moonright a');
navLinks2.forEach(link => {
    if (link.href.includes(`${activePage2}`)) {
        link.classList.add('active1');
        document.getElementById("dest").classList.add("nw")
        console.log(link);
    }
})

const activePage3 = window.location.pathname;
const navLinks3 = document.querySelectorAll('.whobox a');
navLinks3.forEach(link => {
    if (link.href.includes(`${activePage3}`)) {
        link.classList.add('active1');
        //document.querySelector("a .lol").classList.add('active1')
        document.getElementById("crew").classList.add("nw")
        console.log(link);
    }
})


const activePage4 = window.location.pathname;
const navLinks4 = document.querySelectorAll('.whoo a');
console.log(navLinks4)
navLinks4.forEach(link => {
    if (link.href.includes(`${activePage4}`)) {
        link.classList.add('active');
        //document.querySelector(".who a div").classList.add('active4')
        document.getElementById("tech").classList.add("nw")
        console.log(link);
    }
})

