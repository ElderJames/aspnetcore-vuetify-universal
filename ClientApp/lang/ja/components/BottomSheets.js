export default {
  header: 'Bottom sheet',
  headerText: 'Bottom sheet はスクリーンの下部からスライドするように修飾された `v-dialog` で `v-bottom-nav` と似ています。 ボトムナビゲーションコンポーネントは、ボタンと特定のアプリケーションレベルのアクション用ですが、 Bottom sheet にはなんでも含めることができます。',
  components: ['v-bottom-sheet'],
  examples: [{
    standard: {
      header: '基本的な表示',
      desc: 'ここではアプリケーションに存在する可能性のあるアクションの一覧の例を示します。'
    },
    inset: {
      header: '差し込み Bottom sheet',
      desc: 'Bottom sheet はデスクトップの最大の横幅の70%に縮小して、差し込むことができます。これは `width` prop を使用することで手動で更に縮小することができます。また、Vuetify のブレークポイントオブジェクトを使用した動的なクラスバインディングの方法を合わせて紹介します。'
    }
  }],
  props: {
    disabled: 'ダイアログを開けなくします。',
    inset: 'ダイアログの最大の横幅を 70% に縮小します。',
    lazy: 'Mixins.Bootable.props.lazy',
    maxWidth: 'シートのコンテナの最大の横幅を指定します。'
  }
}
