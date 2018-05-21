# EventTrackerProject


## EventTrackerProject Overview
This is a basic gas tracker application that can be used to track miles and money
spent on gas as well as display a calculated miles per gallon value for the
entered event. To access this application travel to andrewddufresne.com:8080/EventTrackerREST/index.html

The web app must be able to: Perform C.R.U.D. actions and display the information to the user.

The results are displayed using Javascript DOM manipulation and displayed to the webpages dynamically. The web application and its associated database have been attached and uploaded to an amazon EC2 instance using Tomcat and MySQL. All pages have been written in HTML with Javascript being used in an AJAX capacity to retrieve data for display.

This application is called MPG "Moneys Per Gallon" and it acts as a database interface to inventory and catalog their gas usage well as specific aggregation for the amount spent. It uses a database I created that allows the user to include all relevant information for the tank of gas.

The user may search by id number or just scroll through the entire database from the home page. There is also an update feature when a tank of gas is searched for individually by ID number. I pre-populated the fields with the current tanks information so the user only needs to update what they want and leave the rest alone.

There are options to also delete each tank, and to add a brand new tank. In future versions I would like to add aggregation for total distance traveled and useful functionality for miles per gallon ('ha!'). I would also like to prettify the application and add neat little buttons and animations to make it user friendly. For now function is king.

## Technologies Used
  * MySQL
  * SpringDataJPA
  * SpringBOOT
  * RESTful Services
  * Hibernate
  * Vanilla Javascript
  * Dynamic DOM manipulation
  * Embedded Tomcat Server



## URIs and HTTPs
path = "api/ping" RequestMethod.GET
This just tests the servers response to ensure connectivity.

path = "api/events" RequestMethod.GET
This route returns all events currently stored in the database.

path = "api/events/{id}" RequestMethod.GET
This route returns the event specified by the pathVariable id in the URI.

path = "api/events" RequestMethod.POST
This route adds an event to the database and returns the added event.

path = "api/events/{id}" RequestMethod.PUT
This route PUTs a new event to replace the event currently stored at the location
of the pathVariable id in the database.

path = "api/events/{id}" RequestMethod.PATCH
This route PATCHs over part of the event currently stored at the location of
the pathVariable id in the database.

path = "api/events/{id}" RequestMethod.DELETE
This route deletes the event stored at the pathVariable id in the database.

## How To Use
Simply travel to the website listed above. If you wish to add to it or work on it yourself fell free! you may clone the repo above ^^
