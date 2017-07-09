angular
    .module('appRoutes', ["ui.router"])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider.state({
      name:'allContacts',
      url: '/',
      templateUrl: 'public/components/contacts/templates/allContacts.tmpl.html',
      controller: 'AllContactsCtrl'
    })

    .state({
      name:'newContact',
      url:'/newContact',
      templateUrl: 'public/components/contacts/templates/newContact.tmpl.html',
      controller: 'NewContactCtrl'
    })

    .state({
      name:'editContact',
      url:'/editContact',
      templateUrl: 'public/components/contacts/templates/editContact.tmpl.html',
      controller: 'EditContactCtrl'
    })

    $urlRouterProvider.otherwise('/');
}]);
