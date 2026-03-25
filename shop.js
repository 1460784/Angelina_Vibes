/* ========================================
   ANGELINA VIBES - JAVASCRIPT
   ======================================== */

// Product Database
const products = [
    {
        id: 1,
        name: 'Classic T-Shirt',
        category: 'shirts',
        price: 29.99,
        image: '👕',
        description: 'Premium cotton t-shirt with superior comfort and durability. Perfect for everyday wear.',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        rating: 4.5
    },
    {
        id: 2,
        name: 'Modern Abstract Wall Art',
        category: 'wall-art',
        price: 79.99,
        image: '🖼️',
        description: 'Contemporary abstract art print on high-quality canvas. Adds a modern touch to any space.',
        sizes: ['12x16', '16x20', '20x24'],
        rating: 5
    },
    {
        id: 3,
        name: 'Athletic Hoodie',
        category: 'hoodies',
        price: 54.99,
        image: '🏃',
        description: 'Comfortable and stylish hoodie perfect for workouts and casual wear.',
        sizes: ['S', 'M', 'L', 'XL'],
        rating: 4.8
    },
    {
        id: 4,
        name: 'Vintage Graphic Tee',
        category: 'shirts',
        price: 34.99,
        image: '👔',
        description: 'Retro-inspired graphic t-shirt with unique vintage design. A statement piece for any wardrobe.',
        sizes: ['S', 'M', 'L', 'XL'],
        rating: 4.6
    },
    {
        id: 5,
        name: 'Landscape Canvas Print',
        category: 'wall-art',
        price: 89.99,
        image: '🏞️',
        description: 'Beautiful landscape painting on premium canvas. Brings nature into your home.',
        sizes: ['16x20', '20x24', '24x32'],
        rating: 4.7
    },
    {
        id: 6,
        name: 'Baseball Cap',
        category: 'accessories',
        price: 24.99,
        image: '🧢',
        description: 'Classic adjustable baseball cap in premium materials. Perfect for any occasion.',
        sizes: ['One Size'],
        rating: 4.4
    },
    {
        id: 7,
        name: 'Designer Sweatshirt',
        category: 'hoodies',
        price: 59.99,
        image: '👚',
        description: 'Oversized designer sweatshirt made from premium fleece. Ultra-comfortable.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        rating: 4.9
    },
    {
        id: 8,
        name: 'Minimalist Wall Art',
        category: 'wall-art',
        price: 49.99,
        image: '⬜',
        description: 'Elegant minimalist design perfect for modern interiors. Available in multiple colors.',
        sizes: ['12x12', '16x16', '20x20'],
        rating: 4.5
    },
    {
        id: 9,
        name: 'Crew Neck T-Shirt',
        category: 'shirts',
        price: 27.99,
        image: '👕',
        description: 'Classic crew neck tee in premium cotton. A wardrobe essential.',
        sizes: ['S', 'M', 'L', 'XL'],
        rating: 4.3
    },
    {
        id: 10,
        name: 'Stylish Sunglasses',
        category: 'accessories',
        price: 89.99,
        image: '😎',
        description: 'UV-protective sunglasses with premium lenses and fashionable frames.',
        sizes: ['One Size'],
        rating: 4.6
    },
    {
        id: 11,
        name: 'Premium Polo Shirt',
        category: 'shirts',
        price: 42.99,
        image: '👔',
        description: 'Elegant polo shirt perfect for both casual and formal settings.',
        sizes: ['S', 'M', 'L', 'XL'],
        rating: 4.7
    },
    {
        id: 12,
        name: 'Geometric Wall Art',
        category: 'wall-art',
        price: 59.99,
        image: '◆',
        description: 'Modern geometric shapes create a striking focal point.',
        sizes: ['16x16', '20x20', '24x24'],
        rating: 4.8
    }
];

// Shopping Cart
let cart = [];

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadCart();
    displayProducts(products);
    setupEventListeners();
});

