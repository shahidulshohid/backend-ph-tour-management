import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";

let server: Server;
let myAge

const startServer = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://testProject:VrWo76PuOLonowfo@cluster0.wnw5g.mongodb.net/tour-management-backend?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log("Connected to DB!!");

    server = app.listen(5000, () => {
      console.log("Server is listening to port 5000");
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();

// unhandled rejection error
process.on("unhandledRejection", (error)=> {
    console.log("Unhandled rejection detected..... server shutting down...", error);
    if(server){
        server.close(()=> {
            process.exit(1)
        });
    }
    process.exit(1)
})

// the example of unhandled rejection error 
// Promise.reject(new Error("I forgot to catch this promise")) //for this line unhandled error because of not keep the promise inside the try catch

// uncaught exception error
process.on("uncaughtException", (error)=> {
    console.log("Uncaught exception detected..... server shutting down...", error);
    if(server){
        server.close(()=> {
            process.exit(1)
        });
    }
    process.exit(1)
})

// the example of uncaught error
// throw new Error("I forgot to handle this local error") //this error is local error, means in our code error


// signal exception error
process.on("SIGTERM", ()=> {
    console.log("SIGTERM signal received..... server shutting down...");
    if(server){
        server.close(()=> {
            process.exit(1)
        });
    }
    process.exit(1)
})

//signal error like when i terminal of clt + c it's a like of signal error
process.on("SIGINT", ()=> {
    console.log("SIGINT signal received..... server shutting down...");
    if(server){
        server.close(()=> {
            process.exit(1)
        });
    }
    process.exit(1)
})


// unhandled rejection error 
// uncaught rejection error 
// signal termination error

