create table train(

id int not null auto_increment primary key,
name varchar(256),
travel_from varchar(256) not null,
travel_to varchar(256) not null,
deprature_time varchar(256) not null,
arrival_time varchar(256) not null

);