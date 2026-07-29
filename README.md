# typescript: 
https://www.youtube.com/watch?v=d56mG7DezGs&t=1139s 

# react: javascript library for creating user interfaces
https://www.youtube.com/watch?v=SqcY0GlETPk&t=163s

# HTML: 
https://www.youtube.com/watch?v=N8YMl4Ezp4g&list=PLC3y8-rFHvwhuX4qGvFx-wPy_MEi6Jdp7 
 - common used blocks
 - after: look for semantic html
## folder distribution
+ node modules: where 3rd party libraries are installed
+ public: where public assets of website are store, e.g images

## file naming
+ .ts: typescript files
+ .tsx: react components

## virtual DOM
javascript data structure

pending:
React: Can build a form, fetch data, show loading/error/empty states.
Typescritpt: Can model DTOs and API payload types without any.
nestJs https://docs.nestjs.com/first-steps


# nestjs
1. instalar paquetes: npm i -g @nestjs/cli
2. nest new taskapi: crear el proyecto backend
3. generar module: nest generate module moduleName
4. generar controlador sin spec(archivo de testing): nest generate controller tasks --no-spec
5. generar service: nest generate service tasks --no-spec

- npm i @nestjs/mongoose mongoose
decorador para indicar que tipo de dato se espera
- npm i --save class-validator class-transformer


## Use of ORM/ODM
modules that connect to a database, and permit you to do operations with code (e.g instead of select * from, they give you a function findall())


----------
24.54

HECHO: 
- dto
- schemas -> diferencia?
TODO: 
explicar task.service