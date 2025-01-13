const mongoose = require('mongoose')

const clubsSchema = new mongoose.Schema({
    President:String,
    VicePresident:String,
    CoreMembers:Object,
    Description:String,
    Images:String
});

const club = mongoose.model("club", clubsSchema);

module.exports = club;