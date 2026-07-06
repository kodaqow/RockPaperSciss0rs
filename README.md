# 🎮 Rock - Paper - Scissors Web Showdown

A modern, fast, and responsive web implementation of the classic hand game, built using semantic HTML5, pure CSS3 layouts, and modular vanilla JavaScript. Challenge an automated computer opponent and test your luck with real-time score tracking!

---

## ✨ Features

* **Automated Game Logic:** Uses a dedicated modular game engine to determine rounds seamlessly.
* **True Randomization:** The computer utilizes localized algorithmic math (`Math.random()`) to pick its move completely on the fly.
* **Real-time Score Keeping:** Global state management continuously monitors your running wins, losses, and ties without resetting mid-session.
* **Dynamic DOM Manipulation:** Leverages JavaScript `innerHTML` injection to update round results and live stats instantaneously without a page reload.
* **User-Friendly Interface:** Clear, bold visual feedback using custom styled buttons and accessible semantic layout grids.

---

## 🛠️ Tech Stack Built With

* **HTML5:** Semantic architecture layout (`<main>`, `<button>`, container blocks).
* **CSS3:** Styled layout with a flexible box model (`Flexbox`), hidden layouts, global typography adjustments, and interactive cursor indicators.
* **JavaScript (ES6+):** Pure functional programming using global scope configurations, programmatic template literals, and automated state pipelines.

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps:

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/kodaqow/RockPaperScissors.git](https://github.com/kodaqow/RockPaperScissors.git)
    ```
2.  **Navigate to the Directory:**
    ```bash
    cd RockPaperScissors
    ```
3.  **Launch the Game:**
    Simply double-click the `index.html` file to open it instantly in any modern web browser—no servers or installations required!

---

## 🕹️ How to Play

1. Click any of the three action buttons: ✊ (Rock), ✌️ (Scissors), or ✋ (Paper).
2. The game will immediately process your choice, compute a random defense strategy for the computer, and judge the victor.
3. Review your immediate hand matchup results in the status box.
4. Watch your ongoing win, loss, and tie counts update live right below the stadium area!