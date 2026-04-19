const DEFAULT_APP_CONFIG = Object.freeze({
    storageKey: 'abc-abrasivos-cart',
    customerStorageKey: 'abc-abrasivos-customer',
    whatsappNumber: '5551981860929',
    whatsappGreeting: 'Olá ABC Abrasivos! Vim pelo site e gostaria de mais informações.',
    contact: {
        phoneDisplay: '(51) 98186-0929',
        phoneHref: 'tel:+5551981860929',
        email: 'contato@abcabrasivos.com.br',
        emailHref: 'mailto:contato@abcabrasivos.com.br',
        addressHtml: 'R. Aracaju, 475 - Passo dos Ferreiros,<br>Gravatai - RS',
        mapEmbedUrl: 'https://maps.google.com/maps?q=R.%20Aracaju%2C%20475%20-%20Passo%20dos%20Ferreiros%2C%20Gravatai%20-%20RS%2C%2094185-360&t=&z=16&ie=UTF8&iwloc=&output=embed'
    },
    socialLinks: {
        instagram: '#',
        facebook: '#',
        linkedin: '#'
    }
});

const appConfig = typeof APP_CONFIG === 'undefined' ? DEFAULT_APP_CONFIG : APP_CONFIG;

if (appConfig === DEFAULT_APP_CONFIG) {
    console.warn('APP_CONFIG não foi encontrado. Usando configuração padrão para manter o catálogo disponível.');
}

const TOKEN_SYNONYMS = {
    pgs: ['pg', 'roda', 'rodas', 'abrasivo'],
    pg: ['pgs', 'roda', 'rodas', 'abrasivo'],
    grao: ['graos', 'granulacao', 'g'],
    graos: ['grao', 'granulacao', 'g'],
    disco: ['discos'],
    discos: ['disco'],
    flap: ['flapdisc', 'flapdisco'],
    corte: ['cortar'],
    lixa: ['lixas', 'abrasivo', 'lixamento'],
    lixas: ['lixa', 'abrasivo', 'lixamento'],
    cinta: ['cintas', 'correia'],
    cintas: ['cinta', 'correia'],
    scoth: ['scotch', 'scothbrite', 'scotchbrite'],
    scotch: ['scoth', 'scothbrite', 'scotchbrite'],
    brite: ['brite', 'scotchbrite', 'scothbrite'],
    scothbrite: ['scotchbrite', 'scoth', 'brite'],
    scotchbrite: ['scothbrite', 'scotch', 'brite'],
    zirconia: ['zirconio', 'zirc'],
    zirconio: ['zirconia', 'zirc'],
    roda: ['rodas'],
    rodas: ['roda'],
    sisal: ['algodao', 'polimento'],
    algodao: ['sisal', 'polimento'],
    flanela: ['polimento'],
    brim: ['polimento'],
    ventilada: ['ventilado'],
    plissada: ['plissado'],
    standard: ['standart', 'padrao'],
    standart: ['standard', 'padrao'],
    escova: ['escovas'],
    escovas: ['escova'],
    corda: ['torcida', 'trancada'],
    torcida: ['corda'],
    trancada: ['trancada', 'trancado', 'corda'],
    fibra: ['nylon'],
    massa: ['massas', 'polir', 'polimento'],
    massas: ['massa', 'polir', 'polimento'],
    polir: ['polimento'],
    sebo: ['lubrificante'],
    kilo: ['quilo', 'kg'],
    quilo: ['kilo', 'kg'],
    kg: ['quilo', 'kilo'],
    epi: ['epis', 'protecao', 'seguranca'],
    epis: ['epi', 'protecao', 'seguranca'],
    protecao: ['seguranca', 'epi', 'epis'],
    seguranca: ['protecao', 'epi', 'epis'],
    luva: ['luvas', 'raspa', 'vaqueta'],
    luvas: ['luva', 'raspa', 'vaqueta'],
    avental: ['avental de raspa', 'raspa'],
    mangote: ['raspa'],
    raspa: ['couro', 'protecao'],
    vaqueta: ['couro', 'luva'],
    pano: ['tecido'],
    feltro: ['polimento'],
    removedor: ['remocao'],
    acabamento: ['acabamento medio', 'acabamento grosso', 'fino'],
    medio: ['media'],
    grosso: ['grossa'],
    berwanger: ['bw'],
    m14: ['rosca'],
    rosca: ['m14']
};

