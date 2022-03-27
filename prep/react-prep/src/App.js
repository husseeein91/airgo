import Todos from "./features/todos/Todos";
import { Container, Typography } from "@mui/material";

function App() {
  return (
    <Container maxWidth="lg">
      <div className="text-center mx-auto container">
        <Typography
          variant="h3"
          sx={{ marginX: "auto", marginY: "20px", textAlign: "center" }}
        >
          Welcome to my TODO!
        </Typography>
        <Todos />
      </div>
    </Container>
  );
}

export default App;
