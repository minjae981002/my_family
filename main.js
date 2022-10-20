const buttonAndtitle = document.querySelector('.info .player_info .buttonAndtitle');
const title = document.querySelector('.info .player_info .title');

buttonAndtitle.addEventListener('click', () => {
    buttonAndtitle.classList.toggle('clicked');
    title.classList.toggle('clamp');
});