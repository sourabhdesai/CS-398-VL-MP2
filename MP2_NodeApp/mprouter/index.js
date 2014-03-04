var mp2 = require('../mp2');

exports.renderMP = function (req,res) {
	var mpNum = req.param("num");
	switch(mpNum) {
		case "2":
			mp2(req,res);
			break;
	}
}