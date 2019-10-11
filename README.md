# WebRTC-TicTech

---
### Setting Up


Before running, you will have to install the Web Server app for chrome: https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en

Once you install it, click on the "Apps" in chrome, and launch Web Server. 

Navigate the choose folder to the webRTC-TicTech folder and click on the URL. 
The page should pop up in your browser.

---
### Navigate

For now, the page will have 2 button.
* Camera will start automatically when the page loads.

<b>1. Start Recording Button</b> 
* Once this is clicked, the countdown timer will start (I set it as 0.1 minute for now)
* Button will change to 'redo recording'
* if redo recording is clicked
  * Button will change back to 'start recording'
  * countdown timer stop
  * download button will not light up since it is not yet 0.1 minute
* If the timer reaches 0.0
  * Download button will light up, you will be able to download the video and look at it (in our case once everything is settled, we will change it to upload)
  * Button will change back to 'start recording'


<b>2. Download Button</b> <i>(It will be changed to upload when everything is confirmed; for now, I wanna make sure that the video is recorded correctly)</i>
* Once the download button is click, the camera will stop
* You will not be able to record more videos once camera is stopped
---
