const Card = () => {
    return(
       <Card
  color="warning"
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Card image"
    src="https://www.facebook.com/gatitos.qctd/"
  />
  <CardBody>
    <CardTitle tag="h5">
      Gatitos
    </CardTitle>
    <CardText>
    Un gato te puede ofrecer momentos únicos de cariño y diversión, aunque también es una tarea que implica responsabilidad y tiempo. Éste es el primer aspecto que debes valorar adecuadamente si piensas en la adopción de gatos o gatitos bebés.
    </CardText>
    <Button>
      Púchale
    </Button>
  </CardBody>
</Card> 
    )
}
export default Card