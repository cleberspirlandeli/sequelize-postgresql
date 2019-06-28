CREATE TABLE IF NOT EXISTS projects(
    id           integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name         text    NOT NULL CHECK (name <> ''),
    priority     integer NOT NULL,
    description  text,
    deliverydate date    NOT NULL
);

CREATE TABLE IF NOT EXISTS tasks(
    id           integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name         text    NOT NULL CHECK (name <> ''),   
    done         boolean,
    projectId    integer REFERENCES projects(id)
);


-- PROJECTS
INSERT INTO projects(name, priority, description, deliverydate)
VALUES('Make a Backend', 1, 'Using Node JS', '2019-12-01')

INSERT INTO projects(name, priority, description, deliverydate)
VALUES('Make a App Native', 1, 'Using React Native', '2019-12-01')

INSERT INTO projects(name, priority, description, deliverydate)
VALUES('Make a Web App', 2, 'Using React JS', '2020-06-01')


-- TASKS
INSERT INTO tasks(name, done, projectId)
VALUES('Create App Express', false, 1)

INSERT INTO tasks(name, done, projectId)
VALUES('Create Components Native', false, 2)

INSERT INTO tasks(name, done, projectId)
VALUES('Create DataBase Postgresql', false, 1)