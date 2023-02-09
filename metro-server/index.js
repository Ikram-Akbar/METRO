const express = require('express');
const cors = require('cors');
const app = express();
const Port = 3001;


app.get("/", (req, res) => {
    res.send("hello , this is server")
});
app.listen(Port, () => {
    console.log(`listing port no ${Port}`);
})