# vue-underscore

You know Underscore.js is a utility-belt library for JavaScript that provides support for the usual functional suspects (each, map, reduce, filter...) without extending any core JavaScript objects.
I arranged it as a vue plugin to use on your projects.

[![Version](https://img.shields.io/npm/v/vue-underscore.svg)](https://www.npmjs.com/package/vue-underscore)
[![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg?style=plastic)](https://www.npmjs.com/package/vue-underscore)


# Table of Contents
* [___Requirements___](#requirements)
* [___Installation___](#installation)
* [___Usage___](#usage)  
* [___Examples___](#examples)
* [___License___](#license)

# Requirements
- [Vue.js](https://github.com/vuejs/vue) `2.x` 


# Installation
```bash
# npm
$ npm install vue-underscore

```
# Usage
After use plugin on main.js. You can call it simply with 'this.$_.findwhere' (each, map, reduce, filter...)

main.js

```javascript
import Vue from 'vue';
import underscore from 'vue-underscore';
import App from './App';

Vue.use(underscore);

new Vue({
  ...App
}).$mount('#app');
```
You will be able to access underscore directly via

```javascript
import {_} from 'vue-underscore';

let testArr = [{id: 1}, {id:2}];
let foundInfo = _.findWhere(testArr, {id:1});

```

# Examples
```html

<script>
export default {
  methods: {
    test () {
      let testArr = [{id: 1}, {id:2}];
  
      let foundInfo = this.$_.findWhere(testArr, {id:1});
    
    }
  }
}
</script>

```


# License

[The MIT License](http://opensource.org/licenses/MIT)
