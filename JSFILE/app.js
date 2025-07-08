const openMenu = document.querySelector(".openMenu");
const navigation = document.querySelector("#navigation");
const closeMenu = document.querySelector("#closeMenu");

openMenu.addEventListener("click", () => {
  navigation.style.top = "0"
});
closeMenu.addEventListener("click", () => {
  navigation.style.top = "-100%"
});




// ==============faq============== 

 const accFour = document.querySelectorAll('.acc-four-content');

accFour.forEach( accs => {
    accs.addEventListener("click", () => {
        accs.classList.toggle("active");
    })
});



const topScroll = document.querySelector('#top-up');

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 2000){
        topScroll.classList.add("active")
    }else{
        topScroll.classList.remove("active")
    }
});


  
       

    

