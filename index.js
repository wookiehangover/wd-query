module.exports = function(browser){

  var wdQuery = function( selector ){
    if( !(this instanceof wdQuery) ){
      return new wdQuery(selector);
    }

    this.selector = selector;
    return this;
  };

  var $ = browser.elementByCssSelector;

  wdQuery.fn = wdQuery.prototype = {

    get: function(selector){
      selector = selector || this.selector;
      return browser.elementByCssSelector(selector);
    },

    val: function(value){
      return this.get()
        .then(function(elem){
          return value ? elem.type(value) : elem.getValue();
        });
    },

    click: function(){
      return this.get()
        .then(function(elem){
          elem.click();
        });
    }

  };

  return function(selector, context){
    return new wdQuery(selector, context);
  };

};
