import React, { Component } from 'react'

import { PayPalButton } from "react-paypal-button-v2";

export default class membership extends Component {
    render() {
        return (
            <section className="paypal-container">
                <h1>Заплащане на месечен членски внос</h1>
                <p>За заплащането на членския внос могат да с изпозват следните методи</p>
                <PayPalButton
                    amount="0.01"
                    // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                    onSuccess={(details, data) => {
                        alert("Transaction completed by " + details.payer.name.given_name);

                        // OPTIONAL: Call your server to save the transaction
                        return fetch("/paypal-transaction-complete", {
                            method: "post",
                            body: JSON.stringify({
                                orderID: data.orderID
                            })
                        });
                    }}
                />
            </section>
        )
    }
}
