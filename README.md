# Tech Talk Notes

This repository is responsible for notes on tech talks, conferences, etc.

To create a new note run `yarn make` which will use `plop` to prompt you with questions regarding the note taking session
to populate a customized notetaking Markdown file with relevant scaffolding.

## Plop Example
```
$ yarn make
yarn run v1.19.1
$ plop
? Enter your name Riley Miller
? Enter lecture name (i.e Intro to Kubernetes) Intro to React Hooks
? Enter the name of the lecturer (i.e John Doe) Kent C. Dodds
? Enter today's date "1/30/2020" 1/30/2020
✅ ++ /lectures/Intro to React Hooks/README.md
✨ Done in 36.90s.
```

## Example Template Generation
```
# Lecture on Intro to React Hooks - 1/30/2020 📝

**Author: Riley Miller** 🔎

**Lecturer: Kent C. Dodds** 🥃 

**Date: 1/30/2020** 🗓

## Subheading
- List Note 1
- List Note 2

### Code Snippet 💻
`` `
// interesting code snippet
const Funct = () => {
  // cool stuff
}
`` `
```

