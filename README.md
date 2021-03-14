# Virtual HTDT

https://virtualhtdt.ga

Hanh Trinh Duc Tin for Doan Don Bosco Virtual Camp 2021

A story-guided virtual tour of Vietnam

### Storyline Overview
Your mysterious long-lost uncle shows up and challenges you to find the family treasure. As you follow him and look for clues you are led on a journey to various destinations in Vietnam (Hanoi, Sapa, Ha Long, Hue, Saigon).

Along the way there are various puzzles and team activities. Some activities are done in the app, some involve materials that were went to each person before camp, and some are live with a Huynh Truong (in the camp Discord server).

---
## Stack
 - Built using Nextjs
 - Styling: Chakra UI
 - Hosting: Vercel 

---
## Development

Clone the repo
```bash
git clone https://github.com/leetosc/virtual-htdt.git
```
Install dependencies
```bash
yarn install
```
Run dev server
```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---


## Notes

See `/src/pages/samples` for sample pages

- type `I am a Huynh Truong` in the notes to see answers and skip videos
- assets (images, sound, etc) are in `/public` directory
- User notes, locations visited, and inventory are stored in localStorage - clear in Huynh Truong mode or by starting journey over from first page
- see `/htdt/41-kitchen` for an example of drag and drop. Getting drag and drop to work correctly (including working for both mouse and touch) was nontrivial. (fill inventory in HT mode, then refresh the page)

Future ideas
 - More inventory interaction
   - Currency, buying items
   - Get rewards for completing activities
   - Pop/surprise quizzes
 - More dependencies based on locations visited
   - Side quests
   - Save and resume progress
 - Make the phone modal into an interactive global component
   - can be used like a pokedex, to call for hints, etc
 - Multiple storyline options?
   - might be better to have separate instance of the site
 
