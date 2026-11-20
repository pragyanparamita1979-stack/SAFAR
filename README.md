# SafarAI

A responsive India travel and AI itinerary website.

## Local preview

```bash
cd "/Users/ashutoshsangramsinghnayak/Desktop/SafarAI"
python3 -m http.server 4173
```

Open `http://localhost:4173`.

## Enable real AI on Netlify

1. Deploy this folder to Netlify.
2. Open **Site configuration → Environment variables**.
3. Add `OPENAI_API_KEY` with a valid OpenAI API key.
4. Redeploy the site.

The trip planner still works without a key using a built-in demo itinerary.
