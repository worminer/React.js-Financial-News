import alt from '../alt'
import ArticleActions from '../actions/ArticleActions'

class ArticleStore {
  constructor () {
    this.bindActions(ArticleActions)

    this.title = ''
    this.category = ''
    this.creator = ''
    this.image = ''
    this.description = ''
    this.articleCreated = false
    this.categories = []
  }

  onCreateArticleSuccess () {
    this.articleCreated = true
  }

  onHandleTitleChange (ev) {
    this.title = ev.target.value
  }

  onHandleDescriptionChange (ev) {
    this.description = ev.target.value
  }

  onHandleImageChange (ev) {
    this.image = ev.target.value
  }

  onHandleCategoryChange (ev) {
    this.category = ev.target.value
  }

  onGetAllCategoriesSuccess (categories) {
    this.categories = categories
  }
}

export default alt.createStore(ArticleStore)
