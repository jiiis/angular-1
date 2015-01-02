(function() {
    var app = angular.module('store', []);

    var gems = [
        {
            name: 'erNiuNiu',
            price: 2.95,
            description: 'This is my lovely wife, erNiuNiu.',
            image: {
                full: 'images/gem_1.png',
                thumb: 'images/gem_1_tb.png'
            },
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
            image: {
                full: 'images/gem_2.png',
                thumb: 'images/gem_2_tb.png'
            },
            canPurchase: true,
            soldOut: false
        },
        {
            name: 'pangCaiCai',
            price: 10.5,
            description: 'This is my precious pangCaiCai. We love her a lot!',
            image: {
                full: 'images/gem_3.png',
                thumb: 'images/gem_3_tb.png'
            },
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
})();
