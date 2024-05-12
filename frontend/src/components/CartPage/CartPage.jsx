import React, { useEffect, useState } from 'react'
import "./cartPage.scss"
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import paymentService from '../../services/paymentService';
import cartService from '../../services/cartService';

export default function CartPage() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const tab = queryParams.get('tab');
    const [orderId, setOrderId] = useState();
    const [shippingForm, setShippingForm] = useState({
        firstName: "",
        lastName: "",
        addressLine: "",
        city: "",
        state: "",
        zipcode: "",
        phone: ""
    });
    const [text, setText] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        switch (tab) {
            case "cart":
                findCartById();
                break;

            case "address":
                console.log("not cart");
                break;

            case "payment":
                console.log("not cart");
                break;

            default:
                break;
        }
    }, [tab]);

    // fetch when tab is set to cart
    // fetch all products

    const findCartById = () => {
        // if 
    }


    const fillShippingForm = (event) => {
        const { value, name } = event.target
        setShippingForm({
            ...shippingForm,
            [name]: value
        })
    }

    const handleOnChange = () => {
        console.log("gdg");
    }

    const handleSaveShippingForm = () => {
        console.log(shippingForm);
    }

    // Components Section
    // Checkout Tabs Component
    const CheckoutTabs = () => {
        return (
            <div className="cart-tabs-container">
                <a href="#">CART</a>
                <a href="#">SHIPPING</a>
                <a href="#">PAYMENT</a>
            </div>
        )
    }

    const handleCheckout = () => {
        switch (tab) {
            case "cart":
                navigate("/cart?tab=address")
                break;

            case "address":
                navigate("/cart?tab=payment")
                break;

            case "payment":
                console.log("not cart");
                break;

            default:
                break;
        }
    }

    const processPayment = async () => {
        paymentService.createOrder(1000)
            .then(res => {
                console.log(res);
                setOrderId(12);
                const options = {
                    key: 'rzp_test_u5cehzgQhNmPi8',
                    amount: res.amount,
                    currency: res.currency,
                    name: 'Your Company Name',
                    description: 'Payment for your service',
                    order_id: res.id,
                    handler: function (response) {
                        // Handle the success callback
                        console.log(response);

                        // Send the payment response to server for verification
                        paymentService.verifyPayment(response)
                            .then(res => {
                                console.log(res);
                                navigate("/summary/123?status=completed");
                            })
                            .catch(err => {
                                console.log(err);
                                navigate("/summary/123?status=pending");
                            })
                    },
                };

                const rzp = new window.Razorpay(options);
                rzp.open();
            })
    }

    const newPayment = () => {
        const options = {
            key: 'rzp_test_u5cehzgQhNmPi8',
            amount: 1000,
            currency: "INR",
            name: 'Your Company Name',
            description: 'Payment for your service',
            order_id: 12,
            handler: function (response) {
                // Handle the success callback
                console.log(response);

                // Send the payment response to server for verification
                paymentService.verifyPayment(response)
                    .then(res => {
                        console.log(res);
                        navigate("/summary/123?status=completed");
                    })
                    .catch(err => {
                        console.log(err);
                        navigate("/summary/123?status=pending");
                    })
            },
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
    }

    const ItemCard = () => {
        return (
            <div className='item-card'>
                <div className="thumbnail-section mr-3">
                    <img width="90px" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1c0DJ?ver=2dbd&b=%23FFFFFFFF&h=160&l=t&m=6&n=t&o=f&q=60&w=160" alt="" />
                </div>
                <div className='description-section'>
                    <div>
                        <div className="product-name mb-3">
                            <h3>Xbox Series S – Starter Bundle</h3>
                        </div>
                        <div className="actions">
                            <a href="#">Remove</a>
                        </div>
                    </div>
                    <div className="price">
                        <h3>#399.99</h3>
                    </div>

                </div>
            </div>
        )
    }

    return (
        <div id='cartpage-component'>
            <section className='left-section mt-4'>
                <div className="heading">
                    <h1>Cart</h1>
                </div>
                {
                    tab === "cart" &&
                    <div className='cart'>
                        <ItemCard />
                        <ItemCard />
                    </div>
                }
                {
                    tab === "address" &&
                    <div className='shipping-details-from'>
                        <h3 className='mb-4'>Shipping Address</h3>
                        <div>
                            <div className='d-flex flex-column mb-3'>
                                <label htmlFor="firstName">First Name</label>
                                <input value={shippingForm.firstName} onChange={fillShippingForm} type="text" name="firstName" id="" placeholder='d' />
                            </div>
                            <div className='d-flex flex-column mb-3'>
                                <label htmlFor="lastName">Last Name</label>
                                <input value={shippingForm.lastName} onChange={fillShippingForm} type="text" name="lastName" id="" placeholder='d' />
                            </div>
                            <div className='d-flex flex-column mb-3'>
                                <label htmlFor="addressLine">Address Line</label>
                                <input value={shippingForm.addressLine} onChange={fillShippingForm} type="text" name="addressLine" id="" placeholder='d' />
                            </div>

                            <div className='d-flex flex-column mb-3'>
                                <label htmlFor="city">City</label>
                                <input value={shippingForm.city} onChange={fillShippingForm} type="text" name="city" id="" placeholder='d' />
                            </div>
                            <div className='d-flex flex-column mb-3'>
                                <label htmlFor="state">State</label>
                                <input value={shippingForm.state} onChange={fillShippingForm} type="text" name="state" id="" placeholder='d' />
                            </div>

                            <div className='d-flex flex-column mb-3'>
                                <label htmlFor="zipcode">Zip Code</label>
                                <input value={shippingForm.zipcode} onChange={fillShippingForm} type="text" name="zipcode" id="" placeholder='d' />
                            </div>
                            <div className='d-flex flex-column mb-3'>
                                <label htmlFor="phone">Phone</label>
                                <input value={shippingForm.phone} onChange={fillShippingForm} type="text" name="phone" id="" placeholder='d' />
                            </div>
                        </div>
                        <div className='btn-group'>
                            <button name='cancle'>Cancle</button>
                            <button onClick={handleSaveShippingForm} name='save'>Save</button>
                        </div>

                    </div>
                }
                {
                    tab === "payment" &&
                    <div className='payment-section mt-4'>
                        <h3 className='mb-4'>Payment</h3>
                        <h2 className='mb-3'>Select Payment Method</h2>
                        <div className='card mb-2'>
                            <div>
                                <input type="checkbox" name="razorpay-checkbox" id="" />
                                <span>Razorpay</span>
                            </div>
                            <div>
                                <img src="src\assets\icons\credit-card.png" width="30px" alt="" />
                            </div>
                        </div>

                        <div className='card'>
                            <div>
                                <input type="checkbox" name="razorpay-checkbox" id="" disabled />
                                <span>Other Method</span>
                            </div>
                            <div>
                                <img src="src\assets\icons\credit-card.png" width="30px" alt="" />
                            </div>
                        </div>
                        {/* <button>Make Payment</button> */}
                    </div>
                }


            </section>

            <section className='right-section mt-4'>
                <div className="gray-box">
                    <div className="summary">
                        <h3 className='mb-4'>Order Summary</h3>
                        <div className='row-item'>
                            <p>Items : </p>
                            <p>#299.99</p>
                        </div>

                        <div className='row-item'>
                            <p>Shipping : </p>
                            <p>Free</p>
                        </div>

                        <div className='row-item'>
                            <p>Estimated Tax : </p>
                            <p>-</p>
                        </div>
                    </div>

                    <div className="total">
                        <div className='row-item'>
                            <p>Total* : </p>
                            <p>#299.99</p>
                        </div>


                        <button onClick={() => newPayment()} className='checkout-btn'>Checkout</button>
                    </div>

                </div>
            </section>

        </div>
    )
}
