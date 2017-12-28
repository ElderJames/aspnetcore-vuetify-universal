export default {
  header: 'Bottom sheet',
  headerText: 'The bottom sheet is a modified <code>v-dialog</code> that slides from the bottom of the screen, similar to a <code>v-bottom-nav</code>. Whereas a bottom navigation component is for buttons and specific application level actions, a bottom sheet can contain anything.',
  components: ['v-bottom-sheet'],
  examples: [{
      standard: {
      header: 'Standard display',
      desc: `Here we display an example list of actions that could be present in an application.`
    },
    inset: {
      header: 'Inset bottom sheets',
      desc: `Bottom sheets can be inset, reducing their maximum width on desktop to 70%. This can be further reduced manually using the <code>width</code> prop. We also showcase dynamic class binding using the Vuetify breakpoint object.`
    }
  }],
  props: {
    disabled: 'Disables the ability to open the dialog',
    inset: 'Reduces the dialog content maximum width to 70%'
  }
}
