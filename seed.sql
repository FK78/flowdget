-- Enums
CREATE TYPE account_type AS ENUM ('checking', 'savings', 'credit_card', 'investment');
CREATE TYPE period AS ENUM ('monthly', 'weekly');
CREATE TYPE transaction_type AS ENUM ('income', 'expense');

-- Tables
CREATE TABLE accounts (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_id UUID NOT NULL,
  name VARCHAR(255) NOT NULL,
  type account_type,
  balance REAL NOT NULL,
  currency VARCHAR(3) NOT NULL
);

CREATE TABLE categories (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_id UUID NOT NULL,
  name VARCHAR(255) NOT NULL,
  color VARCHAR(8) NOT NULL,
  icon VARCHAR(255),
  is_default BOOLEAN NOT NULL
);

CREATE TABLE transactions (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  account_id INTEGER REFERENCES accounts(id) ON DELETE CASCADE,
  category_id INTEGER REFERENCES categories(id) ON DELETE SET NULL,
  type transaction_type NOT NULL,
  amount REAL NOT NULL,
  description VARCHAR(255) NOT NULL,
  date DATE,
  is_recurring BOOLEAN NOT NULL,
  recurring_pattern VARCHAR(255),
  created_at DATE DEFAULT CURRENT_DATE
);

CREATE TABLE budgets (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_id UUID NOT NULL,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  amount REAL NOT NULL,
  period period,
  start_date DATE
);

CREATE TABLE categorisation_rules (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_id UUID NOT NULL,
  pattern VARCHAR(255) NOT NULL,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  priority INTEGER NOT NULL
);