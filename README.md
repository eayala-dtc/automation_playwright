## Instalacion de librerias y dependencias
### Requisito previo
Instalar Node.js para abrir el proyecto instalar VS Code 

Pasos de instalacion:
1. Instalar dependencias del proyecto 
```sh
    npm install
``` 

**En caso que no instale las dependencias del package.json continuar con la instalacion de los siguientes puntos**

2. Instalar playwright usando npm
```sh
    npx playwright install
```
3. Instalar dependencia de cucumber
```sh
    npm i @cucumber/cucumber
```
4. Instalar dependencia para ejecutar scripts de typescripts directamente en Node.js
```sh
    npm i ts-node 
```
5. Instalar libreria de reporte
```sh
    npm install multiple-cucumber-html-reporter --save-dev
```
6. Instalar libreria para manejar directorios
```sh
    npm i fs-extra -D
```
7. Instalar libreria para manejar multiples ambientes en la ruta del proyecto
```sh
    npm i dotenv -D 
    npm i cross-env -D
```
9. Instalacion de extensiones adicionales en VSCode
```sh
    playwright
    Cucumber
```

Ejecucion: 
1. Comando para ejecutar los Tests
```sh
    npm test # o npm run test
```