const PHRASE_SYNONYMS = [
    { match: 'rodas pgs', aliases: ['roda pg', 'roda pgs', 'pg', 'pgs', 'roda abrasiva'] },
    { match: 'roda pg', aliases: ['roda pgs', 'pg', 'pgs'] },
    { match: 'lixas e cintas', aliases: ['lixa', 'lixas', 'cinta', 'cintas', 'lixamento'] },
    { match: 'disco de corte', aliases: ['corte', 'cortar metal', 'desbaste'] },
    { match: 'disco flap', aliases: ['flap', 'disco acabamento', 'acabamento'] },
    { match: 'disco de lixa', aliases: ['lixa em disco', 'disco abrasivo'] },
    { match: 'scoth brite', aliases: ['scotch brite', 'scotchbrite', 'scothbrite'] },
    { match: 'rodas de algodao e sisal', aliases: ['roda de polimento', 'polimento', 'algodao', 'sisal'] },
    { match: 'massas de polir e sebo', aliases: ['massa de polir', 'polimento', 'sebo'] },
    { match: 'massa olga', aliases: ['olga', 'massa de polir olga'] },
    { match: 'epis e protecao', aliases: ['epi', 'epis', 'seguranca', 'protecao'] },
    { match: 'luva de raspa', aliases: ['luva raspa', 'protecao para mao'] },
    { match: 'avental soldador raspa', aliases: ['avental de raspa', 'protecao soldador'] },
    { match: 'mangote de raspa', aliases: ['protecao de braco', 'mangote raspa'] },
    { match: 'escova de corda', aliases: ['escova torcida', 'escova trancada', 'escova de aco'] },
    { match: 'escova de fibra', aliases: ['escova nylon', 'fibra abrasiva'] },
    { match: 'roda ventilada', aliases: ['ventilada', 'roda de polimento ventilada'] },
    { match: 'roda plissada', aliases: ['plissada', 'roda de polimento plissada'] },
    { match: 'roda lisa', aliases: ['lisa', 'roda de polimento lisa'] },
    { match: 'roda tela', aliases: ['tela', 'roda de tela'] },
    { match: 'roda brim', aliases: ['brim', 'roda de brim'] },
    { match: 'roda standard', aliases: ['roda standart', 'standard', 'standart'] },
    { match: 'roda standart', aliases: ['roda standard', 'standard', 'standart'] }
];

const IMG_FALLBACK_SRC = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='160' viewBox='0 0 200 160'%3E%3Crect fill='%23f0f0f0' width='200' height='160'/%3E%3Ctext fill='%23bbb' font-family='sans-serif' font-size='13' text-anchor='middle' x='100' y='86'%3ESem imagem%3C/text%3E%3C/svg%3E";

function handleImgError(img) {
    img.src = IMG_FALLBACK_SRC;
    img.onerror = null;
}

