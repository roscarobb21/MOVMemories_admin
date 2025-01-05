import {Container, Spinner} from 'reactstrap'

function Loader()
{
    return (
      <div
        className="background-dark-color"
        style={{ height: "100vh", width: "auto" }}
      >
        <Container fluid style={{ height: "100vh" }}>
          <div
            style={{ height: "100%" }}
            className="d-flex justify-content-center align-items-center"
          >
            <Spinner color="light" type="grow">
              Loading...
            </Spinner>
          </div>
        </Container>
      </div>
    );
}

export default Loader;
