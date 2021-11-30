import StripeCheckout from "react-stripe-checkout";
import { signInWithGoogle } from "../firebase/firebase.utils";

function StripeButton({ price }) {
    const priceInCents = price * 100;
    const publishableKey = 'pk_test_51K1R6aKkRK9XNtONKnrH9Czbo5X9Ayqr0bu190IOhYX7jzgplHgFsyQMEaqzzreCtnqXibGy4VskmQ1g2lxlHVpv00BiuXoPrD';
    return (
        <StripeCheckout
            label='Pay Now'
            name='React Shop'
            billingAddress
            shippingAddress
            description={`your total price is $${price}`}
            amount={priceInCents}
            panelLabel='Pay Now'
            token={(token) => { console.log(token); alert('Payment successfully') }}
            stripeKey={publishableKey} />
    );
}

export default StripeButton;
