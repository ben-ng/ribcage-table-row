var Base = require('ribcage-view')
  , Row;

Row = Base.extend({
  afterInit: function (opts) {
    this.options = opts || {};
  }
, className: 'ribcage-table-row'
, template: function () {
    if(this.options.text != null)
      return this.options.text;

    return '';
  }
});

module.exports = Row;
