export default {
  header: 'Alert',
  headerText: '`v-alert` コンポーネントは重要な情報をユーザーに伝える際に使用します。 **success**、**info**、**warning** そして **error** の4つのバリエーションを備えています。 これらにはそれぞれ異なるアクションを表すデフォルトのアイコンが設定されており、必要に応じて変更が可能です。',
  components: ['v-alert'],
  examples: [{
    contextual: {
      header: 'Contextual'
    },
    closable: {
      header: '閉じるボタン付きアラート',
      desc: '`v-model` を使うことで、アラートの状態をコントロールすることができます。 v-model を使用せず、アラートを表示したいだけであれば、シンプルに `value` を使用することができます。'
    },
    icon: {
      header: 'カスタムアイコン / アイコンの削除',
      desc: 'カスタムアイコンの設定や削除は簡単に行うことができます。'
    },
    transition: {
      header: 'トランジション設定',
      desc: 'Alert の表示/非表示の際にカスタムトランジションを適用することができます。'
    },
    outline: {
      header: 'アウトライン',
      desc: 'アウトラインアラートは、適用されている色から引き継いだ色の境界線を表示します。'
    }
  }],
  props: {
    dismissible: 'アラートを閉じることができるかどうかを設定します。',
    icon: 'アイコンを指定します。',
    outline: '境界線を持つアラートを表示します。',
    type: '**success**、**info**、**warning** もしくは **error** のアラートであることを設定します。コンテキストカラーと予め設定されたアイコンが使用されます。'
  }
}
