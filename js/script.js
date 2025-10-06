const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('show');
});

document.querySelectorAll('.project').forEach(p => {
    p.addEventListener('click', () => openLightbox(p.dataset.full || p.querySelector('img').src));
    p.addEventListener('keydown', (e)=> { if(e.key==='Enter') openLightbox(p.dataset.full||p.querySelector('img').src); });
});

/*// обробка форми муляж, без відправлення на сервер
function handleSubmit(e){
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    // базова валідація
    if(!name || !email || !message){
        showResult('Будь ласка, заповніть всі поля.', true);
        return;
    }
    // імітація відправки
    showResult('Дякую! Повідомлення прийнято. (імітація відправки)', false);
    form.reset();
}
function showResult(text, isError){
    const el = document.getElementById('formResult');
    el.textContent = text;
    el.style.color = isError ? '#ff8a8a' : 'var(--accent)';
    setTimeout(()=> el.textContent = '', 6000);
}

document.querySelectorAll('a, button, input, select, textarea, .project').forEach(el=>{
    if(!el.hasAttribute('tabindex')) el.setAttribute('tabindex','0');
});*/

