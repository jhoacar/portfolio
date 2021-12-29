FROM php:8.0-apache
COPY ./apache.conf /etc/apache2/sites-available/000-default.conf
COPY . /var/www/html/

#docker run --rm -p 80:80 -v /home/jhoacar/JHOAN/Portfolio/v2:/var/www/html -v /home/jhoacar/JHOAN/Portfolio/v2/apache.conf:/etc/apache2/sites-available/000-default.conf php:8.0-apache 