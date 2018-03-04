export default {
  header: '色彩',
  headerText: '所有包含在[Material Design 规范](https://material.io/guidelines/style/color.html)中的所有色彩都可以开箱即用的通过**stylus**和**javascript**得到应用。这些值可以在您的样式表、组建文件和实际组件中通过**color类** 系统中使用。',
  classesHeader: '类',
  classesText: '规范中的每种色彩都会被转换为**背景**和**文本**变体以便在应用程序中通过一个类进行样式化，比如：`<div class="red">`或者`<span class="red--text">`。这些类的色彩定义在[这里](https://github.com/vuetifyjs/vuetify/blob/master/src/stylus/settings/_colors.styl)。',
  classesText2: '文本色彩还可以使用`text--{lighten|darken}-{n}`来支持**变暗（darken）**和**变亮（lighten）**变体',
  javascriptPackHeader: 'Javascript色彩包',
  javascriptPackText: 'Vuetify也有一个可选的色彩包，您可以在您的应用程序中导入和使用。这也可以用来帮助定义您的应用程序的主题。',
  stylusPackHeader: 'Stylus色彩包',
  stylusPackText: '虽然方便，但是Stylus色彩包增加了输出文件约~30kb的大小。有些项目可能只需要Vuetify在运行时引导创建的那些默认提供的类。要禁用此功能，您将不得不 _手动_导入并构建**stylus**主文件。这将需要[stylus loader](https://github.com/shama/stylus-loader)和应该`*.styl`文件条目（Webpack中的entry）',
  stylusPackText2: '您创建的`main.styl`文件将需要包含在您的项目中。',
  alert: '您**必须**配置您的webpack安装程序来使用`stylus`。如果您正在使用[预制模版](/getting-started/quick-start#new-applications)，这些都已经为您完成了。',
  stylusPackText3: '这也可以在您的**App.vue** 主文件中完成。请记住，根据您的项目设置，它_将_增加每次更新输入文件时的构建时间，因为stylus文件将会被重新生成。',
  colorHeader: 'Material 色彩表',
  colorText: '以下是按原色分组的Material Design调色板列表。',
  toc: [
    {
      text: '介绍',
      href: 'introduction'
    },
    {
      text: '类',
      href: 'classes'
    },
    {
      text: 'Javascript色彩包',
      href: 'javascript-color-pack'
    },
    {
      text: 'Stylus色彩包',
      href: 'stylus-color-pack'
    },
    {
      text: 'Material色彩表',
      href: 'material-colors'
    }
  ]
}
