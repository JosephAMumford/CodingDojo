-- 1. What query would you run to get the total revenue for March of 2012?
SELECT DATE_FORMAT(billing.charged_datetime, '%M') AS 'Month', CONCAT('$',FORMAT(SUM(billing.amount), 'Currency')) AS 'Revenue' 
FROM billing
WHERE DATE_FORMAT(billing.charged_datetime, '%M') = 'March' AND DATE_FORMAT(billing.charged_datetime, '%Y') = '2012';


-- 2. What query would you run to get total revenue collected from the client with an id of 2?
SELECT billing.client_id AS 'Client ID', CONCAT('$', FORMAT(SUM(billing.amount), 'Currency')) AS 'Revenue' 
FROM billing
WHERE billing.client_id = 2;


-- 3. What query would you run to get all the sites that client=10 owns?
SELECT sites.domain_name AS 'Site', sites.client_id AS 'Client Id' 
FROM sites
WHERE sites.client_id = 10;


-- 4. What query would you run to get total # of sites created per month per year for the client 
-- with an id of 1? What about for client=20?
SELECT sites.client_id AS 'Client ID', COUNT(sites.site_id) AS 'Sites Created', DATE_FORMAT(sites.created_datetime, '%M') AS 'Month', 
DATE_FORMAT(sites.created_datetime, '%Y') AS 'Year' 
FROM sites
WHERE sites.client_id = 1
GROUP BY DATE_FORMAT(sites.created_datetime, '%M'), DATE_FORMAT(sites.created_datetime, '%Y')
ORDER BY DATE_FORMAT(sites.created_datetime, '%Y') ASC;


-- 5. What query would you run to get the total # of leads generated for each of the sites between 
-- January 1, 2011 to February 15, 2011?
SELECT sites.domain_name AS 'Site Name', COUNT(leads.leads_id) AS 'Total Leads' , DATE_FORMAT(leads.registered_datetime, '%M %e, %Y') AS 'Registed Date' 
FROM leads
LEFT JOIN sites ON leads.site_id = sites.site_id
WHERE leads.registered_datetime >= STR_TO_DATE('1/1/2011', '%m/%d/%Y') AND leads.registered_datetime <= STR_TO_DATE('2/15/2011', '%m/%d/%Y')
GROUP BY sites.domain_name;


-- 6. What query would you run to get a list of client names and the total # of leads we've generated 
-- for each of our clients between January 1, 2011 to December 31, 2011?
SELECT CONCAT_WS(' ', clients.first_name, clients.last_name) AS 'Client', COUNT(leads.leads_id) AS 'Total Leads' 
FROM clients
LEFT JOIN sites ON clients.client_id = sites.client_id
LEFT JOIN leads ON sites.site_id = leads.site_id
WHERE leads.registered_datetime >= STR_TO_DATE('1/1/2011', '%m/%d/%Y') AND leads.registered_datetime <= STR_TO_DATE('12/31/2011', '%m/%d/%Y')
GROUP BY CONCAT_WS(' ', clients.first_name, clients.last_name)
ORDER BY clients.client_id;


-- 7. What query would you run to get a list of client names and the total # of leads we've generated 
-- for each client each month between months 1 - 6 of Year 2011?
SELECT CONCAT_WS(' ', clients.first_name, clients.last_name) AS 'Client', COUNT(leads.leads_id) AS 'Total Leads', DATE_FORMAT(leads.registered_datetime, '%M') AS 'Month'
FROM clients
LEFT JOIN sites ON clients.client_id = sites.client_id
LEFT JOIN leads ON sites.site_id = leads.site_id
WHERE EXTRACT(MONTH FROM leads.registered_datetime) >= 1 AND EXTRACT(MONTH FROM leads.registered_datetime) <= 6 AND DATE_FORMAT(leads.registered_datetime, '%Y') = '2011'
GROUP BY CONCAT_WS(' ', clients.first_name, clients.last_name), DATE_FORMAT(leads.registered_datetime, '%M')
ORDER BY leads.registered_datetime;


-- 8. What query would you run to get a list of client names and the total # of leads we've generated 
-- for each of our clients' sites between January 1, 2011 to December 31, 2011? Order this query by 
-- client id.  
SELECT CONCAT_WS(' ', clients.first_name, clients.last_name) AS 'Client', sites.domain_name AS 'Site', COUNT(leads.leads_id) AS 'Total Leads',
DATE_FORMAT(leads.registered_datetime, '%M %e, %Y') AS 'Date Generated'
FROM clients
LEFT JOIN sites ON clients.client_id = sites.client_id
LEFT JOIN leads ON sites.site_id = leads.site_id
WHERE leads.registered_datetime >= STR_TO_DATE('1/1/2011', '%m/%d/%Y') AND leads.registered_datetime <= STR_TO_DATE('12/31/2011', '%m/%d/%Y')
GROUP BY CONCAT_WS(' ', clients.first_name, clients.last_name), sites.domain_name
ORDER BY clients.client_id, leads.registered_datetime;
-- 8, part 2. Come up with a second query that shows all the clients, the site name(s), and the total 
-- number of leads generated from each site for all time.
SELECT CONCAT_WS(' ', clients.first_name, clients.last_name) AS 'Client', sites.domain_name AS 'Site', COUNT(leads.leads_id) AS 'Total Leads'
FROM clients
LEFT JOIN sites ON clients.client_id = sites.client_id
LEFT JOIN leads ON sites.site_id = leads.site_id
GROUP BY CONCAT_WS(' ', clients.first_name, clients.last_name), sites.domain_name
ORDER BY clients.client_id, COUNT(leads.leads_id) DESC;


-- 9. Write a single query that retrieves total revenue collected from each client for each month of 
-- the year. Order it by client id.
SELECT CONCAT_WS(' ', clients.first_name, clients.last_name) AS 'Client', CONCAT('$', FORMAT(SUM(billing.amount), 'Currency')) AS 'Revenue',
DATE_FORMAT(billing.charged_datetime, '%M') AS 'Month', DATE_FORMAT(billing.charged_datetime, '%Y') AS 'Year' FROM billing
LEFT JOIN clients ON billing.client_id = clients.client_id
GROUP BY billing.client_id, DATE_FORMAT(billing.charged_datetime, '%M'), DATE_FORMAT(billing.charged_datetime, '%Y')
ORDER BY billing.client_id, billing.charged_datetime;


-- 10. Write a single query that retrieves all the sites that each client owns. Group the results so 
-- that each row shows a new client. It will become clearer when you add a new field called 'sites' 
-- that has all the sites that the client owns. (HINT: use GROUP_CONCAT)
SELECT CONCAT_WS(' ', clients.first_name, clients.last_name) AS 'Client', GROUP_CONCAT(sites.domain_name ORDER BY sites.domain_name ASC SEPARATOR ' / ') AS 'Site'
FROM clients
LEFT JOIN sites ON clients.client_id = sites.client_id
GROUP BY clients.client_id;
