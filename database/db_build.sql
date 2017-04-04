BEGIN;

DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  dish VARCHAR(255) NOT NULL,
  description TEXT,
  chef_name VARCHAR(255) NOT NULL,
  background_color VARCHAR(25) NOT NULL,
  date_published TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO posts (dish, description, chef_name, date_published, background_color) VALUES
('mohamed\'s meat balls', 'Mohamed came round and brought some meatballs and rice that his Mum made for us and it was AMAZING! And we ate it all and then we watched the matrix and everyone was really tired because it was like 2 hours long but it didn\'t matter cos it was database week', 'mohamed\'s Mum', 'blue');

INSERT INTO posts (dish, description, chef_name, date_published, background_color) VALUES
('Eoin\s Ratatouille', 'Eoin and Shireen made  a load of Ratatouille and rice and some other stuff and Shireen played some really funny music and then we had an early one because it had been a long day. The ratatouille was great!', 'Eoin', 'green');

INSERT INTO posts (dish, description, chef_name, date_published, background_color) VALUES
('Lubes\' Lasagne', 'Lubes doesnt even eat meat! Why did he bother making lasagne when he doesnt eat meat!? Everyone laughed. HAHAHAHAHA. Also Emily likes eating socks. Wierd.', 'Lubes', 'purple');

COMMIT;
