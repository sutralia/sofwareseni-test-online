const mongoose =  require('mongoose');

const Schema = mongoose.Schema; 

const projectModel = new Schema({
	title: { type: String },
	user: {
        type: Schema.Types.ObjectId, 
        ref: 'users'
    }
}); 
module.exports = mongoose.model('project', projectModel)
