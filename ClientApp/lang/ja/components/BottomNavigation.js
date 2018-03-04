export default {
  header: 'Bottom nav',
  headerText: '`v-bottom-nav` はサイドバーの代わりに使用することができます。主にモバイルで使用され、アイコンとテキスト、そしてシフトの2種類が用意されています。',
  components: ['v-bottom-nav'],
  examples: [{
    iconsAndText: {
      header: 'アイコンとテキスト',
      desc: 'Bottom nav は `vue-router` と一緒に使われることを想定していますが、`active.sync` を使用することでボタンのアクティブ状態をプログラム的に制御することができます。ボタンの値を変更するには `value` 属性を使用します。'
    },
    colorAndShift: {
      header: 'カラーとシフト',
      desc: '色の付いた背景の場合、 `light` を指定することが推奨されます。`shift` を指定すると非アクティブなボタンのテキストが非表示になります。`v-btn` のテキストは `<span>` タグでラップしておくことが推奨されます。'
    },
    toggle: {
      header: '切り替え',
      desc: '他の Vuetify のコンポーネントと同じように、`v-model` を使用して表示するか否かを制御することができます。'
    }
  }],
  props: {
    active: '現在アクティブなボタンの値を保持します。特に値が設定されない場合は、index の値が代わりに使用されます。この prop は **.sync** 修飾子をサポートします。',
    absolute: 'Mixins.Positionable.props.absolute',
    fixed: 'Mixins.Positionable.props.fixed'
  }
}
