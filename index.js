const express = require("express")

const app = express();
const port = 8000;

app.get("/test", (request, response) =>  {
    response.send("I am test!");
});

app.listen(port, () => {
    console.log("I am ready!");
}); 