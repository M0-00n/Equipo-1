document.addEventListener('DOMContentLoaded', function() {
    const tooltips = document.querySelectorAll('.tts-tooltip');
    let activeTooltip = null;
    
    // Posicionamiento inicial
    function positionTooltips() {
        tooltips.forEach(tooltip => {
            const x = tooltip.getAttribute('data-tts-x');
            const y = tooltip.getAttribute('data-tts-y');
            tooltip.style.left = `${x}%`;
            tooltip.style.top = `${y}%`;
            
            // Ajustar posición del tooltip-content si se sale del contenedor
            const content = tooltip.querySelector('.tts-tooltip-content');
            const tooltipRect = tooltip.getBoundingClientRect();
            const contentHeight = content.offsetHeight;
            
            if (tooltipRect.bottom + contentHeight > window.innerHeight) {
                content.style.top = 'auto';
                content.style.bottom = '100%';
                content.style.marginTop = '0';
                content.style.marginBottom = '10px';
            } else {
                content.style.top = '100%';
                content.style.bottom = 'auto';
                content.style.marginTop = '10px';
                content.style.marginBottom = '0';
            }
        });
    }
    
    // Manejar interacciones
    function setupTooltipInteractions() {
        tooltips.forEach(tooltip => {
            const pin = tooltip.querySelector('.tts-pin');
            
            pin.addEventListener('click', function(e) {
                e.stopPropagation();
                
                if (tooltip.classList.contains('tts-active')) {
                    tooltip.classList.remove('tts-active');
                    activeTooltip = null;
                    return;
                }
                
                if (activeTooltip) {
                    activeTooltip.classList.remove('tts-active');
                }
                
                tooltip.classList.add('tts-active');
                activeTooltip = tooltip;
            });
        });
        
        document.addEventListener('click', function() {
            if (activeTooltip) {
                activeTooltip.classList.remove('tts-active');
                activeTooltip = null;
            }
        });
    }
    
    // Inicialización
    positionTooltips();
    setupTooltipInteractions();
    
    // Redimensionamiento
    window.addEventListener('resize', function() {
        positionTooltips();
    });
});