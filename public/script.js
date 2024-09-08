let navbar = document.querySelector('.navbar');
let body = document.querySelector('body');

// body.onscroll = (ev)=>{
//     const currentUrl = window.location;
//     console.log(currentUrl)
//     // console.log(window.scrollY)
//     if(window.scrollY>500){
//         navbar.style.backgroundColor = 'Black';
//     }else{
//         navbar.style.backgroundColor = 'White';
//     }
// }

document.addEventListener('scroll',()=>{
    const currentUrl = window.location;
    console.log(currentUrl)
    console.log(window.scrollY)
    if(window.scrollY>1000){
        navbar.style.backgroundColor = '#E0F7FA';
    } else if(window.scrollY>2000){
        navbar.style.backgroundColor = 'red';
    }
    else{
        navbar.style.backgroundColor = 'White';
    }
    
})