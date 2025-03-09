import { BrowserRouter as Router } from "react-router";
import { Provider } from "react-redux";
import { store } from "./store";
import AppRoutes from "./routes/AppRoutes";
import ToastProvider from "./providers/ToastProvider";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ToastProvider/>
        <AppRoutes />
      </Router>
    </Provider>
  );
}

export default App;
