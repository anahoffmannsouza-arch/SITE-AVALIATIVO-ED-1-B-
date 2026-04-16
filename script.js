
// Banco de Dados do Site
const dados = [
    { t: "Feedback Instantâneo", d: "Correções em tempo real para acelerar a evolução do aluno." },
    { t: "Caminhos Adaptativos", d: "O sistema muda o nível de dificuldade com base no seu desempenho." },
    { t: "Suporte 24/7", d: "Tire suas dúvidas a qualquer hora com nosso assistente inteligente." }
];

// Renderização Automática
const container = document.getElementById('recursos');
container.innerHTML = dados.map(item => `
    <article class="card reveal">
        <h3>${item.t}</h3>
        <p>${item.d}</p>
    </article>
`).join('');

// Acessibilidade: Controles de Fonte e Contraste
let size = 100;
document.getElementById('btn-font-up').onclick = () => { size += 10; document.documentElement.style.fontSize = size + '%'; };
document.getElementById('btn-font-down').onclick = () => { size -= 10; document.documentElement.style.fontSize = size + '%'; };
document.getElementById('btn-contrast').onclick = () => document.body.classList.toggle('high-contrast');

// Scroll Reveal (Animação ao rolar a página)
const checkReveal = () => {
    document.querySelectorAll('.reveal').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 50) el.classList.add('active');
    });
};

window.addEventListener('scroll', checkReveal);
window.onload = checkReveal;
