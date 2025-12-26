# 🧩 React Memory Match

A sleek, interactive **Memory Cards game** built with **React.js**. This project challenges players to find matching pairs of cards while tracking their progress. It’s designed with a focus on smooth state management and responsive UI.

---

## 🚀 Features

- **Dynamic Shuffling:** Cards are randomized at the start of every game to ensure a unique experience.
- **Game Logic:** Tracks selected cards, prevents double-clicking the same card, and handles match verification.
- **Score Tracking:** Keeps a real-time count of the player's total turns/moves.
- **Responsive Design:** Fully optimized for desktop, tablet, and mobile screens.
- **Smooth Animations:** CSS-driven card flip transitions and matching effects for a polished feel.

## 🛠️ Tech Stack

- **Framework:** [React.js](https://reactjs.org/)
- **State Management:** React Hooks (`useState`, `useEffect`, `useCallback`)
- **Styling:** CSS3 (Flexbox/Grid)
- **Build Tool:** Vite / Create React App

---

## ⚙️ Installation & Setup

Follow these steps to get the project running on your local machine:

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/KhaledAbdurahman/Memory-Card-Game.git]
    ```

2.  **Navigate to the project folder:**

    ```bash
    cd Memory-Card-Game
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Start the development server:**
    ```bash
    npm run dev
    ```

---

## 🧠 Core Logic

The game state is managed by comparing two selected card objects. When a user selects two cards:

1.  The `choice` states are updated.
2.  A `useEffect` hook triggers a comparison check.
3.  If the attributes match, the `matched` property of the card objects is set to `true`.
4.  If they don't match, a `setTimeout` delays the flip-back so the player can memorize the positions.

---
