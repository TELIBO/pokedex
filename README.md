<<<<<<< HEAD
# Pokédex React Application

A simple and interactive Pokédex web application built with **React.js** that fetches real-time data from the PokéAPI.

## 🚀 Features

- **Browse Pokémon**: View Pokémon from different regions (Kanto, Johto, Hoenn, Sinnoh, Unova)
- **Search Functionality**: Search for any Pokémon by name
- **Detailed Information**: See Pokémon images, types, and descriptions
- **Responsive Design**: Works on desktop and mobile devices
- **Real-time API Integration**: Fetches data from PokéAPI

## 🛠️ Technologies Used

- **React.js** - Frontend library for building user interfaces
- **JavaScript (ES6+)** - Programming language
- **CSS3** - Styling and responsive design
- **PokéAPI** - RESTful API for Pokémon data
- **React Hooks** - useState and useEffect for state management

## 📂 Project Structure

```
pokedex/
├── public/
│   ├── index.html
│   ├── pokemon-bg.jpg
│   ├── pokeball.jpg
│   └── Pokédex_logo.png
├── src/
│   ├── components/
│   │   ├── PokemonDisplay.js
│   │   ├── PokemonDisplay.css
│   │   ├── PokemonList.js
│   │   ├── PokemonList.css
│   │   ├── SearchBar.js
│   │   ├── SearchBar.css
│   │   ├── RegionButtons.js
│   │   └── RegionButtons.css
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## 🎯 Key React Concepts Demonstrated

1. **Component-Based Architecture**: Divided into reusable components
2. **State Management**: Using `useState` hook for managing application state
3. **Side Effects**: Using `useEffect` hook for API calls
4. **Props**: Passing data between parent and child components
5. **Event Handling**: onClick, onChange, onSubmit events
6. **Conditional Rendering**: Showing loading states and error messages
7. **List Rendering**: Mapping through arrays to display data

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd pokedex
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   - Navigate to `http://localhost:3000`

## 🎮 How to Use

1. **Browse Pokémon**: The app loads with Kanto region Pokémon by default
2. **Click on any Pokémon**: View detailed information on the left side
3. **Search**: Type a Pokémon name and click "GO" to find it
4. **Change Region**: Click region buttons (KANTO, JOHTO, etc.) to explore different Pokémon

## 🔧 Component Breakdown

### App.js (Parent Component)
- Manages all state (pokedex data, selected Pokemon, regions)
- Handles API calls to fetch Pokemon data
- Passes data and functions to child components via props

### PokemonDisplay.js
- Displays selected Pokemon's image, types, and description
- Receives pokemon data as props from App component

### PokemonList.js
- Shows scrollable list of all Pokemon in current region
- Handles click events to select Pokemon
- Highlights currently selected Pokemon

### SearchBar.js
- Provides search input and button
- Validates input and calls search function from App

### RegionButtons.js
- Displays buttons for different Pokemon regions
- Triggers region change in parent component

## 💼 Interview Talking Points

When explaining this project in TCS Ninja interview:

1. **Problem Statement**: "Created a dynamic web app to display Pokemon information with search and filter capabilities"

2. **Tech Stack**: "Used React.js for component-based architecture, REST API integration, and state management"

3. **Key Features**:
   - Real-time API data fetching using async/await
   - Efficient state management with React hooks
   - Responsive design for multiple devices
   - User-friendly search and filter functionality

4. **Challenges Solved**:
   - Optimized API calls using Promise.all() for parallel fetching
   - Implemented proper loading states for better UX
   - Created reusable components following DRY principle

5. **Learning Outcomes**:
   - Mastered React hooks (useState, useEffect)
   - Learned API integration and async operations
   - Understood component lifecycle and props flow
   - Practiced responsive web design

## 📝 Future Enhancements

- Add Pokemon evolution chains
- Implement advanced filtering by type
- Add favorites/bookmark functionality
- Include Pokemon stats and abilities
- Add animations and transitions

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements!

## 📄 License

This project is open source and available under the MIT License.

---

**Developed by**: [Your Name]  
**Contact**: [Your Email]  
**LinkedIn**: [Your LinkedIn Profile]
=======
# Pokédex

A web-based Pokédex application that allows users to view and search for Pokémon from different regions using data from the PokéAPI.

## Features

- Display Pokémon names, images, types, and descriptions.
- Filter Pokémon by regions: Kanto, Johto, Hoenn, Sinnoh, and Unova.
- Search for specific Pokémon by name.

## Technologies Used

- HTML
- CSS
- JavaScript
- PokéAPI

## Getting Started

### Prerequisites

- A modern web browser

## Usage

- **Load Pokémon Data**: Opens with Kanto region Pokémon.
- **View Pokémon Details**: Click a Pokémon name to see details.
- **Switch Regions**: Click region buttons to load Pokémon from that region.
- **Search Pokémon**: Enter a Pokémon name in the input box and click "Submit".

## License

Distributed under the BSD-2-Clause license See `LICENSE` for more information.

## Contact

Gmail - [sanjay24281803@example.com](mailto:sanjay24281803@example.com)

Project Link: [https://telibo.github.io/pokedex/](https://telibo.github.io/pokedex/)

>>>>>>> 444e5f2b903b5beeec5fc57054843d6939445746
