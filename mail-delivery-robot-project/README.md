# Mail-delivery Robot Project

## Overview

> ### Mail-delivery Robot Project
>
> The purpose of this project to build efficient programs that performs tasks in a virtual world and to build a compare mechanism for programs. The story is: There is a little village (Meadowfield), where robots deliver parcels from A to B. The robots picking up and dropping off parcels.

## Content

1. [Application structure](#application-structure)
2. [Dependencies](#dependencies)
3. [Available Scripts](#available-scripts)
4. [Run locally](#run-locally)
5. [License](#license)

## Application structure

- `src/index.ts` - the entry point
- `src/roads.ts` - the roads in the village, where the robot can move and road graph specific functions
- `src/robot.ts` - implementations of robots and some robot specific functions
- `src/routes.ts` - route specific functions (e.g.: predefined route, find own route functions)
- `src/VillageState.ts` - implementation of the village
- `src/measure` - functions for compare the robots.
- `src/types` - typescript interfaces
- `src/utils` - utility functions

## Dependencies

- Node
  - `@types/node`
- TypeScript
  - `typescript`
- Testing
  - `jest`
  - `@types/jest`
  - `babel/jest`
  - `@babel/preset-typescript`
  - `@babel/preset-env`
  - `@babel/core`
- Prettier
  - `prettier`
- ESLint
  - `@typescript-eslint/eslint-plugin`
  - `@typescript-eslint/parser`
  - `eslint`
- Prettier and ESLint
  - `eslint-config-prettier`
  - `@types/eslint-config-prettier`
- Testing and ESLint
  - `eslint-plugin-jest`

## Available Scripts

- `npm start` - It builds and starts the app.
- `npm run test` - It tests the app.
- `npm run prettier:write` - It will formats the files in the src folder.
- `npm run prettier:check` - It will checks that files in the src folder are already formatted.
- `npm run eslint` - It will lint all TypeScript file in the src folder.

## Run locally

You need have Node v16.16.0 or higher.
Please clone this repository and follow the next instructions.

```
  npm ci
  npm start
```

## License

MIT
