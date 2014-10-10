#include "listen.h"
#include <SFML/Graphics.hpp>

Listen::Listen()
{
    std::cout << "Listen initialized" << std::endl;

    // Load a sprite to display
    if (!background_tex.loadFromFile("media/powersthatbe_bg.png"))
        std::cout << "texture failure!" << std::endl;
    background.setTexture(background_tex, true);
}

void Listen::drawScene(sf::RenderWindow &window)
{
    // Draw the sprite
    window.draw(background);
}
