const express = require('express');
const res = require('express/lib/response');
const passport = require('passport');
const router = express.Router();

// @desc  Auth with Google 
// @route GET /auth/Google 
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))


// @desc Dashboard
// @route GET /dashboard
router.get('/google/callback', passport.authenticate('google', {
        failureRedirect: '/'
    }),
    (res, req) => {
        res.redirect('/dashboard')
    }
);

module.exports = router;