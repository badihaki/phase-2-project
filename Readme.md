# Phase 2 Flatiron Final Project

## Requirements

1. You must make a single page application (only one `index.html` file) using
   `create-react-app`.
2. Your app should use at least 5 components in a way that keeps your code well
   organized.
3. There should be at least 3 client-side routes using [React
   Router][react-router]. Be sure to include a nav bar or other UI element that
   allows users to navigate between routes.
4. Use a `json-server` to create a RESTful API for your backend and make both a
   `GET` and a `POST` request to the json server. Use a form to make your post
   request, specifically a controlled form/component. Additionally, you may
   choose to incorporate data from an external API but it is not required.
   - You should keep your `json-server` data simple: avoid nested data and
     associations. You'll learn how to work with more complex data in the next
     two phases. Focus on the frontend for this project.
5. Add some styling: you're encouraged to write your CSS from scratch, either by
   using [styled components][] or writing CSS files and using id/className to
   style your elements. You can also incorporate a UI framework (like [React
   Bootstrap][react-bootstrap], [Semantic UI][semantic-ui], or [Material
   UI][material-ui]) if you prefer.

   ## Design

   # Purpose
   This app will be used to create and track Fighting Game tournaments.
   The app will consist of 5 main components representing different web pages:
   home, competitors, tournaments, register new competitor, and create new tournament.

   # Component Heirarchy
   - App
    - Home
    - Tournaments
    - CompetitorsList
        - Challenger
        - Challenger Info
    - NewChallenger
    - NewTourney