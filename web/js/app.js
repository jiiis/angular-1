(function() {
    var app = angular.module('store', []);

    app.controller('StoreController', function() {
        this.products = gems;
    });

    var gems = [
        {
            name: 'erNiuNiu',
            price: 2.95,
            description: 'This is my lovely wife, erNiuNiu.',
            canPurchase: true,
            soldOut: false
        },
        {
            name: 'jibaGong',
            price: 1,
            description: 'This is me, and I\'m much cheaper than erNiuNiu.',
            canPurchase: true,
            soldOut: false
        },
        {
            name: 'pangCaiCai',
            price: 10.5,
            description: 'This is my precious pangCaiCai. We love her a lot!',
            canPurchase: false,
            soldOut: false
        }
    ];
})();
