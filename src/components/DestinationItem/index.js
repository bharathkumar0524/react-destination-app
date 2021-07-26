// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationsItem} = props
  const {id, name, imgUrl} = destinationsItem

  return (
    <li className="card">
      <img src={imgUrl} alt={`img-${id}`} className="img" />
      <h1 className="title">{name}</h1>
    </li>
  )
}
export default DestinationItem
