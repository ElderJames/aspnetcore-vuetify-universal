export default {
  header: 'Footer',
  headerText: 'The `v-footer` component is used for displaying general information that a user might want to access from any page within your site.',
  components: ['v-footer'],
  examples: [{
    default: {
      header: 'Default',
      desc: 'The footer component is just a basic container.'
    },
    companyFooter: {
      header: 'Company Footer',
      desc: 'The footer component as a basic company footer with links.'
    },
    indigoFooter: {
      header: 'Indigo Footer',
      desc: 'The footer component with Indigo background color and social media icons and button.'
    },
    tealFooter: {
      header: 'Teal Footer',
      desc: 'The footer component with a Teal color header and columns and rows of links.'
    }
  }],
  props: {
    absolute: 'Mixins.Positionable.props.absolute',
    fixed: 'Mixins.Positionable.props.fixed',
    inset: 'Positions the toolbar offset from an application `v-navigation-drawer`'
  }
}
