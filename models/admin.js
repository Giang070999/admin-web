const mongoose = require('mongoose');
const bcrypt=require('bcrypt-nodejs');

const AdminSchema = mongoose.Schema({
    username: { type: String, require: true, minlength:3 },
    gender: {type:String , require: true},
    age: { type: Number, require: true},
    country: { type: String, require: true },
    email: { type: String, require: true , unique: true},
    phone: { type: String, require: true },
    password: { type:String, require: true, minlength: 5 }
});

AdminSchema.methods.encryptPassword=function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}
AdminSchema.methods.validPassword=function(password){
    return bcrypt.compareSync(password, this.password);
}

module.exports=mongoose.model('Admin',AdminSchema, "Admin");