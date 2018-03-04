export default {
  header: 'Layouts',
  headerText: `The layout system is the heart of every application. Below are the officially supported examples, ranging from desktop to mobile applications. `,
  markupHeader: 'Default application markup',
  markupText: 'This is an example of the default application markup for Vuetify. You can place your layout elements anywhere, as long as you apply the **app** property. The key component in all of this is the `v-content` element. This will be dynamically sized depending upon the structure of your designated **app** components. This allows you to create extremely customized solutions.',
  appHeader: 'All about _app_',
  appText: 'In Vuetify, the `v-app` component and the **app** help bootstrap your application with the proper sizing around `v-content`. This allows you to create truly unique interfaces without the hassle of managing your layout. The `v-app` component is **REQUIRED** for all applications. This is the mount point for many of Vuetify\'s components and functionality.',
  alert1: 'In order for your application to work properly, you **must** wrap it in a `v-app` component. This component is required for determining grid breakpoints for the layout. This can exist **anywhere** inside the body, but must be the parent of **ALL** Vuetify components.',
  alert2: 'Applying the **app** prop automatically applies position: **fixed** to the layout element. If your application calls for an _absolute_ element, you can overwrite this functionality using the **absolute** prop.',
  toc: [
    {
      text: 'Layouts',
      href: 'introduction'
    },
    {
      text: 'Default app markup',
      href: 'default-markup'
    },
    {
      text: 'All about app',
      href: 'all-about-app'
    }
  ]
}
