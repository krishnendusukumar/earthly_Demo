import React from 'react'
import img from './image.png'
import img1 from './cmp.png'
import img2 from './toothpaste.png'
import img3 from './toothpicks.png'
import img4 from './kit.png'
import './HomePage.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
    return (
        <div className="homepage__header">
            <nav>
                <label className="logo">EarthlyX
                </label>
                <ul>
                    <li><a className='active' href="#">Home</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </nav>
        </div>
    )
}

const ImageIntro = () => {
    return (
        <div className="container">
            <div className="img__intro row" >
                <img src={img} className='img__intro__img col-6 col-md-12' data-aos="slide-down" />
                <div className="img__intro__text col-6" data-aos="slide-up">
                    <div className="img__intro__text__inside">
                        <div className="inside__inside">
                            <label className='inside__inside__label'>Herbicious Neem Plant Stem</label>
                            <h1>€4.34</h1>
                            <button className='btn btn-dark inside__inside__button'>Buy Now!</button>
                            <span className='inside__inside__span'>A neem tree normally begins bearing fruit after 3-5 years, becomes fully productive in 10 years, and from then on can produce up to 50 kg of fruits annually. </span>
                        </div>
                    </div>
                </div>
                <img src={img2} className='img2__intro__img col-6' />
                <div className="img2__intro__text col-4">
                    <div className="img__intro__text__inside">
                        <div className="inside__inside">
                            <label className='inside__inside__label'>Wooden Toothbrush</label>
                            <h1>€6.34</h1>
                            <button className='btn btn-dark inside__inside__button'>Buy Now!</button>
                            <span className='inside__inside__span'>Wooden Toothbrush - Buy Wooden Toothbrush at India's Best Online Shopping Store. Check Price in India and Shop Online.  </span>
                        </div>
                    </div>
                </div>

                <img src={img3} className='img3__intro__img col-6' />
                <div className="img2__intro__text col-4">
                    <div className="img__intro__text__inside">
                        <div className="inside__inside">
                            <label className='inside__inside__label'>Bamboo Straws</label>
                            <h1>€6.34</h1>
                            <button className='btn btn-dark inside__inside__button'>Buy Now!</button>
                            <span className='inside__inside__span'>Bamboo Straws - Buy Bamboo Straws at India's Best Online Shopping Store. Check Price in India and Shop Online.  </span>
                        </div>
                    </div>
                </div>

                <img src={img4} className='img3__intro__img col-6' />
                <div className="img2__intro__text col-4">
                    <div className="img__intro__text__inside">
                        <div className="inside__inside">
                            <label className='inside__inside__label'>Bamboo Straws</label>
                            <h1>€10.99</h1>
                            <button className='btn btn-dark inside__inside__button'>Buy Now!</button>
                            <span className='inside__inside__span'>Bamboo Straws - Buy Bamboo Straws at India's Best Online Shopping Store. Check Price in India and Shop Online.  </span>
                        </div>
                    </div>
                </div>

                <img src={img1} className='img__intro__img1 col-8' />
                <div className="img1__intro__text col-4">
                    <h3>Now available on your Mobile devices</h3>
                </div>
            </div>
        </div>
    )
}

const BelowHeader = () => {
    return (
        <div className="below__header row">
            <div col-4>
                <h3 className='below__header__heading'>Let's Build a sustainable future together</h3>
                <h4>Order Greenry with us</h4>
            </div>

            <div className="below__heading__search">
                <input type='text' placeholder='Search...' />
                <a href='#'>
                    <i class="fas fa-solid fa-magnifying-glass fa-2x"></i>
                </a>
            </div>
        </div>
    )
}
const Iframe = (props) => {
    return (<div className='show__map' dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }} />);

}

const BeforeFooter = () => {
    return (
        <div className="before__footer">
            <h2>100,000+ Already Joined</h2>
            <h3>Stay up-to-date with what we’re doing</h3>
            <form className='before__footer__form'>
                <input type="text" placeholder='Enter your Email address' className='before__footer__input' />
                <button type='submit' className='before__footer__button btn btn-danger'>Contact us!</button>
            </form>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="footer">
            <footer>
                <ul>
                    <li><h3>EarthlyX</h3></li>
                    <li><a className='active' href="#">Home</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </footer>
        </div>
    )
}

const HomePage = () => {
    const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.5331885638834!2d77.088325!3d28.493601799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1939aa6004ef%3A0x3240c4c9cab262ab!2sCyber%20City%2C%20DLF%20Tower%208th%20Rd%2C%20DLF%20Cyber%20City%2C%20DLF%20Phase%202%2C%20Sector%2024%2C%20Gurugram%2C%20Haryana%20122002!5e0!3m2!1sen!2sin!4v1675971675177!5m2!1sen!2sin" width="80%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    return (
        <div>
            <Header />
            <BelowHeader />
            <ImageIntro />
            <Iframe iframe={iframe} />
            <BeforeFooter />
            <Footer />
        </div>
    )
}

export default HomePage
