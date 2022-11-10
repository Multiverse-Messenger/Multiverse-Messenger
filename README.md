###
<br />
<p align="center">
    <img height="500" width="auto" src="https://i.imgur.com/j5jZxfxh.jpg" alt="Banner / Preview Photo of App">

  <h1 align="center">Multiverse Messenger Deployment Project</h1>

  <p align="center">
   An instant messenger created with React and socket.io that allows users to message each other instantly.
    <br />
    <br />
    <a href="https://mm.reesegosa.in/">👀 View Demo</a>  ·
    <a href = "" >🍿 Watch the Presentation</a>
    ·
    <a href="mailto:anabels.20022@gmail.com">🐛Report Bug</a>  ·
    <a href="mailto:anabels.20022@gmail.com">✍🏽Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#deployment">Deployment</a>
      <li>
      <a href="#inspiration">Inspiration</a>
      </li>
     <li> <a href="#what-it-does">What It Does</a></li>
    <li><a href="#whats-next">What's Next</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
    <li><a href="#team">Team</a></li>
  </ol>
</details>


## Deployment
<!-- ABOUT THE PROJECT -->
### How to deploy locally

To deploy locally, users must create an account at https://chatengine.io/ and create a project to obtain their own secret / project ID for launch.

1. `npm install`
2. create a `.env.local` file in the root directory of the project and copy the below formatting:
`NEXT_PUBLIC_PROJECT_ID=<INSERT YOUR UNIQUE PROJECT ID FROM CHATENGINE.IO HERE>
NEXT_PUBLIC_CHATENG_SECRET=<INSERT YOUR UNIQUE PRIVATE KEY FROM CHATENGINE.IO HERE>`
3. For Windows: `npm run win` For Mac/Linux: `npm run dev`

### How to deploy via Docker

For Docker deployment, users will still need to create a project in https://chatengine.io/ to obtain unique project IDs and private keys. 
1. `docker build . -t my-image-name-here`
2. Navigate to your Docker images and press "run" Open the drop down menu in "optional settings" and input the port `3000`
3. In the same "optional settings" window, input two different variables: `NEXT_PUBLIC_PROJECT_ID` with the value of your project ID from chatengine & `NEXT_PUBLIC_CHATENG_SECRET` with the unique private key from chatengine. 


## Inspiration 

For our deployment module project, our group wanted to focus on deployment and creating a docker image for our project. Our project is a fast and functional messenger application that can be deployed on docker and is hosted via AWS.

## What It Does

The Multiverse Messenger web application allows users to create an account and log in, send messages, create groups, add/remove users from groups, and delete groups. The messages are instant, and the website has functioning authentication to ensure privacy of user messages.

## What's Next 

If our group were to continue development on Multiverse Messenger, a goal of ours would be capabilities to edit and delete specific messages, or maybe even integration of giphy.

<!-- BUILT WITH -->
## Built With 

* [JavaScript](https://www.javascript.com/)
* [NodeJS](https://nodejs.org/en/)
* [React](https://reactjs.org/)
* [Chatengine.io](https://chatengine.io/)
* [Next.js](https://nextjs.org/)
* [Socket.io](https://socket.io/)
* [AWS hosting](https://aws.amazon.com/)

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [Multiverse](https://www.multiverse.io/en-US) 
* [GitHub Projects](https://github.com/features/issues/)
* [Adam La Morre](https://www.youtube.com/watch?v=Gbnjn-1Q2d8)


## Team

Thank you for taking the time to check out my project! Be sure to check out all contributor's Github's! 

[Anabel](https://github.com/Anabel-Santillan)
[Reese](https://github.com/orgs/Multiverse-Messenger/people/Reese0177)
[Nicolas](https://github.com/orgs/Multiverse-Messenger/people/nicolasd1323)
