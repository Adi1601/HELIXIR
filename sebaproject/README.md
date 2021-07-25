**HELIXIR**
A teleconsultation web application designed to make consulting a doctor easier. A patient will be able to search for a doctor based on location, speciality or name of the doctor and book an appointment. The patient can subsequently consult the doctor on the HELIXIR teleconsultation platform using a unique doctor contactID. The patient also has the option to rate the experience after the consultation.
Prerequisites
Git needed to clone the repository
Node.js and its package manager (npm) installed

**Cloning** 
```
git clone https://gitlab.lrz.de/seba-master-2021/team-08/prototype.git
cd prototype
cd sebaproject
```



**Installing Dependencies**
The tools needed to run the application can be acquired via npm, the node package manager using:
                         `npm install`

**Running the application**
The front end and the back end can be started simultaneously through `npm start` as we have defined it to run multiple commands (node server.js for backend and react-scripts start for frontend) using “concurrently” as a dependency.
