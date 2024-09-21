import travelData from "../travelData";
import Card from "./Card";

export default function CardsPanel() {
  const cards = travelData.map((data) => {
    return <Card key={data.id} {...data} />;
  });

  return <section className="cards-panel">{cards}</section>;
}
