import { Card, Row, Container, Col, Button } from 'react-bootstrap';


function Home() {
    return(
<div>
  <div style={{ position: "relative" }}>
    <img
      src="./images/computerondesk.png"
      alt="Computer on Desk"
      style={{ width: "100%", height: "500px", objectFit: "cover", display: "block" }}
    />
    <div style={{ maxWidth: "400px", position: "absolute", top: "40%", left: "25%", transform: "translate(-40%, -25%)" }}>
      <h1 style={{ fontSize: "45px", color: "#fff", padding: "10px 20px", borderRadius: "5px", textAlign: "left" }}>Let me build your dream site!</h1>
      <p style={{ fontSize: "20px", color: "#fff", padding: "10px 20px", borderRadius: "5px", textAlign: "left" }}>Hi, I am a full stack web developer specializing in the MERN stack.</p>
    </div>
  </div>
  <Container className="mt-5">
  <Row>
    <Col md={6}>
      <h1 className="text-left">My Projects.</h1>
    </Col>
    <Col md={6}>
      <p className="text-left">I'm Robert Obernier, a web developer with a passion for creating innovative online solutions. 
      My expertise spans various web development technologies, making me a versatile and creative developer in the 
      digital realm.</p>
    </Col>
  </Row>
</Container>
  <Container>
    <Row className="d-flex flex-wrap justify-content-center">
    <Card className="text-black mt-4 mx-3" style={{ border: "solid", borderWidth: "1px", maxWidth: "400px" }}>
  <Card.Img src="./images/dnd.png" alt="Card image" style={{ height: "400px", width: "auto" }} />
  <h4 className="pt-4" style={{ textAlign: "left" }}>DnD<Button style={{ float: "right", backgroundColor: "#1d3557" }}>View live site</Button></h4>
  <p style={{ border: "solid", borderWidth: "1px" }}></p>
  <span className="pt-2 pb-4" style={{ textAlign: "left" }}>One of my standout creations is
   a Dungeons and Dragons website that serves as a virtual character sheet. 
   It simplifies character management by allowing users to create and track their 
   characters while also offering features like automatic damage rolls and a virtual d20 dice. 
  </span>
</Card>

<Card className="text-black mt-4 mx-3" style={{ border: "solid", borderWidth: "1px", maxWidth: "400px" }}>
  <Card.Img src="./images/fitquest.png" alt="Card image" style={{ height: "400px", width: "auto" }} />
  <h4 className="pt-4" style={{ textAlign: "left" }}>Fit Quest<Button style={{ float: "right", backgroundColor: "#1d3557" }}>View live site</Button></h4>
  <p style={{ border: "solid", borderWidth: "1px" }}></p>
  <span className="pt-2 pb-4" style={{ textAlign: "left" }}>I've developed FitQuest, a fitness website
   that offers personalized workout plans and calorie recommendations based on user information like
    height, weight, age, and exercise habits. 

  </span>
</Card>

<Card className="text-black mt-4 mx-3" style={{ border: "solid", borderWidth: "1px", maxWidth: "400px" }}>
  <Card.Img src="./images/grims.png" alt="Card image" style={{ height: "400px", width: "auto" }} />
  <h4 className="pt-4" style={{ textAlign: "left" }}>G.R.I.M.S<Button style={{ float: "right", backgroundColor: "#1d3557" }}>View live site</Button></h4>
  <p style={{ border: "solid", borderWidth: "1px" }}></p>
  <span className="pt-2 pb-4" style={{ textAlign: "left" }}>G.R.I.M.S is a web-based inventory management 
  system that allows users to create, edit, and delete products. 
  This application is designed to be used by a small business owner who wants to keep track of their inventory.
  </span>
</Card>
    </Row>
  </Container>
  <div className="mt-5" style={{ position: "relative" }}>
    <img
      src="./images/products.jpg"
      alt="Computer on Desk"
      style={{ width: "100%", height: "500px", objectFit: "cover", display: "block" }}
    />
    <div style={{ maxWidth: "400px", position: "absolute", top: "30%", left: "25%", transform: "translate(-30%, -25%)" }}>
      <h1 style={{ fontSize: "50px", color: "#fff", padding: "10px 20px", borderRadius: "5px", textAlign: "left" }}>We provide services of the highest quality.</h1>
      <p style={{ fontSize: "20px", color: "#fff", padding: "10px 20px", borderRadius: "5px", textAlign: "left" }}>Our pricing listed below is highly competitive, using only the more modern technologies.</p>
    </div>
  </div>
  <Container className="mt-5">
  <Row>
    <Col md={6}>
      <h2 className="text-left">Shop our website building packages</h2>
    </Col>
    <Col md={6}>
      <p className="text-left">We at Byte Bridge Solutions offer a variety of services to help your company enter into the modern age. This includes Web Design, Computer Repair, and General Technical Support.</p>
    </Col>
  </Row>
</Container>
<Container>
    <Row className="d-flex flex-wrap justify-content-center">
    <Card className="text-black mt-4 mx-3" style={{ width: '18rem', height: '30rem' }}>
  <Card.Header className='pt-5' style={{ backgroundColor: "#CD7F32"}}></Card.Header>
  <Card.Body className="d-flex flex-column">
    <Card.Title className='mb-4'>Bronze Package</Card.Title>
    <Card.Text>
      <ul className='mb-5'>
        <li style={{ listStyle: "disc" }}>Feature 1</li>
        <li style={{ listStyle: "disc" }}>Feature 2</li>
        <li style={{ listStyle: "disc" }}>Feature 3</li>
        <li style={{ listStyle: "disc" }}>Feature 4</li>
        <li style={{ listStyle: "disc" }}>Feature 5</li>
        <li style={{ listStyle: "disc" }}>Feature 6</li>
        <li style={{ listStyle: "disc" }}>Feature 7</li>
      </ul>
      <h1>$199</h1>
    </Card.Text>
    <div className="mt-auto"> {/* Use "mt-auto" to push the button to the bottom */}
      <Button style={{ backgroundColor: "#1d3557" }} variant="primary">Details</Button>
    </div>
  </Card.Body>
</Card>
<Card className="text-black mt-4 mx-3" style={{ width: '18rem', height: '30rem' }}>
  <Card.Header className='pt-5' style={{ backgroundColor: "silver"}}></Card.Header>
  <Card.Body className="d-flex flex-column">
    <Card.Title className='mb-4'>Silver Package</Card.Title>
    <Card.Text>
      <ul className='mb-5'>
        <li style={{ listStyle: "disc" }}>Feature 1</li>
        <li style={{ listStyle: "disc" }}>Feature 2</li>
        <li style={{ listStyle: "disc" }}>Feature 3</li>
        <li style={{ listStyle: "disc" }}>Feature 4</li>
        <li style={{ listStyle: "disc" }}>Feature 5</li>
        <li style={{ listStyle: "disc" }}>Feature 6</li>
        <li style={{ listStyle: "disc" }}>Feature 7</li>
      </ul>
      <h1>$599</h1>
    </Card.Text>
    <div className="mt-auto"> {/* Use "mt-auto" to push the button to the bottom */}
      <Button style={{ backgroundColor: "#1d3557" }} variant="primary">Details</Button>
    </div>
  </Card.Body>
</Card>

<Card className="text-black mt-4 mx-3" style={{ width: '18rem', height: '30rem' }}>
  <Card.Header className='pt-5' style={{ backgroundColor: "gold"}}></Card.Header>
  <Card.Body className="d-flex flex-column">
    <Card.Title className='mb-4'>Gold Package</Card.Title>
    <Card.Text>
      <ul className='mb-5'>
        <li style={{ listStyle: "disc" }}>Feature 1</li>
        <li style={{ listStyle: "disc" }}>Feature 2</li>
        <li style={{ listStyle: "disc" }}>Feature 3</li>
        <li style={{ listStyle: "disc" }}>Feature 4</li>
        <li style={{ listStyle: "disc" }}>Feature 5</li>
        <li style={{ listStyle: "disc" }}>Feature 6</li>
        <li style={{ listStyle: "disc" }}>Feature 7</li>
      </ul>
      <h1>$1199</h1>
    </Card.Text>
    <div className="mt-auto"> {/* Use "mt-auto" to push the button to the bottom */}
      <Button style={{ backgroundColor: "#1d3557" }} variant="primary">Details</Button>
    </div>
  </Card.Body>
</Card>

<Card className="text-black mt-4 mx-3" style={{ width: '18rem', height: '30rem' }}>
  <Card.Header className='pt-5' style={{ backgroundColor: "#E5E4E2"}}></Card.Header>
  <Card.Body className="d-flex flex-column">
    <Card.Title className='mb-4'>Platinum Package</Card.Title>
    <Card.Text>
      <ul className='mb-5'>
        <li style={{ listStyle: "disc" }}>Feature 1</li>
        <li style={{ listStyle: "disc" }}>Feature 2</li>
        <li style={{ listStyle: "disc" }}>Feature 3</li>
        <li style={{ listStyle: "disc" }}>Feature 4</li>
        <li style={{ listStyle: "disc" }}>Feature 5</li>
        <li style={{ listStyle: "disc" }}>Feature 6</li>
        <li style={{ listStyle: "disc" }}>Feature 7</li>
      </ul>
      <h1>$1599</h1>
    </Card.Text>
    <div className="mt-auto"> {/* Use "mt-auto" to push the button to the bottom */}
      <Button style={{ backgroundColor: "#1d3557" }} variant="primary">Details</Button>
    </div>
  </Card.Body>
</Card>
    </Row>
  </Container>
</div>
   )
}

export default Home;