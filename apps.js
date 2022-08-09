const express = require('express'); 
const { allowedNodeEnvironmentFlags } = require('process');
const date = require(`${__dirname}/date.js`);

const app = express(); 

app.use(express.urlencoded({extended: false}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

const newListItems =[]; 
const workitems = [];

app.get('/', (req, res) =>{

    let day = date.getDate(); 
    res.render('list', {listType: day, newListItems : newListItems});
}); 

app.get("/work", (req, res) =>{
    res.render('list', { listType: "Work List", newListItems : workitems});
});

app.get("/about", (req, res) => {
    res.render('about');
})

app.post("/", (req, res) => {

    console.log(req.body.list);
    let newListItem = req.body.newName;
    
    if (req.body.list === "Work"){
        workitems.push(newListItem); 
        res.redirect("/work");
    }else{
        newListItems.push(newListItem);
        res.redirect("/");
    }


});

app.post("/work", (req, res) => {
    let workitem = req.body.newListItem; 
    newListItems.push(workitem); 
    res.redirect("/work");
})

//listening on local Port 3000
app.listen(3000, () =>{
    console.log("Listening on PORT 3000");
});