// State management
let cart = {}; // Object with productId as key and quantity as value
let currentCategory = 'Todas';

// Format Currency
function formatPrice(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    // Add Total Price element to HTML footer dynamically if not exists, or adjust it
    const cartFooter = document.querySelector('.modal-footer h5');
    if(cartFooter) {
        cartFooter.innerHTML = `Itens: <span id="cartTotalItems">0</span> <br><small class="text-success fs-5 mt-1 d-block" id="cartTotalPrice">R$ 0,00</small>`;
    }
    
    renderCategories();
    renderProducts();
    updateCartIcon();
    
    // WhatsApp Send Event
    document.getElementById('btnSendWhatsApp').addEventListener('click', sendWhatsAppBudget);

    // Menu encolhível ao rolar a página
    const navbar = document.getElementById('mainNavbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled-nav');
        } else {
            navbar.classList.remove('scrolled-nav');
        }
    });
});

// Extract unique categories
function getCategories() {
    const categories = new Set(produtos.map(p => p.categoria));
    return ['Todas', ...Array.from(categories)];
}

// Render Categories Menu
function renderCategories() {
    const container = document.getElementById('categoryContainer');
    const categories = getCategories();
    
    container.innerHTML = '';
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `category-btn ${cat === currentCategory ? 'active' : ''}`;
        btn.textContent = cat;
        btn.onclick = () => {
            currentCategory = cat;
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProducts();
        };
        container.appendChild(btn);
    });
}

// Render Products Grid
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';
    
    const filteredProducts = currentCategory === 'Todas' 
        ? produtos 
        : produtos.filter(p => p.categoria === currentCategory);
        
    if (filteredProducts.length === 0) {
        grid.innerHTML = `<div class="col-12 text-center py-5"><p class="text-muted">Nenhum produto encontrado nesta categoria.</p></div>`;
        return;
    }

    filteredProducts.forEach((product, index) => {
        const qty = cart[product.id] || 0;
        
        const cardCol = document.createElement('div');
        cardCol.className = 'col-sm-6 col-md-4 col-lg-3';
        // Adiciona atraso escalonado para um efeito de cascata elegante
        cardCol.setAttribute('data-aos', 'fade-up');
        cardCol.setAttribute('data-aos-delay', (index % 4) * 100);
        
        cardCol.innerHTML = `
            <div class="product-card">
                <div class="product-img-wrapper">
                    <img src="${product.imagem}" alt="${product.nome}">
                </div>
                <div class="product-info">
                    <div class="product-category">${product.categoria}</div>
                    <div class="product-title mb-1">${product.nome}</div>
                    <div class="product-price fw-bold text-success mb-3 fs-5">${formatPrice(product.preco)}</div>
                    
                    ${qty === 0 ? `
                        <button class="btn btn-outline-primary w-100 mt-auto" style="border-width:2px; font-weight:600;" onclick="addToCart(${product.id})">
                            <i class="fa-solid fa-plus me-2"></i> Adicionar
                        </button>
                    ` : `
                        <div class="qty-controls mt-auto">
                            <button class="qty-btn" onclick="updateQty(${product.id}, -1)">
                                <i class="fa-solid fa-minus"></i>
                            </button>
                            <input type="text" class="qty-input" value="${qty}" readonly>
                            <button class="qty-btn" onclick="updateQty(${product.id}, 1)">
                                <i class="fa-solid fa-plus"></i>
                            </button>
                        </div>
                    `}
                </div>
            </div>
        `;
        grid.appendChild(cardCol);
    });

    // Atualiza o AOS para reconhecer os novos elementos dinâmicos
    if (window.AOS) {
        AOS.refresh();
    }
}

// Cart Functions
function addToCart(productId) {
    if (!cart[productId]) {
        cart[productId] = 1;
    }
    updateState();
}

window.addToCart = addToCart;

function updateQty(productId, change) {
    if (cart[productId]) {
        cart[productId] += change;
        if (cart[productId] <= 0) {
            delete cart[productId];
        }
        updateState();
    }
}

window.updateQty = updateQty;

function updateState() {
    renderProducts(); 
    updateCartIcon();
    renderCartModal();
}

function updateCartIcon() {
    let totalItems = 0;
    let totalPrice = 0;
    
    Object.keys(cart).forEach(id => {
        const product = produtos.find(p => p.id == id);
        const qty = cart[id];
        totalItems += qty;
        totalPrice += (product.preco * qty);
    });

    document.getElementById('cartCount').textContent = totalItems;
    document.getElementById('floatingCartCount').textContent = totalItems;
    
    const cartTotalItemsEl = document.getElementById('cartTotalItems');
    if(cartTotalItemsEl) cartTotalItemsEl.textContent = totalItems;

    const cartTotalPriceEl = document.getElementById('cartTotalPrice');
    if(cartTotalPriceEl) cartTotalPriceEl.textContent = formatPrice(totalPrice);
    
    const sendBtn = document.getElementById('btnSendWhatsApp');
    if (totalItems > 0) {
        sendBtn.removeAttribute('disabled');
    } else {
        sendBtn.setAttribute('disabled', 'true');
    }
}

// Modal Render
document.getElementById('budgetModal').addEventListener('show.bs.modal', renderCartModal);

function renderCartModal() {
    const container = document.getElementById('cartItemsContainer');
    const items = Object.keys(cart);
    
    if (items.length === 0) {
        container.innerHTML = `<p class="text-center text-muted col-12 my-5">Seu orçamento está vazio.<br>Adicione produtos pelo catálogo.</p>`;
        return;
    }
    
    container.innerHTML = '';
    
    items.forEach(id => {
        const product = produtos.find(p => p.id == id);
        const qty = cart[id];
        
        const row = document.createElement('div');
        row.className = 'cart-item';
        row.innerHTML = `
            <img src="${product.imagem}" alt="${product.nome}" class="cart-item-img me-3">
            <div class="flex-grow-1">
                <p class="cart-item-title mb-0">${product.nome}</p>
                <div class="text-muted small mb-1">${product.categoria}</div>
                <div class="fw-bold text-success">${formatPrice(product.preco * qty)}</div>
            </div>
            <div class="qty-controls ms-3" style="background:#fff;">
                <button class="qty-btn" onclick="updateQty(${product.id}, -1)" style="width:28px;height:28px;margin:0 5px;">
                    <i class="fa-solid fa-minus" style="font-size:0.8rem;"></i>
                </button>
                <input type="text" class="qty-input" value="${qty}" readonly style="width:30px;">
                <button class="qty-btn" onclick="updateQty(${product.id}, 1)" style="width:28px;height:28px;margin:0 5px;">
                    <i class="fa-solid fa-plus" style="font-size:0.8rem;"></i>
                </button>
            </div>
        `;
        container.appendChild(row);
    });
}

// Send to WhatsApp
function sendWhatsAppBudget() {
    let totalItems = 0;
    let totalPrice = 0;
    let message = "Olá ABC Abrasivos! Vim pelo catálogo online e gostaria de solicitar este pedido:\n\n";
    
    Object.keys(cart).forEach(id => {
        const product = produtos.find(p => p.id == id);
        const qty = cart[id];
        const sum = product.preco * qty;
        totalItems += qty;
        totalPrice += sum;
        message += `- ${qty}x ${product.nome} = *${formatPrice(sum)}*\n`;
    });
    
    message += `\n*Quantidade Total:* ${totalItems} itens`;
    message += `\n*Valor Total:* ${formatPrice(totalPrice)}`;
    
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "5511999999999"; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}
