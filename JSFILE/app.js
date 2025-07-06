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
