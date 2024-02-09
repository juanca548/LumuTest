# LumuTest

Repository created for a test of Lumu Technologies

## Setup
To run this project, install it locally using npm in the root folder:

```bash
npm install
```
If you want to run the tests in console:

```bash
npm run cy:testConsole
```
Or if you want to run the tests in the interface of cypress:

```bash
npm run cy:testChrome
```

## Report

In case you want to create a report of the tests:

```bash
node cypress/cucumberReport.js
```

**_NOTE:_**   To create the report it is necessary to run the tests at least once or to have the relevant json files already generated.

## Word Counter
#### Inside the folder word-frequency
To run the program in python it is necessary to have [pip](https://pip.pypa.io/en/stable/installation/) installed because we need to install the library **matplotlib**

```bash
pip install matplotlib
```

After installed the library you only need to run the file

```bash
python word-frequency.py
```
