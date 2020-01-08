const Admin = require('../models/admin')
var admin = new Admin({ 
    username: 'hoa',
    gender: 'Nu',
    age: 30,
    country: 'Viet nam',
    email: 'hoa@gmail.com',
    phone:'12345',
    password: 'hoa1234'
 });
admin.save(function (err, Admin) {
    if (err) return console.error(err);
    console.log(Admin.name + " saved succeed.");
  });