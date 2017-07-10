contacts
  .controller('NewContactCtrl', function($scope,  $http, $window, $location, $timeout, Upload, ContactService, CountriesService) {
    $scope.contact = {}
    $scope.countriesList = CountriesService.countryCodes
    // For Image Upload
    $scope.uploadPic = function(file) {
      if(!file){ return }
      file.upload = Upload.upload({
        url: 'http://localhost:8081/contacts/assets',
        file:file,
      });

      file.upload.then(function (response) {
        $timeout(function () {
          console.log('FILE: ',file)
          file.result = response.data;
          console.log(file.result)
        });
      }, function (response) {
        if (response.status > 0)
          $scope.errorMsg = response.status + ': ' + response.data;
      }, function (evt) {
        console.log('evt: ', evt)
        // Math.min is to fix IE which reports 200% sometimes
        file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
      });
    }

    $scope.submitContact = () => {
      if(!$scope.contact.countryCode){
        return
      }
      $scope.uploadPic($scope.picFile) //For Image Upload
      if(!$scope.picFile){
        $scope.picFile = {};
        $scope.picFile.name = 'default.jpg'
      }
      let formatNumber = $scope.contact.countryCode.dial_code + $scope.contact.number
      ContactService.http().query().$promise.then(function(data) {
        storedContacts = data.slice(-2)
        if(storedContacts.length<1){
          ContactService.http().create({name:$scope.contact.name,number:formatNumber,pic:'assets/images/'+$scope.picFile.name}).$promise.then(function(resp){
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
            ContactService.http().create({name:$scope.contact.name,number:formatNumber,pic:'assets/images/'+$scope.picFile.name}).$promise.then(function(resp){
              $window.location = '/';
            })
          } else {
            alert('Contact Already in List!')
          }
        }
      });
    }
});
