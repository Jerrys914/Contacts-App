contacts
  .controller('NewContactCtrl', function($scope, $window, $location, $timeout, Upload, ContactService, CountriesService) {
    $scope.contact = {}
    $scope.countriesList = CountriesService.countryCodes
    // For Image Upload
    // $scope.uploadPic = function(file) {
    //   file.upload = Upload.upload({
    //     url: 'http://localhost:8000/contacts/assets',
    //     data: {username: $scope.username, file: file},
    //   });
    //
    //   file.upload.then(function (response) {
    //     $timeout(function () {
    //       file.result = response.data;
    //       console.log(file.result)
    //     });
    //   }, function (response) {
    //     if (response.status > 0)
    //       $scope.errorMsg = response.status + ': ' + response.data;
    //   }, function (evt) {
    //     console.log('evt: ', evt)
    //     // Math.min is to fix IE which reports 200% sometimes
    //     file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
    //   });
    // }

    $scope.submitContact = () => {
      // $scope.uploadPic($scope.picFile) //For Image Upload
      let formatNumber = $scope.contact.countryCode.dial_code + $scope.contact.number
      ContactService.query().$promise.then(function(data) {
        storedContacts = data.slice(-2)
        if(storedContacts.length<1){
          ContactService.create({name:$scope.contact.name,number:formatNumber,pic:$scope.picFile}).$promise.then(function(resp){
            $window.location = '/';
          })
        } else {
          let contactMatches = [];
          storedContacts.forEach((contact) => {
            if(contact.name === $scope.contact.name && contact.phone_number === formatNumber){
              contactMatches.push(contact)
            }
          })
          if(contactMatches.length === 0){
            ContactService.create({name:$scope.contact.name,number:formatNumber,pic:$scope.picFile}).$promise.then(function(resp){
              $window.location = '/';
            })
          } else {
            alert('Contact Already in List!')
          }
        }
      });
    }
});
