import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* Add meta tags for SEO optimization */}
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Timer for IELTS Practice</title>
    <meta
      name="description"
      content="Improve your IELTS preparation with this timer app. Stay focused during your study sessions."
    />
    {/* End of meta tags */}
    <App />
  </StrictMode>
);
