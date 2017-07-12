import React from 'react'
import ArticleStore from '../../stores/ArticleStore'
import ArticleActions from '../../actions/ArticleActions'
import ShowMessage from './../sub-components/ShowPopupMessage'
import ArtiCleCard from './ArticleCard'

export default class ArticleDetailsPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = ArticleStore.getState()
    this.onChange = this.onChange.bind(this)
  }

  onChange (state) {
    this.setState(state)
    if (state.articleCreated) {
      this.handleArticleCreation()
    }
  }

  componentDidMount () {
    ArticleStore.listen(this.onChange)
    ArticleActions.getById(this.props.params.id)
  }

  componentWillUnmount () {
    ArticleStore.unlisten(this.onChange)
  }

  render () {
    console.log(this.state.article.creator)
    return (
      <ArtiCleCard article={this.state.article}
        comments={this.state.comments}
        creator={this.state.creator}
        category={this.state.category} />
    )
  }
}
