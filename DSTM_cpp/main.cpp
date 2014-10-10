#include <SFML/Audio.hpp>
#include <SFML/Graphics.hpp>

#include "start.h"
#include "listen.h"
#include "deliver.h"

#include <iostream>

using namespace std;

enum State {START, LISTEN, DELIVER};

sf::RenderWindow window(sf::VideoMode(720, 720), "Don't Shoot The Messenger");

Start start;
Listen listen;
Deliver deliver;

void draw (State);

int main()
{

    State state = START;

    // Start the game loop
    while (window.isOpen())
    {
        // Process events
        sf::Event event;
        while (window.pollEvent(event))
        {
            // Close window : exit
            if (event.type == sf::Event::Closed)
                window.close();
        }

        draw(state);
    }
    return EXIT_SUCCESS;
}

void draw( State state )
{
    window.clear();

    switch (state)
    {
    case START:
        start.drawSplashScreen(window);
        break;
    case LISTEN:
        listen.drawScene(window);
        break;
    case DELIVER:
        deliver.drawScene(window);
        break;
    }

    window.display();
}
