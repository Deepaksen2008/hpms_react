import React from 'react';
import '../../Assets/style.css'
import {Row,Col,Button,Form,Card} from 'react-bootstrap';

const Personal_info = () => {
  return (
    <div>
    <Card style={{ width: '48rem' }}>
    <Card.Body>
     
      <Form>
    
      <Card.Text>
      <Row className="mb-3">
      <Form.Label className='info-head'>Title</Form.Label>
      <Form.Select aria-label="Default select example" style={{width:"97%", marginLeft:"2%"}}>
      
      <option value="1">Dr.</option>
      <option value="2">Mr.</option>
      <option value="3">Ms.</option>
    </Form.Select>
</Row>
      <Row className="mb-3">

     
    <Form.Group className="mb-3" controlId="formGridAddress1">
      <Form.Label className='info-head'>Name</Form.Label>
      <Form.Control placeholder="Messy" style={{fontSize:"15px"}}/>
    </Form.Group>

      

    <Form.Group className="mb-3" controlId="formGridAddress1">
      <Form.Label className='info-head'>Phone</Form.Label>
      <Form.Control placeholder="939393933" style={{fontSize:"15px"}}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formGridAddress2">
      <Form.Label className='info-head'>Email</Form.Label>
      <Form.Control type="email" placeholder="name@example.com" style={{fontSize:"15px"}}/>
    </Form.Group>

    
      <Form.Group as={Col} controlId="formGridCity">
        <Form.Label className='info-head'>City</Form.Label>
        <Form.Control type="text" placeholder="Bhopal" style={{fontSize:"15px"}}/>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridState">
        <Form.Label  className='info-head'>State</Form.Label>
        <Form.Select defaultValue="Choose...">
          <option>MadhyaPradesh</option>
          <option>UtterPradesh</option>
        </Form.Select>
      </Form.Group>

      <Form.Group controlId="formGridState">
      <Form.Label htmlFor="upload-photo" className='info-head'>Upload Image</Form.Label>
   
      <Form.Control type="file"
      id="upload-photo"
      name="photo"
      />
      
      </Form.Group>

      <Row className="actions d-flex" >
      
      <Col>
      <button  className="delete-btn" style={{width:"100%"}}>Delete</button>
      </Col>
      <Col>
      <button  className="save-btn" style={{width:"100%",marginLeft:"1.5rem"}}>Save Changes</button>
      </Col>
    </Row>
    </Row>

   

    
      </Card.Text>
      </Form>
      
    </Card.Body>
  </Card>
    </div>
  )
}

export default Personal_info
