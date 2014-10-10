#include "deliver.h"
#include <SFML/Graphics.hpp>

Deliver::Deliver()
{
    std::cout << "Deliver initialized" << std::endl;

    // Load a sprite to display
    if (!background_tex.loadFromFile("media/deliver_bg.png"))
        std::cout << "texture failure!" << std::endl;
    background.setTexture(background_tex, true);
    // Create a graphical text to display
    if (!font.loadFromFile("fonts/ARIAL.TTF"))
        std::cout << "font failure!" << std::endl;
    text.setString("March 3, 2048 | Morning Press Conference");
    text.setFont(font);
    text.setCharacterSize(20);
    text.setColor(sf::Color::Black);
}

void Deliver::drawScene(sf::RenderWindow &window)
{
    // Draw the sprite
    window.draw(background);
    // Draw the text
    window.draw(text);
}
