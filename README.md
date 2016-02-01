Todo Challenge
===================

Overview
-------
* This is my solution to Makers Academy Week 8 challenge, producing a to-do list.
* Angular.JS is the main technology used, to present a one-page application.
* This app was test-driven using Jasmine and Karma for unit tests and Protractor for feature tests. Testing was automated using Grunt.
* Users are able to add tasks, view, edit and delete individual tasks, and mark tasks as complete. Users may filter  tasks to see completed, non-completed and all tasks. When filtered, users may delete all tasks in the current filter.


Installation instructions
-------
* Clone the repository to your local machine and change into the directory
```
$ git clone git@github.com:edwardkerry/todo-challenge.git
$ cd instagram-challenge
```

* Run NPM and Bower commands to download the necessary packages
```
$ npm install
$ bower install
```

* Launch the app on port 8080 using Node.js and Express
`$ node server.js`

* Visit the site
`http://localhost:8080`

* Tests are run via Grunt
```
$ grunt unit
$ grunt e2e
```

User Stories
-----

```
As a forgetful person
I want to store my tasks
So that I don't forget them

As a person with limited time
I want to instantly be able to update my todo list (adding and changing entries)
So that I have more time to think about other things

As a person who actually gets stuff done
I want to mark my tasks as done
So that I don't do them twice

As a person with a lot of tasks
I want to be able to filter my tasks by "All", "Active", "Complete"
So that I only see the relevant tasks

As a person who doesn't like counting by hand
I want to see a total number of tasks
So that I don't have to count

As someone who has done lots of stuff
I want to be able to clear my completed tasks
So I never see them again
```
Future user stories
-------
```
As a forgetful person
I want the app to have persistent data
So I can close the app and not lose my tasks

As a person wth eye
So they are not offended
I would like the app to look much nicer
```
