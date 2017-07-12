import alt from '../alt'

class ArticleAddActions {
  constructor () {
    this.generateActions(
      'handleNameChange',
      'handleDescriptionChange',
      'handleGenresChange',
      'nameValidationFail',
      'genresValidationFail',
      'addMovieSuccess',
      'addMovieFail'
    )
  }

  addArticle (data) {
    let request = {
      url: '/api/news/add',
      method: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json'
    }
    $.ajax(request)
      .done(() => this.addArticleSuccess())
      .fail((err) => this.addArticleFail(err))

    return true
  }
}

export default alt.createActions(ArticleAddActions)
