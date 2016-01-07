angular.module("myApp").factory('auth', ['$http', function($http) {
    var o = {
        user: []
    };
    
    o.getUser = function() {
        return $http.get('/getuser').success(function(data) {
            console.log(data);
          o.user[0] = data.displayName;
        });
    };
    
    o.logout = function () {
        return $http.get('/logout').success(function() {
            window.location.href = ""
        });
    }
    
    return o;
}]);

angular.module("myApp").factory("imgfac", ["auth", "$http", function (auth, $http) {
   var x = { img: [] };
    x.getImages = function (uname) {
        console.log("imgfac getImages");
        console.log(uname);
        return $http.get("/userimages/" + uname).success(function (data) {
            x.img = [];
            x.img.push(data);
        });
    };
    
    x.getAllImages = function () {
        return $http.get("/allimages/").success(function (data) {
            x.img = [];
            angular.copy(data, x.img);
        });
    };
   x.postImage = function (imglink) {
       console.log("kasjd");
        // $http.post("/createimglink", imglink).success(function (data) {
        //  x.img.push(data);
        //  window.location.href = "#profile"
      };
   
   
   return x;
}]);