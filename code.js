// ADOBE ANIMATE HTML5 GAME
// by Khian Victory D. Calderon and Rafael Metran

// ===================== DEFINING LINKAGES =====================

// Has playButton linkage inside so homeScreen.playButton
// Position must be at the center of the screen
let homeScreen = new lib.homeScreen;

// Also has playButton linkage inside so gameOverScreen.playButton
// and has dynamic text inside with instance name of "score"
// Position must also be at the center of the screen
let gameOverScreen = new lib.gameOverScreen;

// Main character
// Controlled using up and down arrows only
// Positioned at the 1/4 width of the screen
// Cannot go above or below screen (stop automatically)
let ship = new lib.ufo;

/* Asteroid type (This is to be dynamically generated rather than single instance)
 *    Asteroid Type | Linkages Name
 *    --------------|--------------
 *         1        |     as_a
 *         2        |     as_b
 *         3        |     as_c
 *         4        |     as_d
 *         5        |     as_e
 *         6        |     as_f
 *         7        |     as_g
 *         8        |     as_h
 */

// ===================== GAME MECHANICS =====================
/* Initial page is the home page, when button was clicked, it goes to game page.
 * In the game page, a ufo is shown, approximately at the 1/4 of the screen hozitonally position
 * Player controls the ufo with up and down or "W" or "S" keys, both should work for compatibility
 * Asteroid is generated dynamically (at random position) at the right side of the screen (not visible to user)
 * Then those asteroids moves from right to left, the player avoids colliding with it
 * Score is counted as timer, 1 second, 10 score
 * Overtime, asteroid moves faster and faster (technically no limit) but not more frequent, frequency of generation is random of maybe 3 - 8 asteroids per 10 seconds, whatever, just enough for human pace
 * Asteroid also rotates (randomly) just whatever
 * If the player hits any asteroid, game over, removes all the asteroid and the ufo ship, and shows the game over screen in the middle of the screen with score shown, and when play again was clicked, then go to game page again
 */

// ===================== UTILITY FUNCTIONS =====================
function placeHomeScreen() {
    homeScreen.x = stage.canvas.width / 2.6125;
    homeScreen.y = stage.canvas.height / 2.6125;
    stage.addChild(homeScreen);
}

function generateAsteroid(
    type, // Asteroid type: as_a, as_b, etc.
    speed // horizontal speed of this asteroid
) {
    let asteroid = new lib[type]();

    // Set initial position outside the right edge of the screen
    asteroid.x = stage.canvas.width + 50; // slightly outside
    asteroid.y = Math.random() * (stage.canvas.height - 50); // random vertical position

    // Speed (horizontal movement left) — use the passed parameter!
    asteroid.speed = speed + Math.random() * 3; // add small random variation

    // Rotation
    asteroid.rotationSpeed = Math.random() * 5 - 2.5; // rotates -2.5 to 2.5 degrees per tick

    // Add to stage and asteroids array
    stage.addChild(asteroid);
    asteroids.push(asteroid);
}

function deleteAsteroid(asteroid) {
    if (!asteroid) return; // safety check

    // Remove from stage
    stage.removeChild(asteroid);

    // Remove from array
    const index = asteroids.indexOf(asteroid);
    if (index > -1) {
        asteroids.splice(index, 1);
    }
}


// ===================== PAGE FUNCTIONS =====================
function homePage() {
    placeHomeScreen();
    stage.removeChild(ship);
    homeScreen.playButton.addEventListener("click", () => {
        gamePage();
    });
}

function overPage() {

    // Add the game over screen
    stage.addChild(gameOverScreen);

    // Center the game overs screen
    gameOverScreen.x = stage.canvas.width / 2.6125;
    gameOverScreen.y = stage.canvas.height / 2.6125;
}

let gameTickHandler; // store reference to remove ticker safely
let spawnTimeout;    // store reference to asteroid spawn timeout

