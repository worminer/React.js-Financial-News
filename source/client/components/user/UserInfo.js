import React from 'react'

export default class UserProfileInfo extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let roles
    if (this.props.roles) {
      roles = this.props.roles.map((role, index) => {
        return (
          <h4 key={ index } className='lead'>
            <strong>{ role }</strong>
          </h4>
        )
      })
    }
    return (
      <div className='row flipInX jumbotron'>
        <div>
          <h2>User Profile</h2>
        </div>
        <div className="col-md-4">
          <div className='profile-img'>
            <img src={this.props.picture}/>
          </div>
        </div>
        <div className="col-md-7">
          <div className="col-md-10 col-md-offset-1">
            <table className="table table-striped table-hover ">
              <tbody>
              <tr>
                <th>Username</th>
                <td>{this.props.username}</td>
              </tr>
              <tr>
                <th>Roles</th>
                <td>{this.props.roles.join(', ')}</td>
              </tr>
              <tr>
                <th>First Name</th>
                <td>{this.props.firstName}</td>
              </tr>
              <tr>
                <th>Last Name</th>
                <td>{this.props.lastName}</td>
              </tr>
              <tr>
                <th>Age</th>
                <td>{this.props.age}</td>
              </tr>
              <tr>
                <th>Sex</th>
                <td>{this.props.gender}</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className='profile-info clearfix'>
            <h2><strong>{ this.props.name }</strong></h2>
            <h4 className='lead'>Roles:</h4>
            { roles }
            <p>{ this.props.information }</p>
          </div>
        </div>
      </div>
    )
  }
}
