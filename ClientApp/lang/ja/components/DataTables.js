export default {
  header: 'Data table',
  headerText: '`v-data-table` コンポーネントは表形式のデータを表示するために使われます。ソート、検索、ページネーション、インライン編集、ヘッダーツールチップ、行の選択 などの機能を含んでいます。',
  components: ['v-data-table', 'v-edit-dialog'],
  examples: [{
    standard: {
      header: '基本的な使い方',
      desc: '基本的な Data table は付加的な機能を含まないデータを格納します。 `hide-actions` prop を使用することで、ページネーションを制御するテーブルアクションの表示を外すことができます。'
    },
    noData: {
      header: 'スロット: no-data',
      desc: '`no-data` スロットはデータが無い場合に表示する HTML を設定することができます。'
    },
    headers: {
      header: 'スロット: items と headers',
      desc: '`items` と `headers` スロットは <kbd>td/th</kbd> タグを受け付けることができます。行の全体を制御したい場合は、 <kbd>tr</kbd> を受け付けることができます。'
    },
    headerCell: {
      header: 'スロット: headerCell',
      desc: 'ヘッダーのセルごとに共通のマークアップやエフェクトを適用したい場合は、`headerCell` スロットを使用することができます。この例では Tooltip をヘッダーごとに適用しています。'
    },
    progress: {
      header: 'スロット: progress',
      desc: '`progress` スロットは、Data Table のローディング状態の表示をカスタマイズする際に使用します。デフォルトでは `indeterminate` が設定された `v-progress-linear` が使用されます。'
    },
    footer: {
      header: 'スロット: footer',
      desc: '`footer` スロットは、例えばカラムのフィルタや検索など、テーブルに拡張機能を持たせたい場合に使用します。'
    },
    expand: {
      header: 'スロット: expand',
      desc: '`v-data-table` コンポーネントは `expand` スロットを使用して行の折りたたみを可能にします。`expand` prop を使用して他の行をクリックした際に行を閉じる動作を止めることができます。'
    },
    pageText: {
      header: 'スロット: page-text',
      desc: '`page-text` スロットを利用すると、ページネーションに使用されるテキストを変更することができます。'
    },
    select: {
      header: '選択可能な行',
      desc: '選択可能な行を使用することで、特定の行及びすべての行に対してアクションを実行することができます。'
    },
    search: {
      header: 'no-results スロットを使用した検索',
      desc: 'Data table ではデータをフィルタリングするために `search` prop が用意されています'
    },
    paginate: {
      header: '外部ページネーション',
      desc: '`pagination` prop を使用することで外部からページネーションを制御できます。 使用するには `.sync` modifier を適用する必要があります。'
    },
    sort: {
      header: '外部ソート',
      desc: '`pagination` prop を使用することで外部からソートも制御できます。 使用するには `.sync` modifier を適用する必要があります。 prop でデフォルトでソートに使用するカラムを設定することもできます。'
    },
    server: {
      header: 'サーバーサイドでのページネーションとソート',
      desc: 'バックエンドから情報を読み込んでおり、結果を表示する前にページネーションとソートを適用する必要がある場合には、 `total-items` prop を使用することができます。 この prop を使用すると、標準のページネーションとソートは無効化されるため、変化を検知するには代わりに `pagination` prop を使用する必要があります。 `loading` prop を使用するとデータを取得している間にプログレスバーを表示することができます。'
    },
    headerless: {
      header: 'ヘッダー無しテーブル',
      desc: '`hide-headers` prop を設定するとヘッダーなしのテーブルを作成することができます。'
    },
    editdialog: {
      header: 'インライン編集',
      desc: '`v-edit-dialog` コンポーネントは Data table 内部でインライン編集する際に使用します。'
    },
    crud: {
      header: 'CRUD アクション',
      desc: '各行を編集するために `v-dialog` コンポーネントを使用した、CRUD アクション付き Data table のサンプルです。'
    }
  }],
  props: {
    'v-edit-dialog': {
      cancelText: '**large** prop を使用した際に表示されるキャンセルボタンのデフォルトテキストを設定します。',
      lazy: 'Mixins.Bootable.props.lazy',
      large: 'ダイアログの送信ボタンとキャンセルボタンに適用されます。',
      saveText: '**large** prop を使用した際に表示される保存ボタンのデフォルトテキストを設定します。',
      transition: 'Mixins.Transitionable.props.transition'
    },
    'v-data-table': {
      headerText: 'ヘッダーとなるテキストを設定します。',
      headers: 'ヘッダーのカラムとなる配列のオブジェクトを設定します。 全プロパティの定義については下記の例を参照してください。',
      hideHeaders: 'ヘッダーを非表示にします。'
    }
  },
  scopedSlots: {
    'v-data-table': {
      headerCell: 'ヘッダーのセルをカスタマイズするためのスロットです',
      headers: 'ヘッダー全体をカスタマイズするためのスロットです'
    }
  }
}
