wd-query
========

jQuery style selectors for [wd](https://github.com/admc/wd).

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
    return $('.loggedIn').isVisible('loggedIn');
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

### Why wd promises?

Because the nested callback style is unruly for anything complex. Promises are
also portable--they can be easily passed around between functions and scopes.

By using the wd promise interface wd-query is able to chain multiple async calls
into a unified, selector-driven syntax.
