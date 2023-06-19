const menubar = document.querySelector(' .menubar');
const close = document.querySelector(' .close');
const nav = document.querySelector(' .primary');
const blur = document.querySelector(".blur")

menubar.addEventListener('click', () => {
    nav.classList.add('open-nav');
    menubar.style.visibility = 'hidden';
    close.style.visibility = 'visible';
    blur.style.display = "flex"
})

close.addEventListener('click', () => {
    nav.classList.remove('open-nav');
    menubar.style.visibility = 'visible';
    close.style.visibility = 'hidden';
    blur.style.display = "none"
    
})

blur.addEventListener("click", () => {
    nav.classList.remove('open-nav');
    blur.style.display = "none"
})

const dropdowns = document.querySelectorAll(' .dropdown');

dropdowns.forEach(dropdown  => {

    
    const caret = dropdown.querySelector(' .caret');
    const menu = dropdown.querySelector(' .menu');
    const selected = dropdown.querySelector(' .selected');

    selected.addEventListener('click' , ()  => {
        menu.classList.toggle("hide");
        caret.classList.toggle("caret-rotate");
        

    });

    window.addEventListener('click', (e) => {
        if (e.target !== selected) {
            menu.classList.add("hide");
            caret.classList.toggle("caret-rotate");
        }
    });
    
  
});


