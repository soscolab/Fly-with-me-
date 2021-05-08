/* Contient Tous Les Routes de Mon Application */
const redis = require('redis')
const express = require('express');
const router = express.Router();
const session = require('express-session');
const mongoose = require("mongoose");
var RedisStore = require('connect-redis')(session);
let redisClient = redis.createClient()

const Users = require('../models/Users');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client("xxxxxxxxxxxxxxxxxxxx");
const querystring = require('querystring');
router.use(express.json())
router.use(express.urlencoded({ extended: false })) 




router.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'This is a secret',
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    },
    store: new RedisStore({ client: redisClient }),
    resave: false,
    saveUninitialized: false
}));

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Enregistrer utilisateur dans la Base de Données
router.post('/test', (req, res) => {
    console.log(req.body)
    delete req.body._id;
    const thing = new Users({
        ...req.body
    });
    thing.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
        .catch(error => res.status(400).json({ error }));

})
// TEST MY SESSION 


// Access the session as req.session
router.get('/', function (req, res, next) {
    if (req.session.views) {
        req.session.views++
        res.setHeader('Content-Type', 'text/html')
        res.write('<p>views: ' + req.session.views + '</p>')
        res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
        res.end()
    } else {
        req.session.views = 1
        res.end('welcome to the session demo. refresh!')
    }
})



router.get('/testlog', (req, res) => {
    console.log(" inside testlog")
    console.log(req.session.loggedIn)
    if (req.session.loggedIn) {
        console.log("cool you are logged")
    }
    else {
        console.log("sorry you are not ")
    }
    console.log(req.session)
    res.end()
})


// DESTROY MY SESSION 
router.get('/destroysession', function (req, res) {

    req.session.destroy(function (err) {
        if (err) {
            msg = 'Error destroying session';
            res.json(msg);
        } else {
            msg = 'Session destroy successfully';
            console.log(msg)
            res.json(msg);
        }
    });

});


router.post('/GoogleLogin', (req, res) => {

    // VERIFY THE INTEGRITY OF THE GOOGLE TOKEN RECEIVED BY THE CLIENT

    token = querystring.stringify(req.body);//token needed to be stringified
    //  console.log(typeof token);
    const test = "d";
    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: "740831316427-m1qet5irfugkeva79brhb6s6nim8ds55.apps.googleusercontent.com",
            // Or, if multiple clients access the backend:
            //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
        });
        const payload = ticket.getPayload();
        // test = payload['email'];
        const userid = payload['sub'];
        const email = payload['email_verified'];
    }
    verify().catch(console.error);

    req.session.loggedIn = true;
    req.session.save((err) => {
        if (!err) {
            console.log(req.session);
            res.redirect("https://www.google.fr");
        }
    });
    //   res.send({ "tes": "test" })
    //  res.status(200).json(token)
    console.log(req.session)
})

//DIFFERENCE BETWEEN USE AND GET, GET IS MORE SPECIFIC

router.use('/api/stuff', (req, res, next) => {
    const stuff = [
        {
            _id: 'oeihfzeoi',
            title: 'Mon premier objet',
            description: 'Les infos de mon premier objet',
            imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
            price: 4900,
            userId: 'qsomihvqios',
        },

        {
            _id: 'oeihfzeomoihi',
            title: 'Mon deuxième objet',
            description: 'Les infos de mon deuxième objet',
            imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
            price: 2900,
            userId: 'qsomihvqios',
        },
    ];
    res.status(200).json(stuff);
});

module.exports = router;
