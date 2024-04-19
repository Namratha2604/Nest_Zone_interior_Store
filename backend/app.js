// // // var express = require('express');
// // // var bodyParser = require('body-parser');
// // // var mongoose = require('mongoose');
// // // const { collection } = require('./models/User');
// // // const path = require('path');
// // // const app = express();


// // // app.use(bodyParser.json());
// // // app.use(express.static("public"));
// // // app.use(bodyParser.urlencoded({
// // //     extended:true
// // // }))

// // // mongoose.connect('mongodb://localhost:27017/Database');
// // // var db = mongoose.connection
// // // db.on('error',()=>console.log("error in connecting to db"));
// // // db.once('open',()=>console.log("connected to db"))

// // // app.post("/sign_up",(req,res)=>{
// // //     var name = req.body.name;
// // //     var email = req.body.email;
// // //     var password = req.body.password; 
// // //     console.log(req.body);

// // //     var data = {
// // //         "name" : name,
// // //         "email" : email, 
// // //         "password" : password
// // //     }
// // //     db.collection('users').insertOne(data,(err,collection)=>{
// // //         if(err){
// // //             throw err;
// // //         }
// // //         console.log("record inserted successfully");
// // //     })
// // //     return res.redirect('/backend/index.html');
// // // });


// // // app.get("/",(req,res)=>{
// // //     res.sendFile(path.join(__dirname, 'signup.html'));
// // // });

// // // app.listen(3000, () => {
// // //     console.log('Server is running on http://localhost:3000');
// // // });







// // var express = require('express');
// // var bodyParser = require('body-parser');
// // var mongoose = require('mongoose');
// // const path = require('path');
// // const app = express();

// // app.use(bodyParser.json());
// // app.use(express.static("public"));
// // app.use(bodyParser.urlencoded({ extended: true }));

// // mongoose.connect('mongodb://localhost:27017/Database');
// // var db = mongoose.connection;
// // db.on('error', () => console.log("error in connecting to db"));
// // db.once('open', () => console.log("connected to db"));

// // app.post("/sign_up", (req, res) => {
// //     var name = req.body.name;
// //     var email = req.body.email;
// //     var password = req.body.password;
// //     console.log(req.body);

// //     var data = {
// //         "name": name,
// //         "email": email,
// //         "password": password
// //     };
// //     db.collection('users').insertOne(data, (err, collection) => {
// //         if (err) {
// //             throw err;
// //         }
// //         console.log("record inserted successfully");
// //     });
// //     return res.redirect('index.html'); // Changed to redirect to index.html in the same folder
// // });

// // // Changed to serve index.html for the root URL
// // app.get("/", (req, res) => {
// //     res.sendFile(path.join(__dirname, 'index.html'));
// // });

// // app.listen(3000, () => {
// //     console.log('Server is running on http://localhost:3000');
// // });





// var express = require('express');
// var bodyParser = require('body-parser');
// var mongoose = require('mongoose');
// const path = require('path');
// const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// mongoose.connect('mongodb://localhost:27017/Database');
// var db = mongoose.connection;
// db.on('error', () => console.log("error in connecting to db"));
// db.once('open', () => console.log("connected to db"));

// app.post("/sign_up", (req, res) => {
//     var name = req.body.name;
//     var email = req.body.email;
//     var password = req.body.password;
//     console.log(req.body);

//     var data = {
//         "name": name,
//         "email": email,
//         "password": password
//     };
//     db.collection('users').insertOne(data, (err, collection) => {
//         if (err) {
//             throw err;
//         }
//         console.log("record inserted successfully");
//     });
//     return res.redirect('/index.html');
// });

// // Serving index.html for the root URL
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

// // Serving shop.html
// app.get("/shop.html", (req, res) => {
//     res.sendFile(path.join(__dirname, 'shop.html'));
// });

// app.get("/index.html", (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

// // Serving sproduct.html
// app.get("/sproduct.html", (req, res) => {
//     res.sendFile(path.join(__dirname, 'sproduct.html'));
// });

// // Serving style.css
// app.get("/style.css", (req, res) => {
//     res.sendFile(path.join(__dirname, 'style.css'));
// });

// // Serving script.js
// app.get("/script.js", (req, res) => {
//     res.sendFile(path.join(__dirname, 'script.js'));
// });

// app.get("/signup.html", (req, res) => {
//     res.sendFile(path.join(__dirname, 'signup.html'));
// });

// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });



// var express = require('express');
// var bodyParser = require('body-parser');
// var mongoose = require('mongoose');
// const path = require('path');
// const User = require('./models/User'); // Importing the User model

// const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// mongoose.connect('mongodb://localhost:27017/Database');
// var db = mongoose.connection;
// db.on('error', () => console.log("error in connecting to db"));
// db.once('open', () => console.log("connected to db"));


// app.post("/sign_up", (req, res) => {
//     var name = req.body.name;
//     var email = req.body.email;
//     var password = req.body.password;
//     console.log(req.body);

//     var data = {
//         "name": name,
//         "email": email,
//         "password": password
//     };
//     db.collection('users').insertOne(data, (err, collection) => {
//         if (err) {
//             throw err;
//         }
//         console.log("record inserted successfully");
//     });
//     return res.redirect('/index.html');
// });

// // Serving index.html for the root URL
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });



// // Route for handling login
// app.post("/login", async (req, res) => {
//     const { username, password } = req.body;
//     try {
//         // Check if the user exists in the database
//         const user = await User.findOne({ username: username });

//         if (!user) {
//             // User not found
//             return res.status(404).json({ message: "User not found" });
//         }

//         // Check if the password is correct
//         if (password !== user.password) {
//             // Incorrect password
//             return res.status(401).json({ message: "Incorrect password" });
//         }

//         // Login successful
//         return res.status(200).json({ message: "Login successful" });
//     } catch (error) {
//         console.error("Error:", error);
//         return res.status(500).json({ message: "Internal server error" });
//     }
// });

// // Serving index.html for the root URL
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

// // Serving other static files
// app.get("/shop.html", (req, res) => {
//     res.sendFile(path.join(__dirname, 'shop.html'));
// });

// app.get("/index.html", (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.get("/sproduct.html", (req, res) => {
//     res.sendFile(path.join(__dirname, 'sproduct.html'));
// });

// app.get("/style.css", (req, res) => {
//     res.sendFile(path.join(__dirname, 'style.css'));
// });

// app.get("/script.js", (req, res) => {
//     res.sendFile(path.join(__dirname, 'script.js'));
// });

// app.get("/signup.html", (req, res) => {
//     res.sendFile(path.join(__dirname, 'signup.html'));
// });

// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });



var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const path = require('path');
const User = require('./models/User'); // Importing the User model

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('/Users/namrathagunda/Desktop/shop/backend'));

mongoose.connect('mongodb://localhost:27017/Database', { useNewUrlParser: true, useUnifiedTopology: true }); // Adding useNewUrlParser and useUnifiedTopology options
var db = mongoose.connection;
db.on('error', (err) => console.error("Error in connecting to db:", err)); // Logging the error
db.once('open', () => console.log("Connected to db"));

// Route for handling signup
app.post("/sign_up", async (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;

    try {
        const user = await User.findOne({ email: email });

        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = new User({
            name: name,
            email: email,
            password: password
        });

        await newUser.save();

        // Redirect to index.html after successful signup
        return res.redirect('/login.html');
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});



app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        // Check if the user exists in the database
        const users = await User.findOne({ email: email });

        if (!users) {
            // User not found
            return res.status(404).json({ message: "User not found" });
        }

        // password is correct
        if (password !== users.password) {
            // Incorrect password
            return res.status(401).json({ message: "Incorrect password" });
        }

        
        // return res.status(200).json({ message: "Login successful" });
        res.redirect('/index.html');
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});





// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

// // Serving other static files
// app.get("/shop.html", (req, res) => {
//     res.sendFile(path.join(__dirname, 'shop.html'));
// });

// app.get("/index.html", (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.get("/sproduct.html", (req, res) => {
//     res.sendFile(path.join(__dirname, 'sproduct.html'));
// });

// app.get("/style.css", (req, res) => {
//     res.sendFile(path.join(__dirname, 'style.css'));
// });

// app.get("/script.js", (req, res) => {
//     res.sendFile(path.join(__dirname, 'script.js'));
// });

// app.get("/signup.html", (req, res) => {
//     res.sendFile(path.join(__dirname, 'signup.html'));
// });

// app.get("/login.html", (req, res) => {
//     res.sendFile(path.join(__dirname, 'login.html'));
// });

app.listen(2000, () => {
    console.log('Server is running on http://localhost:3000');
});
