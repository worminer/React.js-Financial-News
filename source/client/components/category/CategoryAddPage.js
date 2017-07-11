import React from 'react'
import CategoryStore from '../../stores/CategoryStore'
import CategoryActions from '../../actions/CategoryActions'
import toastr from 'toastr'

export default class CategoryAddPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = CategoryStore.getState()

    this.onChange = this.onChange.bind(this)
    this.handleCategoryCreation = this.handleCategoryCreation.bind(this)
  }

  onChange (state) {
    this.setState(state)
    if (state.categoryCreated) {
      this.handleCategoryCreation()
    }
  }

  componentDidMount () {
    CategoryStore.listen(this.onChange)
  }

  componentWillUnmount () {
    CategoryStore.unlisten(this.onChange)
  }

  handleSubmit (ev) {
    ev.preventDefault()

    let name = this.state.name
    if (name) {
      CategoryActions.createCategory(name)
    }
  }

  handleCategoryCreation (category) {
    console.log('create')
    toastr.success(`Category '${this.state.name}' created!`)
    this.props.history.push('/categories/all')
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} >
        <div className='form-group'>
          <label className='control-label'>Name</label>
          <input
            type='text'
            name='name'
            required
            onChange={CategoryActions.handleNameChange}
            value={this.state.name} />
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    )
  }
}
