#ifndef deliver_h
#define deliver_h

#include <iostream>
#include <SFML/Graphics.hpp>

class Deliver
{

private:
    sf::Texture background_tex;
    sf::Sprite background;
    sf::Font font;
    sf::Text text;

public:
    Deliver();
    void drawScene(sf::RenderWindow &window);
};

#endif // deliver_h

