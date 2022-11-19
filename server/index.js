//Express
const express = require('express');

//web-push
const webpush = require('web-push');

//body-parser
const bodyParser = require('body-parser');

//path
const path = require('path');

//cors
const cors = require('cors')

//using express
const app = express();

//using bodyparser
app.use(bodyParser.json())

app.use(cors())

const publicVapidKey = 'BIF9TsrMNHK1KckZTpEhHCt0XxckpX_PDGTNqPW7zK8iNOcHqO7bHuaVSzWjBfmtz4rmXgqTJl_N9lKXCQOg5k0';
const privateVapidKey = 'YPH5Gq_gx8Bt7Me_Rod6etOCF5qiOQ_GQnpn8_DXBrs';

//setting vapid keys details
webpush.setVapidDetails('mailto:abrahamyanhayk01@gmail.com', publicVapidKey,privateVapidKey);


app.get('/', (req, res) => {
    res.send('Hello World');
});
//subscribe route
app.post('/subscribe', (req, res) => {
    const payload = JSON.stringify({
        title:req.body.title,
        description:req.body.description,
        icon:req.body.icon
    })
    console.log(req.body);

// console.log(req.body.subscription);
    webpush.sendNotification(req.body.subscription, payload)
        .then(result => console.log('result', result))
        .catch(e => console.log(e.stack))

    res.status(200).json({'success': true})
});


app.listen(4000, () => console.log('http://localhost:4000/'))
