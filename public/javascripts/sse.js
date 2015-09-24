var log = console.log.bind(console)

log('doing SSE example')
var source = new EventSource('/time');
source.addEventListener('message', function(e) {
	log('GOT SSE MESSAGE YAAAY')
	log(e.data);
}, false);
