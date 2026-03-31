function enviarWhatsApp() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome === '' || email === '') {
        alert("Por favor, preencha seu nome e e-mail.");
        return;
    }

    const meuNumero = "(12)991740905";

    const texto = `Olá! Meu nome é *${nome}* (%0A*E-mail:* ${email})%0A%0A*Proposta:*%0A${mensagem}`;

    const link = `https://api.whatsapp.com/send?phone=${meuNumero}&text=${texto}`;
    
    window.open(link, '_blank');
}