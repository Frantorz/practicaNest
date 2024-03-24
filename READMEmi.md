# INSTALACION DE NEST
## Instalar Nest CLI Tool:(En la carpeta de trabajo)
~~~
npm i -g @nestjs/cli
~~~
## Crear proyecto NEST:(Creamos un nuevo proyecto con el nombre tracks-manager)
```bash
nest new tracks-manager
```
## Luego elegimos la opcion "npm" para descargar las dependencias.
# Nest new tracks-manager
## Entrar a la carpeta y commitear el código inicial:
```bash
cd tracks-manager
git status
git add .
git status
git commit -m "Initial Project commit"
```
## Crear un proyecto en Github
### Después:
~~~
Opción A:
//se supone que el repositorio está vacío (sin
commits)
git remote add origin URL_DE_GITHUB
git push -u origin main
Opción B:
• Hacer un clone
• Mover los archivos ahi (incluir .gitignore)
~~~
# Iniciar el proyecto
~~~
Iniciar el servidor:
npm run start:dev

Verlo en el navegador
http://localhost:3000
~~~

# Para qué mockeamos?
~~~
Nos permite trabajar con el front end aunque
nuestro back end no tenga implementada la
conexión con la base de datos.
~~~
~~~
1. Creamos el archivo /data/tracks.json.
Como imaginará, en este módulo copiaremos el arreglo de
tracks. (Ojo con el formato, debe ser un JSON, no un
objeto JavaScript)

2. Instalamos json-server: npm i json-server –D

3. Creamos un script en el archivo package.json para
montar el servicio de json-server:
"db": "json-server data/tracks.json --watch
--port 3030“

4. Montamos la mock database con: npm run db

5. Navegamos al puerto local donde montamos la DB
~~~

1-Creamos el archivo /data/tracks.json con el arreglo de tracks en formato JSON:
```json
[
  {"identificador": 1, "titulo": "titulo 1", "duracion": 120, "interprete": "interprete 1"},
  {"identificador": 2, "titulo": "titulo 2", "duracion": 125, "interprete": "interprete 1"},
  {"identificador": 3, "titulo": "titulo 3", "duracion": 112, "interprete": "interprete 2"},
  {"identificador": 4, "titulo": "titulo 4", "duracion": 210, "interprete": "interprete 1"},
  {"identificador": 5, "titulo": "titulo 5", "duracion": 220, "interprete": "interprete 3"},
  {"identificador": 6, "titulo": "titulo 6", "duracion": 180, "interprete": "interprete 2"}
]

```
2-Instalamos json-server:
```bash
npm i json-server -D
```
3-Creamos o modificamos en el archivo package.json para montar el servicio de json-server:
```json
{
  "scripts": {
    "db": "json-server data/tracks.json --watch --port 3030"
  }
}
```
4-Montamos la mock database con:
```bash
npm run db
```
5-Luego lo importamos en el servicio,asi simula la peticion a una base de dato.
```ts

```