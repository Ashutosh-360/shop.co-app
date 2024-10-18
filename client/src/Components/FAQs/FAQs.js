import React from 'react'
import SingleStrip from './SingleStrip'

function FAQs() {
    const data = [
        {
            question: "How do I cancel the order, I have placed ?",
            answer: "Order can be canceled till the same is out for delivery. Note: This may not be applicable for certain logistics partner. You would see an option to cancel within 'My Orders' section under the main menu of your App/Website/M-site then select the item or order you want to cancel. In case you are unable to cancel the order from'My Orders' section, you can refuse it at the time of delivery and refund will be processed into the source account, if order amount was paid online."
        },
        {
            question: "How do I check the status of my order?",
            answer: "Please tap on “My Orders” section under main menu of App/Website/M-site to check your order status."
        }, {
            question: "How can I get my order delivered faster?",
            answer: "Sorry, currently we do not have any service available to expedite the order delivery. In future, if we are offering such service and your area pincode is serviceable, you will receive a communication from our end."
        }, {
            question: "How do I cancel my Order?",
            answer: "Tap on “My Orders” section under the main menu of your App/Website/M-site and then select the item or order you want to cancel"
        }

    ]
    return (
        <section className='flex flex-col gap-4'>
            {
                data.map((element) => {
                    return (
                        <SingleStrip element={element} />
                    )
                })
            }

        </section>
    )
}

export default FAQs