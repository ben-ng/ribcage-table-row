/* globals mocha, describe, it, after */

var assert = require('assert')
  , fixture = document.getElementById('fixture')
  , Row = require('../row.js')
  , instances = {}; // A temporary holder that we can `delete` to clear leaks

mocha.setup({
  ui: 'bdd',
  globals: []
}).timeout(10000);

describe('A Single Row With An Index', function () {

  it('should not throw when initialized with an index', function () {
    assert.doesNotThrow(function () {
      instances.viewInstance = new Row({index: 0});
    });
  });

  it('should append an empty row div', function () {
    var row;

    fixture.appendChild(instances.viewInstance.el);

    // This is the wrapper
    assert.equal(fixture.children.length, 1);

    // This is the row
    row = fixture.children[0];
    assert.equal(row.tagName, 'DIV');
    assert.equal(row.innerHTML, '');
    assert.equal(row.className.split(' ').length, 1);
    assert.ok(row.className.split(' ').indexOf('ribcage-table-row') >= 0);
  });

  it('should detach when closed', function () {
    instances.viewInstance.close();
    assert.equal(fixture.children.length, 0);
    assert.equal(fixture.innerHTML, '');
  });

  delete instances.viewInstance;
});


describe('A Single Row With Some Text', function () {

  it('should not throw when initialized with an index and text', function () {
    assert.doesNotThrow(function () {
      instances.viewInstance = new Row({text: 'Hello World'});
    });
  });

  it('should append a row div that says "Hello World"', function () {
    var row;

    fixture.appendChild(instances.viewInstance.el);

    // This is the wrapper
    assert.equal(fixture.children.length, 1);

    // This is the row
    row = fixture.children[0];
    assert.equal(row.tagName, 'DIV');
    assert.equal(row.innerHTML, 'Hello World');
    assert.equal(row.className.split(' ').length, 1);
    assert.ok(row.className.split(' ').indexOf('ribcage-table-row') >= 0);
  });

  it('should leak a row for visual checking below', function () {
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
