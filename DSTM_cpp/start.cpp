#include "start.h"
#include <SFML/Graphics.hpp>

Start::Start()
{
    std::cout << "Start initialized" << std::endl;

    // Load a sprite to display
    if (!background_tex.loadFromFile("media/title_bg.png"))
        std::cout << "texture failure!" << std::endl;
    background.setTexture(background_tex, true);

}

void Start::newGame()
{
    std::cout << "New Game" << std::endl;
}

void Start::continueGame()
{
    std::cout << "New Game" << std::endl;
}

void Start::drawSplashScreen(sf::RenderWindow &window)
{
    // Draw the sprite
    window.draw(background);
}
