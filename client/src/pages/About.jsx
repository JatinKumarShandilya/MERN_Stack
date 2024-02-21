import { NavLink } from "react-router-dom";
import { Analytics } from "../components/Analytics";
import {useAuth} from "../store/auth";

export const About = () => {

  const {user} = useAuth();

  return (
    <>
      <section>
        <main>
          <div className="section-hero">
            <div className="container grid grid-two-cols">
              <div className="hero-content">
                <p>welcome,{user ? user.username : "user"}</p>
                <h1>Why choose us?</h1>
                <p>
                  dksjdjakmlhcdxkzc dxmklz cmkzcdjkszxjchdbxjzkxc nkc
                  xzjkasdsjxzkmldcjxnzkmdksjdjakmlhcdxkzc dxmklz
                  cmkzcdjkszxjchdbxjzkxc nkc
                  xzjkasdsjxzkmldcjxnzkmdksjdjakmlhcdxkzc dxmklz
                  cmkzcdjkszxjchdbxjzkxc nkc xzjkasdsjxzkmldcjxnzkm
                </p>
                <p>
                  dksjdjakmlhcdxkzc dxmklz cmkzcdjkszxjchdbxjzkxc nkc
                  xzjkasdsjxzkmldcjxnzkmdksjdjakmlhcdxkzc dxmklz
                  cmkzcdjkszxjchdbxjzkxc nkc
                  xzjkasdsjxzkmldcjxnzkmdksjdjakmlhcdxkzc dxmklz
                  cmkzcdjkszxjchdbxjzkxc nkc xzjkasdsjxzkmldcjxnzkm
                </p>
                

                <div className="btn btn-group">
                  <NavLink to="/contact">
                    <button className="btn">Connect Now</button>
                  </NavLink>
                  <NavLink to="/">
                    <button className="btn secondary-btn">Learn more</button>
                  </NavLink>
                </div>
              </div>
              <div className="hero-image">
                <img
                  src="./images/register.png"
                  alt="coding together"
                  width="500"
                  height="500"
                />
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* 2nd section */}
      <Analytics />
    </>
  );
};
