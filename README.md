# Weather Dashboard

## Description

This application is a very simple dashboard that can display the weather for any general city. 
The project was created to gain experience connecting an API into a codebase and navigating the results of those calls.

Navigating the API data ended up being very tricky for me. Because it's many nested arrays and I wasn't fully sure of the syntax for finding specific items within the arrays I had to spend a long time researching how to get to individual pieces of the array. Along with this, my program unfortunately only is a 4-day forecast, rather than a 5-day. I don't know why, but whenever I tried to populate the content of the final day it just wouldn't work. The array of divs seemed to be iterating properly but everything kept conflicting and throwing errors.

## Usage

Opening the GitHub pages link or running the program locally will present the generic homepage. The user can either enter a city into the search bar and click the search button, or there are a few pre-made buttons with popular cities which can be used to find a city without typing. A 4-day forecast should be displayed including today's weather in a large box and 3 smaller boxes with the next 3 days.