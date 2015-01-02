(function() {
    var app = angular.module('store', []);

    app.controller('StoreController', function() {
        this.product=  gem;
    });

    var gem = {
        name: 'erNiuNiu',
        price: 2.95,
        description: 'This is my lovely wife, erNiuNiu',
        canPurchase: false,
        soldOut: true
    };
})();
