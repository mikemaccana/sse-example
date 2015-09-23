var log = console.log.bind(console)

log('doing SSE example - for some reason everything stops here and nothing more is logged')
var source = new EventSource('/time');
source.addEventListener('message', function(e) {
	log('GOT SSE MESSAGE YAAAY')
	log(e.data);
}, false);