function gamePage() {
    // Remove home screen and previous UFO
    stage.removeChild(homeScreen);
    homeScreen.playButton.removeEventListener("click");
    stage.removeChild(ship);

    // Reset asteroids array and variables
    asteroids = [];
    let asteroidSpeed = 3; // starting speed
    let moveUp = false;
    let moveDown = false;

    // ================== UFO SETUP ==================
    ship.x = stage.canvas.width / 6;
    ship.y = stage.canvas.height / 2;
    ship.scale = 0.08;
    stage.addChild(ship);

    // ================== KEYBOARD CONTROLS ==================
    function keyDownHandler(e) {
        switch (e.code) {
            case "ArrowUp":
            case "KeyW":
                moveUp = true;
                break;
            case "ArrowDown":
            case "KeyS":
                moveDown = true;
                break;
        }
    }

    function keyUpHandler(e) {
        switch (e.code) {
            case "ArrowUp":
            case "KeyW":
                moveUp = false;
                break;
            case "ArrowDown":
            case "KeyS":
                moveDown = false;
                break;
        }
    }

    window.addEventListener("keydown", keyDownHandler);
    window.addEventListener("keyup", keyUpHandler);

    // ================== ASTEROID SPAWNING ==================
    function spawnAsteroid() {
        const types = ["as_a","as_b","as_c","as_d","as_e","as_f","as_g","as_h"];
        const type = types[Math.floor(Math.random() * types.length)];

        generateAsteroid(type, asteroidSpeed);

        // Gradually increase speed for next asteroid
        asteroidSpeed += 0.05;

        // Schedule next spawn randomly (3-8 per 10 seconds)
        const interval = 1250 + Math.random() * 1250; // 1.25s - 2.5s
        spawnTimeout = setTimeout(spawnAsteroid, interval);
    }

    // Start spawning
    clearTimeout(spawnTimeout);
    spawnAsteroid();

    // ================== GAME LOOP ==================
    createjs.Ticker.framerate = 60; // optional for smooth movement

    // Remove previous game tick handler safely
    if (gameTickHandler) createjs.Ticker.removeEventListener("tick", gameTickHandler);

    gameTickHandler = () => {
        if (!ship) return;

        // UFO movement
        const ufoHeight = ship.getBounds() ? ship.getBounds().height * ship.scale : 100 * ship.scale;
        if (moveUp && ship.y - ufoHeight / 2 > 0) ship.y -= 6;
        if (moveDown && ship.y + ufoHeight / 2 < stage.canvas.height - stage.canvas.height / 4) ship.y += 6;

        // Asteroid movement and collision
        asteroids.forEach((asteroid) => {
            asteroid.x -= asteroid.speed;
            asteroid.rotation += asteroid.rotationSpeed;

            // Delete if off-screen
            if (asteroid.x + asteroid.getBounds().width < 0) {
                deleteAsteroid(asteroid);
            }

            // Collision detection
            const ufoBounds = ship.getTransformedBounds();
            const asteroidBounds = asteroid.getTransformedBounds();
            if (ufoBounds && asteroidBounds) {
                if (
                    ufoBounds.x < asteroidBounds.x + asteroidBounds.width &&
                    ufoBounds.x + ufoBounds.width > asteroidBounds.x &&
                    ufoBounds.y < asteroidBounds.y + asteroidBounds.height &&
                    ufoBounds.y + ufoBounds.height > asteroidBounds.y
                ) {
                    // Collision happened
                    asteroids.forEach(a => stage.removeChild(a));
                    asteroids = [];
                    stage.removeChild(ship);

                    // Stop spawning asteroids
                    clearTimeout(spawnTimeout);

                    // Remove ticker for this game
                    createjs.Ticker.removeEventListener("tick", gameTickHandler);

                    // Show Game Over screen
                    overPage();
                }
            }
        });

        stage.update();
    };

    // Start game loop
    createjs.Ticker.addEventListener("tick", gameTickHandler);
}

// Call the initial page
homePage();