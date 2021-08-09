import ImageCard from "../card/ImageCard";
import travel1 from "../../../public/travel_51.jpg";

import styles from "../../../styles/Home.module.scss";
function Trip() {
  const trips = [
    {
      imageSrc: travel1,
      infoHeadding: "hillroad rodies",
      infoBody: "manali",
      infoFooter: "3 Days 2 Nights",
    },
    {
      imageSrc: travel1,
      infoHeadding: "hillroad rodies",
      infoBody: "manali",
      infoFooter: "3 Days 2 Nights",
    },
    {
      imageSrc: travel1,
      infoHeadding: "hillroad rodies",
      infoBody: "manali",
      infoFooter: "3 Days 2 Nights",
    },
    {
      imageSrc: travel1,
      infoHeadding: "hillroad rodies",
      infoBody: "manali",
      infoFooter: "3 Days 2 Nights",
    },
    {
      imageSrc: travel1,
      infoHeadding: "hillroad rodies",
      infoBody: "manali",
      infoFooter: "3 Days 2 Nights",
    },
    {
      imageSrc: travel1,
      infoHeadding: "hillroad rodies",
      infoBody: "manali",
      infoFooter: "3 Days 2 Nights",
    },
  ];
  return (
    <div className={`section  ${styles.trips}`}>
      <div className={styles.tripsCard}>
        <p className="is-size-1 is-size-3-mobile has-text-weight-bold is-capitalized">Featured Trips</p>
        <div className={`is-flex is-flex-wrap-wrap is-justify-content-space-around is-align-items-center ${styles.tripCardsImages}`}>
          {trips.map((trip, index) => (
            <ImageCard
              key={index}
              imageSrc={trip.imageSrc}
              infoHeadding={trip.infoHeadding}
              infoBody={trip.infoBody}
              infoFooter={trip.infoFooter}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Trip;
