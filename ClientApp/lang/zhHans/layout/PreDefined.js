export default {
  header: '布局',
  headerText: `布局系统往往是每一个应用程序的心脏。以下是官方支持的示例，涵盖了从桌面到移动端的应用程序。`,
  markupHeader: '默认应用程序标记',
  markupText: '这是Vuetify默认应用程序标记的示例。只要您使用 **app** 属性，就可以将布局元素放置在任何地方。这里所有组件中最关键的是`v-content`元素。这将根据您指定的**app**组件的结构动态调整大小，使得您可以创建高度可定制的解决方案。',
  appHeader: '关于 _app_ 所有的一切',
  appText: '在Vuetify中，`v-app`组件和**app**帮助引导您的应用程序并在`v-content`周围保持适当的距离。这使您可以摆脱管理布局的麻烦去创建真正独特的界面。对于所有应用程序，`v-app`组件是**必需要有**的，因为它是Vuetify的许多组件和功能的挂载点。',
  alert1: '为了让您的应用程序正常工作，您**必须**将其封装在一个`v-app`组件中。这个组件是为布局确定栅格断点时所必须的，它可以在body元素内的**任何地方**，但是必须是**所有** Vuetify组件的父级元素。',
  alert2: '使用**app**属性后会自动地在布局元素中使用**固定（fixed）**位置。如果你的应用程序需要一个_绝对位置_的元素, 您可以使用**absolute**属性重写此功能。',
  toc: [
    {
      text: '布局',
      href: 'introduction'
    },
    {
      text: '默认应用程序标记',
      href: 'default-markup'
    },
    {
      text: '关于app所有的一切',
      href: 'all-about-app'
    }
  ]
}
