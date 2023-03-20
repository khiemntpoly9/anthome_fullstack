FROM php:8.1.17-fpm-alpine3.17

# Install mysqli extension
RUN docker-php-ext-install mysqli