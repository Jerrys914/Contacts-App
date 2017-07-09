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
$ conda create -n env_name
```
Navigate to the root directory of the folder and activate the environment:
```
$ source activate env_name *MacOS
           OR
$ activate env_name *Windows
```

Navigate to the application directory(contacts_app) and enter:
```
$ pip install -r requirements.txt
$ cd client
$ npm install
$ bower install
$ cd .. #Return to application directory
```

If migrations are necessary:
```
$ python server/manage.py makemigrations contacts
$ python server/manage.py migrate
```
Then we then need to start our Django Server:
```
$ python server/manage.py runserver
```
Open a new terminal tab and navigate to the client folder. We will start our node server to serve our front end:
```
Once in the client folder run:
$ npm start
```
Now go to localhost:8081 in your browser to use the app!

## Usage

You can use the add contact button or click the new contact tab to create a new contact.

New Contact:
```
Enter Name *required
Select Country *required
Enter Phone number *required
Upload Photo *not required
```

Once contacts are created you can search by Name or Number.

To edit a contact click the edit button and make any changes and submit.

To delete the contact click the trash can button.
