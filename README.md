# Note generator

## Motivation

Always wanted to have a tool for keeping notes, I also love markdown and I like using it for note taking.

Created this script to generate a folder structure like: 

```
2021
- Jan
  - ...
  - 29-Wed.md
  - 30-Thu.md
  - 31-Fri.md
  - ...
```

In order to generate one markdown file for each day of the year to keep my notes there and also sync them with github (inspired by Matt Dole).

The biggest benefit of this is that you have all your notes backed up in github, and you can easily search with a code editor and find amazingly fast whatever you need!

## Installation

- Clone the repo on your machine (ideally where you want to generate your notes)
- run `npm i` or `yarn`
- run the script by `node index.js`

This will create the folder structure described above and one markdown file for each day.

With the current implementation I am copying the notes-template.md to each md file that was generated, so feel free to edit that to match your needs before proceeding.

## Further steps

I was thinking to maybe make a cli tool out of this that asks you about your format preferences for the title of the markdown generated file
