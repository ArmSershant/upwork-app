/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/app.component.{html,ts}",
    "./src/app/auth/signup/signup.component.{html,ts}",
    "./src/app/auth/login/login.component.{html,ts}",
    "./src/app/components/profile/profile.component.{html,ts}",
    "./src/app/components/freelancers/freelancers.component.{html,ts}",
    "./src/app/components/freelancers/freelancers.component.{html,ts}",
    "./src/app/pages/singlework/singlework.component.{html,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

