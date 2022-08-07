const express = require('express'); 
const app = express(); 

app.get('/', (req, res) =>{
    var today = new Date();
    var currentDay = today.getDate(); 

    if(currentDay === 6 || currentDay === 0){
        res.send("Its the weekend baybay");
    }else{
        res.send("snap I got to work");
    }
})

app.listen(3000, () =>{
    console.log("Listening on PORT 3000");
});