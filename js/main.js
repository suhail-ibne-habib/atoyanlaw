gsap.registerPlugin(ScrollTrigger);

const elements = [
    { selector: '.gsap-l', animation: { x: '-2rem', opacity: 0 } },
    { selector: '.gsap-r', animation: { x: '2rem', opacity: 0 } },
    { selector: '.gsap-seq-itm', animation: { y: '2rem', opacity: 0 } },
    { selector: '.gsap-seq-lst li', animation: { x: '2rem', opacity: 0 } },
];

elements.forEach(({ selector, animation }) => {
    const items = document.querySelectorAll(selector);

    if (items.length) {
        items.forEach(item => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
                ...animation, // Spread the specific animation properties
                duration: 1,
                ease: 'power1.out',
            });
        });
    }
});

const parallaxYs = document.querySelectorAll('.parallax-y');

if (parallaxYs) {
    parallaxYs.forEach(parallaxY => {
        // Initial value for the y position
        gsap.set(parallaxY, { y: -100 });

        gsap.to( parallaxY, {
            ease: 'none',
            y: 100,
            scrollTrigger: {
                trigger: parallaxY,
                start: "top 80%",
                toggleActions: 'play none none none',
                scrub: true
            }
        })
    });
}

const parallaxXs = document.querySelectorAll('.parallax-x');

if (parallaxXs) {
    parallaxXs.forEach(parallaxX => {

        gsap.set(parallaxX, {y: 100})

        gsap.to( parallaxX, {
            ease: 'none',
            y: -100,
            scrollTrigger: {
                trigger: parallaxX,
                start: "top 80%",
                toggleActions: 'play none none none',
                scrub: true
            }
        })

    });
}

const slickScrollers = document.querySelectorAll('.slick-scroller')

if( slickScrollers ){
    slickScrollers.forEach( scroller => {
        
        $(document).ready(function() {
            // Initialize all slick-scrollers
            $('.slick-scroller').each(function() {
                const scroller = $(this);
                
                // Initialize the main slider for each scroller
                scroller.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false, // Disable default navigation arrows
                });
        
            });
        });
        
        

    })
}
