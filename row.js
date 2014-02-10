var Base = require('ribcage-view')
  , Row;

Row = Base.extend({
  afterInit: function (opts) {
    this.options = opts || {};
  }
, events: {
    'click': 'onClick'
  }
, className: 'ribcage-table-row'
, template: function () {
    if(this.options.text != null)
      return this.options.text;

    return '';
  }
, onClick: function (e) {
    if(typeof this.options.onClick == 'function')
      this.options.onClick(e);

    this.trigger('click');

    e.preventDefault();
  }
});

module.exports = Row;
