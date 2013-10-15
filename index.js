module.exports = function(browser){

  function simpleSelectorMethodFactory(context, method){
    return function(){
      return context.get()
        .then(function(elem){
          return elem[method]();
        });
    };
  }

  var wdMethods = ['click', 'isVisible', 'submit', 'text', 'tap'];

  var wdQuery = function( selector ){
    if( !(this instanceof wdQuery) ){
      return new wdQuery(selector);
    }

    var self = this;

    wdMethods.forEach(function(method){
      self[method] = simpleSelectorMethodFactory(self, method);
    });

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
    }

  };

  return function(selector, context){
    return new wdQuery(selector, context);
  };

};
