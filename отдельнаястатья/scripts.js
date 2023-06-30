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


let arr3 = document.querySelectorAll('a.superlink');
let link1 = "../отдельнаястатья/index.html";
let link91 = '../region/index.html'
function makeLink(arr, link){
    for(let item of arr){
        item.style.cursor = 'pointer';
        item.addEventListener('click', () => {
            history.back();
        })
    }

}

makeLink(arr3)