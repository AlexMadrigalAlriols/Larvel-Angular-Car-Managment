# Backend

# Pasos a seguir:
moverse a la carpeta /frontend

Copiar el .env.exemple a .env y configurarlo.

Descargar las librerias
```bash
composer install
```

Generar la key de laravel
```bash
php artisan key:generate
```

Para Crear la base de datos:
```bash
php artisan migrate
```

Para Colocar Datos Aleatorios en la BD
```bash
php artisan migrate -seed
```

Encender el servidor
```bash
php artisan serve
```

# Frontend
Moverse a la carpeta backend

Descargar las librerias
```bash
npm i
```

Encender el servidor
```bash
ng s
```
