// TODO Multiple devices.

// Puppeteer
const puppeteer = require('puppeteer');
const devices = puppeteer.devices;

// Express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Express-validator
const { check, validationResult } = require('express-validator/check');
const { matchedData } = require('express-validator/filter');


// Support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// Request Puppeteer screenshot with site & device. Returns binary 'image/png'
// curl -d "site=http://www.google.com&device=iPad" -X POST http://localhost:3000/screen
app.post('/screen', [
  check('site', 'Site should be valid URL').isURL(),
  check('device', 'Device should be a device or viewport dimension').isAlphanumeric()
], async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(422).json({ errors: errors.mapped() });

  const valid = matchedData(req);
  const site = valid.site;
  const device = valid.device;
  //console.log(valid);

  const browser = await puppeteer.launch({
    headless: true
  });
  const page = await browser.newPage();
  await page.emulate(devices[device]);
  await page.goto(site);
  const screenshot = await page.screenshot({ fullPage: true });
  await browser.close();

  res.writeHead(200, {
    'Content-Type': 'image/png',
    'Content-Disposition': `attachment; filename=${encodeURIComponent(site)}_${device}.png`,
    'Content-Length': screenshot.length
  });

  res.end(screenshot, 'binary');
});

// Query puppeteer DeviceDescriptors. Return array of device names.
app.get('/devices', (req, res) => {
  const allDevices = [];

  for (let device of devices) {
    if (device.name[0] == 'i') {
      allDevices.unshift(device.name); // Apple devices pushed up front
    } else {
      allDevices.push(device.name);
    }
  }

  res.send(allDevices);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))

module.exports.app = app;