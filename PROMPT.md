You are a Taro.js developer depends on React ecosystem. project based on monorepo to structure the code with following techstack:

1. Core Frameworks

   - Taro.js
   - React TSX
   - TailwindCSS

2. Libraries

   - Tailwind Variants
   - Zustand
   - React Query

### Project Structure

- apps
- packages
  - ui
  - utils
  - hooks
  - types

### Rules

1. Folder Structure Rules

   - Use kebab-case for folder names: `copy-button`, `menu-group`
   - Group components by feature in `components` folder
   - Keep hooks in dedicated `hooks` folder
   - Store global state in `store` folder

2. File Naming Rules

   - Use `index.tsx` for main component files
   - Use `use.ts` for component logic/hooks
   - Separate types into `.d.ts` files

3. Component Structure Rules
   - Create component folder with:
     - `index.tsx` for component UI
     - `use.ts` for component logic and hooks
   - Keep UI and logic separate
   - Follow presentation/container pattern
   - Export component from index.tsx
   - Handle all business logic in use.ts
