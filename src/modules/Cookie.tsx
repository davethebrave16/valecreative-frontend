import Head from 'next/head'
import CookieConsent from "react-cookie-consent";

export default function Cookie() {
    return (
        <CookieConsent
        location="bottom"
        buttonText="I accept!!"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
        acceptOnScroll={true}
        acceptOnScrollPercentage={25}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    );
}
