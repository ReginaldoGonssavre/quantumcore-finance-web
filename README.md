# ou
nano index.html# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/94e83db1-b01d-483a-9bd8-75825a3a0bb7

## White Label Customization

This project is configured for White Label customization. You can easily change the branding (name, colors, and key texts) by modifying the `src/config/branding.ts` file.

Here's how:

1.  **Open `src/config/branding.ts`:**

    ```typescript
    export const BRAND_NAME = "QuantumCore Finance";
    export const LOGO_URL = "/logo.svg";
    export const PRIMARY_COLOR_HSL = "258 90% 66%"; // Example primary color in HSL
    export const SECONDARY_COLOR_HSL = "193 100% 50%"; // Example secondary color in HSL

    export const HERO_HEADLINE = "Precisão Quântica para o Mercado Financeiro";
    export const HERO_SUBHEADLINE = "Revolucionando o setor financeiro com o poder da computação quântica e inteligência artificial. Descubra o futuro das finanças digitais com nossa plataforma inovadora.";
    export const HERO_BUTTON_SERVICES = "Conheça Nossos Serviços";
    export const HERO_BUTTON_CONTACT = "Fale Conosco";
    ```

2.  **Modify the values:**
    *   `BRAND_NAME`: Change this to your desired brand name. This will update the title of the web page and the brand name displayed in the navigation bar and hero section.
    *   `LOGO_URL`: If you have a custom logo, update this path to point to your logo file (e.g., `/your-logo.svg`). Ensure your logo file is placed in the `public` directory.
    *   `PRIMARY_COLOR_HSL` and `SECONDARY_COLOR_HSL`: Adjust these HSL values to match your brand's primary and secondary colors. These colors will be applied throughout the application where `--primary` and `--secondary` CSS variables are used.
    *   `HERO_HEADLINE`, `HERO_SUBHEADLINE`, `HERO_BUTTON_SERVICES`, `HERO_BUTTON_CONTACT`: Update these strings to customize the main texts in the hero section.

3.  **Rebuild the project:** After making changes, rebuild the project to apply them:

    ```bash
    npm run build
    ```

    Or, if you are in development mode:

    ```bash
    npm run dev
    ```

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/94e83db1-b01d-483a-9bd8-75825a3a0bb7) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/94e83db1-b01d-483a-9bd8-75825a3a0bb7) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

