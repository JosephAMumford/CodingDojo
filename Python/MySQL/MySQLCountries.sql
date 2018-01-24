-- NOTE: Downloaded world.sql merged with example world.sql on MySQL Workbench.  Used 'country' table instead of 'countries', same data.


-- 1. What query would you run to get all the countries that speak Slovene? Your query should return the name of the country, language and language percentage. 
-- Your query should arrange the result by language percentage in descending order. (1)
SELECT country.name AS 'Country', language As 'Language', percentage AS 'Percentage' FROM languages
JOIN country ON languages.country_code = country.Code
WHERE language = 'Slovene'
GROUP BY percentage DESC;


-- 2. What query would you run to display the total number of cities for each country? Your query should return the name of the country and the total number of 
-- cities. Your query should arrange the result by the number of cities in descending order. (3)
SELECT country.name AS 'Country', COUNT(cities.id) AS 'Total Cities' FROM country
JOIN cities ON country.code = cities.country_code
GROUP BY country.name
ORDER BY COUNT(cities.id) DESC;


-- 3. What query would you run to get all the cities in Mexico with a population of greater than 500,000? Your query should arrange the result by population in 
-- descending order. (1)
SELECT cities.name AS 'Cities in Mexico', FORMAT(cities.Population, "Standard") AS 'Population' FROM cities
JOIN country ON cities.country_code = country.Code
WHERE cities.population >= 500000 AND country.name = 'Mexico'
ORDER BY cities.population DESC;


-- 4. What query would you run to get all languages in each country with a percentage greater than 89%? Your query should arrange the result by percentage in 
-- descending order. (1)
SELECT country.name AS 'Country', languages.language AS 'Language' , FORMAT(languages.percentage, "Percent")AS 'Percentage' FROM country
JOIN languages ON country.Code = languages.country_code
WHERE languages.percentage > 89
ORDER BY languages.percentage DESC;


-- 5. What query would you run to get all the countries with Surface Area below 501 and Population greater than 100,000? (2)
SELECT country.name AS 'Country', FORMAT(country.SurfaceArea, "Standard") AS 'Surface Area', FORMAT(country.Population, "Standard") AS 'Population' FROM country
WHERE country.SurfaceArea < 501 AND country.Population > 100000
GROUP BY country.name
ORDER BY country.population DESC;


-- 6. What query would you run to get countries with only Constitutional Monarchy with a capital greater than 200 and a life expectancy greater than 75 years? (1)
SELECT country.name AS 'Country', country.GovernmentForm AS 'Government', country.Capital AS 'Captial', country.LifeExpectancy AS 'Life Expectancy' FROM country
WHERE country.GovernmentForm = 'Constitutional Monarchy' AND country.Capital > 200 AND country.LifeExpectancy > 75
ORDER BY country.Capital DESC;


-- 7. What query would you run to get all the cities of Argentina inside the Buenos Aires district and have the population greater than 500, 000? The query 
-- should return the Country Name, City Name, District and Population. (2)
SELECT country.name AS 'Country', cities.name AS 'City', cities.district AS 'District', FORMAT(cities.population, "Standard") AS 'Population' FROM country
JOIN cities ON country.Code = cities.country_code
WHERE cities.district = 'Buenos Aires' AND cities.population > 500000
ORDER BY cities.population DESC;


-- 8. What query would you run to summarize the number of countries in each region? The query should display the name of the region and the number of countries. 
-- Also, the query should arrange the result by the number of countries in descending order. (2)
SELECT country.Region, COUNT(country.Code) FROM country
GROUP BY country.Region
ORDER BY COUNT(country.Code) DESC;