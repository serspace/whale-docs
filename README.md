# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm i 
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true npm deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


# Whale specific 

### Styling taken from website 
Colors:  
```css
blue: #4072f9;
headings: #000543;
body: #667180
```
Font
```css
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600&display=swap');
font-family: 'Sora', sans-serif;
```
Border radius
```css
border-radius: 10px;
```

# Commands
verify :- to get verified and join the whale chat

ca :- to check a token and get some valuable info

detect :- to detect whales inside a token 

order :- to order a custom bot made for your project