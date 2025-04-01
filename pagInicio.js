const tooltips=document.querySelectorAll('all-tooltips .tooltip');
const fullDiv = document.querySelector('section');
const containerRamhot= document.querySelector('.containerRamHot');

function contentPosition(){
    tooltips.forEach(tooltip => {
        const pin =tooltip.querySelector('.pin');
        const content = tooltip.querySelector('.tooltip-content');
        const arrow =tooltip.querySelector('.arrow');
        content.computedStyleMap.left =pin.offsetLeft+'px';
        content.computedStyleMap.top =pin.offsetTop+'px';

    })
}
contentPosition();