var lastScrollTop=0;
    navbar = document.getElementById("navbar");
window.addEventListener("scroll", function(){
    var scrollTop=window.pageYOffset || document
        .documentElement.scrollTop;
    console.log(scrollTop)
    if (scrollTop>lastScrollTop){
        navbar.style.top="-80px";
    } else {
        navbar.style.top="0";
    }
    lastScrollTop=scrollTop;
})

function myFunction(){
    var navbar=document.getElementById('dropdown');
    navbar.classList.toggle('show');
}


