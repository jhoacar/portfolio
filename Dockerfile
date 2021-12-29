FROM php:8.0-apache
#This command is for enable 404 redirect!
COPY ./000-default.conf /etc/apache2/sites-available/000-default.conf

COPY . /var/www/html/
