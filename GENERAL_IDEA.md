# ERD for AI-Powered Budgeting & Debt Management App

```text
User (user_id PK)
│  name
│  email
│  password_hash
│  income_range
│  ai_preferences
│
├──< Account (account_id PK)
│      user_id (FK)
│      type
│      balance
│      institution_name
│
│    └──< Transaction (transaction_id PK)
│            account_id (FK)
│            category_id (FK)
│            amount
│            transaction_date
│            description
│
│            >─── Category (category_id PK)
│                   name
│                   type (income/expense/debt)
│
├──< Debt (debt_id PK)
│      user_id (FK)
│      account_id (FK, nullable)
│      type
│      principal_amount
│      interest_rate
│      due_date
│      min_payment
│
│    └── Payment_Plan (plan_id PK)
│            debt_id (FK)
│            strategy (snowball/avalanche/hybrid)
│            monthly_payment
│            estimated_payoff_date
│
├──< Budget (budget_id PK)
│      user_id (FK)
│      category_id (FK)
│      allocated_amount
│      start_date
│      end_date
│
└──< AI_Recommendation (recommendation_id PK)
       user_id (FK)
       debt_id (FK, nullable)
       recommendation_text
       priority
       created_at
