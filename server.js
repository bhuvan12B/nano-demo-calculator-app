const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
<<<<<<< HEAD
    // return res.send('');
    res.status(200).send("Hello world!");
=======
    return res.send('');
>>>>>>> b6b7d4c2090d224d2d288bdf6f915a545f0dc2c7
});

// baseRouter.get('/add', (req, res) => {
//     res.sendFile(__dirname+"/index.html");
// })

baseRouter.post('/add', (req, res) => {
<<<<<<< HEAD
    // res.json({ "": null });
    // res.setHeader('Content-Type', 'application/json')
    // console.log(req.body)
    var first=Number(req.body.first);
    var second=Number(req.body.second);
    var result=first+second;
    res.status(200).json({ result: result });
=======
    res.json({ "": null });
>>>>>>> b6b7d4c2090d224d2d288bdf6f915a545f0dc2c7
});


baseRouter.post('/subtract', (req, res) => {
<<<<<<< HEAD
    // res.json({ "": null });
    var first=Number(req.body.first);
    var second=Number(req.body.second);
    var result=first-second;
    res.status(200).json({ result: result });
=======
    res.json({ "": null });
>>>>>>> b6b7d4c2090d224d2d288bdf6f915a545f0dc2c7
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});