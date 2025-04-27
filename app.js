function toggleMenu(){
    const carrinho = document.querySelector('.cartTab');
    const icon = document.querySelector('.icon-cart');
    carrinho.classList.toggle("open");
    icon.classList.toggle("open");
}

function toggleMenuClose(){
    const carrinho = document.querySelector('.cartTab');
    const fechar = document.querySelector('.close');
    carrinho.classList.toggle("close");
    fechar.classList.toggle("close");
}