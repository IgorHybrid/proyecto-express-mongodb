# Express-Mongodb

Este proyecto combina Express y MongoDB para crear un formulario que guarda peticiones de consulta en la base de datos. El formulario es un ejemplo sencillo de un formulario hecho con Bootstrap.

### Instalación
1. Clona el repositorio
2. Instala los paquetes NPM
```sh
npm install
```
3. Instala los datos necesarios para hacer funcionar la aplicación. Ten en cuenta que este comando borrará siempre la base de datos de este proyecto e insertará datos estandar.
```sh
npm run init-data
```
4. Ejecuta la aplicación
```sh
npm start
```

### Uso

Si se ha instalado correctamente el proyecto, se deberia poder ver un mensaje parecido a este en la consola:
```sh
Connected to database on Worker process: 18132
Server listening on port 8080
```
Se podrá acceder al formulario desde el navegador, en este caso, usando la url `localhost:8080/`

También se podrá ver un listado JSON de las peticiones hechas usando la url `localhost:8080/request/getAll`
