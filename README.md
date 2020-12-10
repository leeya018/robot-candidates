# Lee Yahav - assiment


## Usage

```
    inside tami4_exercise/react-app folder run : 
    npm install 
    npm start

    inside tami4_exercise/express_server folder run : 
    npm install 
    npm start 
```

This app is including from client server and db 

## Server : 

Parking is a node.js app which are using express server and allow you to invoke 3 REST api calls: 

* [GET] http://localhost:3001/api/candidates  
* [POST] http://localhost:3001/api/auth/signup
* [POST] http://localhost:3001/api/auth/signin

## examples:

```
request :
[POST] http://localhost:3001/api/auth/signin
Content-Type: application/json
{
  "username":"121",
  "password":"1"
}

response :

HTTP/1.1 200 OK
X-Powered-By: Express
Vary: Origin
Content-Type: application/json; charset=utf-8
Content-Length: 194
ETag: W/"c2-erp2wxaFVCiXKYEMBUDSEl9qw5I"
Date: Mon, 10 Aug 2020 18:22:27 GMT
Connection: close

{
  "message": "You are logged in",
  "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTcwODczNDgsImVtYWlsIjoiMTIiLCJpYXQiOjE1OTcwODM3NDh9.upJ-4YUXkFqH0gV_jCmTtmInj-otxPtNwRlm1Zw6td8"
}
```
```
request :


POST http://localhost:3001/api/auth/signup
Content-Type: application/json

{
  "username":"1",
  "email":"24",
  "password":"1"
}

response :

HTTP/1.1 400 Bad Request
X-Powered-By: Express
Vary: Origin
Content-Type: application/json; charset=utf-8
Content-Length: 43
ETag: W/"2b-FeVV/lwiM91XgGlMLioDWuaj/N8"
Date: Mon, 10 Aug 2020 18:29:35 GMT
Connection: close

{
  "message": "User is allready exists in Db"
}
```

```
request:

GET http://localhost:3001/api/candidates  
Content-Type: application/json
Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTcwNzQyNDksImVtYWlsIjoiMSIsImlhdCI6MTU5NzA3MDY0OX0.2F3sKdTBm44dJfb1ntluPVxvVjgdSh1HFuvb_4xQt9A

response :

HTTP/1.1 200 OK
X-Powered-By: Express
Vary: Origin
Content-Type: application/json; charset=utf-8
Content-Length: 194
ETag: W/"c2-XOC9m4Twpx7UNEZZajgq1B1dZVo"
Date: Mon, 10 Aug 2020 18:28:01 GMT
Connection: close

{
  "message": "You are logged in",
  "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTcwODc2ODEsImVtYWlsIjoiMTIiLCJpYXQiOjE1OTcwODQwODF9.Oxvi5fppj3MUGJYTJKg68Kttp2s5PzIwXc7sfa4Hnzk"
}
```
## Explenations:

 there is a file name: "request.rest" 
 which show examples of how to run those requests

**get candidates :**   
  get all the candidates in DB as long as the user is loged in and have a valid token


**login :**   
user need to type username and password
if the user is found in the db and the and password is correct , a JWT token is generated on the server and sent to the client 


**signup :**   
user is entering a username , password and email, if username is allready exists so a messsage is poped to user . if not , user is getting generated in DB


## middleware

There is a middleware for authenticate the user to 
validate token . \
 only if the token is valid , just then user is able to see list of candidates

## files and folder
**main file is :**  server.js \
**folders :** \
**routes :** we have lots of routes that we can use in out app so we devide them by the type 

**controllers :** those files have the all the logic of the app. they are getting called when route is getting invoked and they are comunicatting with the DB threw models functions

**models :** all functions that are invoqing queries on the DB

**middlewares :** all the function that are the first to be called before moving to main login in controller (like authenticate token validity)

## client 

after the login a webtoken is saved on the client in the LocalStorage. \
The token have an expiration of one hour, so in case that the time has passed , user will have to login again

### screens : 
login \
signup \
candidates \
profile 

when starting the app we will see a Navbar for Login and Signin, \
when user is signup to the system , he will add to login with the same user and pass \
after login , the site will Navigate the candidates page \
from candidates page we can click to see a profile page \
from profile page with have a "go back" button to go back to candidates page
