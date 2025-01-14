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
                    start: 'top bottom',
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
            y: 10,
            scrollTrigger: {
                trigger: parallaxY,
                start: "top end",
                end: "end top",
                toggleActions: 'play none none none',
                scrub: 3
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
                scrub: 2
            }
        })

    });
}

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

const hdr = document.querySelector('.hdr')

if( hdr ){

    // Open Menu 
    hdr.querySelector('.mnu-btn').addEventListener('click', ()=>{
        if( hdr.classList.contains('mnu-opn') ){
            hdr.classList.remove('mnu-opn')
        }else{
            hdr.classList.add('mnu-opn')
        }
    })  
    
    // Close Menu  
    hdr.querySelector('.blk[data-role="btn"]').addEventListener( 'click', ()=>{
        console.log("Blk clicked")
        if(hdr.classList.contains('mnu-opn')){
            hdr.classList.remove('mnu-opn') 
        }
    })

}


const tbArws = hdr.querySelectorAll('.tb-arw')

if( tbArws ){
    tbArws.forEach( tbArw => {
        tbArw.addEventListener('click', ()=>{
            if(tbArw.classList.contains('active')){
                tbArw.classList.remove('active')
            }else{
                tbArw.classList.add('active')
            }

            const parent = tbArw.parentElement

            if( parent ){
                const menu = parent.querySelector( ' ul[role="menu"]')
                if( menu ){

                    if( menu.classList.contains('active') ){
                        menu.classList.remove('active')
                    }else{
                        menu.classList.add('active')
                    }
                }
            }
        })
    })
}

const elTabs = hdr.querySelectorAll('.el-tab')

if( elTabs ){
    elTabs.forEach( elTab => {
        const parent = elTab.parentElement
        const lvl2 = parent.querySelector('.lvl-2')
        let back;
        if( lvl2 ){
            back = lvl2.querySelector('.el-sec-tab')
        }

        elTab.addEventListener('click', ()=> {

            elTab.classList.add('active')
            
            if( lvl2 ){
                lvl2.classList.add('active')
            }

        } )

        if( back ){
            back.addEventListener('click', ()=>{
                elTab.classList.remove('active')

                if( lvl2 ){
                    lvl2.classList.remove('active')
                }
            })
        }


    })
}

const blgMnu = document.querySelector('.blg-mnu')

if( blgMnu ){
    const tbArw = blgMnu.querySelector('.tb-arw')
    const elTab = blgMnu.querySelector('.el-tab')
    const elPanel = blgMnu.querySelector('.el-panel')

    const btnClr = blgMnu.querySelector('.btn-clr')
    const nav = blgMnu.querySelector('nav.pn')

    const menuItems = blgMnu.querySelectorAll('li[role="menuitem"]')
    console.log(menuItems)

    if( btnClr ){
        btnClr.addEventListener('click', ()=> {
            blgMnu.classList.toggle('blg-opn')

            if( nav ){

                const currentValue = nav.getAttribute('aria-hidden')
                nav.setAttribute('aria-hidden', currentValue === 'false' ? 'true' : 'false')

                console.log(nav)
            }
        })
    }

    if (![tbArw, elTab, elPanel].some(el => el == null)) {
        tbArw.addEventListener('click', () => {
            tbArw.classList.toggle('active');
            elTab.classList.toggle('active');
            elPanel.classList.toggle('sld-opn');
            elPanel.classList.toggle('active');

            const currentValue = elPanel.getAttribute('aria-hidden');
            elPanel.setAttribute('aria-hidden', currentValue === 'false' ? 'true' : 'false');

        });
    }

    if( menuItems ){
        menuItems.forEach( item => {
            const tbArw = item.querySelector('.tb-arw')

            if( tbArw ){
                tbArw.addEventListener( 'click', ()=> {
                    const elPanel = item.querySelector('.el-panel')

                    if( elPanel ){
                        elPanel.classList.toggle('sld-opn')
                        elPanel.classList.toggle('active')
                        
                        const currentValue = elPanel.getAttribute('aria-hidden');
                        elPanel.setAttribute('aria-hidden', currentValue === 'false' ? 'true' : 'false');
                    }
                })
            }
        })
    }

}

const header = document.getElementById('HeaderZone');

window.addEventListener('scroll', () => {
    if (window.scrollY > header.offsetHeight) {
        document.documentElement.classList.add('header-hide');
    } else {
        document.documentElement.classList.remove('header-hide');
    }
});

const contentToXpandWrapper = document.querySelector('[data-class-name="xpnded"]');

if (contentToXpandWrapper) {
    const btn = contentToXpandWrapper.querySelector('.btn');

    if (btn) {
        const contentToXpand = document.getElementById('ContentV4Expanded');
        const opn = btn.querySelector('.opn');
        const cls = btn.querySelector('.cls');

        if (opn) {
            opn.addEventListener('click', () => {
                console.log("opn");
                const currentValue = btn.getAttribute('aria-expanded');
                btn.setAttribute('aria-expanded', currentValue === 'true' ? 'false' : 'true');

                contentToXpandWrapper.classList.add('xpnded');

                if (contentToXpand) {
                    contentToXpand.classList.add('sld-opn')
                    const fullHeight = contentToXpand.scrollHeight + "px"; // Calculate content height
                    contentToXpand.style.height = fullHeight;
                    contentToXpand.setAttribute('aria-hidden', 'false');
                }
            });
        }

        if (cls) {
            cls.addEventListener('click', () => {
                console.log("cls");
                const currentValue = btn.getAttribute('aria-expanded');
                btn.setAttribute('aria-expanded', currentValue === 'true' ? 'false' : 'true');

                contentToXpandWrapper.classList.remove('xpnded');

                if (contentToXpand) {
                    contentToXpand.classList.remove('sld-opn')
                    contentToXpand.style.height = "0"; // Collapse content
                    contentToXpand.setAttribute('aria-hidden', 'true');
                }
            });
        }
    }
}
