import Card from "@/components/Card/Card";
import { card } from "@/data/card";

export default function Home() {
  return (
    <div className="flex flex-wrap w-full">
      {
        card.map((card) => <div key={card.id} className="w-1/4 px-2 py-5"><Card key={card.id} src={card.src} alt={card.alt} width={card.width} height={card.height} title={card.title} content={card.content} buttonContent={card.buttonContent}/></div>)
      }
    </div>
  );
}
