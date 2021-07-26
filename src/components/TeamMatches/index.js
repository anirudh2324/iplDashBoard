import {Component} from 'react'
import './index.css'

class TeamMatches extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)
  }

  render() {
    return (
      <div>
        <h1>Team Matcs</h1>
      </div>
    )
  }
}
export default TeamMatches
