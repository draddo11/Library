const  express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");

const app =  express();
const port = process.env.PORT || 3000;




app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname , "/Public")));
// app.use("/Public/css",express.static(path.join(__dirname , "/node_modules/bootstrap/dist/css ")));
// app.use("/Public/js",express.static(path.join(__dirname , "/node_modules/bootstrap/dist/js ")));
app.set("views", "./src/views");
app.set("view engine" , "ejs");

const nav =[
    {link:"/books",title:"Book"},
    {link:"/authors" , title:"Author"}
];


const bookRouter = require("./src/routes/bookRoutes")(nav);
const adminRouter = require('./src/routes/adminRoutes')

app.use("/books", bookRouter);
app.use("/admin", adminRouter);
app.get("/",(req,res) => {
    res.render(
        "index",
        {
            nav:[{link:"/books",title:"Books"},
                {link:"/authors" , title:"Authours"}],
            title:"Library",
            
        }
    );
    
});

// bookRouter.route("/single")
//     .get((req,res) => {
//         res.send("hello single books");
//     });





app.listen (port , ()=>{
    debug(`Running on Port ${chalk.yellow(port)}`);
});