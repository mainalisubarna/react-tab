import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const CardItem = ({products,handleEditButton,handleDeleteButton}) => {
  return (
    <>
      <div className="d-flex flex-wrap justify-content-evenly m-1">
        {products.map((prod) => {
          return (
            <Card key={prod.id} style={{ width: "18rem" }}>
              <Card.Img variant="top" className='p-1' style={{ width: 280, height: 200 }} src={prod.images[0]} />
              <Card.Body>
                <Card.Title>{prod.title}</Card.Title>
                <Card.Text>{prod.description.length > 62 ? prod.description.slice(0, 62) + '...' : prod.description}</Card.Text>
                <Button variant="primary" className='btn btn-sm m-1' onClick={(e)=>handleEditButton(e,prod)}>Edit Button</Button>
                <Button variant="danger" className='btn btn-sm' onClick={(e)=>handleDeleteButton(e,prod)}>Delete Button</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  )
}

export default CardItem;