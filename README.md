
# Friend Finder

## Overview

Welcome to Friend Finder!!  This application will allow users  to find a friend who shares common interests. The application will add the user to the friend list. It will also display the user's friend match to the screen with the new friend's name and picture.

## About Friend Finder

Friend Finders has both a front-end and a back-end.  The client, front-end uses html and the back-end server uses node.js.  The server is started by using the terminal.  This application requires installing a few npm packages.

* Express - Creates a server to connect the front and back ends.
* body-parser - Allows express to parse json 
* path - Used for routes. 
        
Install these packages by running the following commands:
      npm i express
      npm i body-parser
      npm i path

### Run Friend Finder

To run the application, first you must start the server in the terminal.  
       
       node server.js

If the server has started properly started, you will get the following message.

    Listening to port: 8080

This means that the server is listening on port 8080 for any instructions.    
      
       
### Start Friend Finder on the Client


##### 1. Display the home page to Friend Finder

###### Type: LocalHost:8080

<img width="960" alt="local8080" src="https://user-images.githubusercontent.com/38961938/45258478-23a7f700-b386-11e8-8eac-4c47e098031f.jpg"
">

###### The client has now sent a request to the server for the page.  It will display the home page.

<img width="960" alt="homepage" src="https://user-images.githubusercontent.com/38961938/45258532-5a324180-b387-11e8-9c28-b4a055a1f694.png">


##### 2.Selecting the "Go to Survey" button.  It will take you to the surver page.

<img width="960" alt="2018-09-08 6" src="https://user-images.githubusercontent.com/38961938/45258665-759e4c00-b389-11e8-9a0e-d7335d932a95.png">

### bamazonManager.js

#### Manager view has a few functions; 
*View products list
*View Low Inventory
*Add to Inventory
*Add to new product
*Quit

##### 1.  Display the Products List

<img width="960" alt="view products and low inventory" src="https://user-images.githubusercontent.com/38961938/44630436-b9c23300-a92b-11e8-91bc-e5293f5bdcd8.png">


##### 2.  Display low inventory (5 or less) 
  
  ###### Display low inventory.  Then **UPDATE** the inventory to increase quantity.
        
<img width="960" alt="low inventory" src="https://user-images.githubusercontent.com/38961938/44630736-7c13d900-a930-11e8-86d6-f480c6fcc257.png">

##### 3. Add new Product and Quit.

<img width="960" alt="add new prod display and quit" src="https://user-images.githubusercontent.com/38961938/44631025-3bb65a00-a934-11e8-9f76-20274c50a02e.png">

### bamazonSupervisor.js

#### Supervisor has two main functions;
*View departments,over head caost and total products
*Add new Departments

##### Open bamazonSupervisor.js
<img width="960" alt="supervisor start" src="https://user-images.githubusercontent.com/38961938/44631505-03664a00-a93b-11e8-8bde-f46dba414dff.png">

##### View by DEPARTMENT
  Shows the over head costs and profit by department.
  
<img width="960" alt="view supervisor by department" src="https://user-images.githubusercontent.com/38961938/44631507-09f4c180-a93b-11e8-8020-8478527bbc64.png">

##### Add new DEPARTMENT
   
   Display the prompts to add new department.

<img width="960" alt="updated department" src="https://user-images.githubusercontent.com/38961938/44631589-512f8200-a93c-11e8-9f09-f3fe8673ae33.png">

# FriendFinder