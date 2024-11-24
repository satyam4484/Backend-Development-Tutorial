
### 1. **Basic Filtering with `find`**
The `find` method retrieves all documents matching the query.

```javascript
// Example: Find users with age greater than 25
User.find({ age: { $gt: 25 } })
  .then(users => console.log(users))
  .catch(err => console.error(err));
```

- **Syntax**: `{ field: condition }`
- **Operators**:
  - `$gt`: Greater than
  - `$lt`: Less than
  - `$gte`: Greater than or equal
  - `$lte`: Less than or equal
  - `$eq`: Equal to
  - `$ne`: Not equal
  - `$in`: Matches values in an array
  - `$nin`: Does not match values in an array

---

### 2. **Filtering with Specific Fields**
You can retrieve only specific fields from documents using projection.

```javascript
// Example: Find users with age > 25, return only name and age
User.find({ age: { $gt: 25 } }, 'name age')
  .then(users => console.log(users))
  .catch(err => console.error(err));
```

- **Second Argument**: A string or object defining the fields to include/exclude.
  - `'field1 field2'`: Include these fields.
  - `'-field1'`: Exclude a field.

---

### 3. **Using `findOne` for Single Document**
Retrieve only the first matching document.

```javascript
// Example: Find a user with a specific email
User.findOne({ email: 'example@example.com' })
  .then(user => console.log(user))
  .catch(err => console.error(err));
```

- Returns a single document or `null` if no match is found.

---

### 4. **Using Query Chaining**
Chain methods like `.sort`, `.limit`, and `.skip` to refine queries.

```javascript
// Example: Find the first 5 users sorted by age in descending order
User.find({ age: { $gt: 18 } })
  .sort({ age: -1 }) // Sort by age descending
  .limit(5)          // Limit to 5 documents
  .skip(2)           // Skip the first 2 results
  .then(users => console.log(users))
  .catch(err => console.error(err));
```

---

### 5. **Using `countDocuments`**
Retrieve the count of documents that match a filter.

```javascript
// Example: Count the number of users with age > 25
User.countDocuments({ age: { $gt: 25 } })
  .then(count => console.log(`Number of users: ${count}`))
  .catch(err => console.error(err));
```

---

### 6. **Using Regular Expressions for Text Filtering**
Filter documents based on patterns.

```javascript
// Example: Find users whose names start with "John"
User.find({ name: { $regex: /^John/, $options: 'i' } })
  .then(users => console.log(users))
  .catch(err => console.error(err));
```

- `$regex`: Matches regular expressions.
- `$options: 'i'`: Case-insensitive matching.

---

### 7. **Filtering with Logical Operators**
Combine multiple conditions using logical operators.

```javascript
// Example: Find users who are either under 18 or over 60
User.find({ $or: [{ age: { $lt: 18 } }, { age: { $gt: 60 } }] })
  .then(users => console.log(users))
  .catch(err => console.error(err));
```

- **Logical Operators**:
  - `$or`: Matches any of the conditions.
  - `$and`: Matches all conditions.
  - `$not`: Negates a condition.
  - `$nor`: Matches none of the conditions.

---

### 8. **Filtering with Aggregation**
Use the aggregation pipeline for advanced filtering and transformations.

```javascript
// Example: Find users with age > 25 and group by gender
User.aggregate([
  { $match: { age: { $gt: 25 } } },
  { $group: { _id: '$gender', total: { $sum: 1 } } }
])
  .then(result => console.log(result))
  .catch(err => console.error(err));
```

- `$match`: Filters documents.
- `$group`: Groups documents by a field.
- `$project`: Shapes the output.

---

### 9. **Filtering with `lean`**
Convert Mongoose documents into plain JavaScript objects for better performance.

```javascript
// Example: Find all users and convert documents to plain objects
User.find({ age: { $gt: 25 } })
  .lean()
  .then(users => console.log(users))
  .catch(err => console.error(err));
```

---

### 10. **Using `populate` for Relationships**
Filter documents and include related data.

```javascript
// Example: Find posts and populate their author details
Post.find({ published: true })
  .populate('author', 'name email')
  .then(posts => console.log(posts))
  .catch(err => console.error(err));
```

- **`populate`**: Fetch related documents based on references.

---

### 11. **Using `distinct`**
Retrieve unique values for a specific field.

```javascript
// Example: Find all unique cities where users live
User.distinct('city')
  .then(cities => console.log(cities))
  .catch(err => console.error(err));
```

---

### Summary Table:

| Method               | Use Case                             |
|----------------------|--------------------------------------|
| `find`               | Retrieve multiple matching documents |
| `findOne`            | Retrieve a single matching document  |
| `countDocument s`     | Count documents matching a query     |
| `aggregate`          | Perform complex filtering            |
| `lean`               | Convert documents to plain objects   |
| `populate`           | Include related documents            |
| `distinct`           | Get unique values                   |

Each method has its own strengths depending on the complexity and requirements of your query. Would you like to explore any of these methods in more depth?