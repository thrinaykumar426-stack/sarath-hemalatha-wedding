# Hemalatha & Sarath Babu — Grand Indian Wedding Invitation

A five-page animated wedding invitation built with plain HTML, CSS and JavaScript.

## Pages

1. Grand Welcome
2. Meet the Couple
3. Wedding Celebrations
4. Our Families
5. Venue + Google Maps + final message

## Photos

The three supplied photos are already placed in:

- `assets/images/bride.jpeg`
- `assets/images/groom.jpeg`
- `assets/images/couple.jpeg`

## Music

The invitation references the requested JioSaavn song with a **Listen to Song** button.

Browsers do not allow a JioSaavn webpage URL to be used as a direct HTML `<audio src>`.
If you have a legally usable audio file, rename it:

`wedding-song.mp3`

and place it in:

`assets/music/wedding-song.mp3`

Then the Music button will play it after the visitor taps **Open Invitation**.

## Google Maps

The final page includes:

- an embedded map based on the venue text
- an **Open in Google Maps** button using the supplied Google Maps location
- a **Get Directions** button

## Run locally

You can simply open `index.html` in a browser.

For the best result, use a local server:

```bash
python -m http.server 8000
```

Then open:

`http://localhost:8000`

## GitHub Pages

1. Create a new GitHub repository.
2. Upload all files and folders from this project.
3. Go to **Settings → Pages**.
4. Choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`.
6. Save.
7. GitHub will provide your public invitation URL.

## Personalization

All names, dates, parents, venue and links are already filled in for:

Groom: Sarath Babu
Bride: Hemalatha
Venue: GROOM'S HOMETOWN
Address: P. MATLAGONDI (V), Singanamala (M), Anantapur (D), Andhra Pradesh
Haldi: October 31, 2026
Wedding: November 01, 2026

## Name order
The invitation presents the groom's name first, followed by the bride's name. The groom's parents are also shown first, followed by the bride's parents.
