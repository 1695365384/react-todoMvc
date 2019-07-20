import React from 'react'
import Headers from './component/Headers'
import Main from './component/Main'
import Info from './component/Info'
import Footer from './component/Footer'

export default class App extends React.Component {
  state = {
    list: this.props.store.getState().todos,
  }
  componentDidMount() {
    this.props.store.subscribe(() => {
      this.setState({
        list: this.props.store.getState().todos,
      })
    })
  }

  VisibilityFilter = active => {
    let filterList = this.props.store.getState().todos
    switch (active) {
      case '':
        return this.setState({
          list: filterList,
        })

      case 'active':
        return this.setState({
          list: filterList.filter(item => item.isCompleted),
        })

      case 'complated':
        return this.setState({
          list: filterList.filter(item => !item.isCompleted),
        })

      default:
        return filterList
    }
  }

  render() {
    return (
      <div>
        <section className="todoapp">
          <Headers />
          <Main list={this.state.list} />
          <Footer
            list={this.state.list}
            VisibilityFilter={this.VisibilityFilter}
          />
        </section>
        <Info />
      </div>
    )
  }
}
