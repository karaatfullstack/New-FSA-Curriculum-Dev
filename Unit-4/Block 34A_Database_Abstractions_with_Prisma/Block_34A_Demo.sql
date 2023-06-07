CREATE TABLE students (
  id serial PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  birthdate date NOT NULL,
  phone_number text
);

CREATE TABLE courses (
  id serial PRIMARY KEY,
  name text NOT NULL,
  description text,
  start_date date NOT NULL,
  end_date date NOT NULL
);

CREATE TABLE enrollments (
  student_id int NOT NULL REFERENCES students (id),
  course_id int NOT NULL REFERENCES courses (id),
  start_date date NOT NULL,
  end_date date NOT NULL,
  PRIMARY KEY (student_id, course_id)
);