rtmp-download
=============

A Node Module to download [RTMP][1] Streams.
**Important:** This Module requires the C lib [rtmpdump][2]. [rmtpdump for Mac][3]


```javascript
var rtmp = require('rtmp-download');

var config = {
	src: 'rtmp://video.url/video.mp4',
	target: '/home/user/videos/video.mp4',
	onProgress: function(data) {},
	onExit: function(data) {},
	onError: function(error) {}
};

rtmp.download(config);
```
## Installation
	$ npm install --save rtmp-download

## Data
The `data` object of the callbacks `onProgress` and `onExit` contains the following data:

```javascript
{
	kbLoaded: 12345,
	secondsLoaded: 12,
	percent: 10.5
}
```

  [1]: http://en.wikipedia.org/wiki/Real_Time_Messaging_Protocol
  [2]: http://rtmpdump.mplayerhq.hu/
  [3]: http://trick77.com/wp-content/uploads/2008/01/rtmpdump-2.4_mac_os.zip
