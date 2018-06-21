# benchMate V0.0.1
### <p>Last Updated: Jun 21 2017</p> Email:  mattbuckborough@gmail.com
## General Usage Notes
This is a web application written using the [MEAN](https://en.wikipedia.org/wiki/MEAN_(software_bundle)) stack. 
Manages a road hockey league.
## League Rules 
• Games are 20 minutes long.
  • If tied after 20 minutes, there is a sudden death period with no time limit.
• There are no teams
  • When two players are scheduled to play, they are the captains, and do a ‘schoolyard
pick’ of the other players present.
  • Coin flip for home ‘ice’ (first pick)
  • The win or loss goes only to the captains of each team.
• If there are not enough goalies, players must hit the post on the empty net to score a goal.
• The Player with the highest point value at the end of the season wins
  • Win = 2 points
  • Overtime Loss = 1 point 
## Setup
### Requirements
* [Raspberry Pi 2](https://www.raspberrypi.org/products/raspberry-pi-2-model-b/)
* Have [Raspian](https://www.raspberrypi.org/downloads/raspbian/) OS Running on Pi
* Have Mongo DB and Node.js installed (NOTE: Pi is ARM Arch)
  * [Node.js Install](https://nodejs.org/en/)
  * [Mongo DB Install](https://docs.mongodb.com/manual/administration/install-on-linux/)
  
### Install
```
git clone https://github.com/MattBuckborough/benchMate.git
cd benchMate
npm install
bower install
```
### Run
```
mongod
```
In a new terminal window
```
cd /path/to/benchMate
node app
```
## License
Copyright (c) 2017 Matt Buckborough

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
