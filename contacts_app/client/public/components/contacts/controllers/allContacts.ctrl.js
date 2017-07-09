contacts
  .controller('AllContactsCtrl', function($scope, $window, $location, $http, ContactService) {
    $scope.showContacts = true
    ContactService.query().$promise.then(function(data) {
      if(data.length<1){
        $scope.showContacts = false
      } else {
        $scope.showContacts = true
      }
      $scope.contactList = data;
    });
    $scope.edit = (contact) => {
      console.log(contact);
      // ContactService.get({id:contact.id})
      // console.log(note)
      contact.name = 'J';
      ContactService.update({id:contact.id}, contact)
        // ContactService.update()
    }

    $scope.destroy = (contact) => {
      console.log(contact)
      ContactService.delete(contact.number,{id:contact.id}).$promise.then(resp=>{
        $window.location='/';
      })
    }
});
