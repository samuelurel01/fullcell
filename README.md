FullCell
======== 

* ERP de gerenciamento e controle para lojas e assisntências de telefonia 


Config
------

* Instale e configure o MySql no Ambiente 

``` 

docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=root -d mysql:latest --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci
```

* Crie um DataBase 

* Informe as credenciais de acesso no arquivo `application.properties`

```

spring.datasource.url=jdbc:mysql://localhost:3306/fullcell
spring.datasource.username=root
spring.datasource.password=root

```
