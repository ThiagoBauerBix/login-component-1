import { LoginProvider } from "./contexts/LoginContext";
import Router from "./routes";

function App() {
  return (
    <LoginProvider>
      <Router />
    </LoginProvider>
  );
}
export default App;

