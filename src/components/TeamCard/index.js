import './index.css'

const TeamCard = props => {
  const {blogsData} = props
  const {teamImageUrl, name} = blogsData

  return (
    <li className="list-container">
      <div className="team-card-container">
        <div>
          <img className="team-card-image" src={teamImageUrl} alt={name} />
        </div>
        <div>
          <p className="team-name">{name}</p>
        </div>
      </div>
    </li>
  )
}

export default TeamCard
