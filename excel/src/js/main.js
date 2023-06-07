const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
const thresholdSteps = [...Array(10).keys()].map(i => i / 10);
const isMobile = window.innerWidth <= 768

// sliders

const advantagesSlider = document.querySelectorAll('.advantages_slider');
advantagesSlider.forEach(el => {
    tns({
        container: el,
        mouseDrag: true,
        autoplay: false,
        nav: false,
        controls: false,
        loop: false,
        gutter: 16,
        items: 1,
        center: true,
        responsive: {
            768: {
                // autoWidth: true,
                fixedWidth: 370,
                items: 2,
                center: false,
                gutter: 16,
                lazyload: true,
            },
            1360: {
                gutter: 32,
                fixedWidth: 650,
            },
        }
    });
});

const processSlider = document.querySelectorAll('.process_grid');
processSlider.forEach(el => {
    tns({
        container: el,
        mouseDrag: true,
        autoplay: false,
        nav: false,
        navPosition: 'bottom',
        controls: false,
        loop: false,
        gutter: 16,
        items: 1,
        center: true,
        responsive: {
            1024: {
                disable: true,
            },
        }
    });
});

const partnershipSlider = document.querySelectorAll('.partnership_slider');
partnershipSlider.forEach(el => {
    tns({
        container: el,
        mouseDrag: true,
        autoplay: false,
        nav: false,
        navPosition: 'bottom',
        controls: false,
        loop: false,
        gutter: 16,
        items: 1,
        center: true,
        responsive: {
            768: {
                autoWidth: true,
                items: 3.5,
                center: false,
                gutter: 16,
            },
            1360: {
                gutter: 28,
            },
        }
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
