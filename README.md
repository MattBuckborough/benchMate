# benchMate V0.0.1
### <p>Last Updated: Jun 21 2017</p> Email:  mattbuckborough@gmail.com
## General Usage Notes
This is a web application written using the [MEAN](https://en.wikipedia.org/wiki/MEAN_(software_bundle)) stack. 
## Setup
### Requirements
* [Raspberry Pi 2](https://www.raspberrypi.org/products/raspberry-pi-2-model-b/)
* [MFRC 522 RFID Reader](https://www.newegg.ca/Product/Product.aspx?Item=9SIA8Y63G23487)
* MFRC 522 RFID Tags x N
* Jumper Cables
* USB Raspberry Pi Webcam
* Have [Raspian](https://www.raspberrypi.org/downloads/raspbian/) OS Running on Pi
* Have Mongo DB and Node.js installed
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
