const { messages } = require('./indexController')

function messageParse(req,res){
    const idx = req.params.idx;
    const message = messages[idx];
    if (!message) {
        return res.status(404).send('Message not found');
    }

    res.render('message', { message });
}

module.exports = { messageParse };