# AI In Development: Practice Project

This repository contains three practical tasks focused on demonstrating the use of AI in software development. Each task showcases different aspects of web development, API testing, and database analysis.

## Task 1: Web Application - Expense Calculator

### Overview
A web application that calculates key indicators from monthly expenses, including total amount, average daily expenses, and top 3 largest expenses.

### Features
- Add new expenses to the list
- Calculate total amount of expenses
- Calculate average daily expense
- Display top 3 largest expenses

### Input Format
The application accepts expenses in a table format with two columns:
- Category
- Amount ($)

### Example Input
```
Category        Amount ($)
Groceries       15,000
Rent            40,000
Transportation  5,000
Entertainment   10,000
Communication   2,000
Gym             3,000
```

### Expected Output
- Total amount of expenses
- Average daily expense
- Top 3 largest expenses

## Task 2: API Testing - Product Data Validation

### Overview
Automated tests to validate data from a public API and identify defects in product information.

### API Endpoint
- Base URL: `https://fakestoreapi.com/products`
- Method: GET

### Test Objectives
1. Verify server response code (expected 200)
2. Validate product attributes:
   - `title`: Must not be empty
   - `price`: Must not be negative
   - `rating.rate`: Must not exceed 5
3. Generate a list of products containing defects

### Tools
- ReqBin (reqbin.com) or Postman for API requests
- CursorAI/ChatGPT for test scenario generation

## Task 3: SQL Queries - Online Store Analysis

### Overview
SQL queries to analyze sales data for an online store using SQLite.

### Database Schema
```sql
CREATE TABLE orders (
    id INTEGER PRIMARY KEY,
    customer TEXT,
    amount REAL,
    order_date DATE
);
```

### Sample Data
```sql
INSERT INTO orders (customer, amount, order_date) VALUES
('Alice', 5000, '2024-03-01'),
('Bob', 8000, '2024-03-05'),
('Alice', 3000, '2024-03-15'),
('Charlie', 7000, '2024-02-20'),
('Alice', 10000, '2024-02-28'),
('Bob', 4000, '2024-02-10'),
('Charlie', 9000, '2024-03-22'),
('Alice', 2000, '2024-03-30');
```

### Tasks
1. Calculate total sales volume for March 2024
2. Find the customer who spent the most overall
3. Calculate the average order value for the last three months

### Expected Results
1. Total sales for March: 27,000
2. Top-spending customer: Alice (20,000)
3. Average order value: 6,000

## Getting Started

### Prerequisites
- Web browser for Task 1
- API testing tool (ReqBin or Postman) for Task 2
- SQLite Online for Task 3

### Tools Used
- CursorAI for code generation
- CodePen/JSFiddle for web application testing
- SQLite Online for database queries

## Project Structure
```
ai_in_practice/
├── README.md
├── Expense Calculator/    # Task 1: Web Application
├── API Testing/          # Task 2: API Testing Implementation
└── SQL Queries/         # Task 3: SQL Queries and Analysis
```

