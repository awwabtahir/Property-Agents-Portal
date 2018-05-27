var needle = require('needle');


module.exports.sendMessage = function (req, res) {

    var to = req.body.to;
    var msg = req.body.msg;

    console.log(to);
    console.log(msg);

    needle.post('http://outreach.pk/api/sendsms.php/sendsms/url', {
        id: 'rchmarwat',
        pass: 'marwat007',
        mask: 'Marwat Asc',
        to: to,
        lang: 'English',
        msg: msg,
        type: 'xml'
    },
        function (err, resp, body) {
            console.log(body);
            res.status(200);
            res.json({
                "message": "success"
            });
        });

}