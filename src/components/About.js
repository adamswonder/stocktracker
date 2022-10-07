import React from 'react'

function About() {
    return (
        <>
            <div>
                <img src='https://i.ibb.co/zPZHKqY/d.webp' alt='About' />
            </div>
            <h1>About Us</h1>
            <p id='lorem'>In duis sociosqu risus sociosqu fames torquent placerat et. In mollis auctor mauris condimentum ex posuere.
                Efficitur mollis senectus nullam donec massa. Non consequat curae sed cras justo interdum facilisis elit nam.
                Conubia quis maecenas turpis lobortis montes luctus sociosqu ridiculus vel.
                Rutrum est sapien ut accumsan vestibulum quam dis est aliquet. Hendrerit tortor id non interdum fames tincidunt.
                Urna consectetur ac elit fermentum rutrum; bibendum dis volutpat?
                Ad hac fames bibendum donec finibus suscipit nullam netus.
            </p>
            <h1>Get In Touch</h1>
            <div className='timing'>
                <p>
                    <i className='fas fa-phone'></i> +254 701 234 567
                </p>
                <p>
                    <i className='fas fa-envelope'></i> theadamsproject@sme.com
                </p>
                <p>
                    <i className='fas fa-map'></i> Nairobi, Kenya
                </p>
                <div className='share'>
                    <i className='fab fa-facebook-f'></i>
                    <i className='fab fa-twitter'></i>
                    <i className='fab fa-linkedin'></i>
                    <i className='fab fa-pinterest'></i>
                </div>
            </div>
        </>
    )
}

export default About