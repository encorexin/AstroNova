---
title: 'TypeScript Best Practices for Modern Web Development'
description: 'Essential TypeScript patterns, tips, and best practices to write cleaner, safer, and more maintainable code in your projects.'
publishedAt: 2024-02-15
category: 'Development'
tags: ['typescript', 'javascript', 'best-practices', 'development']
heroImage: '/images/typescript-best-practices.svg'
featured: false
---

# TypeScript Best Practices

TypeScript has become the standard for large-scale JavaScript applications. Here are essential practices to level up your TypeScript code.

## 1. Use Strict Mode

Always enable strict mode in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true
  }
}
```

## 2. Prefer Interfaces for Objects

```typescript
// ✅ Good: Use interface for object shapes
interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

// ✅ Use type for unions, intersections, primitives
type Status = 'pending' | 'active' | 'inactive';
type ID = string | number;
```

## 3. Use Type Guards

```typescript
// Type guard function
function isUser(value: unknown): value is User {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    'name' in value
  );
}

// Usage
function processData(data: unknown) {
  if (isUser(data)) {
    // TypeScript knows data is User here
    console.log(data.name);
  }
}
```

## 4. Leverage Utility Types

```typescript
interface Post {
  id: string;
  title: string;
  content: string;
  author: User;
  createdAt: Date;
  updatedAt: Date;
}

// Partial - all properties optional
type PostDraft = Partial<Post>;

// Pick - select specific properties
type PostPreview = Pick<Post, 'id' | 'title'>;

// Omit - exclude properties
type PostInput = Omit<Post, 'id' | 'createdAt' | 'updatedAt'>;

// Required - all properties required
type CompletePost = Required<Post>;

// Readonly - immutable object
type ImmutablePost = Readonly<Post>;
```

## 5. Use const Assertions

```typescript
// Without const assertion - type is string[]
const colors = ['red', 'green', 'blue'];

// With const assertion - type is readonly ['red', 'green', 'blue']
const colorsConst = ['red', 'green', 'blue'] as const;

// Useful for creating literal types
const CONFIG = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
  retries: 3,
} as const;
```

## 6. Generic Constraints

```typescript
// Constrain generic types
interface HasId {
  id: string;
}

function findById<T extends HasId>(items: T[], id: string): T | undefined {
  return items.find(item => item.id === id);
}

// Works with any type that has an id
const users: User[] = [/* ... */];
const posts: Post[] = [/* ... */];

findById(users, '123');
findById(posts, '456');
```

## 7. Discriminated Unions

```typescript
// Use a common property to discriminate
type Result<T> = 
  | { success: true; data: T }
  | { success: false; error: string };

function handleResult<T>(result: Result<T>) {
  if (result.success) {
    // TypeScript knows result.data exists
    console.log(result.data);
  } else {
    // TypeScript knows result.error exists
    console.error(result.error);
  }
}
```

## 8. Avoid `any`, Use `unknown`

```typescript
// ❌ Bad: any bypasses type checking
function processAny(data: any) {
  data.foo.bar.baz(); // No error, but might crash
}

// ✅ Good: unknown requires type checking
function processUnknown(data: unknown) {
  if (typeof data === 'object' && data !== null) {
    // Safe to use as object
  }
}
```

## 9. Use Enums Sparingly

```typescript
// ❌ Avoid: Enums add runtime code
enum Status {
  Active,
  Inactive,
}

// ✅ Prefer: Union types (zero runtime cost)
type Status = 'active' | 'inactive';

// ✅ Or: const objects for reverse mapping
const Status = {
  Active: 'active',
  Inactive: 'inactive',
} as const;

type StatusType = typeof Status[keyof typeof Status];
```

## 10. Document with JSDoc

```typescript
/**
 * Fetches user data from the API
 * @param userId - The unique identifier of the user
 * @returns Promise resolving to User object
 * @throws {Error} When user is not found
 * @example
 * ```ts
 * const user = await fetchUser('123');
 * console.log(user.name);
 * ```
 */
async function fetchUser(userId: string): Promise<User> {
  // Implementation
}
```

## Summary

| Practice | Benefit |
|----------|---------|
| Strict mode | Catches more errors |
| Type guards | Safe type narrowing |
| Utility types | Reduce duplication |
| const assertions | Preserve literal types |
| Discriminated unions | Exhaustive checking |
| unknown over any | Enforces type checking |

Follow these practices to write TypeScript that's maintainable, type-safe, and a joy to work with!
