# React + TypeScript + Vite

This project provides a minimal setup to get started with React, TypeScript, and Vite. It includes configurations for HMR (Hot Module Replacement) and ESLint rules.

## Prerequisites

To work on this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) version 16 or higher
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Recommended VS Code Extensions

For a better development experience, install the following extensions in Visual Studio Code:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) (if using Tailwind CSS)
- [Material-UI Snippets](https://marketplace.visualstudio.com/items?itemName=vscodeshift.material-ui-snippets) (if using MUI)
- [Ant Design Snippets](https://marketplace.visualstudio.com/items?itemName=chenshenhai.vscode-ant-design-snippets) (if using Ant Design)
- [WakaTime](https://marketplace.visualstudio.com/items?itemName=WakaTime.vscode-wakatime) (for tracking coding activity)

### Setting Up WakaTime

1. Install the [WakaTime extension](https://marketplace.visualstudio.com/items?itemName=WakaTime.vscode-wakatime) in Visual Studio Code.
2. Create an account on [WakaTime](https://wakatime.com/) if you don’t already have one.
3. After installing the extension, open Visual Studio Code, and you will be prompted to enter your WakaTime API key.
4. Retrieve your API key from your [WakaTime account settings](https://wakatime.com/settings/api-key).
5. Paste the API key into the prompt in Visual Studio Code.
6. WakaTime will now start tracking your coding activity automatically.

## Project Standards

### React + TypeScript Best Practices

1. **Component Structure**:

   - Use functional components with hooks.
   - Organize components in separate folders with `index.tsx` and `styles.module.css` (if needed).
   - Place reusable components in `src/components` and page-specific components in `src/pages`.

2. **TypeScript Usage**:

   - Use `React.FC` for functional components.
   - Define props using TypeScript interfaces or types.
   - Avoid using `any` type; prefer specific types or generics.

3. **Styling**:

   - Use CSS Modules or libraries like Tailwind CSS, Ant Design, or Material-UI.
   - Avoid mixing multiple UI libraries in the same project.

4. **State Management**:

   - Use React's Context API or libraries like Redux Toolkit for global state management.
   - Use `useState` and `useReducer` for local state.

5. **Code Quality**:
   - Follow ESLint and Prettier rules for consistent formatting.
   - Write clean, readable, and maintainable code with meaningful variable and function names.

### UI Libraries

You can use one of the following UI libraries:

- [Tailwind CSS](https://tailwindcss.com/)
- [Ant Design (AntD)](https://ant.design/)
- [Material-UI (MUI)](https://mui.com/)

**Note**: Do not combine multiple UI libraries in the same project.

## Git Workflow

1. **Create a New Branch**:

   - For each feature or bug fix, create a new branch:
     ```bash
     git checkout -b feature/branch-name
     ```

2. **Commit Changes**:

   - Commit your changes with meaningful messages:
     ```bash
     git add .
     git commit -m "Description of changes"
     ```

3. **Publish Your Branch**:

   - Push your branch to the repository:
     ```bash
     git push origin feature/branch-name
     ```

4. **Create a Pull Request**:
   - After pushing, create a Pull Request (PR) in the repository and provide a detailed description.
   - Wait for review and approval before merging.

## Running the Project

To run the project locally, use the following commands:

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://reactjs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [WakaTime Documentation](https://wakatime.com/help)
