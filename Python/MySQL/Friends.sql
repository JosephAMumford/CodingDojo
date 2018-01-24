-- Created table by Forward Engineering ERD

INSERT INTO users (first_name, last_name, created_at, updated_at)
VALUES ("Chris", "Baker", NOW(), NOW());

INSERT INTO users (first_name, last_name, created_at, updated_at)
VALUES ("Diana", "Smith", NOW(), NOW());

INSERT INTO users (first_name, last_name, created_at, updated_at)
VALUES ("James", "Johnson", NOW(), NOW());

INSERT INTO users (first_name, last_name, created_at, updated_at)
VALUES ("Jessica", "Davidson", NOW(), NOW());

INSERT INTO friendships (user_id, friend_id, created_at, updated_at)
VALUES (1,4, NOW(), NOW());

INSERT INTO friendships (user_id, friend_id, created_at, updated_at)
VALUES (1,3, NOW(), NOW());

INSERT INTO friendships (user_id, friend_id, created_at, updated_at)
VALUES (1,2, NOW(), NOW());

INSERT INTO friendships (user_id, friend_id, created_at, updated_at)
VALUES (2,1, NOW(), NOW());

INSERT INTO friendships (user_id, friend_id, created_at, updated_at)
VALUES (3,1, NOW(), NOW());

INSERT INTO friendships (user_id, friend_id, created_at, updated_at)
VALUES (4,1, NOW(), NOW());

SELECT CONCAT_WS(" ", users.first_name, users.last_name) AS 'User', CONCAT_WS(" ", users2.first_name, users2.last_name) AS 'Friend' FROM users
LEFT JOIN friendships ON users.id = friendships.user_id
LEFT JOIN users AS users2 ON friendships.friend_id = users2.id
ORDER BY users2.last_name ASC;