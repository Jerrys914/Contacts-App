contacts
  .controller('AllContactsCtrl', function($scope, $window, $location, $http, ContactService) {
    $scope.showContacts = true
    ContactService.http().query().$promise.then(function(data) {
      if(data.length<1){
        $scope.showContacts = false
      } else {
        $scope.showContacts = true
      }
      $scope.contactList = data;
    });
    $scope.edit = (contact) => {
      ContactService.setContactToEdit(contact);
      $location.path('/editContact');
    }

    $scope.destroy = (contact) => {
      ContactService.http().delete({id:contact.id}).$promise.then(resp=>{
        $window.location='/';
      })
    }
});
