import React, { Component } from 'react'

import { PayPalButton } from "react-paypal-button-v2";

export default class membership extends Component {
    render() {
        return (
            <section className="paypal-container">
                <h1>Заплащане на месечен членски внос</h1>
                <p>За заплащането на членския внос могат да с изпозват следните методи</p>
                <PayPalButton
                    options={{ vault: true }}
                    createSubscription={(data, actions) => {
                        return actions.subscription.create({
                            plan_id: 'P-XXXXXXXXXXXXXXXXXXXXXXXX'
                        });
                    }}
                    onApprove={(data, actions) => {
                        // Capture the funds from the transaction
                        return actions.subscription.get().then(function (details) {
                            // Show a success message to your buyer
                            alert("Subscription completed");

                            // OPTIONAL: Call your server to save the subscription
                            return fetch("/paypal-subscription-complete", {
                                method: "post",
                                body: JSON.stringify({
                                    orderID: data.orderID,
                                    subscriptionID: data.subscriptionID
                                })
                            });
                        });
                    }}
                />
            </section>
        )
    }
}
