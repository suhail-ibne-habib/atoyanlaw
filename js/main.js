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
            ease: "slow",
            y: 100,
            scrollTrigger: {
                trigger: parallaxY,
                start: "top center",
                end: "end top",
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
            ease: 'slow',
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

// const slickScrollers = document.querySelectorAll('.slick-scroller')

// if( slickScrollers ){
//     slickScrollers.forEach( scroller => {
        
//         $(document).ready(function() {
//             // Initialize all slick-scrollers
//             $('.slick-scroller').each(function() {
//                 const scroller = $(this);
                
//                 // Initialize the main slider for each scroller
//                 scroller.slick({
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     arrows: false, // Disable default navigation arrows
//                 });
        
//             });
//         });
        
        

//     })
// }

const slickSliders = document.querySelectorAll('.s-slider')

if( slickSliders ){

    slickSliders.forEach( slider => {
        const slidesToShow = slider.dataset.slidesShow;
        const slidesArrows = `.${slider.getAttribute('data-arrows') || 'arrows'}`
        const slidesPaging = `.${slider.getAttribute('data-paging') || 'paging'}`
        console.log(slidesPaging)

        $(slider).slick({
            infinite: false,
            slidesToShow: +slidesToShow,
            slidesToScroll: 1,
            dots: true,
            appendArrows:  $(slidesArrows),
            appendDots: $(slidesPaging),
            prevArrow: '<button title="View previous item" class="s-slick-btn View previous item" aria-label="View previous item" data-action="Prev"><svg viewBox="0 0 24 24" class="blk icn " role="presentation" data-use="/cms/svg/site/h4t30ckkkjq.24.2501071125102.svg#arrow_left"><path d="M18.181 23.798a0.686 0.686 0 0 1-0.48 0.202a0.666 0.666 0 0 1-0.48-0.202L5.803 12.488a0.668 0.668 0 0 1 0-0.96L17.214 0.215a0.69 0.69 0 0 1 0.985-0.016A0.674 0.674-13.217 0 1 18.181 1.175L7.255 12.008L18.181 22.839a0.672 0.672 0 0 1 0 0.96Z"></path></svg></button>',
            nextArrow: '<button title="View next item" aria-label="View next item" data-action="Next"><svg viewBox="0 0 24 24" class="blk icn " role="presentation" data-use="/cms/svg/site/h4t30ckkkjq.24.2501071125102.svg#arrow_right"><path d="M5.821 23.798a0.686 0.686 0 0 0 0.48 0.202a0.666 0.666 0 0 0 0.48-0.202L18.195 12.488a0.668 0.668 0 0 0 0-0.96L6.785 0.215a0.69 0.69 0 0 0-0.985-0.016A0.674 0.674-13.218 0 0 5.821 1.175L16.744 12.008L5.821 22.839a0.672 0.672 0 0 0 0 0.96Z"></path></svg></button>'
        })
    })

}