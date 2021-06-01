# PhagePlotter
Basic Phage simulation plotter that uses a web interface to simulate bacterio phage interaction.

## Structure of Repository
    ---/frontwebpage
     |    The frontend is here.
     |-/phageplotter
     |    The backend is here.
     |-.gitignore
     |-DS_Store
     |-README.md (this file)
     
 The project is organized into the front-end, built using `React`. And the backend built using `Django` and `Seaborn`. 
 Note that you have to install the packages in each before starting the local environments. Please refer to the guide below to get started.
 
 ## Getting Started
 
 ### `npm install` and `npm start` (Front-End)
 
 This is the fastest way to get the web interface working. The `React` interface is built using `Reactstrap` via asynchronous linking to the `Django` server.
 Running these commands installs the `node_packages` within `packages.json`, and compiles the program. Any updates to the code will be updates in the real time
 
 ### Activating the Virtual Environment and Installing Required Packages in Python 
 
 The Django server can be hosted locally via the help of `virtualenv`. This means you have to set up virtual environment.

       virtualenv <name>
       > Virtual Environment created. 
       
       ON WINDOWS
       <name>\Scripts\activate
       > Virtual Environment created.
       
       ON MACOS / LINUX
       source bin/activate
       > Virtual Environement created.
       
       pip install requirements.txt
       > This installs all the required libraries for Python.
       
 For more about how Python works and how Venv works, refer to [the Python documentation](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/)
 
 ### Contacting Us
 email...
