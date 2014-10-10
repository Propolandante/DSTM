#ifndef start_h
#define start_h

#include <iostream>
#include <SFML/Graphics.hpp>

class Start
{

private:
    sf::Texture background_tex;
    sf::Sprite background;

public:
    Start();
    void newGame();
    void continueGame();
    void drawSplashScreen(sf::RenderWindow &window);
};

#endif // start_h
