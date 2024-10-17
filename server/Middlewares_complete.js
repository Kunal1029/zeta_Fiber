// Mdws is an intermediary - In express, midwrs are function that come into play after the server receives the req and before the response is sent to the client.

import { request } from "express";

//Go to express for middlewares

// common midws func

// methodOverride - used to send put, delete, update type of request
// bodyParser - we need to make server understand the data , so we need to parse data
// express.static - it used to serve backend file to frontend 
// express.urlencoded - for we can access inner data of request

// Some properties which possess all mdlwrs :

// 1. They can access req,res object
// 2. chaining (if req comes and we need to do manythings in between then we can do chaining)
// 3. send a response (mdlwrs itself stops chaining by sending response)


// What do middlewares do?

// Execute any code.
// Make changes to the request and the response objects
// End the req-res cycle. when mdwl sends response then cycle ends
// call the next middleware function in the stack.

