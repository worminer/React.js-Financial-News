import React from 'react'

import UserRatedArticlesPanel from './UserRatedArticlesPanel'

export default class UserVotedArticles extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      showRatedArticlesPanel: false
    }
  }

  toggleRatedArticles () {
    this.setState(prevState => ({
      showRatedArticlesPanel: !prevState.showRatedArticlesPanel
    }))
  }

  render () {
    return (
      <div className='container profile-container'>
        <div className='profile-stats clearfix'>
          <ul>
            <li>
              <span className='stats-number'>{this.props.votes
                ? this.props.votes.length
                : 0 }</span>Votes
            </li>
          </ul>
        </div>
        <div className='pull-right btn-group'>
          <a className='btn btn-primary'
            onClick={this.toggleRatedArticles.bind(this)}>
            { this.state.showRatedArticlesPanel ? 'Hide' : 'Rated News' }
          </a>
        </div>
        { this.state.showRatedArticlessPanel
        ? <UserRatedArticlesPanel articles={this.props.votes} /> : null }
      </div>
    )
  }
}
