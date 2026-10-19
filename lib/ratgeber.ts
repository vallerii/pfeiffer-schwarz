/**
 * Ratgeber-Artikel. Text im einfachen Markdown-Format:
 * "## " Zwischenüberschrift, "### " Unterüberschrift, "- " Liste, "1. " nummerierte Liste,
 * "> " Hinweis-Box, [Linktext](/pfad), **fett**. Absätze durch Leerzeile getrennt.
 * Firmenspezifische Angaben in [eckigen Klammern] mit dem Kunden abstimmen.
 */
export type ArticleCat = "Hotel" | "Bau" | "Bad" | "Schaden";

export type RatgeberArticle = {
  slug: string;
  title: string;
  description: string;
  cat: ArticleCat;
  minutes: number;
  updated: string; // ISO
  img: string;
  service: { label: string; href: string };
  body: string;
};

export const articles: RatgeberArticle[] = [
  {
    slug: "hotelrenovierung-im-laufenden-betrieb",
    title: "Hotelrenovierung im laufenden Betrieb: So planen Sie ohne Umsatzverlust",
    description: "Etagenweise Planung, Lärmzeiten, Gästekommunikation – die wichtigsten Schritte für eine Renovierung, während Ihr Hotel geöffnet bleibt.",
    cat: "Hotel",
    minutes: 8,
    updated: "2026-10-19",
    img: "hotel-terrasse.jpg",
    service: { label: "Hotelrenovierung", href: "/hotelrenovierung" },
    body: `Ein Hotel zu schließen, um es zu renovieren, ist die einfachste Lösung – und meist die teuerste. Jede Nacht ohne Belegung fehlt im Umsatz, Stammgäste weichen auf die Konkurrenz aus, Mitarbeiter müssen anderweitig beschäftigt werden. Deshalb werden die meisten Hotelrenovierungen heute im laufenden Betrieb umgesetzt. Damit das funktioniert, muss die Baustelle wie ein Teil des Hotelbetriebs geplant werden.

## 1. Bauabschnitte nach Belegung planen

Grundlage ist der Belegungsplan der vergangenen Jahre. Daraus ergibt sich, wann welche Zimmerkategorien am wenigsten gebucht sind. Typisch ist eine Aufteilung nach Etagen oder Gebäudeflügeln: Gesperrt wird nur der Abschnitt, der gerade in Arbeit ist, der Rest bleibt buchbar.

- Abschnitte so wählen, dass Gäste nicht durch die Baustelle laufen müssen
- Zimmer mit gemeinsamen Steigleitungen (Bäder übereinander) zusammen umbauen
- Puffer für Lieferzeiten von Möbeln und Sanitärobjekten einplanen
- Saisonspitzen, Messen und Feiertage ausklammern

## 2. Musterzimmer zuerst

Bevor eine ganze Etage umgebaut wird, lohnt sich ein Musterzimmer. Hier zeigen sich Details, die in der Planung untergehen: Steckdosenpositionen, Lichtstimmung, Schallübertragung, Pflegeaufwand der Oberflächen. Änderungen am Muster kosten wenig, Änderungen an 60 fertigen Zimmern viel.

> Mit einer 3D-Planung sehen Sie das Ergebnis schon vor dem Musterzimmer. Material, Farben und Möbel lassen sich so früh festlegen – und Bestelllisten und Raumbuch entstehen direkt aus der Planung.

## 3. Lärm, Staub und Wege

Gäste stören sich weniger an der Tatsache, dass renoviert wird, als an unerwartetem Lärm. Legen Sie gemeinsam mit dem Ausführenden feste Zeitfenster für laute Arbeiten fest, zum Beispiel werktags zwischen 9 und 17 Uhr – außerhalb von Frühstück und Nachtruhe.

- Eigene Materialwege, idealerweise über Lastenaufzug oder Nebeneingang
- Staubschutzwände und abgeklebte Türen zum Gästebereich
- Tägliche Reinigung der Flure im Baubereich
- Ein fester Ansprechpartner vor Ort, der bei Beschwerden sofort reagiert

## 4. Gäste offen informieren

Ein kurzer Hinweis bei der Buchung und an der Rezeption verhindert die meisten Beschwerden. Zimmer, die direkt neben einem Bauabschnitt liegen, sollten nicht als ruhige Zimmer verkauft werden. Viele Hotels nutzen die Renovierung auch aktiv in der Kommunikation: „Wir erneuern unsere Zimmer für Sie.“

## 5. Ein Ansprechpartner für alle Gewerke

Bei einer Zimmerrenovierung greifen Trockenbau, Elektro, Sanitär, Fliesen, Maler, Bodenleger und Möbelmontage eng ineinander. Wenn jedes Gewerk einzeln beauftragt wird, liegt die Koordination beim Hotel – und jeder Verzug pflanzt sich fort. Ein Generalunternehmer mit eigenen Teams plant die Taktung so, dass pro Zimmer immer nur ein Gewerk arbeitet und die Zimmer in fester Reihenfolge fertig werden.

## Checkliste für den Start

1. Belegungsdaten der letzten zwei Jahre auswerten
2. Umfang festlegen: Zimmer, Bäder, Flure, Technik
3. Begehung und 3D-Planung, Musterzimmer abstimmen
4. Bauzeitenplan mit Bauabschnitten und Lärmzeiten
5. Gäste- und Mitarbeiterkommunikation vorbereiten

Sie planen eine Renovierung im laufenden Betrieb? [Sprechen Sie mit uns über Ihr Hotel](/hotelrenovierung#anfrage) – wir erstellen Ihnen einen Ablaufplan passend zu Ihrer Belegung.`,
  },
  {
    slug: "hotelzimmer-renovieren-kosten",
    title: "Hotelzimmer renovieren: Kosten pro Zimmer und Kostenfaktoren",
    description: "Wovon das Budget für eine Hotelzimmer-Renovierung abhängt – von der Auffrischung bis zur Kernsanierung mit Bad.",
    cat: "Hotel",
    minutes: 6,
    updated: "2026-10-19",
    img: "hotel-zimmer-2.jpg",
    service: { label: "Hotelzimmer renovieren", href: "/hotelrenovierung" },
    body: `„Was kostet ein Zimmer?“ ist die erste Frage jedes Hoteliers – und die ehrliche Antwort lautet: Es kommt darauf an, wie tief Sie eingreifen. Die Spanne reicht von einer Auffrischung mit Farbe und Textilien bis zur Kernsanierung mit neuem Bad und neuer Haustechnik. Damit Sie Ihr Budget realistisch einschätzen, hilft eine Einteilung in drei Stufen.

## Stufe 1: Auffrischung (Soft Refurbishment)

Wände streichen, neue Vorhänge und Tagesdecken, Leuchten tauschen, kleinere Reparaturen an Möbeln. Der Eingriff ist kurz, das Zimmer ist oft nach wenigen Tagen wieder buchbar.

- Malerarbeiten, Textilien, Dekoration
- Austausch von Leuchtmitteln und Leuchten
- Kosten: [X–X] € pro Zimmer

## Stufe 2: Renovierung mit neuen Möbeln und Boden

Zusätzlich zur Auffrischung werden Bodenbelag und Möbel erneuert, oft auch Kopfteil, Schreibtisch und Garderobe als Einbauten. Das Bad bleibt, wird aber aufgefrischt.

- Neuer Teppich oder Designbelag, Trittschall prüfen
- Objektmöbel nach Maß oder aus Serie
- Kosten: [X–X] € pro Zimmer

## Stufe 3: Kernsanierung mit Bad

Rückbau bis auf den Rohbau, neue Elektro- und Sanitärinstallation, neues Bad, oft verbesserter Schallschutz. Das ist die aufwendigste Variante – und die, die das Zimmer für die nächsten 15 bis 20 Jahre fit macht.

- Trockenbau, Elektro, Sanitär, Abdichtung, Fliesen
- Neue Möbel, Textilien, Licht
- Kosten: [X–X] € pro Zimmer

> Die Werte in eckigen Klammern sind Platzhalter und werden mit Erfahrungswerten aus unseren Projekten ergänzt. Verbindlich ist immer das Angebot nach Begehung.

## Die wichtigsten Kostenfaktoren

- **Zustand der Leitungen:** Alte Steigleitungen machen aus einer Badrenovierung schnell eine Strangsanierung.
- **Bad:** Das Bad ist meist der größte Einzelposten. Fugenlose Systeme können Bauzeit und Kosten senken.
- **Serie:** Je mehr gleiche Zimmer, desto günstiger pro Zimmer – Planung, Muster und Bestellung verteilen sich.
- **Betrieb:** Arbeiten im laufenden Betrieb kosten etwas mehr Koordination, sparen aber Umsatzausfall.
- **Möbel:** Serienmöbel sind günstiger, Maßanfertigungen nutzen den Raum besser.

## So sparen Sie, ohne an der Qualität zu sparen

1. Zimmertypen bündeln und gleich ausstatten
2. Lange Lieferzeiten früh bestellen, um Stillstand zu vermeiden
3. Bäder in Serie und mit festen Taktzeiten umbauen
4. Einen Generalunternehmer beauftragen, statt Gewerke einzeln zu koordinieren

Sie möchten wissen, was Ihre Zimmer kosten? [Fordern Sie eine Einschätzung an](/hotelrenovierung#anfrage) – nach einer Begehung erhalten Sie ein Angebot pro Zimmertyp.`,
  },
  {
    slug: "checkliste-hotelrenovierung-vor-der-saison",
    title: "Checkliste: Hotelrenovierung vor der Saison in 12 Wochen",
    description: "Was wann entschieden werden muss, damit die Zimmer zum Saisonstart fertig sind – Woche für Woche.",
    cat: "Hotel",
    minutes: 5,
    updated: "2026-10-19",
    img: "hotel-spa.jpg",
    service: { label: "Hotelrenovierung", href: "/hotelrenovierung" },
    body: `Zwölf Wochen klingen nach viel Zeit – bis die ersten Lieferzeiten bekannt sind. Diese Checkliste zeigt, welche Entscheidungen wann fallen müssen, damit Ihre renovierten Zimmer pünktlich zum Saisonstart buchbar sind.

## Woche 12 bis 10: Umfang und Planung

- Ziel und Budget festlegen: Auffrischung oder Sanierung?
- Begehung mit dem Ausführenden, Aufmaß aller betroffenen Räume
- 3D-Planung oder Musterzimmer beauftragen
- Belegungsplan prüfen und Bauabschnitte festlegen

## Woche 10 bis 8: Entscheidungen und Bestellung

- Materialien, Farben und Möbel freigeben
- Bestellung von Artikeln mit langer Lieferzeit: Möbel, Sanitärobjekte, Leuchten, Teppich
- Angebot und Bauzeitenplan unterschreiben
- Genehmigungen prüfen, etwa beim Brandschutz

> Die häufigste Ursache für Verzug sind späte Entscheidungen. Wer in Woche 9 noch über Fliesen diskutiert, verliert die Woche am Ende.

## Woche 8 bis 6: Vorbereitung

- Musterzimmer umsetzen und abnehmen
- Gäste- und Mitarbeiterinformation vorbereiten
- Lager- und Materialwege im Haus festlegen
- Zimmer der ersten Bauabschnitte aus dem Verkauf nehmen

## Woche 6 bis 1: Ausführung

- Umbau in Abschnitten, wöchentliche Baubesprechung
- Laufende Teilabnahmen fertiger Zimmer
- Endreinigung und Möblierung pro Abschnitt

## Woche 0: Übergabe

- Gemeinsame Abnahme mit Mängelliste
- Dokumentation: Materialien, Pflegehinweise, Gewährleistung
- Fotos für Website und Buchungsportale

Wenn Sie früher anfangen, sinkt das Risiko deutlich. [Sprechen Sie uns jetzt an](/hotelrenovierung#anfrage), dann planen wir Ihre Saisonvorbereitung rückwärts vom Eröffnungstermin.`,
  },
  {
    slug: "schallschutz-hotelzimmer-renovierung",
    title: "Schallschutz bei der Hotelzimmer-Renovierung",
    description: "Was Gäste hören – und wie man es bei der Renovierung verhindert: Wände, Decken, Türen und Installationen.",
    cat: "Hotel",
    minutes: 5,
    updated: "2026-10-19",
    img: "hotel-zimmer.jpg",
    service: { label: "Trockenbau & Schallschutz", href: "/bau-innenausbau/trockenbau" },
    body: `Lärm aus dem Nachbarzimmer gehört zu den häufigsten Beschwerden in Hotelbewertungen. Eine Renovierung ist die beste Gelegenheit, den Schallschutz zu verbessern – denn viele Maßnahmen lassen sich nur umsetzen, wenn Wände und Böden ohnehin offen sind.

## Woher der Lärm kommt

- **Luftschall:** Stimmen und Fernseher dringen durch Wände und Türen.
- **Trittschall:** Schritte und Stühle aus dem Zimmer darüber.
- **Installationsgeräusche:** Wasserrauschen und Spülkästen aus Bädern und Steigleitungen.
- **Flurgeräusche:** Gespräche und Rollkoffer, oft durch undichte Türen.

## Wände: Vorsatzschalen und Trennwände

Bestehende Wände lassen sich mit einer frei stehenden Vorsatzschale aus Gipskarton und Mineralwolle deutlich verbessern. Entscheidend ist, dass die Schale nicht starr mit der alten Wand verbunden ist. Neue Trennwände in Trockenbau erreichen mit doppelter Beplankung und getrenntem Ständerwerk sehr gute Werte.

> Steckdosen „Rücken an Rücken“ in beiden Zimmern sind eine klassische Schallbrücke. Bei der Planung versetzen.

## Böden: Trittschalldämmung

Beim Austausch des Bodenbelags kann eine Trittschalldämmung ergänzt werden. Teppich dämpft von Natur aus gut, bei Designbelag oder Parkett ist die Unterlage entscheidend. Bei einer Kernsanierung ist ein schwimmender Estrich die wirksamste Lösung.

## Türen und Installationen

- Zimmertüren mit geprüftem Schallschutz und umlaufender Dichtung
- Sanitärinstallation in Vorwand mit schalldämmender Befestigung
- Rohrleitungen in Durchbrüchen körperschallentkoppelt einbauen

## Messbar besser

Wer sichergehen will, lässt vor und nach der Renovierung eine Schallmessung durchführen. So lässt sich der Erfolg belegen – auch gegenüber Gästen und Bewertungsportalen.

Mehr zu den Möglichkeiten im [Trockenbau](/bau-innenausbau/trockenbau) oder direkt [ein Hotelprojekt anfragen](/hotelrenovierung#anfrage).`,
  },
  {
    slug: "wasserschaden-versicherung-was-tun",
    title: "Wasserschaden: Was zahlt die Versicherung – und was tun Sie zuerst?",
    description: "Checkliste für die ersten 24 Stunden nach einem Wasserschaden und welche Versicherung welchen Schaden trägt.",
    cat: "Schaden",
    minutes: 5,
    updated: "2026-10-19",
    img: "estrich-1.jpg",
    service: { label: "Wasserschaden-Sanierung", href: "/schadensanierung/wasserschaden" },
    body: `Ein geplatztes Rohr, eine undichte Waschmaschine, Starkregen im Keller: Bei einem Wasserschaden zählt jede Stunde. Je schneller Sie handeln, desto kleiner bleibt der Schaden – und desto reibungsloser läuft die Regulierung mit der Versicherung.

## Die ersten Schritte

1. **Wasser stoppen:** Hauptwasserhahn schließen, bei Bedarf Strom in den betroffenen Räumen abschalten.
2. **Dokumentieren:** Fotos und Videos von allen Schäden, bevor aufgeräumt wird.
3. **Versicherung informieren:** Schaden unverzüglich melden, am besten schriftlich mit Fotos.
4. **Schaden begrenzen:** Wasser aufnehmen, Möbel hochstellen, lüften. Das gehört zu Ihrer Pflicht, den Schaden gering zu halten.
5. **Fachbetrieb beauftragen:** Leckageortung, Trocknung und Sanierung – in Absprache mit der Versicherung.

> Werfen Sie beschädigte Gegenstände nicht vorschnell weg. Die Versicherung oder ein Gutachter möchte sie unter Umständen sehen.

## Welche Versicherung zahlt was?

- **Wohngebäudeversicherung:** Schäden am Gebäude durch Leitungswasser, also Wände, Böden, Estrich, fest eingebaute Teile. Sie ist Sache des Eigentümers.
- **Hausratversicherung:** Beschädigte Einrichtung wie Möbel, Kleidung und Elektrogeräte.
- **Elementarschadenversicherung:** Schäden durch Starkregen, Hochwasser oder Rückstau sind nur abgedeckt, wenn diese Zusatzversicherung besteht.
- **Haftpflichtversicherung:** Verursacht jemand anderes den Schaden, etwa ein Nachbar, kann dessen Haftpflicht zuständig sein.

Welche Leistungen genau versichert sind, regelt Ihr Vertrag. Prüfen Sie Selbstbeteiligung und Ausschlüsse, bevor Sie Aufträge vergeben.

## Trocknung: Warum sie oft länger dauert als gedacht

Wasser zieht in Estrich, Dämmung und Mauerwerk. Was oberflächlich trocken aussieht, ist es oft nicht. Deshalb wird die Feuchte gemessen und bei Bedarf technisch getrocknet, etwa mit Kondenstrocknern oder einer Unterflurtrocknung. Erst wenn die Messwerte stimmen, wird saniert – sonst droht Schimmel.

## Sanierung aus einer Hand

Nach der Trocknung folgen Putz, Estrich, Fliesen, Maler und Bodenbeläge. Wenn diese Arbeiten aus einer Hand kommen, haben Sie einen Ansprechpartner und eine Rechnung, die sich gegenüber der Versicherung klar belegen lässt.

Wasserschaden? [Rufen Sie uns an](tel:+492754220430) – wir unterstützen Sie von der Trocknung bis zur Abwicklung mit der Versicherung.`,
  },
  {
    slug: "fliesen-auf-fussbodenheizung",
    title: "Fliesen auf Fußbodenheizung: Darauf kommt es an",
    description: "Kleber, Aufheizprotokoll, Format – was Sie vor der Verlegung von Fliesen auf einer Fußbodenheizung wissen sollten.",
    cat: "Bau",
    minutes: 4,
    updated: "2026-10-19",
    img: "fliesen-boden.jpg",
    service: { label: "Fliesenarbeiten", href: "/bau-innenausbau/fliesenarbeiten" },
    body: `Fliesen und Fußbodenheizung passen hervorragend zusammen: Keramik leitet Wärme gut, speichert sie und ist unempfindlich gegenüber Temperaturwechseln. Damit der Boden dauerhaft rissfrei bleibt, kommt es aber auf ein paar Details an.

## Der Estrich muss bereit sein

Ein neuer Heizestrich wird vor dem Belegen nach einem Aufheizprotokoll schrittweise aufgeheizt und wieder abgekühlt. So wird Restfeuchte ausgetrieben und Spannungen werden abgebaut. Ohne dieses Protokoll übernimmt kein Fliesenleger die Gewährleistung.

- Aufheizprotokoll vom Heizungsbauer oder Estrichleger anfordern
- Restfeuchte vor dem Verlegen messen
- Bewegungsfugen des Estrichs im Fliesenbelag übernehmen

> Der richtige Moment zum Fliesen ist nicht „wenn es trocken aussieht“, sondern wenn die Messung die Belegreife bestätigt.

## Kleber und Verlegung

Auf Fußbodenheizung werden flexible Kleber verwendet, die Temperaturbewegungen aufnehmen. Wichtig ist eine vollflächige Verlegung ohne Hohlstellen – Luftpolster dämmen die Wärme und können zu Brüchen führen. Bei großen Formaten wird deshalb sowohl auf den Untergrund als auch auf die Fliesenrückseite Kleber aufgetragen.

## Welches Format?

Grundsätzlich eignen sich alle Formate. Großformate brauchen einen besonders ebenen Untergrund und erfahrene Verleger. Dünne Fliesen erwärmen sich schneller, dicke speichern länger.

## Nach der Verlegung

Nach dem Verfugen braucht der Belag einige Tage, bevor die Heizung langsam wieder hochgefahren wird. Die genaue Wartezeit richtet sich nach den Herstellerangaben von Kleber und Fuge.

Sie planen neue Fliesen auf Fußbodenheizung? [Fordern Sie eine kostenlose Einschätzung an](/bau-innenausbau/fliesenarbeiten#anfrage).`,
  },
  {
    slug: "grossformatige-fliesen-vor-und-nachteile",
    title: "Großformatige Fliesen: Vor- und Nachteile im Überblick",
    description: "Wann sich 60×120 und größer lohnt – und was der Untergrund leisten muss.",
    cat: "Bau",
    minutes: 5,
    updated: "2026-10-19",
    img: "fliesen-dusche-2.jpg",
    service: { label: "Fliesenarbeiten", href: "/bau-innenausbau/fliesenarbeiten" },
    body: `Großformatige Fliesen ab 60 × 120 cm sind aus modernen Bädern und Wohnräumen kaum wegzudenken. Sie wirken ruhig und großzügig – stellen aber höhere Anforderungen an Planung und Verlegung.

## Die Vorteile

- **Ruhiges Bild:** Wenige Fugen lassen Räume größer wirken.
- **Leichte Pflege:** Weniger Fugen bedeuten weniger Stellen, an denen sich Schmutz absetzt.
- **Vielseitig:** Steinoptik, Beton, Holz – auch an der Wand oder als Küchenrückwand.
- **Fließende Übergänge:** Innen und außen mit demselben Material möglich.

## Die Herausforderungen

- **Ebener Untergrund:** Unebenheiten zeichnen sich sofort ab. Oft ist ein Ausgleich nötig.
- **Transport und Zuschnitt:** Große Platten sind schwer und brauchen Spezialwerkzeug.
- **Verlegung:** Vollflächig, ohne Hohlstellen, mit Nivelliersystem gegen Versatz.
- **Preis:** Material und Verlegung sind teurer als bei Standardformaten.

> Bei kleinen Bädern lohnt eine Planung vorab: Großformate an der Wand und ein kleineres Format im Duschbereich, wo Gefälle nötig ist, sind oft die beste Kombination.

## Im Duschbereich

Bodengleiche Duschen brauchen Gefälle. Mit einer Duschrinne an der Wand lässt sich das Gefälle in eine Richtung legen – dann funktionieren auch große Platten. Bei einem Punktablauf in der Mitte sind kleinere Formate oder Mosaik praktischer.

## Fazit

Großformate lohnen sich, wenn der Untergrund stimmt und ein erfahrener Fliesenleger verlegt. Der Mehraufwand zahlt sich durch eine ruhige, pflegeleichte Fläche aus.

Sie überlegen, großformatig zu fliesen? [Schicken Sie uns Fotos Ihres Raums](/bau-innenausbau/fliesenarbeiten#anfrage) – wir sagen Ihnen, was der Untergrund braucht.`,
  },
  {
    slug: "fliesen-oder-fugenloses-bad",
    title: "Fliesen oder fugenloses Bad? Der ehrliche Vergleich",
    description: "Kosten, Bauzeit, Pflege – klassisch gefliestes Bad und fugenloses Bad im direkten Vergleich.",
    cat: "Bad",
    minutes: 4,
    updated: "2026-10-19",
    img: "fliesen-bad-1.jpg",
    service: { label: "Bad in 3 Tagen", href: "/bad-in-3-tagen" },
    body: `Wer sein Bad erneuert, steht heute vor der Wahl: klassisch fliesen oder fugenlos beschichten? Wir bieten beides an – deshalb können wir ehrlich sagen, wann was passt.

## Das geflieste Bad

Fliesen sind der Klassiker: langlebig, robust und in unendlich vielen Varianten erhältlich. Vom Mosaik bis zur großformatigen Platte ist gestalterisch fast alles möglich.

- Große Auswahl an Formaten, Farben und Oberflächen
- Sehr widerstandsfähig, einzelne Fliesen austauschbar
- Bauzeit meist mehrere Wochen, inklusive Trocknungszeiten
- Fugen brauchen regelmäßige Pflege

## Das fugenlose Bad

Beim fugenlosen Bad wird eine Beschichtung direkt auf die vorhandenen Flächen aufgetragen – oft ohne die alten Fliesen abzuschlagen. Das spart Schmutz, Lärm und Zeit. Mit unserem System Mein Zauberbad ist ein Bad in der Regel in rund drei Tagen fertig.

- Kaum Abriss, wenig Staub
- Keine Fugen, sehr pflegeleicht
- Kurze Bauzeit, Festpreis
- Gestaltung über Farben und Strukturen statt Formate

> Für Mietwohnungen, Hotelbäder und alle, die ihr Bad nicht wochenlang entbehren können, ist fugenlos oft die bessere Wahl.

## Was kostet was?

Die Kosten hängen von Größe und Ausstattung ab. Beim fugenlosen Bad entfällt ein großer Teil von Rückbau, Entsorgung und Trocknungszeit. Beim gefliesten Bad bezahlen Sie mehr Handwerksstunden, erhalten aber maximale Gestaltungsfreiheit. Einen Festpreis für das fugenlose Bad gibt es nach dem Termin vor Ort.

## Unsere Empfehlung

- **Fliesen**, wenn Sie das Bad komplett neu aufteilen, Leitungen verlegen oder ein bestimmtes Format wünschen.
- **Fugenlos**, wenn die Raumaufteilung bleibt und das Bad schnell wieder nutzbar sein soll.

Mehr zum fugenlosen Bad auf [meinzauberbad.de](https://meinzauberbad.de/) oder zum klassischen Weg bei unseren [Fliesenarbeiten](/bau-innenausbau/fliesenarbeiten).`,
  },
  {
    slug: "bodengleiche-dusche-nachruesten-altbau",
    title: "Bodengleiche Dusche nachrüsten: Geht das im Altbau?",
    description: "Gefälle, Abdichtung, Aufbauhöhe – worauf es beim Einbau einer bodengleichen Dusche im Bestand ankommt.",
    cat: "Bad",
    minutes: 6,
    updated: "2026-10-19",
    img: "fliesen-dusche-4.jpg",
    service: { label: "Sanitär & Badsanierung", href: "/bau-innenausbau/sanitaer" },
    body: `Eine bodengleiche Dusche ist bequem, sieht modern aus und ist die Basis für ein barrierefreies Bad. Im Neubau ist sie Standard – im Altbau fragt man sich oft: Geht das überhaupt? Meist ja. Entscheidend sind drei Punkte.

## 1. Der Abfluss braucht Gefälle

Das Wasser muss vom Ablauf bis zur Fallleitung mit ausreichend Gefälle abfließen. Im Altbau liegt der Anschluss oft zu hoch oder zu weit entfernt. Lösungen:

- **Flache Bodenabläufe** mit geringer Einbauhöhe
- **Leichtes Anheben** des gesamten Badbodens
- **Pumpe** als letzte Möglichkeit, wenn kein Gefälle möglich ist

## 2. Die Aufbauhöhe

Im Bestand ist der Boden oft nicht dick genug für Ablauf, Gefälle und Belag. Hier hilft ein genaues Aufmaß: Manchmal reicht es, den alten Estrich im Duschbereich zu entfernen und neu mit Gefälle aufzubauen.

> Bei Holzbalkendecken prüfen wir zusätzlich die Statik und wählen leichte Aufbauten.

## 3. Abdichtung ohne Kompromisse

Bodengleiche Duschen sind besonders feuchtebelastet. Unter den Fliesen wird deshalb eine Verbundabdichtung aufgebracht, Ecken und Durchdringungen werden mit Dichtbändern und Manschetten gesichert. Das ist der wichtigste Arbeitsschritt – und der, den man später nicht mehr sieht.

## Rinne oder Punktablauf?

- **Duschrinne:** Gefälle in eine Richtung, ideal für große Fliesen.
- **Punktablauf:** Gefälle zur Mitte, besser für kleine Formate oder Mosaik.

## Was kostet das?

Die Kosten hängen davon ab, wie viel am Boden verändert werden muss. Nach einer Besichtigung erhalten Sie ein Angebot – inklusive Abdichtung und Fliesen aus einer Hand.

Bei Pflegegrad kann die Pflegekasse den Umbau bezuschussen, mehr dazu in unserem Artikel [Barrierefreies Bad: Welche Zuschüsse gibt es?](/ratgeber/barrierefreies-bad-zuschuesse). Ihre Dusche planen wir gern: [Einschätzung anfordern](/bau-innenausbau/sanitaer#anfrage).`,
  },
  {
    slug: "badsanierung-ablauf-dauer",
    title: "Badsanierung: Ablauf und Dauer Schritt für Schritt",
    description: "Was wann passiert – vom Aufmaß über den Rückbau bis zur Abnahme – und wie lange eine Badsanierung dauert.",
    cat: "Bad",
    minutes: 6,
    updated: "2026-10-19",
    img: "sanitaer-2.jpg",
    service: { label: "Sanitär & Badsanierung", href: "/bau-innenausbau/sanitaer" },
    body: `Eine Badsanierung ist ein Projekt mit vielen Gewerken auf wenigen Quadratmetern. Wer den Ablauf kennt, kann besser planen – und weiß, warum manche Schritte Zeit brauchen.

## 1. Beratung und Aufmaß

Vor Ort werden Raum, Leitungen und Abflüsse aufgenommen. Gleichzeitig klären wir Ihre Wünsche: Dusche oder Wanne, Stauraum, Licht, Barrierefreiheit.

## 2. 3D-Planung und Angebot

In der 3D-Planung sehen Sie Ihr neues Bad, bevor gebaut wird. Fliesen, Objekte und Möbel werden festgelegt, danach erhalten Sie ein Angebot mit allen Positionen.

## 3. Rückbau

Alte Fliesen, Objekte und Leitungen werden entfernt und entsorgt. Das ist der lauteste und staubigste Teil – meist nach ein bis zwei Tagen erledigt.

## 4. Installation

Neue Wasser- und Abwasserleitungen, Elektroanschlüsse und Vorwandinstallationen für WC und Waschtisch werden gesetzt. Danach werden die Wände geschlossen, etwa mit Feuchtraumplatten.

## 5. Estrich und Abdichtung

Wo nötig, wird neuer Estrich eingebracht, zum Beispiel mit Gefälle für eine bodengleiche Dusche. Anschließend wird die Abdichtung aufgetragen.

> Estrich und Abdichtung brauchen Trocknungszeit. Diese Pause ist kein Leerlauf, sondern Voraussetzung für ein dichtes Bad.

## 6. Fliesen

Wand- und Bodenfliesen werden verlegt und verfugt, Anschlussfugen mit Silikon geschlossen.

## 7. Endmontage und Abnahme

WC, Waschtisch, Armaturen, Duschabtrennung, Spiegel und Leuchten werden montiert. Zum Schluss gehen wir das Bad gemeinsam mit Ihnen durch.

## Wie lange dauert es?

Ein komplett neu gefliestes Bad dauert je nach Größe und Umfang in der Regel [X–X] Wochen. Wenn die Raumaufteilung bleibt, ist ein fugenloses Bad mit Mein Zauberbad meist in rund drei Tagen fertig – mehr dazu im Vergleich [Fliesen oder fugenloses Bad?](/ratgeber/fliesen-oder-fugenloses-bad)

Ihr Bad planen wir gern: [Kostenlose Einschätzung anfordern](/bau-innenausbau/sanitaer#anfrage).`,
  },
  {
    slug: "barrierefreies-bad-zuschuesse",
    title: "Barrierefreies Bad: Welche Zuschüsse gibt es?",
    description: "Pflegekasse, KfW und regionale Programme: Welche Förderung es für den barrierefreien Badumbau gibt und was Sie beachten müssen.",
    cat: "Bad",
    minutes: 5,
    updated: "2026-10-19",
    img: "fliesen-dusche-3.jpg",
    service: { label: "Sanitär & Badsanierung", href: "/bau-innenausbau/sanitaer" },
    body: `Bodengleiche Dusche, unterfahrbarer Waschtisch, Haltegriffe: Ein barrierefreies Bad erleichtert den Alltag – heute und im Alter. Für den Umbau gibt es Zuschüsse. Hier ein Überblick, Stand Oktober 2026.

## Pflegekasse: bis zu 4.180 € pro Maßnahme

Wer einen anerkannten Pflegegrad hat (1 bis 5), kann bei der Pflegekasse einen Zuschuss für „wohnumfeldverbessernde Maßnahmen“ beantragen. Er beträgt bis zu 4.180 € pro Maßnahme und Person. Leben mehrere Pflegebedürftige im Haushalt, kann der Zuschuss für bis zu vier Personen kombiniert werden.

- Voraussetzung: anerkannter Pflegegrad
- Der Umbau muss die Pflege zu Hause ermöglichen, erleichtern oder ein selbstständigeres Leben ermöglichen
- **Wichtig:** Antrag vor Beginn der Arbeiten stellen

> Ein Kostenvoranschlag gehört zum Antrag. Den erstellen wir Ihnen nach einem Termin vor Ort.

## KfW: Zuschuss derzeit nicht beantragbar

Der KfW-Zuschuss „Barrierereduzierung“ (Programm 455-B) ist seit dem 31. Juli 2026 für neue Anträge geschlossen, weil die Mittel für 2026 ausgeschöpft sind. Ob er wieder öffnet, gibt die KfW auf ihrer Website bekannt. Weiterhin möglich ist der zinsgünstige Kredit „Altersgerecht Umbauen“ (Programm 159).

## Weitere Möglichkeiten

- **Steuer:** Handwerkerleistungen können anteilig von der Steuer abgesetzt werden.
- **Regionale Programme:** Manche Länder und Kommunen fördern barrierefreies Wohnen zusätzlich – eine Nachfrage bei Stadt oder Kreis lohnt sich.
- **Weitere Kostenträger:** Je nach Situation kommen auch Unfallversicherung oder andere Träger in Frage.

## Was macht ein Bad barrierefrei?

- Bodengleiche Dusche mit rutschhemmendem Belag
- Ausreichende Bewegungsflächen, etwa für einen Rollator
- Unterfahrbarer Waschtisch, Haltegriffe, ggf. erhöhtes WC
- Türen, die nach außen öffnen

Die genauen Anforderungen beschreibt die DIN 18040-2. Nicht jedes Bad muss sie vollständig erfüllen – oft reichen gezielte Maßnahmen.

Die Angaben zur Förderung ersetzen keine Beratung durch Ihre Pflegekasse. Den Umbau planen wir gern mit Ihnen: [Einschätzung anfordern](/bau-innenausbau/sanitaer#anfrage).`,
  },
  {
    slug: "wandgestaltung-farbe-tapete-putz",
    title: "Wandgestaltung: Farbe, Tapete oder Putz?",
    description: "Was zu welchem Raum passt – Vor- und Nachteile von Anstrich, Tapete und Putz im Überblick.",
    cat: "Bau",
    minutes: 5,
    updated: "2026-10-19",
    img: "maler-4.jpg",
    service: { label: "Malerarbeiten", href: "/bau-innenausbau/malerarbeiten" },
    body: `Die Wand ist die größte Fläche im Raum – und prägt ihn entsprechend. Farbe, Tapete und Putz haben jeweils ihre Stärken. Hier ein Überblick, was wann passt.

## Farbe

Der Klassiker: schnell, günstig, vielseitig. Moderne Farben sind scheuerbeständig und in nahezu jedem Ton mischbar.

- **Dispersionsfarbe:** Standard für Wohnräume, einfach zu verarbeiten
- **Silikatfarbe:** mineralisch, diffusionsoffen, gut für Allergiker und Altbauten
- **Latexfarbe:** sehr robust und abwaschbar, gut für Flure und Küchen

> Je glatter die Wand, desto edler wirkt Farbe. Für Streiflicht und große Fensterflächen lohnt eine Spachtelung in hoher Qualitätsstufe.

## Tapete

Tapeten bringen Struktur und Muster in den Raum. Malervlies ist heute der beliebteste Untergrund: Es überbrückt feine Risse und lässt sich später wieder trocken abziehen.

- Kaschiert kleine Unebenheiten
- Designtapeten für Akzentwände
- Mehr Aufwand bei Wechsel und Feuchträumen

## Putz

Putz ist Gestaltungselement und Bauteil zugleich. Kalk- und Lehmputze regulieren die Raumfeuchte, Dekorputze erzeugen Strukturen von fein bis rustikal.

- Natürliches Raumklima mit Kalk oder Lehm
- Sehr langlebig, kaum Verschleiß
- Höherer Aufwand und Preis als Farbe

## Welche Lösung für welchen Raum?

- **Wohn- und Schlafzimmer:** Farbe auf Vlies oder glatter Spachtelung, Akzente mit Tapete
- **Flur und Treppenhaus:** robuste, abwaschbare Farbe
- **Bad:** Feuchtraumgeeignete Farbe oder Kalkputz
- **Altbau:** Silikatfarbe oder Kalkputz, diffusionsoffen

Unsere Maler beraten Sie gern vor Ort: [Malerarbeiten anfragen](/bau-innenausbau/malerarbeiten#anfrage).`,
  },
  {
    slug: "buero-modernisieren-ohne-betriebsunterbrechung",
    title: "Büro modernisieren ohne Betriebsunterbrechung",
    description: "Abschnittsweise planen, Lärm und Staub minimieren: So bleibt Ihr Team während der Modernisierung arbeitsfähig.",
    cat: "Bau",
    minutes: 6,
    updated: "2026-10-19",
    img: "innenausbau-4.jpg",
    service: { label: "Innenausbau", href: "/bau-innenausbau/innenausbau" },
    body: `Neue Raumaufteilung, bessere Akustik, frische Oberflächen – eine Büromodernisierung steigert Zufriedenheit und Produktivität. Die Sorge vieler Unternehmen: Wie arbeiten wir während des Umbaus weiter? Mit der richtigen Planung meist ohne große Einschränkungen.

## Bauabschnitte statt Komplettumzug

Statt das ganze Büro gleichzeitig umzubauen, wird es in Abschnitte geteilt. Ein Team zieht vorübergehend in einen fertigen oder freien Bereich, während der nächste umgebaut wird.

- Abschnitte nach Abteilungen oder Etagen
- Interimsflächen früh einplanen
- IT und Telefonie für jeden Umzug mitdenken

## Laute Arbeiten außerhalb der Kernzeit

Abbruch, Bohren und Schleifen lassen sich in frühe Morgenstunden, Abende oder Wochenenden legen. Leisere Arbeiten wie Malern oder Montage laufen tagsüber.

> Ein gemeinsamer Bauzeitenplan mit Ihrem Office-Management verhindert Überraschungen – zum Beispiel laute Arbeiten während eines Kundentermins.

## Staub und Geruch im Griff

- Staubschutzwände und Unterdruck in Abbruchbereichen
- Emissionsarme Farben und Kleber
- Tägliche Reinigung der Laufwege

## Trockenbau: schnell und sauber

Für neue Raumaufteilungen ist Trockenbau ideal: Wände stehen schnell, es entsteht kaum Feuchtigkeit, und die Räume lassen sich später wieder verändern. Mit Akustikdecken und Schallschutzwänden wird es im Großraum spürbar ruhiger.

## Ein Ansprechpartner

Bei einer Büromodernisierung arbeiten viele Gewerke zusammen. Wenn ein Unternehmen die Koordination übernimmt, haben Sie einen festen Ansprechpartner und einen verbindlichen Zeitplan.

Sie planen eine Modernisierung? [Sprechen Sie mit uns](/bau-innenausbau/innenausbau#anfrage) – wir erstellen einen Ablauf, der zu Ihrem Arbeitsalltag passt.`,
  },
  {
    slug: "generalunternehmer-oder-einzelgewerke",
    title: "Generalunternehmer oder Einzelgewerke? Vor- und Nachteile",
    description: "Wann sich ein Ansprechpartner für alles lohnt – und wann die Einzelvergabe sinnvoll ist.",
    cat: "Bau",
    minutes: 5,
    updated: "2026-10-19",
    img: "team-einsatz.jpg",
    service: { label: "Bau & Innenausbau", href: "/bau-innenausbau" },
    body: `Bei jeder größeren Renovierung stellt sich die Frage: Beauftrage ich jedes Gewerk einzeln oder ein Unternehmen, das alles übernimmt? Beides hat Vor- und Nachteile.

## Einzelvergabe

Sie beauftragen Maler, Fliesenleger, Trockenbauer und Installateur selbst.

- **Vorteil:** Sie wählen jeden Handwerker selbst aus und vergleichen Preise im Detail.
- **Vorteil:** Bei kleinen Projekten mit ein bis zwei Gewerken oft günstiger.
- **Nachteil:** Die Koordination liegt bei Ihnen – Termine, Schnittstellen, Verzug.
- **Nachteil:** Bei Mängeln an Übergängen schieben sich Gewerke die Verantwortung zu.

## Generalunternehmer

Ein Unternehmen übernimmt das gesamte Projekt und koordiniert alle Gewerke.

- **Vorteil:** Ein Ansprechpartner, ein Vertrag, ein Bauzeitenplan.
- **Vorteil:** Klare Verantwortung für das Gesamtergebnis und die Gewährleistung.
- **Vorteil:** Abgestimmte Abläufe, weniger Leerlauf zwischen den Gewerken.
- **Nachteil:** Für die Koordination fällt ein Aufschlag an.

> Der größte Unterschied liegt nicht im Preis, sondern im Risiko: Beim Generalunternehmer trägt er das Koordinationsrisiko, bei der Einzelvergabe tragen Sie es.

## Eigene Teams oder Subunternehmer?

Nicht jeder Generalunternehmer führt die Arbeiten selbst aus. Viele vergeben weiter an Subunternehmer. Fragen Sie nach, welche Gewerke mit eigenem Personal ausgeführt werden – das wirkt sich auf Qualität, Flexibilität und Termintreue aus.

## Wann lohnt sich was?

- **Einzelvergabe:** ein Gewerk, klarer Umfang, Sie haben Zeit für die Koordination
- **Generalunternehmer:** mehrere Gewerke, enger Zeitrahmen, laufender Betrieb, Hotel oder Gewerbe

Wir führen Fliesen, Maler, Trockenbau, Putz, Estrich und Sanitär mit eigenen Teams aus – einzeln oder komplett. [Sprechen Sie uns an](/#anfrage).`,
  },
  {
    slug: "trockenbau-oder-massivwand",
    title: "Trockenbau oder Massivwand: Was passt wann?",
    description: "Kosten, Schallschutz, Bauzeit und Belastbarkeit im Vergleich – und wann welche Wand die richtige ist.",
    cat: "Bau",
    minutes: 5,
    updated: "2026-10-19",
    img: "trockenbau-1.jpg",
    service: { label: "Trockenbau", href: "/bau-innenausbau/trockenbau" },
    body: `Eine neue Wand soll her – aber welche? Trockenbau aus Ständerwerk und Gipskarton oder eine gemauerte Massivwand? Beide haben ihre Berechtigung.

## Trockenbau

Eine Konstruktion aus Metallprofilen, beplankt mit Gipskarton- oder Gipsfaserplatten, im Inneren Dämmung.

- **Schnell:** Eine Wand steht oft in einem Tag.
- **Trocken:** Keine Feuchtigkeit im Bau, sofort weiterarbeiten.
- **Leicht:** Ideal auf Holzbalkendecken und in Obergeschossen.
- **Flexibel:** Leitungen lassen sich einfach integrieren, die Wand später wieder entfernen.
- **Schallschutz:** Mit der richtigen Konstruktion sehr gut, oft besser als eine dünne Massivwand.

## Massivwand

Gemauert aus Kalksandstein, Porenbeton oder Ziegel, anschließend verputzt.

- **Belastbar:** Schwere Hängeschränke ohne Zusatzmaßnahmen.
- **Speichermasse:** Gut für Raumklima und Wärmespeicherung.
- **Robust:** Unempfindlich gegen Stöße.
- **Aufwand:** Längere Bauzeit, Putz muss trocknen, schwerer.

> Schwere Lasten sind auch im Trockenbau kein Problem – wenn Verstärkungen von Anfang an eingeplant werden. Sagen Sie uns vorher, was an die Wand soll.

## Was passt wann?

- **Büro, Praxis, Hotelzimmer:** meist Trockenbau – schnell, flexibel, guter Schallschutz
- **Dachgeschoss und Altbau mit Holzdecken:** Trockenbau wegen des geringen Gewichts
- **Tragende Wände, Außenwände:** immer massiv
- **Nassbereiche:** beides möglich, im Trockenbau mit Feuchtraumplatten und Abdichtung

Unsere Trockenbauer beraten Sie gern: [Trockenbau anfragen](/bau-innenausbau/trockenbau#anfrage).`,
  },
  {
    slug: "estrich-arten-trocknungszeit-belegreife",
    title: "Estrich: Arten, Trocknungszeit, Belegreife",
    description: "Welcher Estrich wann passt, wie lange er braucht und woran man erkennt, dass Fliesen oder Parkett verlegt werden können.",
    cat: "Bau",
    minutes: 6,
    updated: "2026-10-19",
    img: "estrich-1.jpg",
    service: { label: "Putz & Estrich", href: "/bau-innenausbau/putz-estrich" },
    body: `Estrich ist die Schicht zwischen Rohdecke und Bodenbelag. Er gleicht Unebenheiten aus, verteilt Lasten, nimmt die Fußbodenheizung auf und dient zusammen mit der Dämmung dem Trittschall- und Wärmeschutz. Welcher Estrich der richtige ist, hängt vom Projekt ab.

## Die wichtigsten Estricharten

- **Zementestrich (CT):** robust, feuchtigkeitsunempfindlich, für Bäder, Keller und Gewerbe. Braucht vergleichsweise lange zum Trocknen.
- **Calciumsulfatestrich (CA), oft als Fließestrich:** sehr eben, gut für Fußbodenheizung, trocknet schneller – aber nicht für dauerhaft nasse Bereiche.
- **Schnellestrich:** Zementestrich mit Zusätzen, nach wenigen Tagen belegreif. Teurer, aber ideal bei engem Zeitplan.
- **Trockenestrich:** Platten statt nasser Masse, sofort belegbar und leicht – oft die Lösung im Altbau.

## Verlegearten

- **Schwimmender Estrich:** auf Dämmung, vom Bauwerk getrennt – Standard im Wohnbau wegen des Trittschallschutzes.
- **Verbundestrich:** fest mit dem Untergrund verbunden, für hohe Lasten.
- **Estrich auf Trennlage:** vom Untergrund getrennt, etwa auf alten Belägen.

## Wie lange muss Estrich trocknen?

Als grobe Faustregel gilt bei Zementestrich etwa eine Woche pro Zentimeter Dicke bis zu einer Stärke von rund 4 cm – darüber deutlich länger. Calciumsulfatestrich trocknet bei guter Lüftung schneller. Temperatur, Luftfeuchte und Lüftung haben großen Einfluss.

> Verlassen Sie sich nicht auf den Kalender. Ob ein Estrich belegreif ist, zeigt nur die Messung der Restfeuchte, zum Beispiel mit der CM-Methode.

## Belegreife

Wie trocken der Estrich sein muss, hängt von Estrichart, Belag und Fußbodenheizung ab. Feuchteempfindliche Beläge wie Parkett stellen höhere Anforderungen als Fliesen. Der Bodenleger prüft die Belegreife vor der Verlegung und dokumentiert sie.

## Fußbodenheizung

Bei beheizten Estrichen gehört ein Aufheizprotokoll dazu: Der Estrich wird nach Vorgabe schrittweise aufgeheizt und wieder abgekühlt. Das treibt Feuchte aus und ist Voraussetzung für die Verlegung.

Estrich und Bodenbelag aus einer Hand: [Putz & Estrich anfragen](/bau-innenausbau/putz-estrich#anfrage).`,
  },
  {
    slug: "fassade-neu-verputzen",
    title: "Fassade neu verputzen: Wann lohnt es sich?",
    description: "Schäden erkennen, Kosten einschätzen, richtig planen – wann ein neuer Fassadenputz sinnvoll ist.",
    cat: "Bau",
    minutes: 5,
    updated: "2026-10-19",
    img: "putz-1.jpg",
    service: { label: "Putz & Estrich", href: "/bau-innenausbau/putz-estrich" },
    body: `Der Fassadenputz schützt das Mauerwerk vor Regen, Frost und UV-Strahlung. Nach 30 bis 40 Jahren zeigen viele Fassaden Ermüdungserscheinungen. Nicht jeder Riss bedeutet gleich einen neuen Putz – aber manche Anzeichen sollten Sie ernst nehmen.

## Typische Schäden

- **Haarrisse:** feine Risse an der Oberfläche, oft unkritisch, aber ein Einfallstor für Wasser
- **Breite Risse:** Hinweis auf Bewegungen im Mauerwerk, unbedingt prüfen lassen
- **Abplatzungen:** Putz löst sich, oft durch Frost oder Feuchtigkeit
- **Hohlstellen:** klingen beim Abklopfen dumpf, der Putz haftet nicht mehr
- **Ausblühungen und Algen:** Zeichen für Feuchtigkeit in der Wand

## Ausbessern, überarbeiten oder neu verputzen?

- **Ausbessern:** bei einzelnen Schäden auf sonst intaktem Putz
- **Überarbeiten:** Risse armieren, neue Deckschicht und Anstrich – wenn der Altputz noch fest ist
- **Neu verputzen:** wenn der Putz großflächig hohl ist oder ohnehin gedämmt wird

> Wenn die Fassade sowieso eingerüstet wird, lohnt es sich, über eine Dämmung nachzudenken. Gerüstkosten fallen dann nur einmal an.

## Welcher Putz?

Mineralische Putze sind diffusionsoffen und robust, Silikonharzputze wasserabweisend und schmutzunempfindlich. Im Altbau ist es wichtig, dass der neue Putz zum Mauerwerk passt – sonst entstehen neue Schäden.

## Der richtige Zeitpunkt

Putzarbeiten außen brauchen frostfreies, trockenes Wetter. Planen Sie das Projekt im Winter, damit es im Frühjahr starten kann.

Wir beurteilen Ihre Fassade gern vor Ort: [Putzarbeiten anfragen](/bau-innenausbau/putz-estrich#anfrage).`,
  },
];

export const articleBySlug = (slug: string) => articles.find((a) => a.slug === slug);
export const articleByTitle = (title: string) => articles.find((a) => a.title === title);
export const CATS: ("Alle" | ArticleCat)[] = ["Alle", "Hotel", "Bau", "Bad", "Schaden"];
