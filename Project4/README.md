# Strangr Landing Page

This is a single-page React application built with Vite and Tailwind CSS, replicating the "Strangr" landing page design.

## Getting Started

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Run Locally**
    ```bash
    npm run dev
    ```
    Open your browser to the URL shown (usually `http://localhost:5173`).

## Project Structure

-   `src/App.jsx`: Main component containing the layout and logic.
-   `src/components/Squiggle.jsx`: Reusable SVG decoration component.
-   `tailwind.config.js`: Custom colors and font configuration.
-   `public/images/`: Directory for image assets.

## Images

Currently, the application uses online placeholder images from `placehold.co` to ensure it looks correct immediately.

To use your own images:
1.  Place your image files in the `public/images/` folder.
2.  Open `src/App.jsx`.
3.  Uncomment the lines referencing the local files and comment out the placeholder URLs.

Required filenames:
-   `hero-top.jpg`
-   `photo-left-top.jpg`
-   `photo-left-bottom.jpg`
-   `photo-right.jpg`

## Customization

-   **Colors**: Edit `tailwind.config.js` to change the brand colors (`brand-beige`, `brand-brown`, etc.).
-   **Fonts**: The project uses "Poppins" from Google Fonts. You can change this in `index.html` and `tailwind.config.js`.
