/* eslint-disable no-console */
const express = require('express')
const app = express()
const port = 8000
const puppeteer = require('puppeteer')

app.listen(port, () => {
    const takeScreenshot = async (slug) => {
        const browser = await puppeteer.launch({ 
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        }) 
        let url =  `${baseUrl}/${slug}/thumbnail`
        let destination = `/static/posts/${slug}-share.png`
        let width = 440
        let height = 220
        const page = await browser.newPage()
        await page.goto(url, {
            waitUntil: 'networkidle2',
        })
        await page.screenshot({
            path: destination,
            clip: {
            x: 0,
            y: 0,
            width,
            height,
            },
        })
  }
  
  const baseUrl = process.argv[2] || 'http://localhost:8000/'


    await browser.close()
    res.status(200).send("ok");


    


    const main = async (file) => {
        const destinationFile = `/static/posts/${file}-share.png`
      
        await takeScreenshot(file)
        console.log(`Created ${file}`)
        
    
    }

function generateImage(slug) {

    const file = slug
        main(file)
}
  
})


module.exports.generateImage = generateImage
