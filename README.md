# Projet 12 Titre Développeur d'Application JavaScript React : SportSee

- [Installation (version française)](#installation-version-française)
    - [Prérequis](#prérequis)
    - [Étape 1 : installation et lancement du back-end](#étape-1--installation-et-lancement-du-back-end)
    - [Étape 2 : installation et lancement du front-end](#étape-2--installation-et-lancement-du-front-end)
- [Installation (english version)](#installation-english-version)
    - [Prerequisites](#prerequisites)
    - [Step 1: Installating and running back-end](#step-1-installating-and-running-back-end)
    - [Step 2: Installating and running front-end](#step-2-installating-and-running-front-end)

---

## Installation (*version française*)

### Prérequis

* [NodeJS](https://nodejs.org/fr/) (**version recommandée**)
* [Yarn](https://yarnpkg.com/) (uniquement pour l'API back-end)
* [npm](https://www.npmjs.com/)

---

#### Étape 1 : Installation et lancement du *back-end*

Pour fonctionner, l'application nécessite l'API back-end.

Pour l'obtenir et l'installer, il faut :
1. se rendre sur [P12-SportSee-Back](https://github.com/VGrolleau/P12-SportSee-Back),
2. suivre les instructions données sur le Readme associé.

⚠️ Dans les explications données pour l'installation avec Docker,\
⚠️ et plus précisément la commande qui permet de créer et lancer le container,\
⚠️ **ne pas oublier `dev` en fin de commande**!

---

#### Étape 2 : Installation et lancement du *front-end*

Une fois l'API installée sur votre PC et fonctionnelle, il faut :
1. forker le projet actuel sur votre compte github,
2. le cloner sur votre machine,
3. installer les paquets manquants en faisant `npm install` (ou `npm i`).

À partir de là, le projet peut être lancé.\
La commande permettant le lancement va dépendre de votre OS :
- **Linux** ou **Mac** : `npm run start_linux_mac`
- **Windows** : `npm run start_windows`\
*(J'ai eu besoin de modifier la commande de base pour éviter le lancement du front-end sur le même port que le back-end)*

Pour consulter le *front-end*, il faut alors aller sur [http://localhost:3001/](http://localhost:3001/).

---
## Installation (*english version*)

### Prerequisites

* [NodeJS](https://nodejs.org/en/) (**recommanded version**)
* [Yarn](https://yarnpkg.com/) (back-end API only)
* [npm](https://www.npmjs.com/)

---

#### Step 1: Installating and running *back-end*

To work, application requires its back-end API.

To obtain and install it, you need to:
1. go to [P12-SportSee-Back](https://github.com/VGrolleau/P12-SportSee-Back),
2. follow given instructions on associated Readme.

⚠️ In the explanations given for the installation with Docker,\
⚠️ and more precisely the command that allows to create and start the container,\
⚠️ **don't forget `dev` at the command's end**!

---

#### Step 2: Installating and running *front-end*

Once the API is installed on your PC and working, you must:
1. fork actual project on your github account,
2. clone it on your local machine,
3. install missing packages doing `npm install` (or `npm i`).

From there, project can be started.
The command to start will depend on your OS:
- **Linux** or **Mac** : `npm run start_linux_mac`
- **Windows** : `npm run start_windows`\
*(I needed to modify the basic command to avoid starting front-end on the same port as back-end)*

To consult front-end, you have to go to [http://localhost:3001/](http://localhost:3001/).
