# Node.js `path` Module: Detailed Guide

## Overview

The `path` module in Node.js provides utilities for working with file and directory paths. It offers a variety of methods to handle and transform paths, ensuring cross-platform consistency. This guide covers the most commonly used methods in the `path` module with examples.

## Table of Contents

- [Importing the `path` Module](#importing-the-path-module)
- [Common Methods in the `path` Module](#common-methods-in-the-path-module)
  - [path.basename()](#pathbasename)
  - [path.dirname()](#pathdirname)
  - [path.extname()](#pathextname)
  - [path.join()](#pathjoin)
  - [path.resolve()](#pathresolve)
  - [path.normalize()](#pathnormalize)
  - [path.isAbsolute()](#pathisabsolute)
  - [path.relative()](#pathrelative)
- [Path Separators](#path-separators)
- [Example Usage](#example-usage)

## Importing the `path` Module

To use the `path` module, you need to import it into your Node.js application:

```javascript
const path = require('path');
```

## Common Methods in the `path` Module

### path.basename()

Returns the last portion of a path, typically the file name.

```javascript
const filePath = '/path/to/file.txt';
console.log(path.basename(filePath)); // Output: 'file.txt'
```

### path.dirname()

Returns the directory name of a path, excluding the final file or directory.

```javascript
const filePath = '/path/to/file.txt';
console.log(path.dirname(filePath)); // Output: '/path/to'
```

### path.extname()

Returns the extension of the path, from the last occurrence of the '.' character to the end of the string in the last portion of the path.

```javascript
const filePath = '/path/to/file.txt';
console.log(path.extname(filePath)); // Output: '.txt'
```

### path.join()

Joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.

```javascript
const joinedPath = path.join('/path', 'to', 'file.txt');
console.log(joinedPath); // Output: '/path/to/file.txt'
```

### path.resolve()

Resolves a sequence of paths or path segments into an absolute path.

```javascript
const absolutePath = path.resolve('path', 'to', 'file.txt');
console.log(absolutePath); // Output: '/absolute/path/to/file.txt' (depends on current working directory)
```

### path.normalize()

Normalizes a string path, resolving '..' and '.' segments.

```javascript
const normalizedPath = path.normalize('/path//to/../file.txt');
console.log(normalizedPath); // Output: '/path/file.txt'
```

### path.isAbsolute()

Determines if the path is an absolute path.

```javascript
const isAbsolutePath = path.isAbsolute('/path/to/file.txt');
console.log(isAbsolutePath); // Output: true
```

### path.relative()

Returns the relative path from one path to another.

```javascript
const relativePath = path.relative('/path/to', '/path/to/file.txt');
console.log(relativePath); // Output: 'file.txt'
```

## Path Separators

- **Platform-specific separator**: Use `path.sep` to get the platform-specific path segment separator.

  ```javascript
  console.log(path.sep); // Output: '/' (on POSIX) or '\' (on Windows)
  ```

- **Platform-specific delimiter**: Use `path.delimiter` to get the platform-specific path delimiter.

  ```javascript
  console.log(path.delimiter); // Output: ':' (on POSIX) or ';' (on Windows)
  ```

## Example Usage

Here's a comprehensive example demonstrating various methods in the `path` module:

```javascript
const path = require('path');

const filePath = '/path/to/file.txt';

// Getting the base name
const baseName = path.basename(filePath);
console.log(`Base Name: ${baseName}`); // Output: 'file.txt'

// Getting the directory name
const dirName = path.dirname(filePath);
console.log(`Directory Name: ${dirName}`); // Output: '/path/to'

// Getting the file extension
const extName = path.extname(filePath);
console.log(`Extension Name: ${extName}`); // Output: '.txt'

// Joining paths
const joinedPath = path.join('/path', 'to', 'file.txt');
console.log(`Joined Path: ${joinedPath}`); // Output: '/path/to/file.txt'

// Resolving paths
const absolutePath = path.resolve('path', 'to', 'file.txt');
console.log(`Absolute Path: ${absolutePath}`); // Output: '/absolute/path/to/file.txt'

// Normalizing paths
const normalizedPath = path.normalize('/path//to/../file.txt');
console.log(`Normalized Path: ${normalizedPath}`); // Output: '/path/file.txt'

// Checking if a path is absolute
const isAbsolutePath = path.isAbsolute('/path/to/file.txt');
console.log(`Is Absolute Path: ${isAbsolutePath}`); // Output: true

// Getting the relative path
const relativePath = path.relative('/path/to', '/path/to/file.txt');
console.log(`Relative Path: ${relativePath}`); // Output: 'file.txt'

// Getting the platform-specific separators
console.log(`Path Separator: ${path.sep}`); // Output: '/' or '\'
console.log(`Path Delimiter: ${path.delimiter}`); // Output: ':' or ';'
```

