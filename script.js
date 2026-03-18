/**
 * Lógica del Lightbox (Visualizador de imágenes)
 */
function openLightbox(src, title) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const titleEl = document.getElementById('lightbox-title');
    
    img.src = src;
    titleEl.textContent = title;
    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Evita el scroll del fondo
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.add('hidden');
    document.body.style.overflow = 'auto'; // Restaura el scroll
}

/**
 * Filtro de Categorías de la Galería
 */
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 1. Gestionar estados visuales de los botones
            filterBtns.forEach(b => {
                b.classList.remove('text-blue-600', 'font-bold', 'active');
            });
            btn.classList.add('text-blue-600', 'font-bold', 'active');

            // 2. Filtrar elementos
            const filter = btn.getAttribute('data-filter');

            galleryItems.forEach(item => {
                // El item de "Próximamente" no tiene data-category, lo manejamos aparte o lo dejamos siempre
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter || !category) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
});

/**
 * Accesibilidad: Cerrar modal con la tecla ESC
 */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});