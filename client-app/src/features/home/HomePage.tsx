import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";

function HomePage() {
  return (
    <Container style={{ marginTop: "7em" }}>
      <h1>Home Page</h1>
      <h3>
        go to <Link to='/activities'>activities</Link>
      </h3>
    </Container>
  );
}
export default observer(HomePage);
