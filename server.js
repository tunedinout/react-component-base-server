var express = require('express');
const fileUpload = require('express-fileupload');
var app = express();
var multer = require('multer')
var cors = require('cors');


app.use(cors());
app.use(fileUpload())

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'public')
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + '-' + file.originalname)
//     }
// })

// var upload = multer({ storage: storage }).single('file');

// let filedata = null;
app.post('/upload', function (req, res) {

    const filedata = req.files.file;
    filedata.mv(
        `/Users/narottamkrjha/upload_folder/${filedata.name}`,
        (err) => {
            if (err) {
                return res.status(500).send(err);
            }
            console.log('No error');
            res.json({
                file: `/Users/narottamkrjha/upload_folder/${filedata.name}`
            });
        },
    );
    return res.status(200)
})

app.listen(8000, function () {
    console.log('App running on port 8000');
});