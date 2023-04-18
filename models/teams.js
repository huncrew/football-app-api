const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    team: {
        type: String,
        required: true,
        trim: true,
    },
     user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
      },    
})

module.exports = mongoose.model('Teams', TeamSchema);
