# Naive Bayes Text Classifier

A simple app for testing *Machine Learning* with **[Naive Bayes Algorithm](https://en.wikipedia.org/wiki/Naive_Bayes_classifier)**

## Install application

In order to install the NBTC app in your computer you will need **[node.js](https://nodejs.org/en/)**

Clone this repository on the chosen parent folder.

On the terminal please install the required packages:

```
$ npm install

$ bower install
```

And run the application:

```
$ npm start
```

And you are ready to start!

## Using the NBTC App

The application classifies text with two labels: *positive* or *negative*

The app lands on the prediction module, where the user can type any text for analysis. It is recommended to write only with letter without special punctuation.

![Prediction Module](img/landing.png)

![Classifier Result](img/result.png)

On the teaching module, the user can "teach" the computer to classify any text as *positive* or *negative*:

![Teaching Module](img/teach.png)

The app is pre taught with a limited vocabulary (around 260 words) of individual english words that are classified as either *positive* or *negative*. This prelearned information is stored on a JSON file in the ***learning/*** folder.

The user may teach words or phrases on top of the pre learned words, or if the user wishes to teach the computer from scratch, you may manually set the numerical values to *zero* and erase al the vocabulary array. (do not change the parameters on the first index of the JSON file).

If the user resets the *learnJason* file, you could teach the computer in any other western language.

If the user wishes to return to the initial state you may erase the NBTC app folder and clone the repo again, or make a copy of the json file and rewrite when needed.

I hope you enjoy your experience with the Naive Bayes Text Classifier APP.


---

Made by ***Simon Garmendia*** </br></br>
email: sgarmendia@gmail.com </br>
twitter: @simongarm </br>
medium: [@sgarmendia](https://medium.com/@sgarmendia) </br>
blog: [sgcodingblog](https://sgcodingblog.wordpress.com/) </br></br>
This app is under freeware
