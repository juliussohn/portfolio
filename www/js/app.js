var app = angular.module('app', ['ngRoute', 'ngAnimate']);
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html',
            activeTab: 'home',
            controller: 'HomeCtrl',
        })
         .when('/work', {
            templateUrl: 'templates/work.html',
            activeTab: 'work',
            controller: 'WorkController',
        })
         .when('/about', {
            templateUrl: 'templates/about.html',
            activeTab: 'about',
            controller: 'AboutController',
        })
           .when('/contact', {
            templateUrl: 'templates/contact.html',
            activeTab: 'contact',
            controller: 'ContactController',
        })
        .when('/work/:workSlug', {
            templateUrl: 'templates/showcase.html',
            activeTab: 'work',
            controller: 'WorkController',
        })
       
        .otherwise({
            redirectTo: '/'
        });
   $locationProvider.html5Mode(true);
});

app.run(function ($rootScope, $location, $http) {
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        $rootScope.$route = next;
       
    });
   
});

app.controller('MainController', function ($scope, $rootScope, $route) {
    $scope.$route = $route.current;
    console.log($scope.$route);

});
app.controller('ShowcaseController', function ($scope, $routeParams) {

});

app.controller('AboutController', function ($scope, $rootScope, $window) {
    $scope.about = [
        {
            title:"Who I am.",
            text:"I am a 22 year old designer and developer studying communication design at the University of Applied Science in Berlin ..."
        },

        {
            title:"What I do.",
            text:"Corporate Design, UX Design, HTML, CSS, Javscript, AngularJS, PHP"
        },
         {
            title:"Who I worked for.",
            text:"Sparkasse, Filmnächte am Elbufer, Zukunft Training, Filmakademie Baden-Württemberg Palais Sommer, Meisterwerke Neo"
        },

        ];
});
app.controller('WorkController', function ($scope, $rootScope, $routeParams) {
    $scope.work = [
        {
            title:"flucht.io",
            slug:"flucht-io",
            url:"http://flucht.io",
            description:"flucht.io is an interactive quiz about the refugee situation. The website is a litte project we did with Julius Gehrig during study. It is an interactive quiz, where the user has to guess numbers and facts about the refugee situation. The interaction concept takes the mouse position as input value, to guess the numbers. The answers are shown as charts and short explanaitions. After answering the last question you can see all your estimates in comparison to the corect answers.",
             images:[
              "flucht-2.png",
              "flucht-io.png",
              "flucht-3.png"
             
               
            ]
        },
        {
            title:"type patterns",
            slug:"type-patterns",
             url:"http://juliussohn.github.io/type-patterns",
             description:"Type patterns is a litte web app that I made for my application at the University of Applied Science in Berlin. It creates stroke patterns from your keyboard inputs depending on the key poisiton on the keyboard. Every strong has it's unique pattern that you can share with others.",
             images:[
              "tp-type.jpg",
                "type-patterns.png"
               
            ]
        },
        {
            title:"jorge alexander",
            slug:"jorge-alexander",
             url:"http://jorgealexander.de",
             description: "This is a  branding I made for a friend who studies fashion design. The logo is made up the first letters of his first and second name (Jorge Alexander). I also made a litte website for him to publish his projects.",
             images:[
                "jorge-alexander.png",
                "ja-website.jpg",
                "ja-collages.jpg"
             ]
        },
        {
            title:"20 squares",
            slug:"20-squares",
            description:"20 squares is a company I founded with 2 friends. We are creating a instagram photobook that you can create via an web or mobile app in a few minutes. You can browse instagram profiles, search for tags and select every public photo on isntagram.The apps focus on easy and fast handling. ",
            images:[
                "20squares-logo.png"
            ]
        },
    ];


    if($routeParams.workSlug){
        for (var i =  $scope.work.length - 1; i >= 0; i--) {
            if($scope.work[i].slug == $routeParams.workSlug){
                $scope.showcase =  $scope.work[i];
                break;
            }
        }
    }
});

app.controller('ContactCtrl', function ($scope) {
 
});
