/* =========================================
   GESTÃO DE DADOS (ARRAY DE OBJETOS)
   ========================================= */
const recursos = [
    { title: "Tutoria IA", desc: "Apoio 24/7 para dúvidas de estudantes." },
    { title: "Análise de Dados", desc: "Insights em tempo real para professores." },
    { title: "Gamificação", desc: "Aprendizado lúdico com algoritmos avançados." }
];

const faqs = [
    { q: "A IA substitui o professor?", a: "Não, ela atua como um assistente pedagógico." },
    { q: "É acessível para cegos?", a: "Sim, seguimos todos os padrões WCAG e ARIA." }
];

/* =========================================
   RENDERIZAÇÃO DINÂMICA
   ========================================= */
function renderContent() {
    const container = document.getElementById('cards-container');
    container.innerHTML = recursos.map(item => `
        <article class="card reveal">
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
        </article>
    `).join('');

    const faqContainer = document.getElementById('accordion-group');
    faqContainer.innerHTML = faqs.map((f, i) => `
        <div class="accordion-item">
            <button aria-expanded="false" onclick="toggleAccordion(${i})" id="btn-q-${i}">
                ${f.q}
            </button>
            <div class="content" hidden id="ans-${i}">${f.a}</div>
        </div>
    `).join('');
}

/* =========================================
   CONTROLES DE ACESSIBILIDADE
   ========================================= */
let fontSize = 100;

document.getElementById('btn-font-up').addEventListener('click', () => {
    fontSize += 10;
    document.documentElement.style.fontSize = `${fontSize}%`;
});

document.getElementById('btn-font-down').addEventListener('click', () => {
    fontSize -= 10;
    document.documentElement.style.fontSize = `${fontSize}%`;
});

document.getElementById('btn-contrast').addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
});

/* =========================================
   ANIMAÇÃO DE SCROLL (REVEAL)
   ========================================= */
function scrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', scrollReveal);

// Inicialização
window.onload = () => {
    renderContent();
    scrollReveal();
};

function toggleAccordion(index) {
    const content = document.getElementById(`ans-${index}`);
    const btn = document.getElementById(`btn-q-${index}`);
    const isHidden = content.hidden;
    content.hidden = !isHidden;
    btn.setAttribute('aria-expanded', isHidden);
}
