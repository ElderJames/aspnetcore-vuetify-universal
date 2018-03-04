export default {
  header: 'Data iterator',
  headerText: '`v-data-iterator` コンポーネントはデータを表示するために使用され、`v-data-table` コンポーネントと主要な機能を共有します。ソート、検索、ページネーション、選択の機能を含みます。',
  components: ['v-data-iterator'],
  examples: [{
    simple: {
      header: 'シンプルな用法',
      desc: '`v-data-iterator` コンポーネントはデータをどのように表示するか細かくカスタマイズすることができます。この例では、カードとグリッドリストを使用しています。項目のラッパー要素がどのような見た目にするかを決定するため、`content-tag` prop (加えて `content-class` と `content-props`) を使用できます。'
    }
  }],
  props: {
    contentClass: '項目のラッパー要素にカスタムクラスを適用します。',
    contentProps: '項目のラッパー要素にカスタムPropを適用します。',
    contentTag: '項目のラッパー要素に使用するタグを決定します。'
  }
}
