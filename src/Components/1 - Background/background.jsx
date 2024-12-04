import { Hero } from "../3 - Hero/hero"
import { SocialProof } from "../4 - SocialProof/socialproof"
import { Benefits } from "../5 - Benefits/benefits"
import { Newsletter } from "../6 - Newsletter/newsletter"
import { Footer } from "../7 - footer/footer.jsx"

import './background.modules.css';

export function Background(){
    return (
        <main className="Main-background">
            <div className="Main-second-background">
                <Hero/>
                <SocialProof/>
                <Benefits/>
                <Newsletter/>
                <Footer/>
            </div>
        </main>
    )
}