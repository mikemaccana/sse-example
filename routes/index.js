var express = require('express');
var router = express.Router();

var sse = require('connect-sse')

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/time', function(req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/event-stream',
		'Cache-Control': 'no-cache',
		'Connection': 'keep-alive'
	});
	res.write('\n');

	function sse(res,name,data) {
		res.write('event: ' + name + '\n');
		res.write('data: ' + JSON.stringify(data) + '\n\n');
	}

	// Sends a SSE message every second
	setInterval(function() {
		sse(res, 'hey girl', {
			message: 'yaay'
		});
	}, 1000);
});

module.exports = router;
