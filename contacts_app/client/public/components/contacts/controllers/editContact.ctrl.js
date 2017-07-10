contacts
  .controller('EditContactCtrl', function($scope, $window, $location, $http, ContactService,CountriesService) {
    $scope.contact = ContactService.getContactToEdit();
    $scope.contact.number = $scope.contact.phone_number.substr($scope.contact.phone_number.length - 10)
    $scope.countriesList = CountriesService.countryCodes
    $scope.submitContact = () => {
      if($scope.picFile){
        // $scope.uploadPic($scope.picFile) //For Edit Image Upload
      }
      let formatNumber= $scope.contact.countryCode.dial_code + $scope.contact.number
      $scope.contact.number = $scope.contact.countryCode.dial_code + $scope.contact.number
      let contact = {}
      contact.name = $scope.contact.name
      contact.phone_number = formatNumber;
      contact.pic = $scope.picFile || $scope.contact.pic
      contact.id = $scope.contact.id
      delete $scope.contact.countryCode
      ContactService.http().update({id:contact.id}, contact)
        $window.location = '/';
    }
});
