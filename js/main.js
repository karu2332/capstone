let currentContent = 0;
const $left = document.querySelector('#left');
const $right = document.querySelector('#right');

$left.addEventListener('click', event => {
    if (currentContent > 0) {
        const $o = document.querySelector('#content' + currentContent);
        currentContent--;
        const $n = document.querySelector('#content' + currentContent);
        $o.style.opacity = 0;
        $n.style.opacity = 1;
        updateLeft();
    }
});
$right.addEventListener('click', event => {
    if (currentContent < 8) {
        const $o = document.querySelector('#content' + currentContent);
        currentContent++;
        const $n = document.querySelector('#content' + currentContent);
        $o.style.opacity = 0;
        $n.style.opacity = 1;
        updateLeft();
    }
});
function updateLeft() {
    const $p = document.querySelector('#left > p');
    const $i = document.querySelector('#left > img');
    if (currentContent === 0) {
        $p.innerText = 'Home';
        $i.src = "img/house.png";
    } else {
        $p.innerText = 'Back';
        $i.src = "img/rewind.png";
    }
}
