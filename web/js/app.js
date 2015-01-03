(function() {
    var app = angular.module('store', []);

    var gems = [
        {
            name: 'erNiuNiu',
            price: 2.95,
            description: 'This is my lovely wife, erNiuNiu.',
            icon: {
                full: 'images/icon_1.png',
                thumb: 'images/icon_1_tb.png'
            },
            images: [
                {
                    full: 'images/gem_1.gif',
                    thumb: 'images/gem_1_tb.png'
                },
                {
                    full: 'images/gem_2.gif',
                    thumb: 'images/gem_2_tb.png'
                },
                {
                    full: 'images/gem_3.gif',
                    thumb: 'images/gem_3_tb.png'
                }
            ],
            reviews: [
                {
                    stars: 5,
                    body: 'I love this product!',
                    author: 'joe@thomas.com'
                },
                {
                    stars: 1,
                    body: 'This gem sucks!',
                    author: 'suck@sucker.org'
                }
            ],
            canPurchase: true,
            soldOut: false
        },
        {
            name: 'jibaGong',
            price: 1,
            description: 'This is me, and I\'m much cheaper than erNiuNiu.',
            icon: {
                full: 'images/icon_2.png',
                thumb: 'images/icon_2_tb.png'
            },
            images: [
                {
                    full: 'images/gem_4.gif',
                    thumb: 'images/gem_4_tb.png'
                },
                {
                    full: 'images/gem_5.gif',
                    thumb: 'images/gem_5_tb.png'
                },
                {
                    full: 'images/gem_6.gif',
                    thumb: 'images/gem_6_tb.png'
                }
            ],
            reviews: [],
            canPurchase: true,
            soldOut: false
        },
        {
            name: 'pangCaiCai',
            price: 10.5,
            description: 'This is my precious pangCaiCai. We love her a lot!',
            icon: {
                full: 'images/icon_3.png',
                thumb: 'images/icon_3_tb.png'
            },
            images: [
                {
                    full: 'images/gem_7.gif',
                    thumb: 'images/gem_7_tb.png'
                },
                {
                    full: 'images/gem_8.gif',
                    thumb: 'images/gem_8_tb.png'
                },
                {
                    full: 'images/gem_9.gif',
                    thumb: 'images/gem_9_tb.png'
                }
            ],
            reviews: [],
            canPurchase: false,
            soldOut: false
        }
    ];

    app.controller('StoreController', function() {
        this.products = gems;
    });

    app.controller('PanelController', function() {
        this.tab = 1;

        this.setTab = function(tab) {
            this.tab = tab;
        };

        this.checkTab = function(tab) {
            return this.tab === tab;
        };
    });

    app.controller('GalleryController', function() {
        this.current = 0;

        this.setImage = function(index) {
            this.current = index;
        };

        this.checkImage = function(index) {
            return this.current === index;
        };
    });

    app.controller('ReviewController', function() {
        this.review = {};

        this.submitReview = function(product) {
            if (typeof product.reviews === 'undefined') {
                product.reviews = [];
            }

            product.reviews.push(this.review);
            this.review = {};
        };
    });
})();
