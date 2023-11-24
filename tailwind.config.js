/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/layouts/main.handlebars", "./views/partials/comments.handlebars", "./views/login.handlebars", "./views/signup.handlebars",],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

