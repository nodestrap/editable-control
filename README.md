# &lt;EditableControl /&gt;
A generic element with `valid`/`invalid` state.

## Preview

```jsx
<EditableControl tag='textarea' theme='primary' size='lg' gradient={true} outlined={true} enableValidation={true} isValid={true} >
    hello world
</EditableControl>
```
Rendered to:
```html
<textarea class="c1 thPrimary szLg gradient outlined vald">
    hello world
</textarea>
```

## Features
* Includes all features in [`<Control />`](https://www.npmjs.com/package/@nodestrap/control).
* `valid`/`invalid` state. Visualized in green/red background.
* Customizable via [`@cssfn/css-config`](https://www.npmjs.com/package/@cssfn/css-config).

## Installation

Using npm:
```
npm i @nodestrap/editable-control
```

## Support Us

If you feel our lib is useful for your projects,  
please make a donation to avoid our project from extinction.

We always maintain our projects as long as we're still alive.

[[Make a donation](https://ko-fi.com/heymarco)]
