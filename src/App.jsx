import { useState } from "react"
function App() {
    const [error, setError] = useState(false)

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget.parentElement);

        const emailCharacters = formData.get("email").split("");

        const validEmail = emailCharacters.includes("@") && emailCharacters.includes(".") && emailCharacters.indexOf(".") > emailCharacters.indexOf("@");

        if (!validEmail) {
            setError(true)
        } else {
            setError(false)
        }
    }

    return (
        <main className="base-apparel-grid">
            <img className="base-apparel-grid__logo" src="./images/logo.svg" alt="" />

            <picture>
                <source srcSet="./images/hero-desktop.jpg" media="(min-width: 31em)" />

                <source srcSet="./images/hero-mobile.jpg" media="(max-width: 30.9em)" />

                <img className="base-apparel-grid__hero" src="./images/hero-mobile.jpg" alt="hero-picture" />
            </picture>

            <section className="base-apparel-grid__main" style={error ? { marginBottom: "1.5rem" } : {}}>
                <h1 className="base-apparel-grid__heading"><span>WE'RE</span> COMEING SOON</h1>

                <p className="base-apparl-grid__description">
                    Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.
                </p>

                <form className="base-apparel-grid__form" style={error ? { borderColor: "hsl(0, 93%, 68%)" } : {}}>
                    <input required className="form__email-input" type="email" placeholder="Email Address" name="email" />
                    {error ? <img src="./images/icon-error.svg" /> : null}
                    <button className=" form__submit-button"
                        onClick={handleSubmit}
                        aria-label="Submit it form">
                        <i aria-hidden="true"></i>
                        <img src="./images/icon-arrow.svg" alt="icon-arrow" />
                    </button>
                </form>
                {error ? <span className="error-message">Please provide a valid email.</span> : null}
            </section>
        </main>
    )
}

export default App;
