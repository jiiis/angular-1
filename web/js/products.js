(function() {
    var app = angular.module('store-products', []);

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

            this.review.createdOn = Date.now();

            product.reviews.push(this.review);
            this.review = {};
        };
    });

    app.directive('productInfo', function() {
        return {
            restrict: 'E',
            templateUrl: 'product_info.html'
        };
    });

    app.directive('productPanels', function() {
        return {
            restrict: 'E',
            templateUrl: 'product_panels.html',
            controller: function() {
                this.tab = 1;

                this.setTab = function(tab) {
                    this.tab = tab;
                };

                this.checkTab = function(tab) {
                    return this.tab === tab;
                };
            },
            controllerAs: 'panel'
        };
    });
})();