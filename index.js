module.exports = function(browser){

  var wdQuery = function( selector ){
    if( !(this instanceof wdQuery) ){
      return new wdQuery(selector);
    }

    this.selector = selector;
    return this;
  };

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
          return elem.click();
        });
    },

    submit: function(){
      return this.get()
        .then(function(elem){
          return elem.submit();
        });
    },

    tap: function(){
      return this.get()
        .then(function(elem){
          return elem.tap();
        });
    },

    isVisible: function(){
      return this.get()
        .then(function(elem){
          return elem.isVisible();
        });
    },

    text: function(){
      return this.get()
        .then(function(elem){
          return elem.text();
        });
    }

  };

  return function(selector, context){
    return new wdQuery(selector, context);
  };

};
