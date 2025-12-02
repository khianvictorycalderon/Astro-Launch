// ADOBE ANIMATE HTML5 GAME
// by Khian Victory D. Calderon and Rafael Metran
// 3 Pages
var page = "home";

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
    homeScreen.x = stage.canvas.width / 2;
    homeScreen.y = stage.canvas.height / 2;
    stage.addChild(homeScreen);
}

// ===================== MECHANICS FUNCTIONS =====================
function homePage() {
	// Home page (at the beginning of the game)
    placeHomeScreen();
}

function gamePage() {
	// Game page
}

function overPage() {
	// Over page
}

// ===================== PAGE MANAGEMENT =====================
switch (page) {
	case "home":
		homePage();
		break;
	case "game":
		gamePage();
		break;
	case "over":
		overPage();
		break;
}