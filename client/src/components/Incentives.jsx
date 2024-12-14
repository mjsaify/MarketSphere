import DeliveryTruck from '../assets/img/icons/delivery-truck.png'
import CustomerService from '../assets/img/icons/customer-service.png'
import ShoppingCart from '../assets/img/icons/shopping-cart.png'

const Incentives = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mx-auto px-4 grid grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-3">
                <div className="text-center sm:flex sm:text-left lg:block lg:text-center">
                    <div className="sm:flex-shrink-0">
                        <div className="flow-root">
                            <img
                                className="w-28 h-24 mx-auto object-contain"
                                src={DeliveryTruck}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
                        <h3 className="text-sm font-medium text-gray-900">Free Shipping</h3>
                        <p className="mt-2 text-sm text-gray-500">
                            It&apos;s not actually free we just price it into the products.
                            Someone&apos;s paying for it, and it&apos;s not us.
                        </p>
                    </div>
                </div>
                <div className="text-center sm:flex sm:text-left lg:block lg:text-center">
                    <div className="sm:flex-shrink-0">
                        <div className="flow-root">
                            <img
                                className="w-28 h-24 mx-auto object-contain"
                                src={CustomerService}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
                        <h3 className="text-sm font-medium text-gray-900">
                            24/7 Customer Support
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                            Our AI chat widget is powered by a naive series of if/else
                            statements. Guaranteed to irritate.
                        </p>
                    </div>
                </div>
                <div className="text-center sm:flex sm:text-left lg:block lg:text-center">
                    <div className="sm:flex-shrink-0">
                        <div className="flow-root">
                            <img
                                className="w-28 h-24 mx-auto object-contain"
                                src={ShoppingCart}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
                        <h3 className="text-sm font-medium text-gray-900">
                            Fast Shopping Cart
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                            Look how fast that cart is going. What does this mean for the
                            actual experience? I don&apos;t know.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Incentives