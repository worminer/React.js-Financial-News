import alt from '../alt'
import CategoryActions from '../actions/CategoryActions'

class CategoryStore {
  constructor () {
    this.bindActions(CategoryActions)

    this.name = ''
    this.categoryCreated = false
  }

  onCreateCategorySuccess (category) {
    this.categoryCreated = true
  }

  onHandleNameChange (ev) {
    this.name = ev.target.value
  }
}

export default alt.createStore(CategoryStore)