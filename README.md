wd-query
========

v0.1.0

jQuery style selectors for [wd](https://github.com/admc/wd) promises.

### tl;dr

In selenium tests with wd, wouldn't it be nice if you could do this:

```javascript
browser.init()
  .then(function(){
    return $('#email-input').val('you@something.io');
  })
  .then(function(){
    return $('#password-input').val('some_password');
  })
  .then(function(){
    return $('#login-form').submit();
  })
  .then(function(){
    return $('.loggedIn').isDisplayed('loggedIn');
  })
  .then(function(body){
    assert.ok(body);
    browser.quit();
  });
```

### Why jQuery?

Because selector's make sense and so does chaining. Approaching selenium
webdriver interactions as starting with selectors makes it easy to combine
multi-step sequences into terse and expressive statements.

By mapping wd's webdirver API in chainable constructor, a jQuery-esque API is
possible with very little code. This is not jQuery. It just looks like it.

### Why wd promises?

Because the nested callback style is unruly for anything complex. Promises are
also portable--they can be easily passed around between functions and scopes.

By using the wd promise interface wd-query is able to chain multiple async calls
into a unified, selector-driven syntax.

### Usage

To use, just pass an initialized wd instance (called `browser` by
convention) to the function exported by wd-query. Note that you must be use
`wd.promiseRemote`.

```javascript
var wd = require('wd');
var wdQuery = require('wd-query');

var browser = wd.promiseRemote( ... );
var $ = wdQuery(browser);

browser.init()
  .then(function(){
    return $('.open-modal').click()
  })
  .then(function(){
    return $('#modal').get();
  })
  .then(function(elem){
    assert.ok(elem)
    browser.quit();
  });
```

If you've already called `browser.init()`, for instance at the start of your
test suite, calls to wd-query instances can begin a promise chain.

```javascript
$('.open-modal').click().then( ... )
```

### Goals

The ultimate goal is to have pairity with the wd API for all actions that work
with css selectors while adding support for selecting multiple elements.

### Contributing

This is a need-based project, so I only wrote it to account for my needs as of
right now. If you have suggestestions, opinions, optimizations or fixes,
please fork and pull request to contribute.

### License

MIT
