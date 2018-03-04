export default {
  header: 'Директива Ripple',
  headerText: 'Директива `v-ripple` используется для отображения действий пользователя. Он может применяться к любому элементу. Многочисленные компоненты имеют встроенную директиву ripple, такую как `v-btn`, `v-tabs-item` и другие.',
  components: ['v-ripple'],
  examples: [{
    buttons: {
      header: 'По умолчанию',
      desc: 'Кнопки по умолчанию имеют ripple. Можно удалить с помощью свойств `:ripple ="false`.',
      uninverted: true
    },
    customColor: {
      header: 'Пользовательский цвет',
      desc: 'Используя класс-помощник, вы можете изменить цвет пульсации.',
      uninverted: true
    },
    tabs: {
      header: 'Вкладки',
      desc: 'По умолчанию вкладки отключены. Это можно включить с помощью **ripple** prop.',
      uninverted: true
    },
    navigationDrawers: {
      header: 'Панель навигации',
      desc: 'По умолчанию у списка элементов пульсация отключена. Можно активировать с помощью **ripple**',
      uninverted: true
    },
    toolbars: {
      header: 'Панели инструментов',
      desc: 'По умолчанию у панели инструментов пульсация отключена. Можно активировать с помощью **ripple**.',
      uninverted: true
    },
    expansionPanels: {
      header: 'Панель расширения',
      desc: 'По умолчанию у панели расширения пульсация отключена. Можно активировать с помощью **ripple**.',
      uninverted: true
    },
    customRipple: {
      header: 'Пользовательский элемент',
      desc: 'Добавьте эффект пульсации в любой пользовательский элемент. Это можно сделать с помощью HTML-атрибута `v-ripple`.',
      uninverted: true
    },
    htmlElement: {
      header: 'Стандартный HTML-элемент',
      desc: 'Добавьте эффект пульсации в стандартный элемент HTML. Это можно активировать с помощью HTML-атрибута `v-ripple`.',
      uninverted: true
    }
  }],
  props: [{
    'v-ripple': [
      {
        name: 'class',
        type: 'String',
        default: 'undefined',
        desc: 'Применяет пользовательский класс к пульсации, используемый для изменения цвета'
      },
      {
        name: 'center',
        type: 'Boolean',
        default: 'False',
        desc: 'Сила пульсации, исходящая от центра цели'
      }
    ]
  }]
}
