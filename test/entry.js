/* globals mocha, describe, it, after */

var assert = require('assert')
  , fixture = document.getElementById('fixture')
  , Row = require('../row.js')
  , instances = {}; // A temporary holder that we can `delete` to clear leaks

mocha.setup({
  ui: 'bdd',
  globals: []
}).timeout(10000);

describe('A Single Row', function () {
  it('should not throw when initialized with an index', function () {
    assert.doesNotThrow(function () {
      instances.viewInstance = new Row({index: 0});
    });
  });

  it('should throw when not initialized with an index', function () {
    assert.throws(function () {
      instances.noSuchViewInstance = new Row({});
    });
  });

  it('should append a row div', function () {
    var row;

    fixture.appendChild(instances.viewInstance.el);

    // This is the wrapper
    assert.equal(fixture.children.length, 1);

    // This is the row
    row = fixture.children[0];
    assert.equal(row.tagName, 'DIV');
    assert.equal(row.innerHTML, 'Row 0');
  });

  it('should detach when closed', function () {
    instances.viewInstance.close();
    assert.equal(fixture.children.length, 0);
    assert.equal(fixture.innerHTML, '');
  });

  delete instances.viewInstance;
});

// Need this to be leakproof
after(function () {
  for(var k in instances)
    delete instances[k];
});

onload = function(){
  mocha.run();
};
