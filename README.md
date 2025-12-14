# Roll20 Never Stop Blowing Up (NSBU) Roller Web App

> [!IMPORTANT]
> This was copied from my [Roll-NSBU-Roller repo](https://github.com/CorgiDev/Roll20-NSBU-Roller/settings/pages).

This is a simple web app to make Never Stop Blowing Up (NSBU) rolls easier for me. This is all based on the NSBU game system. You can learn more about it from the following pages, or checking out the sections in this page under the [NSBU Game Details heading](#nsbu-game-details):

- [‘Never Stop Blowing Up’ Game System | DropOut Store](https://store.dropout.tv/products/never-stop-blowing-up-game-system) (It is free!)
- [Dimension 20: Never Stop Blowing Up | :DropOut](https://www.dropout.tv/dimension-20-never-stop-blowing-up)
  - 10 episodes
  - Requires a subscription to watch.

## Web App Details

> [!TIP]
> To use the web interface, just open the nsbu.html file. As long as you don't move the `web interface` folder, you can make it easier to reopen later by adding a bookmark to it.

### Compatibility

The app should be able to run in just about any browser pretty consistently. Though I have mostly run it in Chrome and Edge.

### Features

- Character information tracking
- Skill rolling
- Injury tracking
- Abilities management
- Group suites
- Auto-save functionality (data persists between sessions)
- Import/Export character data as JSON files

### NSBU Game Details

#### Stat Types

The following stats are the ones tht would potentially need to roll for:

- Stunts
- Brawl
- Tough
- Tech
- Weapons
- Drive
- Sneak
- Wits
- Hot

#### Roll Values

The following are the die values you may need to roll:

- 1d4
- 1d6
- 1d8
- 1d10
- 1d12
- 1d20
- 1d00 - Only happens when you blow up a d20
 
#### Turbo Tokens

Turbo tokens are earned when you blow up roll twice, or fail a roll.

#### Injuries

Injuries have to be tracked. Injury types include:

- Superficial
- Severe
- Adrenlized

#### Group Suites and Individual Abilities

There are various additional individual and group abilities you can get if you play a game using them.

### NSBU Credits

NSBU was written by Brennan Lee Mulligan & Carlos Luna, design & layout by Ruby Lavin, and with special thanks to The Intrepid Heroes & Hunters Entertainment.

## Resources

The following resources are for me to reference as I work on building out this extension, and are not relevant to the NSBU game itself.

- https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world
- https://www.freecodecamp.org/news/building-chrome-extension/
- https://www.w3schools.com/css/css3_mediaqueries_ex.asp
- https://www.w3schools.com/css/css3_flexbox_container.asp
- Resources for adding a dark mode and toggle:
  - https://stackoverflow.com/questions/19844545/replacing-css-file-on-the-fly-and-apply-the-new-style-to-the-page
  - https://www.w3.org/WAI/ARIA/apg/patterns/switch/examples/switch/
