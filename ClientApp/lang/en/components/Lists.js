export default {
  header: 'List',
  headerText: 'The `v-list` component is used to display information. It can contain an avatar, content, actions, subheaders and much more. Lists can contain children and are used in the sidebar.',
  components: [
    'v-list',
    'v-list-tile',
    'v-list-tile-title',
    'v-list-tile-sub-title',
    'v-list-tile-content',
    'v-list-tile-action',
    'v-list-tile-avatar',
    'v-list-group',
    'v-list-tile-action-text'
  ],
  examples: [{
    avatarTwoLines: {
      header: 'Avatar with 2 lines',
      desc: 'Lists can take an array of list items. When given an array, the list component will figure out the classes that are needed depending on what it was given. You can also define headers or dividers within the items array.'
    },
    avatarTitleAndAction: {
      header: 'Avatar with title and action',
      desc: 'Lists also contain slots for a more explicit approach. If you choose this approach, remember you must provide additional props for correct spacing. In this example, we have a tile with an avatar, so we must provide an `avatar` property.'
    },
    iconTwoLinesAndAction: {
      header: 'Icon with 2 lines and action',
      desc: 'Lists can contain subheaders, dividers, and can contain 1 or more lines. The subtitle will overflow with ellipsis if it extends past one line.'
    },
    avatarThreeLines: {
      header: 'Avatar with 3 lines',
      desc: 'For three line lists, the subtitle will clamp vertically at 2 lines and then ellipsis. If you need more than 3 lines, it is advised to use a [card](/components/cards).'
    },
    avatarSubheaderTitleAndAction: {
      header: 'Avatar with title and action',
      desc: 'When a lists slot is used, you must manually define whether it contains headers, or if the items contain an avatar. This is required to maintain proper spacing.'
    },
    subheadingsAndDividers: {
      header: 'Subheadings and dividers',
      desc: 'Lists can contain multiple subheaders and dividers.'
    },
    cardList: {
      header: 'Card image with toolbar and list',
      desc: 'A list can be combined with a card.'
    },
    titleSubtitleActionsAndActionText: {
      header: 'Title with sub-title, actions and action-text',
      desc: 'A list can contain a stack within an action. Ripple and router props can be passed through the main v-list, to the v-list-tile or as a property in the items array.'
    },
    actionTitleAndSubtitle: {
      header: 'Action with title and sub-title',
      desc: 'A list can contain up to 3 lines.'
    },
    expansionLists: {
      header: 'Expansion Lists',
      desc: 'A list can contain a group of items which will display on click. Expansion lists are also used within the `navigation drawer` component.'
    }
  }],
  props: {
    avatar: 'Used to set minimum tile height on a single-line list item',
    dense: 'Lowers max height of list tiles',
    expand: 'Will only collapse when explicitly closed',
    subheader: 'Removes top padding. Used when previous sibling is a header',
    threeLine: 'Increases list-tile height for three lines',
    twoLine: 'Increases list-tile height for two lines',
    inactive: 'If set, the list tile will not be rendered as a link even if it has to/href prop or @click handler'
  }
}
