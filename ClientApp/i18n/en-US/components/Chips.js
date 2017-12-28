export default {
  header: 'Chip',
  headerText: 'The <code>v-chip</code> component is used to convey small pieces of information. Using the <code>close</code> property, the chip becomes interactive, allowing user interaction.',
  components: ['v-chip'],
  examples: [{
    default: {
      header: 'Default',
      desc: 'Chips come in 4 primary variations. Regular, with icon, with portrait and closeable.',
      uninverted: true
    },
    colored: {
      header: 'Colored',
      desc: 'Any color from the Material Design palette can be used to change a chips color.'
    },
    icon: {
      header: 'Icon',
      desc: 'Chips can use text or any icon available in the Material Icons font library.'
    },
    outline: {
      header: 'Outline',
      desc: 'Outlined chips inherit their border color from the current text color.'
    },
    label: {
      header: 'Label',
      desc: 'Label chips use the <code>v-card</code> border-radius.'
    },
    closable: {
      header: 'Closable',
      desc: 'Closable chips can be controlled with a v-model. Listen to the <code>input</code> event if you want to know when a chip has been closed.',
      uninverted: true
    },
    inSelects: {
      header: 'In selects',
      desc: 'Selects can use chips to display the selected data.',
      uninverted: true
    }
  }],
  props: {
    close: 'Adds remove button',
    label: 'Removes circle edges',
    outline: 'Removes background and applies border and text color',
    selected: 'Applies a selection color to the chip. Primarily used for displaying highlight context in <code>v-select</code>',
    small: 'Decreases the chip size'
  }
}
