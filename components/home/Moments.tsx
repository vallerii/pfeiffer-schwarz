import { Frame } from "@/components/Frame";

type Moment = { title: string; tag: string; text: string; img: string; alt: string };

/** Ablauf als Reihe von Momenten. Die Reihenfolge steht in den Worten und Plaketten. */
export function Moments({ title, items }: { title: string; items: Moment[] }) {
  return (
    <div>
      <div className="wrap">
        <h2 className="h2">{title}</h2>
      </div>
      <ol className="wrap mt-10 grid grid-cols-2 gap-x-3 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
        {items.map((m) => (
          <li key={m.title} className="flex flex-col">
            <Frame src={m.img} alt={m.alt} ratio="4/5" label={m.tag} tone={1} sizes="(min-width: 1024px) 16vw, 72vw" />
            <h3 className="t-lead mt-4 font-semibold">{m.title}</h3>
            <p className="mt-2 text-slate">{m.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
