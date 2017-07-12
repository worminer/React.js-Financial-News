import React from 'react'
import ArticleStore from '../../stores/ArticleStore'
import ArticleActions from '../../actions/ArticleActions'
import ShowMessage from './../sub-components/ShowPopupMessage'

export default class CreateArticlePage extends React.Component {
  constructor (props) {
    super(props)

    this.state = ArticleStore.getState()

    this.onChange = this.onChange.bind(this)
    this.handleArticleCreation = this.handleArticleCreation.bind(this)
  }

  onChange (state) {
    this.setState(state)
    if (state.articleCreated) {
      this.handleArticleCreation()
    }
  }

  componentDidMount () {
    console.log('mount')
    ArticleStore.listen(this.onChange)
    ArticleActions.getAllCategories()
  }

  componentWillUnmount () {
    ArticleStore.unlisten(this.onChange)
  }

  handleSubmit (ev) {
    ev.preventDefault()

    let title = this.state.title
    if (!title) {
      return
    }

    if (!this.state.category) {
      return
    }

    let data = {
      title: this.state.title,
      description: this.state.description,
      category: this.state.category,
      image: this.state.image,
      creator: '5964d94c52490d1f60fc9494'
    }

    ArticleActions.createArticle(data)
  }

  handleArticleCreation (article) {
    ShowMessage.success(`Article '${this.state.title}' created!`)
    this.props.history.push('/articles/all')
  }

  render () {
    let categories = this.state.categories.map(c => {
      return <option key={c._id} value={c._id}>{c.name}</option>
    })

    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className='form-group'>
          <label className='control-label'>Title</label>
          <input type='text'
            className='form-control'
            value={this.state.title}
            onChange={ArticleActions.handleTitleChange} />
        </div>
        <div className='form-group'>
          <label className='control-label'>Description</label>
          <textarea
            className='form-control'
            rows='5'
            value={this.state.description}
            onChange={ArticleActions.handleDescriptionChange} />
        </div>
        <div className='form-group'>
          <label className='control-label'>Category</label>
          <select
            className='form-control'
            value={this.state.category}
            onChange={ArticleActions.handleCategoryChange}
            required >
            <option disabled>Select a category</option>
            {categories}
          </select>
        </div>
        <div className='form-group'>
          <label className='control-label'>Image</label>
          <input type='url'
            className='form-control'
            value={this.state.image}
            onChange={ArticleActions.handleImageChange} />
        </div>
        <button type='submit' className='btn btn-primary'>Submit
        </button>
      </form>
    )
  }
}
