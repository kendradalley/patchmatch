module.exports = function(app) {
    app.controller('ownerSignUpController', ['$http', function($http) {
        this.message = 'hi, I\'m still here';
        console.log('controller');

    }
    ]
);
};
