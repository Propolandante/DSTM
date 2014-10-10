#ifndef listen_h
#define listen_h

#include <iostream>
#include <SFML/Graphics.hpp>

class Listen
{

private:
    sf::Texture background_tex;
    sf::Sprite background;

public:
    Listen();
    void drawScene(sf::RenderWindow &window);
};

#endif // listen_h
