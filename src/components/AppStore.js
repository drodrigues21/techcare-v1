
import '../styles/AppStore.css';

export default function AppStore() {
    return (
        <div className="container">
            <div className="app-stores-container">
                <h2>Baixe Nosso Applicativo</h2>
                <div className="app-stores-btns">
                    <div className="apple-store store">
                        <a href="https://apple.co/3sYMuSs" target="_blank" rel="noreferrer">
                            <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/pt-br?size=250x83&amp;releaseDate=1593129600&h=cfd21773fcdea705377f3c49a56b8fbb" alt="Download on the App Store" />
                        </a>
                    </div>
                    <div className="google-play store">
                        <a href='https://play.google.com/store/apps/details?id=br.net.techcare.app&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' target="_blank" rel="noreferrer">
                            <img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
