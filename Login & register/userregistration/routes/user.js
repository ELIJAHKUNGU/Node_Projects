exports.signup = function(req, res) {
    message = '';
    if (req.method == "POST") {
        const post = req.body;
        const full_name = post.full_name;
        const user_name = post.user_name;
        const email = post.email;
        const password = post.password;
        const address = post.address;
        const phone = post.phone;
        const agentid = post.agentid;
        const privileges = post.privileges;
        const pass_change_date = post.pass_change_date;
        const loggedin = post.loggedin;
        const pc_mac_address = post.pc_mac_address;
        const old_pass = post.old_pass;
        const user_status = post.user_status;
        const versions = post.versions;
        const applogin = post.applogin;
        if (user_name != '' && password != '') {
            // var sql = "INSERT INTO `user`(`first_name`,`last_name`,`mobile`,`username`, `password`)
            //  VALUES ('" + fname + "','" + lname + "','" + mobile + "','" + username + "','" + password + "')";

            var sql = "INSERT INTO `users`(`full_name`,`user_name`,email`,`password`, `address`,` phone`,`agentid`,`privileges`,`pass_change_date`,`loggedin`,`pc_mac_address`,`old_pass`,` user_status`,` versions`,`applogin`)  VALUES ('" + full_name + "','" + user_name + "','" + email + "','" + password + "', '" + address + "', '" + phone + "','" + agentid + "','" + privileges + "','" + pass_change_date + "','" + loggedin + "','" + pc_mac_address + "','" + old_pass + "','" + user_status + "','" + versions + "','" + applogin + "')";


            var query = db.query(sql, function(err, result) {
                // message = "Your account has been created succesfully.";
                // res.render('signup.ejs', { message: message });
                console.log("Your account has been created succesfully.");
            });
        } else {
            message = "Username and password is mandatory field.";
            res.render('signup.ejs', { message: message });
        }

    } else {
        res.render('signup');
    }
};

exports.login = function(req, res) {
    var message = '';
    var sess = req.session;

    if (req.method == "POST") {
        var post = req.body;
        var username = post.username;
        var password = post.password;

        var sql = "SELECT id, first_name, last_name, username FROM `user` WHERE `username`='" + username + "' and password = '" + password + "'";
        db.query(sql, function(err, results) {
            if (results.length) {
                req.session.userId = results[0].id;
                req.session.user = results[0];
                console.log(results[0].id);
                res.redirect('/home/dashboard');
            } else {
                message = 'You have entered invalid username or password.';
                res.render('index.ejs', { message: message });
            }

        });
    } else {
        res.render('index.ejs', { message: message });
    }

};


exports.dashboard = function(req, res, next) {

    var user = req.session.user,
        userId = req.session.userId;
    console.log('ddd=' + userId);
    if (userId == null) {
        res.redirect("/login");
        return;
    }

    var sql = "SELECT * FROM `user` WHERE `id`='" + userId + "'";

    db.query(sql, function(err, results) {
        res.render('dashboard.ejs', { data: results });
    });
};

exports.profile = function(req, res) {

    var userId = req.session.userId;
    if (userId == null) {
        res.redirect("/login");
        return;
    }

    var sql = "SELECT * FROM `user` WHERE `id`='" + userId + "'";
    db.query(sql, function(err, result) {
        res.render('profile.ejs', { data: result });
    });
};

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect("/login");
    })
};