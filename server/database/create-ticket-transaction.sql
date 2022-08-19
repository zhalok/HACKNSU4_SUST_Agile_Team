create table ticket_transaction(
    id int not null auto_increment primary key,
    ticket_id int not null,
    user_id int not null,
    issue_date date not null,
    payment_trans_id varchar(256) not null,
    paid_amount int not null
)