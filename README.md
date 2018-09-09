
# Friend Finder

## Overview

Welcome to Friend Finder!!  This application will allow users  to find a friend who shares common interests. The application will add the user to the friend list. It will also display the user's friend match to the screen with the new friend's name and picture.

## About Friend Finder

Friend Finders has both a front-end and a back-end.  The client, front-end uses html and the back-end server uses node.js.  The server is started by using the terminal.  This application requires installing a few npm packages.

* Express - Creates a server to connect the front and back ends.
* body-parser - Allows express to parse json 
* path - Used for routes. 
        
Install these packages by running the following commands:
      - npm i express
     -  npm i body-parser
     -  npm i path

### Run Friend Finder

To run the application, first you must start the server in the terminal.  
       
       node server.js

If the server has started properly started, you will get the following message.

    Listening to port: 8080

This means that the server is listening on port 8080 for any instructions.    
      
       
### Start Friend Finder on the Client


##### 1. Display the home page to Friend Finder

###### Type: LocalHost:8080

<img width="960" alt="homepage" src="https://user-images.githubusercontent.com/38961938/45260612-f1b08800-b3b9-11e8-9d4b-dedd7ba8a89e.jpg">


###### The client has now sent a request to the server for the page.  It will display the home page.

<img width="960" alt="homepage" src="https://user-images.githubusercontent.com/38961938/45258532-5a324180-b387-11e8-9c28-b4a055a1f694.png">


##### 2.Selecting the "Go to Survey" button. 
     It will take you to the survey page. Answer all of the questions on the page.

<img width="960" alt="2018-09-08 6" src="https://user-images.githubusercontent.com/38961938/45258665-759e4c00-b389-11e8-9a0e-d7335d932a95.png">



#### Friend Match!!
     You have been matched! The modal displays both the name and the photo of your match.
     When you click on the CLOSE button, the user is directed the home page. The user has also now been added to the client side of the friends list.


<img width="960" alt="2018-09-08 10" src="https://user-images.githubusercontent.com/38961938/45260676-6932e700-b3bb-11e8-8fae-bb0c36b69dc7.png">


##### Friends List

If you click either of the "API Friends List" links at the bottom of both the Home and Survey page, the friends list will be displayed. 


<img width="960" alt="2018-09-08 12" src="https://user-images.githubusercontent.com/38961938/45260749-1eb26a00-b3bd-11e8-81c1-83a0d92ebe11.png">


##### friend list Displayed

<img width="960" alt="2018-09-08 11" src="https://user-images.githubusercontent.com/38961938/45260774-d778a900-b3bd-11e8-8ec4-8b78d68b6a67.png">

##### GitHub Displayed


<img width="960" alt="2018-09-08 13" src="https://user-images.githubusercontent.com/38961938/45260802-553cb480-b3be-11e8-92e0-67f284766459.png">



# FriendFinder