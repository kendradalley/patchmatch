
var baseUrl = require('../../config').baseUrl;
module.exports = function(app) {
    app.controller('gardenListController', ['$http', function($http) {
        // this.message = 'hi this is garden list controller';
        console.log(baseUrl);
        $http.get(baseUrl + '/users')
        .success((res)=>{
            console.log(res);
        });

    }
    ]
);
};
