const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
const thresholdSteps = [...Array(10).keys()].map(i => i / 10);
const isMobile = window.innerWidth <= 768

// sliders

const advantagesSlider = document.querySelectorAll('.advantages_slider');
advantagesSlider.forEach(el => {
    tns({
        container: el,
        items: 1,
        center: true,
        gutter: 0,
        mouseDrag: true,
        autoplay: false,
        nav: false,
        navPosition: 'bottom',
        controls: false,
        loop: true,
    });
});

// menu
const menuToggleElement = document.querySelector('.menu-toggle');
if (menuToggleElement) {
    menuToggleElement.addEventListener('click', () => document.body.classList.toggle('menu-opened'));
}


function closeAllOpened() {
    document.querySelectorAll('.opened').forEach(el => el.classList.remove('opened'));
    document.body.classList.remove('menu-opened');
    document.querySelectorAll('.popup-opened').forEach(el => el.classList.remove('popup-opened'));
    document.querySelectorAll('.js-form-popup').forEach(el => el.classList.remove('opened'));
    document.querySelectorAll('.filters_content').forEach(el => el.classList.remove('opened'));
}


/* appaerance animation */
const animatedElements = document.querySelectorAll('.js-animation, .section_title');

if (animatedElements.length) {
    animatedElements.forEach(el => {
        const isExpericenceBlock = el.classList.contains('experience');

        let ratio = (isMobile || isExpericenceBlock ) ? 0.0005 : 0.3;
        if (el.classList.contains('section_image-wrapper') && !isMobile) {
            ratio = 0.6;
        }

        const observerCallback = function (e) {
            const { target, intersectionRatio } = e[0];
            if (intersectionRatio > ratio) {
                target.classList.add('animated');
            }
        };

        const observer = new IntersectionObserver(observerCallback, {
            rootMargin: '0px 0px -15% 0px',
            threshold: thresholdSteps,
            //root: document.body
        });
        observer.observe(el);
    })
}

/* Tabs */
function initTabs() {
    const tabsContainers = document.querySelectorAll('.tabs');

    tabsContainers.forEach(tabContainer => {
        const tabsButtons = tabContainer.querySelectorAll('.tabs_button');
        const tabsBlocks = tabContainer.querySelectorAll('.tabs_tab');

        if (tabsButtons.length) {
            function switchTab(e) {
                e.preventDefault();

                const index = e.target.dataset.tab;
                tabsButtons.forEach(el => el.classList.remove('active'));
                tabsBlocks.forEach(el => el.classList.remove('active'));

                tabsButtons[index - 1].classList.add('active');
                tabsBlocks[index - 1].classList.add('active');
            }

            tabsButtons.forEach(el => el.addEventListener('click', switchTab));
        }
    });
}

initTabs()
