var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const path = require('path');
const User = require('./models/User'); 

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('/Users/namrathagunda/Desktop/shop/backend'));

mongoose.connect('mongodb+srv://Namratha2604:nam1234@cluster0.mtkhlv7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { 
    useNewUrlParser: true,
    useUnifiedTopology: true });
    // Adding useNewUrlParser and useUnifiedTopology options
    
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
            return res.status(200).send('<script>alert("User already exists"); window.location.href = "/signup.html";</script>');
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
        return res.status(200).send('<script>alert("Internal Server Error"); window.location.href = "/signup.html";</script>');
    }
});



app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        // Check if the user exists in the database
        const users = await User.findOne({ email: email });

        if (!users) {
            // User not found
            // return res.status(404).json({ message: "User not found" });
            return res.status(200).send('<script>alert("User not found"); window.location.href = "/login.html";</script>');
        }

        // password is correct
        if (password !== users.password) {
            // Incorrect password
        //     return res.status(401).json({ message: "Incorrect password" });
            return res.status(200).send('<script>alert("Incorrect password"); window.location.href = "/login.html";</script>');
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

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
