import Body from "../Body/Body";
import Card from "./card/Card";
// import Circle from '../Body/circle/Circle'
import Image from "next/image";
import styles from "../../styles/Home.module.scss";
import Trip from "./trip/Trip";
// import CircleColor from '../Body/circle/circleColor'
import Contact from "./contact/Contact";
import TestIMonails from "./testimonalis/TestIMonails";
import Footer from "./footer/Footer";
import CircleImageWithDot from "../CircleImageWithDot/CircleImageWithDot";
import { MdPersonOutline } from "react-icons/md";
import {TiPlaneOutline} from 'react-icons/ti'
import {BiCamera} from 'react-icons/bi'
function MyHome({ className, className2 }) {
  const cards = [
    {
      icon: MdPersonOutline,
    },
    {
      icon: TiPlaneOutline,
    },
    {
      icon: BiCamera,
    },
  ];
  return (
    <div>
      <Body />
      <section className="section">
        <div className="container">
          <div className="columns is-variable">
            {cards.map((card, index) => (
              <div key={index} className="column">
                <Card Icon={card.icon} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section ">
        <div className="container  ">
          <CircleImageWithDot diameter={200} />
          <p className="mt-6 pl-4 pr-4 has-text-grey-light is-size-4 is-size-6-mobile	has-text-centered has-text-weight-medium">
            The things that motivates me is a very common form of motivation.
            And that is, with other folk counting on me, it's so easy to be
            motivated.
          </p>
          <div className="is-family-primary has-text-centered mt-5">
            <p className="is-size-7-mobile has-text-centered is-uppercase has-text-black has-text-weight-medium">
              Company name
            </p>
            <p className="is-size-7-mobile is-capitalized has-text-weight-medium">
              lane lauren
            </p>
            <p className="is-size-7-mobile is-uppercase has-text-weight-medium">
              ceo
            </p>
          </div>
        </div>
      </section>
      <Trip />
      <TestIMonails />
      <Contact />
      <Footer />
    </div>
  );
}

export default MyHome;
