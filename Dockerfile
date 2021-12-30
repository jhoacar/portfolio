FROM php:8.0-apache

# Copy all configuration file
COPY /apache /etc/apache2/sites-available/

# Copy all files except files for apache server
COPY . /var/www/html/
RUN rm -rf /var/www/html/apache

#docker run --rm -p 80:80 -v /home/jhoacar/JHOAN/Portfolio/v2:/var/www/html -v /home/jhoacar/JHOAN/Portfolio/v2/apache.conf:/etc/apache2/sites-available/000-default.conf php:8.0-apache 