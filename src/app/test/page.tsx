import React from "react";
import "./style.css";
export default function test() {

    return (
        <div className="shopping-cart">
            <div className="div">
                <div className="tomato">
                    <div className="text-wrapper">Heirloom tomato</div>
                    <div className="text-wrapper-2">$5.99</div>
                    <div className="text-wrapper-3">$5.99 / lb</div>
                    <div className="input-field">
                        <div className="text-wrapper-4">1 lb</div>
                        <div className="icon">
                            <img className="union" alt="Union" src="union.svg" />
                        </div>
                    </div>
                    <img className="img" alt="tomatoes" src="/images/copter(1).png" />

                </div>
                <div className="ginger">
                    <div className="text-wrapper">Organic ginger</div>
                    <div className="text-wrapper-5">$12.99 / lb</div>
                    <div className="input-field">
                        <div className="text-wrapper-6">0.5 lb</div>
                        <div className="icon">
                            <img className="union" alt="Union" src="image.svg" />
                        </div>
                    </div>
                    <div className="text-wrapper-2">$6.50</div>
                    <img className="img" alt="Noonbrew ekmak" src="noonbrew-zicb4-ekmak-unsplash.png" />
                </div>
                <div className="onion">
                    <div className="text-wrapper">Sweet onion</div>
                    <div className="text-wrapper-3">$2.99 / lb</div>
                    <div className="input-field">
                        <div className="text-wrapper-6">5 lb</div>
                        <div className="icon">
                            <img className="union" alt="Union" src="union-2.svg" />
                        </div>
                    </div>
                    <div className="text-wrapper-7">$14.95</div>
                    <img className="img" alt="Fkphulv m" src="k8-0-fkphulv-m-unsplash-2.png" />
                </div>
                <div className="summary">
                    <div className="text-wrapper-8">Order summary</div>
                    <div className="text-wrapper-9">Subtotal</div>
                    <div className="text-wrapper-10">$27.44</div>
                    <div className="text-wrapper-11">Shipping</div>
                    <div className="text-wrapper-12">$3.99</div>
                    <div className="text-wrapper-13">Tax</div>
                    <div className="text-wrapper-14">$2.00</div>
                    <div className="text-wrapper-15">Total</div>
                    <div className="text-wrapper-16">$33.43</div>
                    <button className="button">
                        <div className="text-wrapper-17">Continue to payment</div>
                        <img className="icon-2" alt="Icon" src="icon.svg" />
                    </button>
                </div>
                <div className="page-heading">
                    <div className="text-wrapper-18">3 items</div>
                    <div className="text-wrapper-19">Basket</div>
                    <img className="divider" alt="Divider" src="divider.svg" />
                </div>
                <div className="navigation">
                    <div className="text-wrapper-20">World Peas</div>
                    <div className="text-wrapper-21">Shop</div>
                    <div className="text-wrapper-22">Newstand</div>
                    <div className="text-wrapper-23">Who we are</div>
                    <div className="text-wrapper-24">My profile</div>
                    <div className="cart-button">
                        <div className="text-wrapper-25">Basket (3)</div>
                    </div>
                </div>
                <div className="bitteronion">
                    <img className="fkphulv-m" alt="Fkphulv m" src="image.png" />
                    <div className="text-wrapper-26">Bitter onion</div>
                    <div className="text-wrapper-27">free</div>
                    <p className="p">just take it off my hands</p>
                    <div className="frame">
                        <div className="text-wrapper-28">200lbs</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
