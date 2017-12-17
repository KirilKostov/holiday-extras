# Holiday Extras

## Intro:
* This is a tech challenge project. Its main goal is to consume data from Flickr's API and to display an array of cards representing this data.
* SLIM used as the templating engine - http://slim-lang.com/.

## System requirements:
* Ruby (version used: 2.3.5);
* Node (version used: 8.6.0);
* Npm (version used: 5.3.0);

## How to run the project locally:
* Clone the repo - https://github.com/KirilKostov/holiday-extras
* Open the terminal and run ```gem install bundler```, you might need to run ```xcode-select --install``` if you are getting ruby related errors
* Navigate to the projects folder in the terminal and run ```bundle install``` - this will provide you with all the gems needed for the application
* Run ```npm install``` - this will provide you with all npm dependencies needed for the application
* Run ```bundle exec rails s``` to start the application's server
* Go to 'http://localhost:3000/' in a browser of your choice to see the site (port number might vary if you have anything already running at :3000)

## Heroku:
* Alternatively you can view the site at - https://holiday-extras.herokuapp.com/