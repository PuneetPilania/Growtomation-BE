import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import ErrorBoundary from "./components/ErrorBoundary";
import AppRoutes from "./AppRoutes";
import reducersStore from "./reducers/store";

/**
 * App Component
 */
function App() {
  return (
    <Provider store={reducersStore}>
      <ErrorBoundary>
        <Router>
          <AppRoutes />
        </Router>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
