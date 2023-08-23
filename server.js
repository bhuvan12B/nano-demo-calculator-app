const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    // return res.send('');
    res.status(200).send("Hello world!");
});

// baseRouter.get('/add', (req, res) => {
//     res.sendFile(__dirname+"/index.html");
// })

baseRouter.post('/add', (req, res) => {
    // res.json({ "": null });
    // res.setHeader('Content-Type', 'application/json')
    // console.log(req.body)
    var first=Number(req.body.first);
    var second=Number(req.body.second);
    var result=first+second;
    res.status(200).json({ result: result });
});


baseRouter.post('/subtract', (req, res) => {
    // res.json({ "": null });
    var first=Number(req.body.first);
    var second=Number(req.body.second);
    var result=first-second;
    res.status(200).json({ result: result });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});