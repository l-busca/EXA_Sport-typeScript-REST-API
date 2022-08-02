This is an API write in typeScript using node.js, express.js and working with
MongoDB. The API give an amount chosen of exercices sort by muscle group worked, with some
additional details use for a web project which interprets these data

INSTALLATION :

1. clone the repository and type "npm init" in the directory (you will need node.js and npm)
2. type "npm install" for import all the dependencies
3. compile the typeScript "api.ts" file, with tsc api.ts
4. launch the .js file with "node api.js", the api will listen on port :3112

You can't add data with post request in the actual version but new features are coming

EXAMPLE:

your_domain/sport/20

You will get 20 exercices sort by muscles group (these data will be interpreted in a new project very soon)

your_domain/sport/20

Get all the exercices actually available in the database