import { Switch, Route } from "react-router-dom";
import { APP_ROUTES } from "./configs/routes";
import Home from "./views/Home";
import Header from "./components/Header";
import CreateTicket from "./views/CreateTicket";
import StripeView from "./views/StripeView";

/**
 * App Routes Component
 */
function AppRoutes() {
  return (
    <div>
      <Header />
      <Switch>
        {/* Home */}
        <Route exact path={APP_ROUTES.HOME} component={Home} />

        {/* CREATE_TICKET */}
        <Route exact path={APP_ROUTES.CREATE_TICKET} component={CreateTicket} />

        {/* Stripe payment gateway */}
        <Route exact path={APP_ROUTES.STRIPE_GATEWAY} component={StripeView} />

        {/* Default */}
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default AppRoutes;
