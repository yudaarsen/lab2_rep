FROM maven AS build

COPY . /home/app/src

RUN mvn -f /home/app/src/pom.xml compile
CMD ["mvn","-f","/home/app/src/pom.xml","spring-boot:run"]



