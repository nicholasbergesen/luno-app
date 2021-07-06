const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.static('build'));

app.get('/lunoBalance', async (req, res) => {
    const key = 'njj7ce9qtenk2';
    const secret = 'BZap4fl61qt9IB8dkvGrw3uc6jH_ptKG-joOAB3u9hw';
    const base64Credentials = Buffer.from(`${key}:${secret}`).toString('base64');

    try {
        const response = await fetch("https://api.luno.com/api/1/balance",
            {
                method: 'GET',
                headers: {
                    'Authorization': `BASIC ${base64Credentials}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

        const json = await response.json();
        res.json(json);
    }
    catch (err) {
        console.log(err);
        res.end();
    }
});


app.get('/*', function (req, res) {
    console.log(`request: ${req.url}`);
    res.sendFile(`${__dirname}/build/index.html`);
});

app.listen(PORT, () => { console.log(`listening on port ${PORT}`); });