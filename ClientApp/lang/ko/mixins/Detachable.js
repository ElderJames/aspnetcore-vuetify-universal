export default {
  props: {
    attach: 'Specifies which DOM element that this component should detach to. Use either a CSS selector string or an object reference to the element.',
    contentClass: 'Applies a custom class to the detached element. This is useful because the content is moved to the end of the app and is not targettable by classes passed directly on the component.'
  }
}
