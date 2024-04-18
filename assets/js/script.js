window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('.loading').classList.add('loaded')
    }, 1500);
});

document.querySelectorAll('.nav-item .item').forEach(btn => {
    btn.onclick = (e) => {
        document.querySelector(`.ct.active`)?.classList.remove('active');
        const id = e.target.getAttribute('page');
        if(!id) return;
        document.querySelector(`#${id}`)?.classList.add('active');
        document.querySelector('.nav-item .item.active')?.classList.remove('active');
        e.target.classList.add('active');
    }
});

(function darkMode(){
    const btn = document.querySelector('.darkmode');
    const htmlNode = document.querySelector('html');
    if(window.localStorage.getItem('dark') === '1'){
        htmlNode.classList.add('dark');
        btn.innerHTML = `Light mode`;
    }
    btn.onclick = (e) => {
        if (!document.querySelector('html.dark')){
            e.target.innerText = 'Light mode';
            htmlNode.classList.add('dark');
        }
        else {
            e.target.innerText = 'Dark mode';
            htmlNode.classList.remove('dark');
        }
        if(window.localStorage.getItem('dark') == '1'){
            window.localStorage.setItem('dark', '0');
        }
        else {
            window.localStorage.setItem('dark', '1');
        }
    }
})();

(function showNav(){
    const btnOpenNav = document.querySelector('.open');
    const nav = document.querySelector('.nav');
    const overlay = document.querySelector('.overlay');
    btnOpenNav.onclick = () => {
        nav.classList.add('open');
        overlay.classList.add('active');
    }

    nav.onclick = () => {
        nav.classList.remove('open');
        overlay.classList.remove('active');
    }

    overlay.onclick = () => {
        nav.classList.remove('open');
        overlay.classList.remove('active');
    }
})();


// (function img(){
//     const listImg = document.querySelector('#some-img');
//     const list = [];

//     listImg.innerHTML += list.map(m => 
//         `<div class="img">
//             <img src="./assets/img/${m}" alt="img">
//          </div>`).join('\n')
// })();


(function sound(){
    const music = ['./assets/music/KanojoWaTabiNiDeru.mp3','./assets/music/NormalNoMore.mp3','./assets/music/OwariHaHajimari.mp3'];
    const random = music[Math.floor(Math.random()*music.length)];
    const btnSound = document.querySelector('.item.sound');
    const song = document.querySelector('#music');
    song.src = random;
    btnSound.onclick = function (){ 
        if(!song.classList.contains('playing')){
            song.play();
            song.volume = 0.5;
            song.classList.add('playing');
            this.innerHTML = 'Music : <b>ON</b>';
        }
        else {
            this.innerHTML = 'Music : <b>OFF</b>';
            song.pause();
            song.classList.remove('playing');
        }
    }
})();