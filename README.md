[![npm](https://img.shields.io/badge/npm%20-1.0.2-blue.svg)]()
[![vueversions](https://img.shields.io/badge/vue.js-2-brightgreen.svg)]()
[![MIT](https://img.shields.io/badge/license-MIT-ff69b4.svg)]()

<p align="center">
  <a href ="##"><img alt="lazyload_text" src="https://github.com/boylegu/vue-lazyload-text/blob/master/example/assets/vue-lazyload-text.png?raw=true"></a></p>


# vue-lazyload-text

The high performance magic text with lazyload support. 

The vue-lazyload-text offer better performents, especially in comparison with Scroll Events. because of  none computationally expensive and the relatively steady reliability. There's another thing it's only `output` or `code` HTML tag. I think this's a very good addition such as some Image lazyload open source vue plugin.

## Online Demo
[DEMO](https://boylegu.github.io/vue-lazyload-text)

## Usage
 
- Compoment

  Example : 
  
      <lazy-text :src="your text" @getScope="Function"></lazy-text>
  
  Props
  
  |        arg             | description  | 类型 | default |
  |-------------------------|-------|------|--------|
  | src(required) | Receive text data from server or outside | string | -  | 
  | separator | Customize the newline character  | String | `"\n"`      | 
  | intervalLine | Each view port displays row spacing  | number | `10`  | 
  | defer  | Delay trigger to observer | number | `2000` （ms）| 
  | bgColor | set background color in text area | string | `"rgba(0, 150, 0, 0.75)"`    | 

  Events
  
    |        name             | description  | arg | 
    |-------------------------|-------|------|
    | getScope |Used to receive text ranges from server or outside. | `startLine`, `endLine` |


- Directive
>> Coming Soon......


## About Server-side interaction

You can see `example/demo` or git clone this project with `npm run dev` if it's difficult to understand about Server-side interaction.

points for attention:

- You need to handle or intercept text scope in the string your Server.

- You should not write extraneous data to the HTML text output area other than to get data from the server side.

- Due to network reasons, the server-side interface may not respond in time. So make sure that the plug-in is not triggered until it gets the data. For example, you can adjustment the defer property provided in the component.

## Support browser

[Check Compatibility](https://caniuse.com/#feat=intersectionobserver)

## License

MIT

Author:  Boyle Gu
