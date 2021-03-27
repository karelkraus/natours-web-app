/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alert';
const stripe = Stripe(
  'pk_test_51IZCnUCXdl8omJORnyWdOxVYK4tMLlnDsLwAj2hpO3nE87LL4tW4asFfIKM1Xvua3uDYQzSc6Mn4AntUFxJovwBc00pps96OIf'
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert('error', err);
  }
};
