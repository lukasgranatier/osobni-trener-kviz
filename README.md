# Osobní trenér — studijní kvíz

Interaktivní český studijní kvíz pro kompetence profesní kvalifikace
**Osobní trenér/trenérka ve fitness (74-035-M)**.

## Obsah

- 11 oblastí přesně podle hodnoticího standardu NSK
- 100 unikátních otázek v každé oblasti, celkem 1 100
- 4 možnosti a právě 1 správná odpověď
- vysvětlení a zdroje zobrazené až po správné odpovědi
- rychlá série 20, celá kategorie 100 a vyvážený mix 30
- průběh uložený pouze lokálně v prohlížeči
- světlý, tmavý a automatický režim
- responzivní rozhraní navržené primárně pro iPad

Projekt nepoužívá framework, runtime závislosti, analytiku, cookies ani externí
fonty. Jde o zdrojový statický web HTML/CSS/JS.

## Lokální spuštění

```bash
python3 -m http.server 8747 --bind 127.0.0.1
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

Databáze je sestavena z 25 odborně zdrojovaných pojmů v každé kategorii. Ke
každému pojmu vznikají čtyři různé ověřovací otázky (definice, příklad,
praktický význam a správné přiřazení), tedy 100 otázek na kategorii. Otázky
nejsou oficiálním ani uniklým testem NSK nebo Improve Academy.

Projekt je neoficiální studijní pomůcka a není spojen s Improve Academy ani
s Národní soustavou kvalifikací. Nenahrazuje praktickou výuku, nácvik první
pomoci, klinickou diagnostiku ani zdravotnické poradenství.
