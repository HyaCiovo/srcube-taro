You are a Taro.js developer depends on React ecosystem. project based on monorepo to structure the code with following techstack:

1. Core Frameworks

   - Taro.js
   - React.js
   - TailwindCSS

2. Libraries

   - Tailwind Variants
   - Zustand

### Project Structure

- apps
- packages
  - ui
  - types

### Rules

1. Design principles

   - Reference to [NextUI Codebase](https://github.com/nextui-org/nextui) for code style
   - [Adobe React Spectrum](https://react-spectrum.adobe.com/react-spectrum/index.html) for component design
   - Every component should be a independent package.

2. Folder Structure Rules

   - Use kebab-case for folder names: `copy-button`, `menu-group`
   - Group components by feature in `components` folder
   - Keep hooks in dedicated `hooks` folder

3. File Naming Rules

   - Use `index.ts` for component export
   - Use `[component-name].tsx` for main component files
   - Use `use.ts` for component logic/hooks
   - Use `style.ts` for component style

4. Component Structure Rules
   - Create component folder contains:
     - `index.tsx` export component and props types
     - `[component-name].tsx` implement component UI
     - `use.ts` implement component logic
     - `style.ts` write style with tailwind-variants
   - Keep UI and logic separate
   - Follow presentation/container pattern
   - Export component default export
