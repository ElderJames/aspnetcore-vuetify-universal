export default {
  header: 'Badge',
  headerText: '`v-badge` コンポーネントは、あらゆる種類のコンテンツをラップして、ユーザに情報をハイライトしたり、指定の要素に対して注意を引いたりすることができます。',
  components: ['v-badge'],
  examples: [{
    character: {
      header: 'Character',
      desc: 'あらゆる要素とともに Badge を使用することができます。'
    },
    overlap: {
      header: '重ね合わせ',
      desc: '`overlap` を使用すると、自身の内容に重なるように配置されます。'
    },
    inline: {
      header: 'インライン',
      desc: 'Badge はテキスト内部に配置することができます。'
    },
    icon: {
      header: 'アイコン',
      desc: '現在サポートされているアイコンセットのすべてを使用することができます。'
    },
    visibility: {
      header: '表示',
      desc: 'Badge の表示は `v-model` を介して制御することができます。'
    }
  }],
  props: {
    bottom: 'Mixins.Positionable.props.bottom',
    left: 'Mixins.Positionable.props.left',
    transition: 'Mixins.Transitionable.props.transition'
  }
}
