# Setup Instructions for Pokédex React App

## Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

## Steps to Run the Project

### 1. Install Node.js
If you don't have Node.js installed:
- Visit: https://nodejs.org/
- Download and install the LTS version

### 2. Move Image Files
Move these files from the root folder to the `public` folder:
- `pokemon-bg.jpg` → `public/pokemon-bg.jpg`
- `pokeball.jpg` → `public/pokeball.jpg`
- `Pokédex_logo.png` → `public/Pokédex_logo.png`

### 3. Install Dependencies
Open terminal in project folder and run:
```bash
npm install
```

This will install:
- React
- React-DOM
- React-Scripts

### 4. Start the Application
```bash
npm start
```

The app will automatically open in your browser at `http://localhost:3000`

### 5. Build for Production
To create an optimized production build:
```bash
npm run build
```

## Project Features to Explain in Interview

### 1. Component Structure
- **App.js**: Parent component managing all state
- **PokemonDisplay**: Shows selected Pokemon details
- **PokemonList**: Displays list of all Pokemon
- **SearchBar**: Search functionality
- **RegionButtons**: Region filter buttons

### 2. React Concepts Used
- **useState**: For state management (pokedex, selectedPokemon, loading)
- **useEffect**: For API calls when region changes
- **Props**: Passing data from parent to child components
- **Event Handling**: onClick, onChange, onSubmit
- **Conditional Rendering**: Loading states, error handling

### 3. Key Features
- Fetches data from PokéAPI
- Search Pokemon by name
- Filter by regions (Kanto, Johto, etc.)
- Responsive design
- Optimized API calls using Promise.all()

### 4. How Data Flows
```
App.js (stores data)
  ↓ (passes props)
Child Components (receive and display data)
  ↓ (triggers events)
App.js (updates state)
```

## Interview Questions You Can Answer

1. **What is React?**
   - A JavaScript library for building user interfaces using components

2. **Why did you use React?**
   - Component reusability
   - Easy state management with hooks
   - Virtual DOM for better performance

3. **What are hooks?**
   - useState: Manages component state
   - useEffect: Handles side effects like API calls

4. **How do you handle API calls?**
   - Used async/await with fetch API
   - Promise.all() for parallel fetching to improve performance

5. **What is the component lifecycle?**
   - Mount: Component is created and inserted into DOM
   - Update: State or props change
   - useEffect handles side effects during these phases

## Common Issues & Solutions

### Issue: "npm is not recognized"
- **Solution**: Install Node.js and restart terminal

### Issue: "Port 3000 is already in use"
- **Solution**: Kill the process or run on different port:
  ```bash
  set PORT=3001 && npm start
  ```

### Issue: Images not showing
- **Solution**: Make sure images are in `public` folder

## Tips for Demo
1. Start with Kanto region (default)
2. Show search functionality
3. Demonstrate region switching
4. Explain component structure
5. Show the code and explain React concepts

Good luck with your interview! 🚀
