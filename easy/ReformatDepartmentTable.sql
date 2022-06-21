-- Table: Department

-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | id          | int     |
-- | revenue     | int     |
-- | month       | varchar |
-- +-------------+---------+
-- (id, month) is the primary key of this table.
-- The table has information about the revenue of each department per month.
-- The month has values in ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].


-- Write an SQL query to reformat the table such that there is a department id column and a revenue column for each month.

-- Return the result table in any order.

-- The query result format is in the following example.

SELECT id,
  sum(case when month = 'jan' then revenue end) as Jan_Revenue,
	sum(case when month = 'feb' then revenue end) as Feb_Revenue,
	sum(case when month = 'mar' then revenue end) as Mar_Revenue,
	sum(case when month = 'apr' then revenue end) as Apr_Revenue,
	sum(case when month = 'may' then revenue end) as May_Revenue,
	sum(case when month = 'jun' then revenue end) as Jun_Revenue,
	sum(case when month = 'jul' then revenue end) as Jul_Revenue,
	sum(case when month = 'aug' then revenue end) as Aug_Revenue,
	sum(case when month = 'sep' then revenue end) as Sep_Revenue,
	sum(case when month = 'oct' then revenue end) as Oct_Revenue,
	sum(case when month = 'nov' then revenue end) as Nov_Revenue,
	sum(case when month = 'dec' then revenue end) as Dec_Revenue
from department
group by id;