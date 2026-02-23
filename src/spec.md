# Specification

## Summary
**Goal:** Replace the backend implementation with Hugging Face Stable Diffusion v1.5 API integration for image generation.

**Planned changes:**
- Replace entire contents of backend/main.mo with the user-provided Motoko code
- Implement HTTP outcalls to Hugging Face Stable Diffusion v1.5 API endpoint
- Return generated images as base64-encoded data URLs

**User-visible outcome:** The backend will generate images using Hugging Face's Stable Diffusion model and return them as base64-encoded data URLs when the generateImage function is called with a text prompt.
