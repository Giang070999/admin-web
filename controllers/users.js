const Users = require('../models/users')
exports.user = async (req, res) => {
    try {
        const users = await Users.find({});//.limit(8);
        //res.json(posts);
        res.render('manager/tables', { 
            title1: 'selected', title2: '', title3: '', title4: '', title5: '', title6: '', title7: '', 
            Users: users, i: 0,
            user: req.user
        });
    } catch (err) {
        res.json({ message: err });
    }
}