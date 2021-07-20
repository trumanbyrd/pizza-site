# Getting Started

To run this website locally, I recommend using Node.js v14.16.0 with npm 6.14.11. (nvm can help if a different version of node is already installed!)

Once you have the correct versions of node/npm, simply clone the repository and run `npm i` and `npm start` from the root directory.

In order to access the dynamic content of the website (the data fetched/posted via REST API), you'll need to use a CORS bypass extension in your browser. This is because the API server is not configured to support CORS requests by default.

An alternative to using a CORS bypass extension is to specify a proxy server in constants.js.
