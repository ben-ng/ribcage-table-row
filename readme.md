Ribcage Table Row
=================

A simple table row, meant for use with `ribcage-table`.

## Install

```
npm install ribcage-table-row
```

## Use

```javascript

  var Row = require('ribcage-table-row');

  var row = new Row({
    text: 'Hello World'

    // Optional
  , onClick: function noop () {}
  });

  // There is also a click event if you would rather use that
  row.on('click');

```

## Tests

A successful test run should look something like this:

![Reference Image](https://github.com/ben-ng/ribcage-table-row/raw/master/test/reference.png)

## License

The MIT License

Copyright (c) 2013 Ben Ng, http://benng.me

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
