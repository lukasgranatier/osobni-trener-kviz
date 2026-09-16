# Osobní trenér — studijní kvíz

Interaktivní český studijní kvíz pro kompetence profesní kvalifikace
**Osobní trenér/trenérka ve fitness (74-035-M)**.

## Obsah

- 11 oblastí přesně podle hodnoticího standardu NSK
- 120 unikátních otázek v každé oblasti, celkem 1 320
- 4 možnosti a právě 1 správná odpověď
- vysvětlení a zdroje zobrazené až po správné odpovědi
- rychlá série 20, celá kategorie 120 a vyvážený mix 60
- přeskočení otázky a samostatný režim opakování chyb
- pořadí otázek losované, s předností pro neviděné a dříve chybné
- průběh uložený pouze lokálně v prohlížeči
- světlý, tmavý a automatický režim
- systémové písmo (na iPadu SF Pro) a rozhraní laděné pro iPad Air 11"

Projekt nepoužívá framework, runtime závislosti, analytiku, cookies ani externí
fonty. Jde o zdrojový statický web HTML/CSS/JS.

## Produkční verze

Kvíz je veřejně dostupný na [osobni-trener-kviz.netlify.app](https://osobni-trener-kviz.netlify.app/).
Nasazení se automaticky aktualizuje z větve `main` tohoto repozitáře.

## Lokální spuštění

```bash
python3 -m http.server 8747 --bind 127.0.0.1 --directory public
```

Potom otevřete `http://127.0.0.1:8747/`.

## Kontrola dat a projektu

```bash
npm run qa
npm run qa:links
```

Kontrola ověřuje počet kategorií a otázek, unikátní možnosti, platný správný
index, zdroje, lokalizaci, tabletové safe areas, omezení pohybu a bezpečnostní
hlavičky pro Netlify.
Kontrola odkazů navíc ověří, že každý přesný zdroj odpovídá úspěšným HTTP stavem.

## Odborný rámec

Rozsah vychází z veřejného hodnoticího standardu NSK 74-035-M. Faktické
odpovědi odkazují na primární zdroje, zejména NSK/MŠMT, OpenStax, WHO, EFSA,
ACSM, ERC 2025, WADA 2026 a Český Antidoping. Úplný seznam je přímo v aplikaci.

Databáze je sestavena z 30 odborně zdrojovaných pojmů v každé kategorii. Ke
každému pojmu vznikají čtyři různé ověřovací otázky (definice, příklad,
praktický význam a správné přiřazení), tedy 120 otázek na kategorii. Otázky
nejsou oficiálním ani uniklým testem NSK nebo Improve Academy.

Každý pojem má nejméně dva nezávislé zdroje; kontrola `npm run qa` tento
požadavek vynucuje. Poslední úplný fakticky ověřovací průchod proběhl
16. 9. 2026 proti primárním dokumentům (ERC Guidelines 2025, Resuscitation
Council UK 2025, WADA Prohibited List 2026, EFSA DRV, nařízení EU 1169/2011,
WHO 2020, AASM/CDC, CDC NIOSH, OpenStax A&P 2e, StatPearls).

### Pokrytí kritérií standardu

Obsah je namapován na všech 11 odborných způsobilostí a jejich kritéria
hodnocení, včetně dříve nepokrytých oblastí: orgánové soustavy a spoje kostry,
začátek/úpon/funkce svalu, druhy diagnostiky a pohybové stereotypy, metody
posilování (kruhový trénink, superséria, dropset, pyramida, rest-pause), cviky
pro svalové partie, šokové stavy a rozdělení první pomoci, dvě skupiny
preventivních opatření a světové antidopingové organizace.

Projekt je neoficiální studijní pomůcka a není spojen s Improve Academy ani
s Národní soustavou kvalifikací. Nenahrazuje praktickou výuku, nácvik první
pomoci, klinickou diagnostiku ani zdravotnické poradenství.
