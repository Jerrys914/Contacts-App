contacts
  .factory('ContactService', function($resource) {
      return $resource(
        'http://localhost:8000/contacts/:id/',
        {id:'@id'},
        {
          'query': {
            method: 'GET',
            isArray: true,
            headers: {
              'Content-Type':'application/json'
            }
          },
          'create': {
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            }
          },
          'update': {
            method:'PUT',
            headers: {
              'Content-Type':'application/json'
            }
          },
          'delete': {
            method:'DELETE',
            headers: {
              'Content-Type':'application/json'
            }
          }
        },
        {
          stripTrailingSlashes: false
        }
      );
  });