function showToast(productName) {
    let container = document.getElementById('toastContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toastContainer';
        container.className = 'toast-container position-fixed bottom-0 end-0 p-3';
        container.style.zIndex = '1090';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast align-items-center text-bg-success border-0';
    toast.setAttribute('role', 'alert');
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                <i class="fa-solid fa-check me-2"></i> <strong>${productName}</strong> adicionado ao orçamento.
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Fechar"></button>
        </div>
    `;

    container.appendChild(toast);
    const bsToast = new bootstrap.Toast(toast, { delay: 2500 });
    bsToast.show();
    toast.addEventListener('hidden.bs.toast', () => toast.remove());
}

const productsById = new Map(produtos.map((product) => [String(product.id), product]));
const productSearchIndex = new Map(produtos.map((product) => [String(product.id), createSearchEntry(product)]));

const state = {
    cart: loadCart(),
    customer: loadCustomer(),
    currentCategory: 'Todas',
    searchTerm: '',
    sortBy: 'default',
    priceMin: 0,
    priceMax: Infinity
};

function formatPrice(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function getProductById(productId) {
    return productsById.get(String(productId));
}

function sanitizeCart(rawCart) {
    if (!rawCart || typeof rawCart !== 'object') {
        return {};
    }

    return Object.entries(rawCart).reduce((cart, [productId, qty]) => {
        const normalizedQty = Number.parseInt(qty, 10);

        if (productsById.has(String(productId)) && Number.isInteger(normalizedQty) && normalizedQty > 0) {
            cart[String(productId)] = normalizedQty;
        }

        return cart;
    }, {});
}

function sanitizeCustomer(rawCustomer) {
    if (!rawCustomer || typeof rawCustomer !== 'object') {
        return { name: '', company: '', notes: '' };
    }

    return {
        name: typeof rawCustomer.name === 'string' ? rawCustomer.name : '',
        company: typeof rawCustomer.company === 'string' ? rawCustomer.company : '',
        notes: typeof rawCustomer.notes === 'string' ? rawCustomer.notes : ''
    };
}

function loadCart() {
    try {
        const savedCart = localStorage.getItem(appConfig.storageKey);
        return savedCart ? sanitizeCart(JSON.parse(savedCart)) : {};
    } catch (error) {
        console.warn('Não foi possível restaurar o carrinho salvo.', error);
        return {};
    }
}

function saveCart() {
    try {
        localStorage.setItem(appConfig.storageKey, JSON.stringify(state.cart));
    } catch (error) {
        console.warn('Não foi possível salvar o carrinho.', error);
    }
}

function loadCustomer() {
    try {
        const savedCustomer = localStorage.getItem(appConfig.customerStorageKey);
        return savedCustomer ? sanitizeCustomer(JSON.parse(savedCustomer)) : { name: '', company: '', notes: '' };
    } catch (error) {
        console.warn('Não foi possível restaurar os dados do atendimento.', error);
        return { name: '', company: '', notes: '' };
    }
}

function saveCustomer() {
    try {
        localStorage.setItem(appConfig.customerStorageKey, JSON.stringify(state.customer));
    } catch (error) {
        console.warn('Não foi possível salvar os dados do atendimento.', error);
    }
}

function getCategories() {
    const categories = new Set(produtos.map((product) => product.categoria));
    return ['Todas', ...Array.from(categories)];
}

function getCartSummary() {
    return Object.entries(state.cart).reduce((summary, [productId, qty]) => {
        const product = getProductById(productId);

        if (!product) {
            return summary;
        }

        summary.totalItems += qty;
        summary.totalPrice += product.preco * qty;
        return summary;
    }, { totalItems: 0, totalPrice: 0 });
}

function normalizeSearchText(value) {
    return String(value || '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, ' ')
        .trim();
}

function tokenizeSearchText(value) {
    const normalized = normalizeSearchText(value);
    return normalized ? normalized.split(/\s+/) : [];
}

function expandTokenVariants(tokens) {
    const variants = new Set();

    tokens.forEach((token) => {
        if (!token) {
            return;
        }

        variants.add(token);

        if (token.endsWith('s') && token.length > 3) {
            variants.add(token.slice(0, -1));
        }

        if (TOKEN_SYNONYMS[token]) {
            TOKEN_SYNONYMS[token].forEach((alias) => variants.add(alias));
        }

        if (token.includes('x')) {
            const parts = token.split('x').filter(Boolean);

            parts.forEach((part) => variants.add(part));

            for (let start = 0; start < parts.length; start += 1) {
                for (let end = start + 1; end < parts.length; end += 1) {
                    variants.add(parts.slice(start, end + 1).join('x'));
                }
            }
        }
    });

    return Array.from(variants);
}

function buildAliasText(product) {
    const baseText = normalizeSearchText(`${product.nome} ${product.categoria}`);
    const aliasParts = new Set();

    PHRASE_SYNONYMS.forEach(({ match, aliases }) => {
        if (baseText.includes(match)) {
            aliases.forEach((alias) => aliasParts.add(alias));
        }
    });

    tokenizeSearchText(baseText).forEach((token) => {
        if (TOKEN_SYNONYMS[token]) {
            TOKEN_SYNONYMS[token].forEach((alias) => aliasParts.add(alias));
        }
    });

    return Array.from(aliasParts).join(' ');
}

function createSearchEntry(product) {
    const aliasText = buildAliasText(product);
    const searchableText = `${product.nome} ${product.categoria} ${product.id} ${aliasText}`;
    const normalizedText = normalizeSearchText(searchableText);
    const tokens = expandTokenVariants(tokenizeSearchText(searchableText));

    return {
        text: normalizedText,
        tokens
    };
}

function matchesSearchQuery(product, searchTerm) {
    const entry = productSearchIndex.get(String(product.id));
    const normalizedQuery = normalizeSearchText(searchTerm);

    if (!normalizedQuery) {
        return true;
    }

    if (entry && entry.text.includes(normalizedQuery)) {
        return true;
    }

    const queryTokens = expandTokenVariants(tokenizeSearchText(searchTerm));
    const searchableTokens = entry ? entry.tokens : [];

    return queryTokens.every((queryToken) =>
        searchableTokens.some((searchableToken) =>
            searchableToken === queryToken ||
            searchableToken.startsWith(queryToken) ||
            searchableToken.includes(queryToken)
        )
    );
}

function getVisibleProducts() {
    const filteredProducts = produtos.filter((product) => {
        const matchesCategory = state.currentCategory === 'Todas' || product.categoria === state.currentCategory;
        const matchesSearch = matchesSearchQuery(product, state.searchTerm);
        const matchesPrice = product.preco >= state.priceMin && product.preco <= state.priceMax;
        return matchesCategory && matchesSearch && matchesPrice;
    });

    const sortedProducts = [...filteredProducts];

    if (state.sortBy === 'default') {
        sortedProducts.sort((a, b) => (b.destaque ? 1 : 0) - (a.destaque ? 1 : 0));
    }

    if (state.sortBy === 'name-asc') {
        sortedProducts.sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
    }

    if (state.sortBy === 'price-asc') {
        sortedProducts.sort((a, b) => a.preco - b.preco);
    }

    if (state.sortBy === 'price-desc') {
        sortedProducts.sort((a, b) => b.preco - a.preco);
    }

    return sortedProducts;
}

function renderStaticConfig() {
    const phoneLink = document.getElementById('contactPhone');
    const emailLink = document.getElementById('contactEmail');
    const addressContainer = document.getElementById('contactAddress');
    const mapFrame = document.getElementById('contactMap');
    const instagramLink = document.getElementById('instagramLink');
    const facebookLink = document.getElementById('facebookLink');
    const linkedinLink = document.getElementById('linkedinLink');

    if (phoneLink) {
        phoneLink.textContent = appConfig.contact.phoneDisplay;
        phoneLink.href = appConfig.contact.phoneHref;
    }

    if (emailLink) {
        emailLink.textContent = appConfig.contact.email;
        emailLink.href = appConfig.contact.emailHref;
    }

    if (addressContainer) {
        addressContainer.innerHTML = appConfig.contact.addressHtml;
    }

    if (mapFrame) {
        mapFrame.src = appConfig.contact.mapEmbedUrl;
    }

    const socialColumn = instagramLink?.closest('.col-lg-4') || facebookLink?.closest('.col-lg-4') || linkedinLink?.closest('.col-lg-4');

    const socialMap = [
        { el: instagramLink, href: appConfig.socialLinks.instagram },
        { el: facebookLink, href: appConfig.socialLinks.facebook },
        { el: linkedinLink, href: appConfig.socialLinks.linkedin }
    ];

    let activeSocialLinks = 0;

    socialMap.forEach(({ el, href }) => {
        if (!el) return;
        if (href && href !== '#') {
            el.href = href;
            activeSocialLinks += 1;
        } else {
            el.closest('li')?.remove();
        }
    });

    if (activeSocialLinks === 0 && socialColumn) {
        socialColumn.remove();
    }
}

function renderCategories() {
    const container = document.getElementById('categoryContainer');
    const categories = getCategories();

    container.innerHTML = categories.map((category) => `
        <button
            type="button"
            class="category-btn ${category === state.currentCategory ? 'active' : ''}"
            data-category="${category}"
        >
            ${category}
        </button>
    `).join('');
}

function renderCatalogSummary(visibleProducts) {
    const summary = document.getElementById('catalogSummary');
    const parts = [`${visibleProducts.length} produto(s)`];

    if (state.currentCategory !== 'Todas') {
        parts.push(`na categoria ${state.currentCategory}`);
    }

    if (state.searchTerm.trim()) {
        parts.push(`para "${state.searchTerm.trim()}"`);
    }

    summary.textContent = `Exibindo ${parts.join(' ')}`;
}

function renderProductActions(productId) {
    const qty = state.cart[String(productId)] || 0;
    const product = getProductById(productId);
    const name = product ? product.nome : 'produto';

    if (qty === 0) {
        return `
            <button
                type="button"
                class="btn btn-outline-primary w-100"
                data-action="add"
                data-product-id="${productId}"
                aria-label="Adicionar ${name} ao orçamento"
            >
                <i class="fa-solid fa-plus me-2" aria-hidden="true"></i> Adicionar
            </button>
        `;
    }

    return `
        <div class="qty-controls">
            <button type="button" class="qty-btn" data-action="decrease" data-product-id="${productId}" aria-label="Remover uma unidade de ${name}">
                <i class="fa-solid fa-minus" aria-hidden="true"></i>
            </button>
            <input type="text" class="qty-input" value="${qty}" readonly aria-label="Quantidade de ${name}">
            <button type="button" class="qty-btn" data-action="increase" data-product-id="${productId}" aria-label="Adicionar mais uma unidade de ${name}">
                <i class="fa-solid fa-plus" aria-hidden="true"></i>
            </button>
        </div>
    `;
}

function renderProductCard(product, index) {
    return `
        <div
            class="col-sm-6 col-md-4 col-lg-3"
            data-product-card="${product.id}"
            data-product-index="${index}"
            data-aos="fade-up"
            data-aos-delay="${(index % 4) * 100}"
        >
            <div class="product-card">
                <div class="product-img-wrapper">
                    ${product.destaque ? '<span class="badge-mais-vendido">Mais vendido</span>' : ''}
                    <img src="${product.imagem}" alt="${product.nome}" loading="lazy" decoding="async" onerror="handleImgError(this)">
                </div>
                <div class="product-info">
                    <div class="product-category">${product.categoria}</div>
                    <div class="product-title mb-1">${product.nome}</div>
                    <div class="product-price fw-bold text-success mb-3 fs-5">${formatPrice(product.preco)}</div>
                    <div class="mt-auto" data-product-actions>
                        ${renderProductActions(product.id)}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function updateProductCard(productId) {
    const card = document.querySelector(`[data-product-card="${productId}"]`);

    if (!card) {
        return;
    }

    const actionsContainer = card.querySelector('[data-product-actions]');

    if (actionsContainer) {
        actionsContainer.innerHTML = renderProductActions(productId);
    }
}

function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const visibleProducts = getVisibleProducts();

    renderCatalogSummary(visibleProducts);

    if (visibleProducts.length === 0) {
        grid.innerHTML = `
            <div class="col-12">
                <div class="empty-results text-center py-5">
                    <i class="fa-solid fa-box-open empty-results-icon mb-3"></i>
                    <p class="text-muted mb-1">Nenhum produto encontrado com os filtros atuais.</p>
                    <button type="button" class="btn btn-outline-secondary mt-3" id="emptyResultsReset">Limpar filtros</button>
                </div>
            </div>
        `;
        return;
    }

    grid.innerHTML = visibleProducts.map((product, index) => renderProductCard(product, index)).join('');

    if (window.AOS) {
        AOS.refresh();
    }
}

function renderCartModal() {
    const container = document.getElementById('cartItemsContainer');
    const items = Object.entries(state.cart);

    if (items.length === 0) {
        container.innerHTML = '<p class="text-center text-muted col-12 my-5">Seu orçamento está vazio.<br>Adicione produtos pelo catálogo.</p>';
        return;
    }

    container.innerHTML = items.map(([productId, qty]) => {
        const product = getProductById(productId);

        if (!product) {
            return '';
        }

        return `
            <div class="cart-item">
                <img src="${product.imagem}" alt="${product.nome}" class="cart-item-img me-3" loading="lazy" decoding="async" onerror="handleImgError(this)">
                <div class="flex-grow-1">
                    <p class="cart-item-title mb-0">${product.nome}</p>
                    <div class="text-muted small mb-1">${product.categoria}</div>
                    <div class="fw-bold text-success">${formatPrice(product.preco * qty)}</div>
                </div>
                <div class="qty-controls ms-3 cart-qty-controls">
                    <button type="button" class="qty-btn qty-btn-sm" data-action="decrease" data-product-id="${product.id}" aria-label="Remover uma unidade de ${product.nome}">
                        <i class="fa-solid fa-minus qty-btn-icon-sm" aria-hidden="true"></i>
                    </button>
                    <input type="text" class="qty-input qty-input-sm" value="${qty}" readonly aria-label="Quantidade de ${product.nome}">
                    <button type="button" class="qty-btn qty-btn-sm" data-action="increase" data-product-id="${product.id}" aria-label="Adicionar mais uma unidade de ${product.nome}">
                        <i class="fa-solid fa-plus qty-btn-icon-sm" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function updateCartUI() {
    const { totalItems, totalPrice } = getCartSummary();
    const cartCount = document.getElementById('cartCount');
    const cartTotalItems = document.getElementById('cartTotalItems');
    const cartTotalPrice = document.getElementById('cartTotalPrice');
    const sendBtn = document.getElementById('btnSendWhatsApp');
    const clearBtn = document.getElementById('btnClearCart');

    cartCount.textContent = totalItems;
    cartTotalItems.textContent = totalItems;
    cartTotalPrice.textContent = formatPrice(totalPrice);

    sendBtn.disabled = totalItems === 0;
    clearBtn.disabled = totalItems === 0;
}

function syncCustomerForm() {
    const customerName = document.getElementById('customerName');
    const customerCompany = document.getElementById('customerCompany');
    const customerNotes = document.getElementById('customerNotes');

    customerName.value = state.customer.name;
    customerCompany.value = state.customer.company;
    customerNotes.value = state.customer.notes;
}

function syncFiltersForm() {
    document.getElementById('catalogSearch').value = state.searchTerm;
    document.getElementById('catalogSort').value = state.sortBy;
    document.getElementById('priceMin').value = state.priceMin > 0 ? state.priceMin : '';
    document.getElementById('priceMax').value = state.priceMax < Infinity ? state.priceMax : '';
}

function updateState(options = {}) {
    const { rerenderProducts = false, changedProductId = null } = options;

    saveCart();

    if (rerenderProducts) {
        renderProducts();
    } else if (changedProductId !== null) {
        updateProductCard(changedProductId);
    }

    updateCartUI();
    renderCartModal();
}

function addToCart(productId) {
    const normalizedId = String(productId);
    state.cart[normalizedId] = (state.cart[normalizedId] || 0) + 1;
    updateState({ changedProductId: normalizedId });
    const product = getProductById(normalizedId);
    if (product) showToast(product.nome);
}

function updateQty(productId, change) {
    const normalizedId = String(productId);
    const currentQty = state.cart[normalizedId] || 0;
    const nextQty = currentQty + change;

    if (nextQty > 0) {
        state.cart[normalizedId] = nextQty;
    } else {
        delete state.cart[normalizedId];
    }

    updateState({ changedProductId: normalizedId });
}

function clearCart() {
    state.cart = {};
    updateState({ rerenderProducts: true });
}

function updatePriceValidation() {
    const errorWrapper = document.getElementById('priceRangeErrorWrapper');
    const priceMinEl = document.getElementById('priceMin');
    const priceMaxEl = document.getElementById('priceMax');
    const invalid = state.priceMin > 0 && state.priceMax < Infinity && state.priceMin > state.priceMax;

    if (errorWrapper) errorWrapper.hidden = !invalid;
    if (priceMinEl) priceMinEl.classList.toggle('is-invalid', invalid);
    if (priceMaxEl) priceMaxEl.classList.toggle('is-invalid', invalid);
}

function resetCatalogFilters() {
    state.currentCategory = 'Todas';
    state.searchTerm = '';
    state.sortBy = 'default';
    state.priceMin = 0;
    state.priceMax = Infinity;
    syncFiltersForm();
    updatePriceValidation();
    renderCategories();
    renderProducts();
}

function updateCustomerField(field, value) {
    state.customer[field] = value;
    saveCustomer();
}

function sendWhatsAppBudget() {
    const items = Object.entries(state.cart);

    if (items.length === 0) {
        return;
    }

    const nameInput = document.getElementById('customerName');
    if (!state.customer.name.trim()) {
        nameInput.classList.add('is-invalid');
        nameInput.focus();
        return;
    }
    nameInput.classList.remove('is-invalid');

    let totalItems = 0;
    let totalPrice = 0;
    let message = 'Olá ABC Abrasivos! Vim pelo catálogo online e gostaria de solicitar este orçamento:\n\n';

    if (state.customer.name.trim()) {
        message += `*Nome:* ${state.customer.name.trim()}\n`;
    }

    if (state.customer.company.trim()) {
        message += `*Empresa:* ${state.customer.company.trim()}\n`;
    }

    if (state.customer.name.trim() || state.customer.company.trim()) {
        message += '\n';
    }

    items.forEach(([productId, qty]) => {
        const product = getProductById(productId);

        if (!product) {
            return;
        }

        const lineTotal = product.preco * qty;
        totalItems += qty;
        totalPrice += lineTotal;
        message += `- ${qty}x ${product.nome} = *${formatPrice(lineTotal)}*\n`;
    });

    message += `\n*Quantidade Total:* ${totalItems} itens`;
    message += `\n*Valor Total:* ${formatPrice(totalPrice)}`;

    if (state.customer.notes.trim()) {
        message += `\n\n*Observações:* ${state.customer.notes.trim()}`;
    }

    const whatsappUrl = `https://wa.me/${appConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener');

    const budgetModalInstance = bootstrap.Modal.getInstance(document.getElementById('budgetModal'));
    budgetModalInstance?.hide();

    clearCart();

    document.getElementById('budgetModal').addEventListener('hidden.bs.modal', () => {
        new bootstrap.Modal(document.getElementById('successModal')).show();
    }, { once: true });
}

function handleCategoryClick(event) {
    const button = event.target.closest('[data-category]');

    if (!button) {
        return;
    }

    state.currentCategory = button.dataset.category;
    renderCategories();
    renderProducts();
}

function handleCartAction(event) {
    const button = event.target.closest('[data-action][data-product-id]');

    if (!button) {
        return;
    }

    const productId = button.dataset.productId;
    const action = button.dataset.action;

    if (action === 'add' || action === 'increase') {
        addToCart(productId);
    }

    if (action === 'decrease') {
        updateQty(productId, -1);
    }
}

function bindEvents() {
    const categoryContainer = document.getElementById('categoryContainer');
    const productsGrid = document.getElementById('productsGrid');
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const budgetModal = document.getElementById('budgetModal');
    const sendBtn = document.getElementById('btnSendWhatsApp');
    const clearCartBtn = document.getElementById('btnClearCart');
    const clearCatalogFilters = document.getElementById('clearCatalogFilters');
    const catalogSearch = document.getElementById('catalogSearch');
    const catalogSort = document.getElementById('catalogSort');
    const customerName = document.getElementById('customerName');
    const customerCompany = document.getElementById('customerCompany');
    const customerNotes = document.getElementById('customerNotes');
    const navbar = document.getElementById('mainNavbar');
    const priceMinInput = document.getElementById('priceMin');
    const priceMaxInput = document.getElementById('priceMax');

    categoryContainer.addEventListener('click', handleCategoryClick);
    productsGrid.addEventListener('click', handleCartAction);
    cartItemsContainer.addEventListener('click', handleCartAction);
    budgetModal.addEventListener('show.bs.modal', renderCartModal);
    sendBtn.addEventListener('click', sendWhatsAppBudget);
    clearCartBtn.addEventListener('click', clearCart);
    clearCatalogFilters.addEventListener('click', resetCatalogFilters);

    catalogSearch.addEventListener('input', (event) => {
        state.searchTerm = event.target.value;
        renderProducts();
    });

    catalogSort.addEventListener('change', (event) => {
        state.sortBy = event.target.value;
        renderProducts();
    });

    priceMinInput.addEventListener('input', (event) => {
        const val = parseFloat(event.target.value);
        state.priceMin = Number.isFinite(val) && val >= 0 ? val : 0;
        updatePriceValidation();
        renderProducts();
    });

    priceMaxInput.addEventListener('input', (event) => {
        const val = parseFloat(event.target.value);
        state.priceMax = Number.isFinite(val) && val >= 0 ? val : Infinity;
        updatePriceValidation();
        renderProducts();
    });

    customerName.addEventListener('input', (event) => {
        updateCustomerField('name', event.target.value);
        if (event.target.value.trim()) event.target.classList.remove('is-invalid');
    });
    customerCompany.addEventListener('input', (event) => updateCustomerField('company', event.target.value));
    customerNotes.addEventListener('input', (event) => updateCustomerField('notes', event.target.value));

    productsGrid.addEventListener('click', (event) => {
        if (event.target.closest('#emptyResultsReset')) {
            resetCatalogFilters();
        }
    });

    const floatingWhatsappBtn = document.getElementById('floatingWhatsappBtn');
    if (floatingWhatsappBtn) {
        floatingWhatsappBtn.addEventListener('click', () => {
            const url = `https://wa.me/${appConfig.whatsappNumber}?text=${encodeURIComponent(appConfig.whatsappGreeting)}`;
            window.open(url, '_blank', 'noopener');
        });
    }

    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled-nav', window.scrollY > 50);
        if (backToTop) backToTop.classList.toggle('visible', window.scrollY > 400);
    });

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderStaticConfig();
    renderCategories();
    syncFiltersForm();
    syncCustomerForm();
    renderProducts();
    renderCartModal();
    updateCartUI();
    bindEvents();
});
