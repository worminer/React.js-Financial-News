import React from 'react'
import ArticleStore from '../../stores/ArticleStore'
import ArticleActions from '../../actions/ArticleActions'
import ShowMessage from './../sub-components/ShowPopupMessage'

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
    return null
  }
}
