# iintrinsic
A location-based social network designed to connect people with different skillsets together to create projects
* Relies on Rails API back end ([repo](https://github.com/tknight31/iintrinsic-back-end))
* View live site [here](https://iintrinsic-app.herokuapp.com/) (may take Heroku a moment to wake up)

## Features
* Authorized user sign up and log in
* Works in conjunction with [Cloudinary](https://cloudinary.com/) to store user and project photos.  
* Redux provides persistent state across all app pages
* On login users' location data is saved. Using the [Google Maps API](https://developers.google.com/maps/), users are able to see other users around them
* User can turn on 'Ghost Mode', removing them from the main map
* Users can create/edit projects, update their profile and skills
* Users can see other users' info, skills, and projects. User can request to join another user's project

## Getting Started
To get a copy of the project up and running on your local machine, clone this repo and install the packages.

### Requirements
* React 15.6.1
