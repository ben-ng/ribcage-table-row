var Base = require('ribcage-view')
  , Row;

Row = Base.extend({
  afterInit: function (opts) {
    if(opts.index == null)
      throw new Error('This row must be initialized with an index');

    this.options = opts;
  }
, template: function () {
    return 'Row ' + this.options.index;
  }
});

module.exports = Row;
