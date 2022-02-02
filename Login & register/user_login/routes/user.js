var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs')

exports.signup = function(req, res) {
    message = '';
    if (req.method == "POST") {
        var post = req.body;
        var user_name = post.user_name;
        var password = post.password;
        var full_name = post.full_name;
        var email = post.email;
        var address = post.address;
        var phone = post.phone;
        var agentid = post.agentid;
        var privileges = post.privileges;
        var pass_change_date = post.pass_change_date;
        var pc_mac_address = post.pc_mac_address;
        var loggedin = post.loggedin;
        var old_pass = post.old_pass;
        var user_status = post.user_status;
        var versions = post.versions;
        var applogin = post.applogin;



        if (user_name != '' && password != '') {
            db.query("SELECT * FROM `userss` where email = ?", [email], async(err, result) => {
                if (err) {
                    console.log(err);
                }
                if (result.length > 0) {
                    res.status(200).json('A user with that email already exists!');
                } else {
                    var hashedPassword = await bcrypt.hash(password, 8)

                    var sql = "INSERT INTO `userss`(`full_name`,`user_name`, `password`,`email`,`address`, `phone`, `agentid`,`privileges`,`pass_change_date`, `pc_mac_address`, `loggedin`, `old_pass`, `user_status`, `versions`, `applogin`) VALUES ('" + full_name + "','" + user_name + "','" + hashedPassword + "', '" + email + "', '" + address + "', '" + phone + "', '" + agentid + "', '" + privileges + "','" + pass_change_date + "', '" + pc_mac_address + "', '" + loggedin + "','" + old_pass + "' , '" + user_status + "', '" + versions + "' , '" + applogin + "')";

                    var query = db.query(sql, function(err, result) {
                        // message = "Your account has been created succesfully.";
                        // res.render('signup.ejs', { message: message });
                        res.status(400).json('Your account has been created succesfully.!');
                    });
                }
            })
        } else {

            es.status(500).json("Username and password is mandatory field.");
        }

    } else {

        res.status(300).json("Username and password is mandatory field.");

    };
}

exports.login = function(req, res) {

    const { email, password } = req.body;
    // if (!email || !password) {
    //     res.status(400).json(`Missing ${!email ? "email" : 'password'}!`)
    // }
    const user = "SELECT email, password FROM `userss`   WHERE `email`='" + email + "' and password = '" + password + "'";
    console.log(user.email);
}