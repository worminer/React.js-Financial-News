import React from 'react'
import {Link} from 'react-router'
import Helpers from '../../utilities/Helpers'

class ArticleCard extends React.Component {
  render () {
    return (
      <div className='container'>
        <div className='well'>
          <div className='media'>
            <img className='media-object pull-left' src={this.props.article.image} />
            <div className='media-body'>
              <h4 className='media-heading'>{this.props.article.title}</h4>
              <p className='text-right'><Link to={`/user/profile/${this.props.creator._id}`}>
                {this.props.creator.username}</Link></p>
              <p>{this.props.article.description}</p>
              <ul className='list-inline list-unstyled'>
                <li><span><i className='glyphicon glyphicon-calendar' />
                  {Helpers.formatDate(this.props.article.dateCreated)}</span></li>
                <li>|</li>
                <span><i className='glyphicon glyphicon-comment' /> {this.props.comments.length} comments</span>
                <li>|</li>
                <li>
                  <span className='glyphicon glyphicon-thumbs-up' /><span> {this.props.article.likes}</span>
                </li>
                <li>|</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ArticleCard
