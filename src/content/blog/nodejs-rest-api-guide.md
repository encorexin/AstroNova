---
title: 'Building a REST API with Node.js and Express'
description: 'A step-by-step guide to creating a production-ready REST API using Node.js, Express, and best practices for error handling, validation, and security.'
publishedAt: 2024-01-20
category: 'Development'
tags: ['nodejs', 'express', 'api', 'backend', 'javascript']
featured: false
---

# Building a REST API with Node.js and Express

Learn how to build a robust, production-ready REST API from scratch.

## Project Setup

First, initialize your project:

```bash
mkdir my-api && cd my-api
npm init -y
npm install express cors helmet morgan dotenv
npm install -D nodemon typescript @types/node @types/express
```

## Project Structure

```
my-api/
├── src/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── index.ts
├── .env
├── package.json
└── tsconfig.json
```

## Basic Server Setup

```typescript
// src/index.ts
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { config } from 'dotenv';

config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());           // Security headers
app.use(cors());             // CORS support
app.use(morgan('dev'));      // Request logging
app.use(express.json());     // JSON body parsing

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
```

## Creating Routes

```typescript
// src/routes/users.ts
import { Router } from 'express';
import { 
  getUsers, 
  getUserById, 
  createUser, 
  updateUser, 
  deleteUser 
} from '../controllers/userController';

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
```

## Controller Example

```typescript
// src/controllers/userController.ts
import { Request, Response, NextFunction } from 'express';

interface User {
  id: string;
  name: string;
  email: string;
}

// In-memory storage (use database in production)
let users: User[] = [];

export const getUsers = async (
  req: Request, 
  res: Response
) => {
  res.json({ data: users, count: users.length });
};

export const getUserById = async (
  req: Request, 
  res: Response
) => {
  const user = users.find(u => u.id === req.params.id);
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  res.json({ data: user });
};

export const createUser = async (
  req: Request, 
  res: Response
) => {
  const { name, email } = req.body;
  
  const newUser: User = {
    id: Date.now().toString(),
    name,
    email
  };
  
  users.push(newUser);
  res.status(201).json({ data: newUser });
};
```

## Error Handling Middleware

```typescript
// src/middleware/errorHandler.ts
import { Request, Response, NextFunction } from 'express';

export class AppError extends Error {
  statusCode: number;
  
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  
  console.error(`[Error] ${statusCode}: ${message}`);
  
  res.status(statusCode).json({
    error: {
      message,
      status: statusCode,
      timestamp: new Date().toISOString()
    }
  });
};
```

## Input Validation

```typescript
// src/middleware/validate.ts
import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

export const validateBody = (schema: z.ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          error: 'Validation failed',
          details: error.errors
        });
      }
      next(error);
    }
  };
};

// Usage
const createUserSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email()
});

router.post('/', validateBody(createUserSchema), createUser);
```

## API Response Format

Consistent response format:

```json
// Success
{
  "data": { ... },
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 100
  }
}

// Error
{
  "error": {
    "message": "Resource not found",
    "status": 404,
    "timestamp": "2024-01-20T10:00:00.000Z"
  }
}
```

## Security Best Practices

| Practice | Implementation |
|----------|----------------|
| Helmet | Security headers |
| Rate Limiting | express-rate-limit |
| Input Validation | Zod/Joi |
| CORS | Whitelist origins |
| Environment Variables | dotenv |
| HTTPS | SSL/TLS certificates |

## Testing Your API

```bash
# GET all users
curl http://localhost:3000/api/users

# POST new user
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com"}'
```

## Conclusion

You now have a solid foundation for building REST APIs with Node.js and Express. Remember to:

- Always validate input
- Use proper error handling
- Implement authentication
- Add rate limiting
- Write tests

Happy coding! 🚀
