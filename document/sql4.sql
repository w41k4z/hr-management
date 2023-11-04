CREATE TABLE account (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL,
    privilege INT DEFAULT 0,
    CHECK(privilege >= 0)
);
