import React, { useState } from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [file, setFile] = useState(null);
  const [results, setResults] = useState(null);  // New state for holding results

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleRemoveFile = () => {
    setFile(null);
    setResults(null);  // Clear results when the file is removed
  };

  const handleProcessing = async () => {
    try {
    fetch('./response.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    // .then(data => {
    //     // const city = data.demographicInfo.city;
    //     // console.log('City:', city);
    //     console.log(data);
    // })
    .catch(error => console.error('Error fetching JSON:', error));
      // if (!file) {
      //   console.error('No file selected');
      //   return;
      // }
      
      // const formData = new FormData();
      // formData.append('file', file);
      // setResults("{dale}");

      // const response = await fetch('http://localhost:3001/upload', {
      //   method: 'POST',
      //   body: formData
      // });
  
      // if (!response.ok) {
      //   throw new Error('Failed to process the file');
      // }
      
      // const data = await response.json();
  
      // console.log('Extracted text:', data.text);
      // setResults(data.text);  
  
      // alert('File processing completed!');
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while processing the file');
    }
  };  

  // const fetchingFile = () => {

  //   return 
  // }

  return (
    <Container style={{ marginTop: '120px' }}>
      <Row>
        <Col md={6} className="text-left">
        <img alt="drivers license" src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Chase_logo_2007.svg" width="200" />
          <br />
          <br />
          <h3 className="text-secondary">Open Account</h3>
          <h5 className="text-dark">Step 1: Upload a valid document</h5>
          <Form>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control type="file" onChange={handleFileChange} />
            </Form.Group>
          </Form>
          {file && (
            <div className="mt-3 image-container">
              <img src={URL.createObjectURL(file)} alt="Preview" style={{ width: '500px' }} />
            </div>
          )}
          {file && (
            <div className="mt-3">
              <small className="small-text">File Size: {(file.size / 1024).toFixed(2)} KB</small>
            </div>
          )}
          {file && (
            <div className="mt-3">
              <Button variant="primary" onClick={handleProcessing} style={{ marginRight: '10px' }}>
                Process File
              </Button>
              <Button variant="light" onClick={handleRemoveFile}>
                Remove
              </Button>
            </div>
          )}
        </Col>
        <Col md={6}>
          {results && (
            <div className="results">
              <h4>Processing Results</h4>
              {/* <pre>{results}</pre> */}

              

              <h5>Basic Info</h5>

              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="First Name" placeholder="Enter First Name" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="Last Name" placeholder="Enter Last Name" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridDateOfBirth">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="Date of Birth" placeholder="Enter Date of Birth" />
                  </Form.Group>
                </Row>

                <h5>Demographic Info</h5>

                <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridAddress1">
                    <Form.Label>Address Line 1</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridAddress2">
                  <Form.Label>Address Line 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>Alabama</option>
                      <option>Alaska</option>
                      <option>Arizona</option>
                      <option>Arkansas</option>
                      <option>California</option>
                      <option>Colorado</option>
                      <option>Connecticut</option>
                      <option>Delaware</option>
                      <option>Florida</option>
                      <option>Georgia</option>
                      <option>Hawaii</option>
                      <option>Idaho</option>
                      <option>Illinois</option>
                      <option>Indiana</option>
                      <option>Iowa</option>
                      <option>Kansas</option>
                      <option>Kentucky</option>
                      <option>Louisiana</option>
                      <option>Maine</option>
                      <option>Maryland</option>
                      <option>Massachusetts</option>
                      <option>Michigan</option>
                      <option>Minnesota</option>
                      <option>Mississippi</option>
                      <option>Missouri</option>
                      <option>Montana</option>
                      <option>Nebraska</option>
                      <option>Nevada</option>
                      <option>New Hampshire</option>
                      <option>New Jersey</option>
                      <option>New Mexico</option>
                      <option>New York</option>
                      <option>North Carolina</option>
                      <option>North Dakota</option>
                      <option>Ohio</option>
                      <option>Oklahoma</option>
                      <option>Oregon</option>
                      <option>Pennsylvania</option>
                      <option>Rhode Island</option>
                      <option>South Carolina</option>
                      <option>South Dakota</option>
                      <option>Tennessee</option>
                      <option>Texas</option>
                      <option>Utah</option>
                      <option>Vermont</option>
                      <option>Virginia</option>
                      <option>Washington</option>
                      <option>West Virginia</option>
                      <option>Wisconsin</option>
                      <option>Wyoming</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zipcode</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>

              {/* <form className='formData'>
                  <Row className='p-1'>
                  <h5>Basic Info</h5>

                  <Row className='p-1'>
                    <Col className='p-1'>
                    <label>City</label>
                    <input type="text" placeholder="City"/>
                    </Col>
                    <Col className='p-1'>
                    <label>State</label>
                    <input type="text" placeholder="State"/>
                    </Col>
                    <Col className='p-1'>
                    <label>Zip Code</label>
                    <input type="text" placeholder="Zip Code"/>
                    </Col>
                  </Row>
              
                {/* <input type="text" value="" */}
              {/* </form> */}

              <Row className='p-1'>
                <h5 className="text-dark">Step 2: Additional info</h5>
                <input style={{ width: '250px' }} type="text" placeholder="SSN"/>
              </Row>
            </div>
            
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
