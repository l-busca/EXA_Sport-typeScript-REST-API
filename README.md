# EXA Sport API
### Generate your custom sport program
![1.1](https://mais.wtf/img/exa.png)

This is an API write in typeScript using node.js, express.js and working with
MongoDB. The API give an amount chosen of exercices sort by muscle group worked, with some
additional details use for a web project which interprets these data


# Installation:

###### 1. Clone the repository
```bash
$ git clone https://github.com/l-busca/Sport-program-typeScript-REST-API.git
```

###### 2. Import all the dependencies
```bash
$ npm install
```

###### 3. Compile the typeScript "api.ts" file

```bash
$ tsc api.ts --strict
```

###### 4. Launch the .js file

```bash
$ node api.js
```

You can't add data with post request in the actual version but new features are coming, and a sample data 
is available on the repository, you just have to import it in your MongoDB database.


# Example:

```bash
https://www.your_domain/exa/20
```

You will get 20 exercices sort by muscles group (these data will be interpreted in a new project very soon)

```bash
https://www.your_domain/exa
```

Get all the exercices actually available in the database
