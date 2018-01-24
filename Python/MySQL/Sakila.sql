-- 1. What query would you run to get all the customers inside city_id = 312? Your query should return customer first name, 
-- last name, email, and address.
SELECT CONCAT_WS(" ", customer.first_name, customer.last_name) AS 'Name', customer.email AS 'Email', address.address AS 'Address' FROM customer
JOIN address ON customer.address_id = address.address_id
WHERE address.city_id = 312;


-- 2. What query would you run to get all comedy films? Your query should return film title, description, release year, 
-- rating, special features, and genre (category).
SELECT film.title AS 'Film Title', film.description AS 'Film Description', film.release_year AS 'Release Year', film.rating AS 'Rating', 
film.special_features AS 'Special Features', category.name AS 'Genre' FROM category
JOIN film_category ON category.category_id = film_category.category_id
JOIN film ON film_category.film_id = film.film_id
WHERE category.name = 'Comedy'
ORDER BY film.title ASC;


-- 3. What query would you run to get all the films joined by actor_id=5? Your query should return the actor id, actor name, 
-- film title, description, and release year.
SELECT film_actor.actor_id AS 'Actor ID', CONCAT_WS(" ", actor.first_name, actor.last_name) AS 'Name', film.title AS 'Film Title', 
film.description AS 'Film Description', film.release_year AS 'Release Year' FROM actor
JOIN film_actor ON actor.actor_id = film_actor.actor_id
JOIN film ON film_actor.film_id = film.film_id
WHERE actor.actor_id = 5
ORDER BY film.release_year ASC;


-- 4. What query would you run to get all the customers in store_id = 1 and inside these cities (1, 42, 312 and 459)? Your 
-- query should return customer first name, last name, email, and address.
SELECT CONCAT_WS(" ",customer.first_name, customer.last_name) AS 'Name', customer.email AS 'Email', address.address AS 'Address', 
customer.store_id AS 'Store Id', address.city_id AS 'City Id' FROM customer
JOIN address ON customer.address_id = address.address_id
WHERE customer.store_id = 1 AND address.city_id IN (1, 42,312,459);


-- 5. What query would you run to get all the films with a "rating = G" and "special feature = behind the scenes", joined by 
-- actor_id = 15? Your query should return the film title, description, release year, rating, and special feature. Hint: You 
-- may use LIKE function in getting the 'behind the scenes' part.
SELECT film.title AS 'Film Title', film.description AS 'Film Description', film.release_year 'Release Year', film.rating AS 'Rating', 
film.special_features AS 'Special Features' FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
wHERE film_actor.actor_id = 15 AND film.rating = 'G' AND film.special_features LIKE('%Behind the Scenes');


-- 6. What query would you run to get all the actors that joined in the film_id = 369? Your query should return the film_id, 
-- title, actor_id, and actor_name.
SELECT film.film_id AS 'Film Id', film.title AS 'Film Title', film_actor.actor_id AS 'Actor Id', CONCAT_WS(" ", actor.first_name, actor.last_name) AS 'Actor' FROM film
JOIN film_actor ON film.film_id = film_actor.film_id 
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE film.film_id = 369
ORDER BY actor.last_name ASC;

-- 7. What query would you run to get all drama films with a rental rate of 2.99? Your query should return film title, 
-- description, release year, rating, special features, and genre (category).
SELECT film.title AS 'Film Title', film.description AS 'Film Description', film.release_year AS 'Release Year', film.rating AS 'Rating', 
film.special_features AS 'Special Features', category.name AS 'Genre' FROM category
JOIN film_category ON category.category_id = film_category.category_id
JOIN film ON film_category.film_id = film.film_id
WHERE category.name = 'Drama' AND film.rental_rate = 2.99
ORDER BY film.title ASC;


-- 8. What query would you run to get all the action films which are joined by SANDRA KILMER? Your query should return film 
-- title, description, release year, rating, special features, genre (category), and actor's first name and last name.
SELECT film.title AS 'Film Title', film.description AS 'Film Description', film.release_year AS 'Release Year', 
film.special_features AS 'Special Features', category.name AS 'Genre', CONCAT_WS(" ", actor.first_name, actor.last_name) AS 'Actor' FROM category
JOIN film_category ON category.category_id = film_category.category_id
JOIN film ON film_category.film_id = film.film_id
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE CONCAT_WS(" ", actor.first_name, actor.last_name) = 'SANDRA KILMER' AND category.name = 'Action'
ORDER BY film.title ASC;