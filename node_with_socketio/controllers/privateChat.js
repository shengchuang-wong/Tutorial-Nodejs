module.exports = function () {
    return {
        setRouting: function (router) {
            routeger.get('/chat', this.getChatPage);
        },

        getChatPage: function (req, res) {
            res.render('private/privateChat', { user: req.user });
        }
    }
}