const sidebar = document.querySelector('.sidemenubar');
const menu = document.querySelector('.menu')

menu.addEventListener('click', ()=> {
    if(sidebar.style.display==='none'){
        sidebar.style.display = 'block';
        sidebar.style.left = '0rem'
    } else{
        sidebar.style.display = 'none';
    }
})