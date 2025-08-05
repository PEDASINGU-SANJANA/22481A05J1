# 🔗 React URL Shortener (Frontend)

This is a frontend-only URL Shortener application built with React and Material UI as part of a Campus Hiring Evaluation task for Affordmed Medical Technologies.

Users can shorten up to 5 URLs at a time with optional expiry and custom shortcodes. The app displays the shortened URLs in the interface.

---

## 🚀 Features

- Shorten up to 5 long URLs at once
- Optional expiry time for each URL (default: 30 minutes)
- Optional custom shortcode for each URL
- Clean Material UI interface
- Display of shortened URLs with details
- Placeholder for backend API integration

---

## 💠 Technologies Used

- React (v18+)
- Material UI
- JavaScript (ES6)
- HTML5 & JSX

---

## 📁 Folder Structure


src/
├── components/
│   └── ShortenerForm.js        # Form and logic to shorten URLs
├── App.js                      # Main entry rendering layout
└── index.js                    # React DOM root


---

## 🛆 Installation & Running

1. Clone the repo or download the source:

bash
git clone https://github.com/your-username/url-shortener-frontend.git
cd url-shortener-frontend


2. Install dependencies:

bash
npm install


3. Start the React app:

bash
npm start


The app runs at [http://localhost:3000](http://localhost:3000)

---

## 🧲 Sample URLs to Test

You can use the following example URLs to test the application:

- https://www.google.com/search?q=react+js+documentation
- https://openai.com/research/gpt-4o
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
- https://www.youtube.com/watch?v=dQw4w9WgXcQ
- https://www.npmjs.com/package/axios

Fill these into the form fields and click "Shorten URLs" to see output.

---

## 🧹 Backend Integration (To Be Added)

Currently, the shortened URLs are mocked on the frontend using random shortcodes. You can integrate the backend API by updating the fetch logic in ShortenerForm.js.

Example:

js
fetch("http://your-backend/api/shorten", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload),
})


---

## 📌 Future Enhancements

- Integration with backend shortening API
- Click analytics and statistics page
- Logger middleware for events
- Copy to clipboard & QR code
- URL validation and error handling

---

## 📄 License

This project is submitted for evaluation purposes and not intended for commercial or production use.
