const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const path = require('path');
var db = require('./data-base/index').studentSchema

const app = express();
app.use(express.static(`${__dirname}/../react-client/dist`));

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(`${__dirname}/../react-client/dist/index.html`));
// });

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.post('/addstudent' , (req, res) => {
	console.log(req.body)
    var { studentName, level } = req.body;
    db.findOne({ studentName }, (err, student) => {
        if (err) {
            console.log(err);
            return;
        }
        else {
            if (!student) {
                var addStudent = new db({
                    studentName,
                    level
                })
                addStudent.save((err, student) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    
                })
            }


        }
    })
});


app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../react-client/dist/index.html`));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});