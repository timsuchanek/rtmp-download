var rtmp = require('../rtmp');

var video = "rtmp://s1czuwzunshwuq.cloudfront.net/cfx/st/mp4:videos/831c80fc-03e6-4b78-881b-c9b53e99fed6/de/h264_lq.mp4"

var config = {
	src: video,
	target: 'video.mp4',
	onProgress: function(data) {
		console.log(data);
	},
	onExit: function(data) {
		console.log('Done :)', data);
	},
	onError: function(error) {}
};

rtmp.download(config);