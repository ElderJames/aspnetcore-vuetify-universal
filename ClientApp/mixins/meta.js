// Utilities
import { getLongId, findProduct } from '@/util/helpers'

export default {
  data: () => ({
    meta: {},
    _description: {},
    _keywords: {}
  }),

  computed: {
    title () {
      return this.meta.title
    },
    description () {
      return this.meta.description
    },
    keywords () {
      return this.meta.keywords
    }
  },

  watch: {
    $route () {
      this.setMeta()
    },
    meta: {
      deep: true,
      handler () {
        document.title = `${this.title} — Vuetify.js`
        this._description.setAttribute('content', this.description)
        this._keywords.setAttribute('content', this.keywords)
      }
    }
  },

  created () {
    if (process.env.VUE_ENV === 'client') return

    this.setMeta()

    this.$ssrContext.title = `${this.title} — Vuetify.js`
    this.$ssrContext.description = this.description
    this.$ssrContext.keywords = this.keywords
  },

  mounted () {
    this.bootstrapMeta()
  },

  methods: {
    bootstrapMeta () {
      if (typeof document === 'undefined') return

      this._title = document.title
      this._description = document.querySelector('meta[name="description"]')
      this._keywords = document.querySelector('meta[name="keywords"]')

      this.setMeta()
    },
    getProductMeta () {
      const longId = getLongId(this.$route.params.id)
      const product = findProduct(this.$store, longId)

      return {
        title: product.title,
        description: product.description,
        keywords: `vuetify store, ${product.title}`
      }
    },
    setMeta () {
      const path = this.$route.path.split('/').slice(2).join('/')
      const lang = this.$route.path.split('/')[1]
      const meta = this.$i18n.getLocaleMessage(lang).meta || {}

      if (this.$route.path.indexOf('product') > -1) {
        return (this.meta = this.getProductMeta())
      }

      this.meta = meta[path] || this.getFallbackMeta(path) || {}
    },
    getFallbackMeta (path) {
      const fallbackmeta = this.$i18n.getLocaleMessage('en').meta
      if (process.env.NODE_ENV === 'development') {
        console.warn('Falling back to english meta for ' + (path || '/'))
      }
      return fallbackmeta[path]
    }
  }
}
