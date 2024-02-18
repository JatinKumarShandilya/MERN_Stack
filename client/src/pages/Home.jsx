import { Analytics } from "../components/Analytics"
import {NavLink} from "react-router-dom"

export const Home = () => {
    return <>

        <section>
        <main>
            <div className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                        <p>Welcome</p>
                        <h1>Welcome to my channel</h1>
                        <p>dksjdjakmlhcdxkzc dxmklz cmkzcdjkszxjchdbxjzkxc nkc xzjkasdsjxzkmldcjxnzkmdksjdjakmlhcdxkzc dxmklz cmkzcdjkszxjchdbxjzkxc nkc xzjkasdsjxzkmldcjxnzkmdksjdjakmlhcdxkzc dxmklz cmkzcdjkszxjchdbxjzkxc nkc xzjkasdsjxzkmldcjxnzkm</p>

                        <div className="btn btn-group">
                            <a href="/contact">
                                <button className="btn">Connect Now</button>
                            </a>
                            <a href="/services">
                                <button className="btn secondary-btn">Learn more</button>
                            </a>
                            
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src="./images/register.png" alt="coding together"
                            width="500" height="500"
                        />
                    </div>
                </div>

            </div>
        </main>
        </section>

        {/* 2nd section */}
        <Analytics />

        {/* 3rd section  */}
        <section>
        
            <div className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-image">
                        <img src="./images/register.png" alt="coding together"
                            width="500" height="500"
                        />
                    </div>
                    <div className="hero-content">
                        <p>Welcome</p>
                        <h1>Welcome to my channel</h1>
                        <p>dksjdjakmlhcdxkzc dxmklz cmkzcdjkszxjchdbxjzkxc nkc xzjkasdsjxzkmldcjxnzkmdksjdjakmlhcdxkzc dxmklz cmkzcdjkszxjchdbxjzkxc nkc xzjkasdsjxzkmldcjxnzkmdksjdjakmlhcdxkzc dxmklz cmkzcdjkszxjchdbxjzkxc nkc xzjkasdsjxzkmldcjxnzkm</p>

                        <div className="btn btn-group">
                            <NavLink to="/contact">
                                <button className="btn">Connect Now</button>
                            </NavLink>
                            <NavLink to="/services">
                                <button className="btn secondary-btn">Learn more</button>
                            </NavLink>
                            
                        </div>
                    </div>
                    
                </div>

            </div>
        
        </section>
    </>
}