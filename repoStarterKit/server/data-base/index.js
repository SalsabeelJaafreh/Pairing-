const mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost/Student');

const db = mongoose.connection;

db.on('error', () => {
    console.log('mongoose connection error');
});

db.once('open', () => {
    console.log('mongoose connected successfully');
});


var Schema = mongoose.Schema;
var studentSchema = new Schema({
    studentName: { type: String },
    level: { type: String }
})

studentSchema = mongoose.model('studentSchema', studentSchema);

module.exports.studentSchema = studentSchema;
