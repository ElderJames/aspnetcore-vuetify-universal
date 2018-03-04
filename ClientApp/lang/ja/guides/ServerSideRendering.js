export default {
  header: 'Overview',
  headerText: 'This overview is designed to help you become fluent in **Vuetify\'s** Vue SSR Template. If you have not already installed the <code>webpack-ssr</code> template, please do so <router-link to="/vuetify/quick-start">in the Quick start</router-link>.',
  structureHeader: 'Structure',
  structureText1: 'This Vue CLI template was designed for performance, seo optimization and usability. This template is configured out of the box for css, sass and stylus pre-processors.',
  structureText2: 'The **Build** folder contains all of the webpack specific build configurations for your project. **Src** is where all the development project files reside. Notice that the Webpack-SSR template is out-of-the-box configured to use [Vue Router](https://router.vuejs.org/en/), [Vuex](https://vuex.vuejs.org/en/intro.html), and the [Vue Server Renderer](https://vuejs.org/v2/guide/ssr.html). This will allow you to make simple or complex applications that are not only fast/efficient, but **SEO** friendly.',
  structureSubHeader: 'Folder Structure',
  applicationHeader: 'Application',
  applicationText1: 'Navigate to the **src** folder and open up <code>App.vue</code>. Vuetify is a semantic-focused framework. The code you write should be easy to remember, and easy to manage. To do this, one of the main components of Vuetify is <code>v-app</code>. This component allows you to define your application layout. This is used in conjunction with <code>v-toolbar</code>, <code>v-navigation-drawer</code>, and <code>v-footer</code>.',
  applicationText2: 'The markup below tells the application that you have a <code>toolbar</code> and <code>footer</code>. Once defined, the content area will be resized to accommodate. For more information on layouts, navigate to the <router-link to="/layouts/pre-defined">Layouts</router-link> section.',
  applicationText3: 'Place all statically served assets in <code>static</code>. This can be accessed by referencing <code>/static/picture.png</code>, for example.',
  applicationText4: 'The components folder is where your custom components should be placed. Edit the <code>components/_index.js</code> file to have these files automatically bootstrapped for you.',
  applicationSubHeader1: 'Static assets',
  applicationSubHeader2: 'Components',
  routingHeader: 'Routing',
  routingText1: 'The Webpack-SSR template uses the official Vue Router for controlling application flow. Located in <code>/src/router/index.js</code>, all of your application routes and route logic will be defined here. Inside you will also see a function that allows you to setup dynamically imported pages. This is not required, however, it will help break up your application and only load views that are needed, clearing up space in your eventual bundle output.',
  routingText2: 'These routes can be accessed by creating a link to the specified path, or by using Vue Router\'s `<router-link>` component. For more information, review the official Vue Router [documentation](https://router.vuejs.org/en/). The default function assumes you are placing views in the <kbd>/pages</kbd> folder containing **View** on the end of the file. Example <code>HomeView.vue</code>.',
  stateControlHeader: 'State control',
  stateControlText1: 'State control is managed by the official Vuex library. This Vue plugin follows Facebook\'s Reflux design pattern. Navigate to <code>/store/index.js</code>. By default, Vuex is setup to prefetch data for the store before your page is initially rendered. To hook into this functionality, create a <code>preFetch</code> method on your view component.',
  stateControlText2: 'This is useful for bootstrapping your application so that any necessary data is available before the initial render.',
  stateControlText3: 'For more information on State Control and Vuex, view the official [documentation](https://vuex.vuejs.org/en/intro.html).',
  stateControlText4: 'Vuetify integrates into Vuex to allow for easy debugging and access to stored properties. You can also use watchers to hook into store states and react when they change. More information can be found [here](https://vuejs.org/v2/guide/reactivity.html).',
  metaDataHeader: 'Meta data',
  metaDataText: 'In order to ensure that page specific meta data is viewable when your pages are crawled, you can define your applications page specific information in <code>router/meta.json</code>. This will allow you to set page title, description and keywords for every route. This will automatically be applied for you on page load and change.',
  redirectsHeader: 'Redirects',
  redirectsText: 'As applications evolve, routes change. If you want to maintain the authority already garnered from bots that index your page, it is best to assign a 301 redirect to the new location. Located in <code>router/301.json</code> you can define 301 redirects for your pages which will automatically be handled for you on page load.',
  webAppSupportHeader: 'Web App support',
  webAppSupportText: 'Vuetify SSR has support for native Web Applications on smart phones. Also known as progressive web apps, your websites can be saved on the homescreen of a device, allowing it to be usable offline and receive push notifications. For more information on Web App Manifest\'s, navigate to the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/Manifest). To see a live example, add the Vuetify documentation on your mobile device\'s homescreen.',
  toc: [
    {
      text: 'Overview',
      href: 'introduction'
    },
    {
      text: 'Structure',
      href: 'structure'
    },
    {
      text: 'Application',
      href: 'application'
    },
    {
      text: 'Routing',
      href: 'routing'
    },
    {
      text: 'State control',
      href: 'state-control'
    },
    {
      text: 'Meta data',
      href: 'meta-data'
    },
    {
      text: 'Redirects',
      href: 'redirects'
    },
    {
      text: 'Web App support',
      href: 'web-app-support'
    }
  ]
}
