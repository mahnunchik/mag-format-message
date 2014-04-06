# mag-format-message [![Build Status](https://travis-ci.org/mahnunchik/mag-format-message.svg)](https://travis-ci.org/mahnunchik/mag-format-message)

[Mag](https://github.com/mahnunchik/mag) is the streaming logger for NodeJS

**mag-process-info** is transform stream that formats message from arguments.

## Installation

```
$ npm install mag-format-message mag-hub --save
```

## Usage

```
var hub = require('mag-hub');
var fromat = require('mag-format-message');
hub.pipe(format())
  .pipe(/* anything else */)
  .pipe(process.stdout);
```

## License

MIT
