export default {
  header: 'Avatar',
  headerText: '`v-avatar` コンポーネントは、プロフィール画像のようなレスポンシブな画像のサイズと角丸の制御に使用します。',
  components: ['v-avatar'],
  examples: [{
    standard: {
      header: '基本的な表示',
      desc: 'Avatar は様々なシチュエーションのために動的にサイズを変更し拡大することができます。 **tile** 変数を使用することで、角丸処理を使用せず表示することができます。'
    },
    advanced: {
      header: '高度な使用方法',
      desc: 'Avatar と他のコンポーネントを組み合わせることで、革新的で美しいユーザーインターフェイスをすぐに構築することができます。'
    },
    iconAndText: {
      header: 'アイコンとテキスト',
      desc: 'Avatar は `v-icon` コンポーネント、もしくはテキストを受け付けることができます。これらの機能を組み合わせることで独創的なUIを作成することができます。'
    }
  }]
}
