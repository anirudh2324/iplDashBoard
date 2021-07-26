import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {isLoading: true, blogsData: {}}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const IplData = await response.json()
    const formattedData = IplData.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({blogsData: formattedData, isLoading: false})
  }

  render() {
    const {isLoading, blogsData} = this.state
    return (
      <div className="home-container">
        <div className="card-container">
          <img
            className="img"
            alt="logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <div className="team-card">
          {isLoading ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            blogsData.map(item => <TeamCard blogsData={item} key={item.id} />)
          )}
        </div>
      </div>
    )
  }
}

export default Home
