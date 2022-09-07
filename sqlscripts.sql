CREATE TABLE price_plan (
    id serial primary key, 
    plan_name VARCHAR(255) not null,
    sms_price VARCHAR(255) not null,
    call_price VARCHAR(255) not null
    );

CREATE TABLE users(
   id serial primary key,
   name VARCHAR(255) NOT NULL,
   username VARCHAR(255) NOT NUll,
   price_planId INT,
   FOREIGN KEY(price_planId) REFERENCES price_plan(id)
);

INSERT INTO price_plan(plan_name, sms_price, call_price) VALUES ('sms', '0.60', '1.40'),('call', '0.70', '1.65'),('anytime', '1.30', '1.20');