let express = require('express');
let app = express();

app.use(express.static('public'))

app.get("/api/*", async (req, res) => {

})

app.get("/hardware*", async (req, res) => {
    let codename = req.path.replace('/hardware/', '').replace('/hardware', '');

    
    res.send(codename);
})

app.listen(3050);