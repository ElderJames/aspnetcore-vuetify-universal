export default {
  header: 'Colors',
  headerText: 'Out of the box you get access to all colors in the [Material Design spec](https://material.io/guidelines/style/color.html) through **stylus** and **javascript**. These values can be used within your style sheets, your component files and on actual components via the **color class** system.',
  classesHeader: 'Classes',
  classesText: 'Each color from the spec gets converted to a **background** and **text** variant for styling within your application through a class, e.g. `<div class="red">` or `<span class="red--text">`. These class colors are defined [here](https://github.com/vuetifyjs/vuetify/blob/master/src/stylus/settings/_colors.styl).',
  classesText2: 'Text colors also support **darken** and **lighten** variants using `text--{lighten|darken}-{n}`',
  javascriptPackHeader: 'Javascript color pack',
  javascriptPackText: 'Vuetify has an optional javascript color pack that you can import and use within your application. This can also be used to help define your applications theme.',
  stylusPackHeader: 'Stylus color pack',
  stylusPackText: 'While convenient, the color pack increases the css export size by ~30kb. Some projects may only require the default provided classes that are created at run-time from the Vuetify bootstrap. To disable this feature, you will have to _manually_ import and build the main **stylus** file. This will require a [stylus loader](https://github.com/shama/stylus-loader) and a `.styl` file entry.',
  stylusPackText2: 'Your created `main.styl` file will then need to be included in your project.',
  alert: 'You **must** configure your webpack setup to use `stylus`. If you are using a [pre-made template](/getting-started/quick-start#new-applications) this will already be done for you.',
  stylusPackText3: 'This can also be done within your main **App.vue** file. Keep in mind, depending on your project setup, this _will_ increase build times as everytime your entry file is updated, the stylus files will be re-generated.',
  colorHeader: 'Material colors',
  colorText: 'Below is a list of the Material design color palette grouped by primary color',
  toc: [
    {
      text: 'Introduction',
      href: 'introduction'
    },
    {
      text: 'Classes',
      href: 'classes'
    },
    {
      text: 'Javascript color pack',
      href: 'javascript-color-pack'
    },
    {
      text: 'Stylus color pack',
      href: 'stylus-color-pack'
    },
    {
      text: 'Material colors',
      href: 'introduction'
    }
  ]
}
