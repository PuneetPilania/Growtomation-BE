import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { useEffect } from "react";
import { getClientSecret } from "../../reducers/Home/selectors";

const stripePromise = loadStripe(
  "pk_test_51OOBFcSJbAzAaGwaqWV6ir5wr8tUodIn6PtzT0x4NLrMOTZLywuI1gfsQPLDB8y0xXfqcRWAMR0czXPcGCQ748qS00aqAtBNUY"
);

function StripeView({ clientSecret }) {
  // console.log("clientSecret", clientSecret);
  const options = {
    // passing the client secret obtained from the server
    clientSecret: clientSecret,
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
}

const mapStateToProps = createStructuredSelector({
  clientSecret: getClientSecret(),
});

export default connect(mapStateToProps, {})(StripeView);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/create-ticket",
      },
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button disabled={!stripe}>Submit</button>
    </form>
  );
};
