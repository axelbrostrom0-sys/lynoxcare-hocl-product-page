# LynoxCare Shopify-tema

Ett giltigt Online Store 2.0-tema byggt kring produktsidan för **Skin Revival Spray**.
Rent, redaktionellt och monokromt med cream-sektioner, i LynoxCare-brandet.
Passerar Shopify Theme Check utan anmärkningar.

## Struktur

```
assets/        base.css, theme.js
config/         settings_schema.json, settings_data.json
layout/         theme.liquid, password.liquid
locales/        en.default.json
sections/       announcement-bar, header, footer,
                main-product, mechanism, belief-safety,
                belief-cost, product-reviews, sticky-bar, index-hero
snippets/       stars.liquid
templates/      index.json, product.json + obligatoriska mallar
templates/customers/  konto-mallar
```

## Produktsidan

`templates/product.json` bygger upp sidan av sektioner i denna ordning:

1. `main-product` (köp-box): trust-rad med stjärnor ovanför titeln, pris,
   variant-/alternativval, svart CTA, trust-ikoner, Klarna-rad,
   ikon-fördelar och accordions. Använder riktig produktdata med
   platshållare som fallback.
2. `mechanism` ("WTF är hypoklorsyra?")
3. `belief-safety` (Trygghet)
4. `belief-cost` (Kostnaden av att inte agera) med CTA
5. `product-reviews` (snittbetyg, fördelningsstaplar, återköp, omdömen)
6. `sticky-bar` (köp-bar i botten, syns på mobil)

All text är på svenska och redigerbar i temaredigeraren. Brand-färgerna
styrs av temainställningar (Färger) och injiceras som CSS-variabler.

## Förhandsvisning

`skin-revival-spray.html` i roten är en fristående statisk version av samma
sida för snabb förhandsvisning utan Shopify.

## Validering

```
npx @shopify/theme-check-node
```
