# Initial version
# docker run -d -p 8080 --name webpage jjperezaguinaga/webserver 
FROM gliderlabs/alpine:3.1
MAINTAINER "Jose Aguinaga <me+docker@jjperezaguinaga.com>"
RUN apk-install python

ADD /dist /opt/www
WORKDIR /opt/www
USER daemon
CMD python -m SimpleHTTPServer 8080
EXPOSE 8080
