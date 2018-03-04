export default {
  header: 'Chip',
  headerText: '`v-chip` コンポーネントは小さな情報の断片を伝えるために使用されます。`close` プロパティを使用すると、Chip はインタラクティブとなり、ユーザーの入力を受け付けられるようになります。',
  components: ['v-chip'],
  examples: [{
    default: {
      header: 'デフォルト',
      desc: 'Chip には主な、基本型、アイコン付き、ポートレート付き、閉じるボタン付きの4種類が用意されています。',
      uninverted: true
    },
    colored: {
      header: '色付き',
      desc: 'マテリアルデザインパレットのあらゆる色を使用して Chip に色を付けることができます。'
    },
    icon: {
      header: 'アイコン',
      desc: 'Chip にはテキストのほか、Material Icons フォントに含まれるアイコンを使用することができます。'
    },
    outline: {
      header: 'アウトライン',
      desc: 'アウトライン Chip は指定されているテキストの色を元にボーダーカラーが適用されます。'
    },
    label: {
      header: 'ラベル',
      desc: 'ラベル Chip は `v-card` の border-radius を使用します。'
    },
    closable: {
      header: '閉じるボタン付きラベル',
      desc: '閉じるボタン付きラベルは v-model によって制御可能です。 Chip が閉じられたタイミングを検知したい場合は input イベントを使用してください。',
      uninverted: true
    },
    inSelects: {
      header: 'Select との組み合わせ',
      desc: 'Select では、選択された項目を表示するために Chip を使用することができます。',
      uninverted: true
    }
  }],
  props: {
    close: '閉じるボタンを追加します。',
    disabled: 'Chip を無効化し、選択できないようにします。',
    label: '丸みを削除します。',
    outline: '背景を削除しテキストカラーとボーダーカラーを適用します。',
    selected: 'Chip が選択された状態の色を適用します。 主に `v-select` でハイライト表示するために使用します。',
    small: 'Chip のサイズを縮小します。'
  }
}
