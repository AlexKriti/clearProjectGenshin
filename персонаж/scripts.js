let butt = document.querySelector('div.smallmenu button');
let menu = document.querySelector('div.another-nav-li')
console.log(butt);
let i = 0;
butt.addEventListener('click', () => {
    if(i == 0){
        i = 1;
        menu.style.display = 'none';
    } else if(i == 1){
        i = 0;
        menu.style.display = 'block';

    }
});

menu.addEventListener('click', () => {
    menu.style.display = 'none';
})