export default {
  header: '图标',
  headerText: '`v-icon`组件提供了大量的字形来为应用程序的各个方面提供上下文。Vuetify图标利用Google的Material图标字体库。有关所有可用图标的列表，请访问官方的<a href="https://material.io/icons/" target="_blank" rel="noopener">Material Icons</a>页面。',
  components: ['v-icon'],
  examples: [{
    standard: {
      header: '标准',
      desc: '图标有两个主题（明亮和暗黑）和四个不同的大小（标准（standard）、中型（medium）、大型（large）和超大型（x-large））。'
    },
    fontAwesome: {
      header: 'Font Awesome',
      desc: '[Font Awesome](http://fontawesome.io/icons/)也被支持，只需简单地使用`fa-`前缀的图标名称即可。请注意，您仍然需要在您的项目中包含Font Awesome图标。'
    },
    mdi: {
      header: 'Material Design图标',
      desc: '[Material Design图标](https://materialdesignicons.com/)也被支持，您只需简单地使用`mdi-`前缀的图标名即可。请注意，您仍然需要在您的项目中包含MDI图标。'
    },
    color: {
      header: '色彩',
      desc: '使用色彩辅助器，您可以改变标准的暗黑和明亮的主题的图标的颜色。'
    },
    buttons: {
      header: '按钮',
      desc: '图标可以在按钮内部使用，以增加动作的重点。'
    }
  }],
  props: {
    disabled: 'Mixins.Input.props.disabled',
    large: '设置图标为大型**（36px）**',
    left: '在按钮内部使用时，把图标放置在左侧',
    medium: '设置图标为中型**(28px)**',
    right: '在按钮内部使用时，把图标放置在右侧',
    small: '设置图标为小型**(16px)**',
    xLarge: '设置图标为超大型**(40px)**'
  }
}
