const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var headerUnfixed = $('.header-unfixed');
var haederFixed = $('.header-wrapper-fixed');
var scrollToTop = $('.scroll-top');
var cartBtns = $$('.header__right-cart');
var cartOverlay = $('.cart-overlay');
var cartFixed = $('.cart-fixed');

const app = {

    domeEventListener: () => {

        var oldScrollValue = 0;

        window.onscroll = () => {
            var newScrollValue = window.pageYOffset;
            if (newScrollValue > oldScrollValue) {
                app.handdleLogic.headerUnfixedOff();
                app.handdleLogic.haederFixedOn();
                if (newScrollValue > 100) {
                    app.handdleLogic.scrollToTopOn();
                }
            } else {
                if (newScrollValue < 40) {
                    app.handdleLogic.haederFixedOff();
                    app.handdleLogic.headerUnfixedOn();
                    app.handdleLogic.scrollToTopOff();
                }
            }

            oldScrollValue = newScrollValue;
        }

        scrollToTop.onclick = () => {
            app.handdleLogic.toTop();
        }

        for (var cartBtn of cartBtns) {
            cartBtn.onclick = () => {
                app.handdleLogic.openCartOverlay();
                setTimeout(app.handdleLogic.openCartFixed(), 200);
            }
        }

        cartOverlay.onclick = () => {
            app.handdleLogic.closeCartFixed();
            setTimeout(app.handdleLogic.closeCartOverlay(), 500);
        }
    },

    handdleLogic: {
        haederFixedOn: () => {
            haederFixed.classList.add('active');
        },
        haederFixedOff: () => {
            haederFixed.classList.remove('active');
        },
        headerUnfixedOff: () => {
            headerUnfixed.classList.add('active');
        },
        headerUnfixedOn: () => {
            headerUnfixed.classList.remove('active');
        },
        scrollToTopOn: () => {
            scrollToTop.classList.add('active');
        },
        scrollToTopOff: () => {
            scrollToTop.classList.remove('active');
        },
        toTop: () => {
            window.scrollTo({top: 0, behavior: 'smooth'});
        },
        openCartFixed: () => {
            cartFixed.classList.add('active');
        },
        openCartOverlay: () => {
            cartOverlay.classList.add('active');
        },
        closeCartFixed: () => {
            cartFixed.classList.remove('active');
        },
        closeCartOverlay: () => {
            cartOverlay.classList.remove('active');
        }

    },

    start: () => {
        app.domeEventListener();
    }
}

app.start();