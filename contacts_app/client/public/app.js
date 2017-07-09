'use strict';

var contacts = angular.module("contacts", ['ui.mask','cwill747.phonenumber', 'ngFileUpload']);

angular
    .module('CONTACTS_APP', [
        'appRoutes',
        'contacts',
        'ngResource',
    ]);