// Display all products
function displayProducts(productsToDisplay) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    if (productsToDisplay.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">No products found matching your filters.</p>';
        return;
    }

    productsToDisplay.forEach(product => {
        const rating = '⭐'.repeat(Math.floor(product.rating));
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">${product.image}</div>
            <div class="product-info">
                <p class="product-category">${product.category}</p>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-rating">${rating} (${product.rating})</p>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <div class="product-actions">
                    <button class="btn btn-view btn-small" onclick="openDetailModal(${product.id})">View Details</button>
                    <button class="btn btn-primary btn-small" onclick="addToCart(${product.id})">Add Cart</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Open product detail modal
function openDetailModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    document.getElementById('detailName').textContent = product.name;
    document.getElementById('detailPrice').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('detailDescription').textContent = product.description;
    document.getElementById('detailImage').innerHTML = `<div style="font-size: 6rem;">${product.image}</div>`;
    document.getElementById('quantity').value = 1;

    // Setup size options
    const sizeOptions = document.getElementById('sizeOptions');
    sizeOptions.innerHTML = `<label class="size-label">Size:</label><div class="size-buttons">`;
    product.sizes.forEach(size => {
        const sizeBtn = document.createElement('button');
        sizeBtn.className = 'size-btn';
        if (product.sizes[0] === size) sizeBtn.classList.add('active');
        sizeBtn.textContent = size;
        sizeBtn.onclick = function(e) {
            e.preventDefault();
            document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        };
        sizeOptions.querySelector('.size-buttons').appendChild(sizeBtn);
    });

    // Store current product id for adding from detail
    document.getElementById('detailModal').dataset.productId = productId;
    document.getElementById('detailModal').classList.add('show');
}

// Close detail modal
function closeDetailModal() {
    document.getElementById('detailModal').classList.remove('show');
}

// Add to cart from detail modal
function addToCartFromDetail() {
    const productId = parseInt(document.getElementById('detailModal').dataset.productId);
    const quantity = parseInt(document.getElementById('quantity').value);
    const sizeBtn = document.querySelector('.size-btn.active');
    const size = sizeBtn ? sizeBtn.textContent : '';

    addToCart(productId, quantity, size);
    closeDetailModal();
}

// Add product to cart
function addToCart(productId, quantity = 1, size = null) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // If size not provided, use first available size
    if (!size) {
        size = product.sizes[0];
    }

    // Check if item with same product id and size already exists
    const existingItem = cart.find(item => item.id === productId && item.size === size);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            quantity: quantity,
            size: size,
            image: product.image
        });
    }

    saveCart();
    updateCartUI();
    showNotification(`${product.name} added to cart!`);
}

// Remove from cart
function removeFromCart(productId, size) {
    cart = cart.filter(item => !(item.id === productId && item.size === size));
    saveCart();
    updateCartUI();
}

// Update cart quantity
function updateQuantity(productId, size, quantity) {
    const item = cart.find(item => item.id === productId && item.size === size);
    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId, size);
        } else {
            item.quantity = quantity;
            saveCart();
            updateCartUI();
        }
    }
}

// Update cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);

    const cartItems = document.getElementById('cartItems');
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <p>Your cart is empty</p>
            </div>
        `;
        updateCartSummary();
        return;
    }

    cartItems.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.image} ${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-qty">
                    <label>Size: ${item.size}</label>
                </div>
                <div class="cart-item-qty">
                    <button onclick="updateQuantity(${item.id}, '${item.size}', ${item.quantity - 1})" style="width: 30px; padding: 4px; cursor: pointer;">−</button>
                    <input type="number" class="qty-input" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, '${item.size}', this.value)">
                    <button onclick="updateQuantity(${item.id}, '${item.size}', ${item.quantity + 1})" style="width: 30px; padding: 4px; cursor: pointer;">+</button>
                </div>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id}, '${item.size}')">Remove</button>
        `;
        cartItems.appendChild(cartItem);
    });

    updateCartSummary();
}

// Update cart summary (total, tax, etc)
function updateCartSummary() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

// Open cart modal
function openCart() {
    document.getElementById('cartModal').classList.add('show');
}

// Close cart modal
function closeCart() {
    document.getElementById('cartModal').classList.remove('show');
}

// Cart button click
document.addEventListener('DOMContentLoaded', function() {
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', openCart);
    }
});

// Checkout (placeholder)
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) * 1.1;
    alert(`Order placed! Total: $${total.toFixed(2)}\n\nThank you for your purchase!`);
    cart = [];
    saveCart();
    updateCartUI();
    closeCart();
}

// Filter & Sort functionality
function applyFilters() {
    const category = document.getElementById('categoryFilter').value;
    const maxPrice = parseFloat(document.getElementById('priceFilter').value);
    const sortFilter = document.getElementById('sortFilter').value;

    // Update price display
    document.getElementById('priceValue').textContent = `$${maxPrice}`;

    // Filter products
    let filtered = products.filter(product => {
        const categoryMatch = !category || product.category === category;
        const priceMatch = product.price <= maxPrice;
        return categoryMatch && priceMatch;
    });

    // Sort products
    switch(sortFilter) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }

    displayProducts(filtered);
}

// Reset filters
function resetFilters() {
    document.getElementById('categoryFilter').value = '';
    document.getElementById('priceFilter').value = '500';
    document.getElementById('sortFilter').value = '';
    document.getElementById('priceValue').textContent = '$500';
    displayProducts(products);
}

// Scroll to products section
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('angelinaVibesCart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCart() {
    const saved = localStorage.getItem('angelinaVibesCart');
    if (saved) {
        cart = JSON.parse(saved);
        updateCartUI();
    }
}

// Setup event listeners
function setupEventListeners() {
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }

    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        const cartModal = document.getElementById('cartModal');
        const detailModal = document.getElementById('detailModal');

        if (event.target === cartModal) {
            cartModal.classList.remove('show');
        }
        if (event.target === detailModal) {
            detailModal.classList.remove('show');
        }
    });
}

// Notification system
function showNotification(message) {
    // Simple notification (you can enhance this)
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #da88da;
        color: blue;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        animation: slideInUp 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutDown 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            transform: translateY(100px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slideOutDown {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(100px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
