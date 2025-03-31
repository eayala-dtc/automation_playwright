Titulo: Instalacion de librerias y dependencias
Requisito previo
    - Instalar Node.js
    - Para abrir el proyecto instalar VS Code 

Pasos de instalacion: 
1. Instalar dependencias del proyecto
    - npm install 

** En caso que no instale las dependencias del package.json continuar con la instalacion de los siguientes puntos

2. Instalar playwright usando npm
    - npx playwright install

3. Instalar dependencia de cucumber
    - npm i @cucumber/cucumber

4. Instalar dependencia para ejecutar scripts de typescripts directamente en Node.js
    - npm i ts-node 

5. Instalar libreria de reporte
    - npm install multiple-cucumber-html-reporter --save-dev

6. Instalar libreria para manejar directorios
    - npm i fs-extra -D

7. Instalar libreria para manejar multiples ambientes en la ruta del proyecto
    - npm i dotenv -D 
    - npm i cross-env -D

9. Instalacion de extensiones adicionales en VSCode
    - playwright
    - Cucumber


Ejecucion: 
1. Comando para ejecutar los Tests
    - npm test o npm run test
# egx-automation
