import express from "express";
import morgan from "morgan";
import cors from "cors";
import ConnectDB from "./db/Connect.js"; // Add .js extension in imports
import router from "./routes/route.js";  // Add .js extension in imports

const app = express();
const port = 1000;

app.use(express.json());

app.use((req,res,next)=>{
  req.time = new Date(Date.now()).toLocaleTimeString()
  console.log("Logger mdlws ",req.method , req.hostname , req.path , req.time)
  next();
}) // for logger like morgan

app.use(cors());

// app.use(morgan("combined"));
// app.use(morgan(':method :url :status :response-time ms - :date[iso]'));

app.disable("x-powered-by"); //less hackers knows about our stack

app.get("/", (req, res) => {
  res.status(201).json("Home Get Request");
});


// api route
app.use('/api',router)

// app.use((req,res)=>{
//   res.send("Hey there ,Page not found")
// })

ConnectDB().then(() => {
  try {
    app.listen(port, () => {
      console.log(port, "Port Started");
    });
  } catch (error) {
    console.log(error)
  }
}).catch(err=>{
    console.log("Invalid DB Connection...!"); 
})
