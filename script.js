let cartItemsCount = 0;

// Функция переключения экранов
function navigateTo(screenId, navElement = null) {
    // 1. Скрываем все экраны
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });

    // 2. Показываем нужный
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        // Прокручиваем контейнер наверх при переходе
        document.querySelector('.app-container').scrollTop = 0;
    }

    // 3. Управление нижним меню (скрываем его на карточке товара)
    const bottomNav = document.getElementById('main-nav');
    if (screenId === 'screen-product') {
        bottomNav.style.display = 'none';
    } else {
        bottomNav.style.display = 'flex';
    }

    // 4. Подсветка активного таба в меню
    if (navElement) {
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        navElement.classList.add('active');
    }
}

// Функция добавления товара
function addToCart(productName, price) {
    cartItemsCount++;
    
    const badge = document.getElementById('cart-count');
    badge.textContent = cartItemsCount;
    badge.style.opacity = '1';
    
    // Анимация кнопки, на которую нажали
    const btn = event.target;
    const originalText = btn.textContent;
    
    btn.textContent = "Добавлено ✓";
    btn.style.background = "#d1fae5";
    btn.style.color = "#065f46";
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = "#eef2ff";
        btn.style.color = "#2563eb";
    }, 1000);
}

// Управление фильтрами в каталоге (визуальный эффект)
document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', function() {
        document.querySelectorAll('.tag').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
    });
});