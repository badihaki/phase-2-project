# Phase 2 Project - Fighting Game Tournament Tracker

# Pitch
   ## Project Story
   I've been in love with fighting games since playing Capcom's X-Men at my local laundromat, I've always tried to bring the many disparate groups
   of gamers together for fun and shenanigans, but I always find it hard to organize a tournament or even find out when my locals are happening,
   especially in the era of COVID. I wanted to create something that could make that whole process a little easier
   
   ## Core Features
   Users will have access to two main features: Adding a new tournament or adding a new player. The underlying mechanics will be similar, using 
   a form and a simple backend to input and store data of each tournament and player, and the app will be able to use this database to show a list
   of both. This will be a Single Page Application, utilizing a router and switch hooks to change the data displayed on to the user.


# Component Heirarchy
- App
 - Navbar
 - Home
 - TournamentList
     - TourneyTicket
 - PlayerList
     - Challenger
     - Challenger Info
 - NewChallenger
 - NewTourney

 # Component Details
    ## App
    Main component for the app, will fetch tournament and player data on load

      ## Navbar
      Navigation. Nuff said

      ## Home
      Landing page for the app.

      ## TournamentList
      Maps out tournament data into TourneyTicket components and renders them to a page

         ## TourneyTicket
         Determines how to render individual tournaments

      ## PlayerList
      Maps out player data into Challenger components, and renders them to a page

         ## Challenger
         Determines how to render individual challenger data
         
# How I'm meeting the requirements of this project
   ## Scale
   I'm scaling this app small. It is only meant to store and display data.
   ## Scheduling
   - MVP within 3 days
   - 1 day of styling
   - 2 days of bugfixing
