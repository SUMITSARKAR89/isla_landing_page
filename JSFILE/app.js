const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");
const navigation = document.querySelector("#navigation");


openMenu.addEventListener('click', () => {
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
    closeMenu.style.color = "red";
    navigation.style.top = "0";
    navigation.style.height = "90vh";

});
closeMenu.addEventListener('click', () => {
    closeMenu.style.display = "none";
    openMenu.style.display = "block";
    navigation.style.top = "-100%";
    navigation.style.height = "0vh";
     
   
});