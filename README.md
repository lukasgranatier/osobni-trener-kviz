# Osobní trenér — studijní kvíz

Interaktivní český studijní kvíz pro kompetence profesní kvalifikace
**Osobní trenér/trenérka ve fitness (74-035-M)**.

## Obsah

- 11 oblastí přesně podle hodnoticího standardu NSK
- 120 unikátních otázek v každé oblasti, celkem 1 320
- 4 možnosti a právě 1 správná odpověď
- vysvětlení a zdroje zobrazené až po správné odpovědi
- rychlá série 20, celá kategorie 120 a vyvážený mix 60
- zkouškový režim s pravidlem 70 % celkem a 60 % v každé oblasti
- rozložené opakování: otázka se vrací podle toho, jak jistě ji umíte
- přeskočení otázky, označení k pozdějšímu návratu a opakování chyb
- rychlá cesta do nejslabší oblasti podle dosavadní úspěšnosti
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

`npm run qa` vedle kontroly dat spouští i testy učební logiky
(`scripts/study-test.mjs`): plánování opakování, pořadí podle splatnosti
a zkouškové vyhodnocení.

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

Každý pojem odkazuje alespoň na jeden odborný zdroj. Dvě kapitoly jedné
učebnice ani standard NSK a obecná příručka samy nedokazují nezávislé
potvrzení konkrétního tvrzení. `npm run qa` kontroluje strukturu dat,
přiřazení správných odpovědí a regresní případy nejednoznačných možností;
neověřuje vědeckou pravdivost ani nezávislost zdrojů.

Úplný obsahový průchod všech 330 pojmů a 1 320 generovaných otázek proběhl
11. 10. 2026. [Auditní přehled](docs/factual-audit-2026-10-11.md) uvádí
kontrolované otázky, opravy, veřejné zdroje a rozsah jejich podpory. Rozlišuje
přímo doložené definice a doporučení od praktických trenérských příkladů;
neznamená, že každý příklad byl samostatně ověřen klinickou studií.

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
