const isMobile = window.innerWidth <= 768;
const thresholdSteps = [...Array(10).keys()].map(i => i / 10);

/* appaerance animation */
const animatedElements = document.querySelectorAll('.js-appear, .mark');

if (animatedElements.length) {
    animatedElements.forEach(el => {
        const observerCallback = function (e) {
            const { target, isIntersecting } = e[0];
            if (isIntersecting) {
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
};