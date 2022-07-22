import { Card, CardBody, CardLink, CardTitle, 
  ListGroupItem, CardText, ListGroup } from "reactstrap"

const UserCard = (props)=> {
  const {  name, gender, dob, picture } = props.cardData

  const colorMap = {
    female: 'bg-secondary',
    male: 'bg-primary'
  }
  return(
    
<div className="col">
<Card
style={{
  width: '18rem'
}}
>
<img
  alt="Card image"
  src={picture.medium}
/>

<ListGroup flush>
  <ListGroupItem> {name.first} {name.last} </ListGroupItem>
  <ListGroupItem className={colorMap[gender]}> {gender} </ListGroupItem>
  <ListGroupItem> {dob.age} </ListGroupItem>
</ListGroup>
</Card>
</div>




  )
}


export default UserCard
