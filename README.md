# SpringBootReactJs

Este repositorio contiene el desafio de destreza y talento, el cual se desarrollo para el proceso de selección al cargo de Desarrollador Full Stack . - Septiembre 2021.


## Pre-requisitos 📋

* _Se necesita tener configurado e instalado el entorno de Java:_


```
Se verifica la correcta instalacion de Java verificando su versión con la linea de comando:

java -v

```


* _Se necesita tener configurado e instalado el entorno de NodeJs para ejecutar ReactJs:_


```
Se verifica la correcta instalacion de NodeJs verificando su versión con la linea de comando:

node -v

```

*  _Se necesita tener instalado en su un editor de codigo y/o IDE a elección. Se recomienda usar el IDE Intellij IDEA y el editor de código Visual Studio Code por la razon que el proyecto fue realizado en esos entornos._



### Comenzando 🚀

_Para obtener una copia del proyecto lo puedes clonar via linea de comando:_

```
git clone https://github.com/cristianjonhson/SpringBootReactJs.git 

```

_Descargando en un archivo comprimido Zip o bien clonando desde su IDE favorito._  
 
# SpringBootReactJs

Proyecto demostrativo Full Stack: Spring Boot (backend) + React (frontend).

Descripción
-----------
Este repositorio contiene una aplicación de ejemplo que integra un backend en Spring Boot y un frontend en React. Fue desarrollado como ejercicio de selección y referencia para proyectos full‑stack.

Resumen técnico
---------------
- Backend: Spring Boot 2.5.4 (parent), Java 11
- Frontend: React 17.0.2, react-scripts 4.0.3
- Gestor de dependencias backend: Maven (incluye `mvnw`/`mvnw.cmd`)
- Probado con Node.js (recomendado) >= 14 y npm >= 6

Estructura de carpetas
----------------------
Raíz del proyecto (resumen):

- `Frontend/` : Código del cliente React
	- `package.json` : dependencias y scripts del frontend
	- `public/` : archivos estáticos (index.html, manifest)
	- `src/` : código fuente React (`index.js`, `components/`, `pages/`, `css/`)
- `src/main/java/repositoryfullstack/` : código Java del backend
	- `Configuration/` : configuraciones de la app
	- `Controller/` : controladores REST (ej. `UserController.java`)
	- `Model/` : entidades del dominio (`Users.java`, `Company.java`)
- `src/main/resources/application.properties` : propiedades de Spring Boot
- `pom.xml` : pom principal del proyecto (Spring Boot 2.5.4)
- `mvnw`, `mvnw.cmd` : envoltorios (Maven Wrapper)

Comandos principales
-------------------

1) Clonar el repositorio

```bash
git clone https://github.com/cristianjonhson/SpringBootReactJs.git
cd SpringBootReactJs
```

2) Ejecutar el backend (Spring Boot)

Recomendado: usar el Maven Wrapper incluido:

```bash
./mvnw spring-boot:run
# o con Maven instalado
mvn spring-boot:run
```

El backend por defecto expone los endpoints en `http://localhost:8080`.

3) Ejecutar el frontend (React)

```bash
cd Frontend
npm install
npm start
```

El frontend se ejecuta en `http://localhost:3000` por defecto. La ruta usada en el proyecto es `http://localhost:3000/BotonIndex`.

4) Empaquetar el backend para producción

```bash
./mvnw clean package
# el artefacto jar queda en target/
```

Recomendaciones y notas
-----------------------
- Java: Este proyecto usa `java.version` = 11 (ver `pom.xml`).
- Spring Boot: versión 2.5.4 (parent) — actualizar con cuidado si cambia el ecosistema.
- Node / npm: Las dependencias de `react-scripts@4` funcionan bien con Node >= 14; si usa `nvm` instale `nvm use 14`.
- CORS: Si necesita probar la API localmente, el frontend usa `axios` para llamadas; asegúrese de que el backend permita CORS si no están en el mismo origen.

Pruebas
-------
- Backend: las dependencias de test están configuradas en el `pom.xml` (Spring Boot Starter Test). Ejecutar:

```bash
./mvnw test
```

- Frontend: ejecutar tests con:

```bash
cd Frontend
npm test
```

Contribuir
----------
1. Hacer un fork y un branch para su feature/bugfix.
2. Enviar un pull request con descripción clara de cambios.

Autor
-----
Cristian Jonhson Alvarez — desarrollador y documentación.

Contacto: https://github.com/cristianjonhson

Licencia
--------
Este repositorio no incluye un archivo LICENSE; agregue uno si desea declarar una licencia explícita.

Cambios recientes
-----------------
- README actualizado (Diciembre 2025): estructura, comandos y versiones.

Si desea, puedo:
- Añadir un script `start-all` que arranque backend y frontend con un solo comando.
- Incluir un `README` en inglés o agregar instrucciones Docker.

---
