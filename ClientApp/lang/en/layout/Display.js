export default {
  header: 'Display',
  headerText: 'The display helpers allow you to control the display of content. This includes being conditionally visible based upon the current viewport, or the actual element display type.',
  toc: [
    {
      text: 'Introduction',
      href: 'introduction'
    },
    {
      text: 'Visibility',
      href: 'visibility'
    },
    {
      text: 'Display',
      href: 'display'
    },
    {
      text: 'Examples',
      href: 'examples'
    }
  ],
  visibilityHeader: 'Visibility',
  visibilityText: 'Conditionally display an element based upon the current **viewport**. These classes can be applied using the following format `hidden-{breakpoint}-{condition}`',
  breakpointText: 'The _breakpoint_ sets the viewport size:',
  breakpoints: [
    '`xs` - extra small devices',
    '`sm` - small devices',
    '`md` - medium devices',
    '`lg` - large devices',
    '`xl` - extra large'
  ],
  conditionText: 'The _condition_ applies the class base on:',
  conditions: [
    '`only` - hide the element only on `xs` through `xl` breakpoints',
    '`and-down` - hide the element on the specified breakpoint and down `sm` through `lg` breakpoints',
    '`and-up` - hide the element on the specified breakpoint and up `sm` through `lg` breakpoints'
  ],
  displayHeader: 'Display',
  displayText: 'Specify the elements `display` property. These classes can be applied using the following format `d-{display}`.',
  displays: [
    '`d-inline-flex` - sets the element display property to `inline-flex`',
    '`d-flex` - sets the element display property to `flex`',
    '`d-inline-block` - sets the element display property to `inline-block`',
    '`d-block` - sets the element display property to `block`',
    '`d-inline` - sets the element display property to `inline`'
  ]
}
