import alt from '../alt'

class ArticleActions {
  constructor () {
    this.generateActions(
      'createArticleSuccess',
      'handleTitleChange',
      'handleDescriptionChange',
      'handleImageChange',
      'handleCategoryChange',
      'getAllCategoriesSuccess',
      'getLatestNewsSuccess',
      'getByIdSuccess'
    )
  }

  createArticle (article) {
    let request = {
      url: `/api/articles/add`,
      method: 'post',
      contentType: 'application/json',
      data: JSON.stringify(article)
    }

    $.ajax(request).done(data => {
      this.createArticleSuccess(data)
    })

    return true
  }

  getAllCategories () {
    let request = {
      url: '/api/categories/all',
      method: 'GET',
      contentType: 'application/json'
    }

    $.ajax(request).done(data => {
      this.getAllCategoriesSuccess(data)
    })

    return true
  }

  getLatestNews () {
    let request = {
      url: '/api/articles/latest',
      method: 'GET',
      contentType: 'application/json'
    }

    $.ajax(request).done(data => {
      this.getLatestNewsSuccess(data)
    })

    return true
  }

  getById (id) {
    let request = {
      url: `/api/articles/${id}`,
      method: 'GET',
      contentType: 'application/json'
    }

    $.ajax(request).done(data => {
      this.getByIdSuccess(data)
    })

    return true
  }
}

export default alt.createActions(ArticleActions)
