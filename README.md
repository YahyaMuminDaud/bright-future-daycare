# Bright Future Learning Daycare Website

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm start
```
Opens at http://localhost:3000

---

## Deploy to GitHub Pages

### First-time setup

1. Create a GitHub repo named `bright-future-daycare`
2. Open `package.json` and replace the homepage line:
   ```
   "homepage": "https://YOUR-GITHUB-USERNAME.github.io/bright-future-daycare"
   ```
   with your actual GitHub username, e.g.:
   ```
   "homepage": "https://johndoe.github.io/bright-future-daycare"
   ```
3. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/bright-future-daycare.git
   git push -u origin main
   ```

### Deploy
```bash
npm run deploy
```
Your site will be live at the homepage URL in package.json within ~1 minute.

### Re-deploying after changes
Make your edits, then run:
```bash
npm run deploy
```

---

## Project Structure

```
bright-future-daycare/
├── public/
│   └── index.html          # HTML shell, Google Fonts loaded here
├── src/
│   ├── constants/
│   │   └── theme.js        # Colors and phone numbers — edit here
│   ├── components/
│   │   ├── Nav.jsx         # Top navigation bar
│   │   ├── Footer.jsx      # Bottom footer
│   │   ├── PhoneModal.jsx  # iOS-style call popup
│   │   └── PhonePills.jsx  # Phone number buttons
│   ├── pages/
│   │   ├── HomePage.jsx    # Home page
│   │   ├── WhyPage.jsx     # Why Us page
│   │   └── PricingPage.jsx # Pricing page
│   ├── App.jsx             # Root component, page routing
│   └── index.js            # React entry point
├── package.json
└── .gitignore
```

## Common Edits

- **Change phone numbers** → `src/constants/theme.js`
- **Change colors** → `src/constants/theme.js`
- **Edit pricing table** → `src/pages/PricingPage.jsx` (the `rows` array at the top)
- **Edit why us reasons** → `src/pages/WhyPage.jsx` (the `reasons` array at the top)
- **Edit hero text** → `src/pages/HomePage.jsx`
