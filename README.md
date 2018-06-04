<!-- # Project-4

#Healthy Food
This a site that allows you to find healthy foods.
#Technologies 
What technologies did you use? React and bootstrap
What was your greatest accomplishment? 
Fixing the little things along the way
What part of your project was the hardest for you?(creating the "update method")
What would you like to see in the next version of your app?(pictures, videos and css bubbles)
Which classmates helped you the most? Everyone
#Heroku
https://morning-sands-15314.herokuapp.com/show

#Trello link
https://trello.com/b/BPAWFRjA/project-4

#WireFrame
https://balsamiq.cloud/s7yge91/poefff3

#ERD
food
  name
  picture
  *
  type
    name
    nutrition
*
calories
    description -->

Chat Stream
Chat Stream is an application where users can create accounts and chat with people through websockets while watching a hardcoded Youtube playlist. You can choose to observe or partake in the chat antics. Very minimal app built with React on Rails using Devise or user authentication and Action Cable for the web sockets.

Technologies Used
React
Babel / JSX
Styled Componenets
Materialize for React
Ruby on Rails
PostgreSQL
Mongoose
Javascript
Foreman
Palleton
Axios
React-youtube package
Biggest Problems
The biggest problems I ran into was configuring my websockets with React and Rails. I had a hard time defining the subscription of a user when they logged in. Also Action Cable as a whole was my biggest issue. Obvsiously learning a new concept and tring to incorporate it into a project with a deadline can be challenging but Websockets were definetly the biggest source of my headaches this week.

Links
https://frozen-waters-14026.herokuapp.com/ - App on Heroku
https://trello.com/b/FeHxlHtK/streams-clone - User Stories
https://docs.google.com/presentation/d/1eV9mvWXCuTL1H61spfkhcUon8mBlAalaS0Orx5RXzPQ/edit?usp=sharing - Wireframes & ERD
Lessons Learned
I learned a whole lot about web sockets and action cable and how Rails handles full duplex servers. I also learned user authentication using Devise which seemed simple enough but I have heard some issues people have with Devise I just havent had enough experience with it to figure out what those issues are.

Resources
W3Schools
MDN Web Docs
Stackover Flow
Previous Labs and Homeworks
Rails docs
Dakota Lillie https://medium.com/@dakota.lillie/using-action-cable-with-react-c37df065f296
Phase 2
In Phase two I would like to get my websockets working as well as be able to display the actual users username in the chat instead of just their user Id. Secondly I would like to be able to set up live stream times of when users can submit Youtube links into the chat and have those automatically added to the Youtube playlist that is being live streamed.


