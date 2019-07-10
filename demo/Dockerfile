FROM java:8-jdk-alpine

COPY ./target/demo-0.0.1-SNAPSHOT.jar /usr/app/

WORKDIR /usr/app

#RUN sh -c 'touch demo-0.0.1-SNAPSHOT.jar'

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

ENTRYPOINT ["java","-Dserver.port=8888", "-jar","demo-0.0.1-SNAPSHOT.jar"] 

# EXPOSE 8080