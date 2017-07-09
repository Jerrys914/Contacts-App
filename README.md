# Contacts-App

`contacts_app` You are able to create a contact list, remove contacts, and call contacts.

1. [Installing](#installation)
2. [Basic Usage](#usage)

## Installation

To install, simply do the following:

Create a virtual environment for our sample project and download our required packages.

For the server you will need to install Anaconda. A virtual environment to run python commands and Django.
https://conda.io/docs/install/full.html

After Anaconda is installed:
```
$ conda mkvirtualenv env_name
          Then
$ source activate env_name #MacOS
           OR
$ activate env_name #Windows
```

Navigate to the application directory and enter:
```
$ pip install -r requirements.txt
$ cd client #Enter client folder
$ npm install
$ bower install
$ cd .. #Return to application directory
```

We then need to start our Django Server:
```
$ python server/manage.py runserver
```

If no errors:
```
$ python server/manage.py makemigrations contacts
$ python server/manage.py migrate
```

Open a new terminal tab and navigate to the client folder. We will start our node server to serve our front end:
```
Once in the client folder run:
$ npm start
```
