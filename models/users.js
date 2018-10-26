const mongoose =  require('mongoose');

const Schema = mongoose.Schema; 

const userModel = new Schema({
	name: { type: String },
	age: { type: Number },
	company: { type: String}
}); 
module.exports = mongoose.model('users', userModel)
