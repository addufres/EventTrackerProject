# EventTrackerProject


## EventTrackerProject Overview
This is a basic gas tracker application that can be used to track miles and money
spent on gas as well as display a calculated miles per gallon value for the
entered event. To access this application travel to andrewddufresne.com:8080/EventTrackerProject

## Technologies Used
  * MySQL
  * SpringDataJPA
  * SpringBOOT
  * RESTful Services
  * Hibernate



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
