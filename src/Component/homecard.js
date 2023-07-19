import React from 'react';
function Homecard(props) {
    return (
        <>
            <div className='homecards'>
                <div className='homecard'>
                    <img width="90" height="90" src="https://www.saeraauto.com/wp-content/uploads/2022/06/trusted-brand.png" className="attachment-full size-full snipcss0-6-6-7 snipcss0-2-2-3" alt="Most Trusted Brand" decoding="async" loading="lazy" />

                    <div >
                        <h3>
                            Most Trusted Brand
                        </h3>
                        <div >
                            <p className="snipcss0-7-10-11 snipcss0-3-6-7">
                                We are one of the fastest growing EV Companies and that is why we are trusted by millions of people.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='homecard'>
                    <img width="90" height="90" src="https://www.saeraauto.com/wp-content/uploads/2022/06/quality-icon.png" className="attachment-full size-full snipcss0-6-6-7 snipcss0-2-2-3" alt="Most Trusted Brand" decoding="async" loading="lazy" />

                    <div >
                        <h3>
                        High-Quality Product

                        </h3>
                        <div >
                            <p className="snipcss0-7-10-11 snipcss0-3-6-7">
                            Having a legacy of more than 40 years in the industry, we offer premium quality products.                            </p>
                        </div>
                    </div>
                </div>
                <div className='homecard'>
                    <img width="90" height="90" src="https://www.saeraauto.com/wp-content/uploads/2022/06/seek-icon.png" className="attachment-full size-full snipcss0-6-6-7 snipcss0-2-2-3" alt="Most Trusted Brand" decoding="async" loading="lazy" />

                    <div >
                        <h3>
                        Seek Growth

                        </h3>
                        <div >
                            <p className="snipcss0-7-10-11 snipcss0-3-6-7">
                            Become our channel partner, grow your network, and expect a good return on investment.                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </>

    );
}

export default Homecard;