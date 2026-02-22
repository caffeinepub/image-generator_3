# Specification

## Summary
**Goal:** Create a simple image generation interface with a backend endpoint that returns a placeholder image URL based on user prompts.

**Planned changes:**
- Add a backend `generateImage` function in main.mo that accepts a text prompt and returns a record with an `imageUrl` field containing the placeholder URL `https://placehold.co/1024x1536?text=Backend+OK`
- Build a frontend interface with a text input field and generate button that calls the backend function
- Display the returned image URL as an actual image on the page
- Apply a creative visual design theme with harmonious colors (avoiding blue and purple), readable typography, and clean layout

**User-visible outcome:** Users can enter a text prompt, click a generate button, and see a placeholder image displayed on the page, demonstrating the end-to-end workflow of prompt submission and image display.
