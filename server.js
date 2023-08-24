const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    // return res.send('');
    res.send("Hello world!")
});

// baseRouter.get('/add', (req, res) => {
//     res.sendFile(__dirname+"/index.html");
// })

baseRouter.post('/add', (req, res) => {
    // res.json({ "": null });
    const {first, second} = req.body;
    res.json({result: Number(first)+Number(second)});
});


baseRouter.post('/subtract', (req, res) => {
    // res.json({ "": null });
    const {first, second} = req.body;
    res.json({result: Number(first)-Number(second)});
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});