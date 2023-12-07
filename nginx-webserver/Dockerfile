# use latest nginx image as the base
FROM nginx:latest

#copy webpage from host system to virtual machine
COPY ./website/index.html /usr/share/nginx/html

#remove existing file that's used as default webpage
#RUN rm /var/www/html/index.nginx-debian.html
#change the ownership of html file to nginx
#RUN chown www-data:www-data /var/www/html/index.html

#expose port to access from outside
EXPOSE 80