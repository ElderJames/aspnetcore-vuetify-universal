export default {
  props: {
    actions: 'Use this when using actions inside the picker',
    autosave: 'Automatically save the selected value. This updates the internal previous value so if cancel is clicked, it will not revert the user changes',
    headerColor: 'Defines the header color. If not specified it will use the color defined by <code>color</code> prop or the default picker color',
    landscape: 'Orients picker horizontal',
    noTitle: 'Hide the picker title',
    scrollable: 'Allows the use of the mousewheel in the picker',
    value: 'Picker value'
  }
}
