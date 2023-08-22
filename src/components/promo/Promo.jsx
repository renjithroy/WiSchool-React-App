import "./Promo.css"
import hackerGirl from '../../assets/hacker-girl.png'

const Promo = () => {
    return (
        <div className="promo-container mt-5">
            <div className="promo-background">
                <div className="promo-overlay">
                    <div className="promo-overlay-flame"></div>
                    <div className="promo-overlay-wave"></div>
                </div>
            </div>
            <div className="promo-content">
                <div className="promo-column promo-column-one">
                    <img src={hackerGirl} alt="Promo" />
                </div>
                <div className="promo-column promo-column-two">
                    <h1>You don’t have to see the whole staircase just take the first step</h1>
                    <p>“The secret of getting ahead is getting started.” <br /> — Mark Twain</p>
                    <div className="promo-buttons">
                        <button>Get Started</button>
                        <button>Place a Call</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promo