# Next.js Server Log Viewer

This repository showcases how to implement server-side logging in a Next.js application using **Errsole** and **MySQL**. By storing logs in a MySQL database, you can conveniently search and manage your logs through Errsole’s user-friendly web dashboard—essential for troubleshooting SSR issues and monitoring production performance.

## Table of Contents

1. [Getting Started](#getting-started)  
2. [Project Structure](#project-structure)  
3. [Configuration](#configuration)  
4. [Usage](#usage)  
5. [Preview and Dashboard](#preview-and-dashboard)  
6. [Advanced Setup](#advanced-setup)  
7. [License](#license)

---

## Getting Started

### Prerequisites

- **Node.js** (v18+ recommended)  
- **MySQL** database server (local or remote)  

### Installation

1. **Clone this repository**:
   ```bash
   git clone https://github.com/your-username/nextjs-server-log-viewer.git
   cd nextjs-server-log-viewer
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure your MySQL settings** by updating the credentials in `lib/logger.js`.

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## Project Structure

```
nextjs-server-log-viewer
├── lib
│   └── logger.js        // Errsole + MySQL initialization
├── pages
│   ├── api
│   │   └── hello.js     // Sample API route with logging
│   └── index.js         // Home page
├── .gitignore
├── package.json
└── README.md
```

- **lib/logger.js**: Initializes Errsole with MySQL and exports the configured logger.  
- **pages/api**: Contains API routes. Here, each route demonstrates how to use the logger to capture logs.

---

## Configuration

Below is an example of how `lib/logger.js` might look with **errsole-mysql**:

```js
// lib/logger.js
import errsole from 'errsole';
import ErrsoleMySQL from 'errsole-mysql';

errsole.initialize({
  storage: new ErrsoleMySQL({
    host: 'localhost',          // Replace with your MySQL host
    user: 'root',               // Replace with your MySQL user
    password: 'password',       // Replace with your MySQL password
    database: 'my_database',    // Replace with your MySQL database name
  })
});

export default errsole;
```

**Important**:  
- Make sure your MySQL server is running and the provided credentials (host, user, password, database) are valid.  
- If needed, modify `tablePrefix` to organize logs from multiple apps in the same database.

---

## Usage

### 1. Logging in an API Route

Example in `pages/api/hello.js`:

```js
// pages/api/hello.js
import logger from '../../lib/logger';

export default function handler(req, res) {
  // Log a simple info message
  logger.info('API /hello was accessed');

  // Example error-level log
  const isError = true;
  if (isError) {
    logger.error('An error occurred in /hello endpoint');
  }

  res.status(200).json({ message: 'Hello from Next.js + Errsole + MySQL!' });
}
```

**Log Levels**: You can use `info`, `warn`, `error`, etc., to categorize your logs.  

---

## Preview and Dashboard

- **Local Preview**: Once your server is running, navigate to [http://localhost:3000/api/hello](http://localhost:3000/api/hello) and check your console or MySQL database to verify logs are being recorded.
- **Remote Server**: If you have deployed Errsole on a remote server, use the server's IP address or domain name followed by the port number (e.g., YourServerIP:8001 or YourDomain:8001).
---

## Advanced Setup

- **Multiple Environments**: Store production credentials in environment variables or a secure credentials manager.  
- **Multiple Applications**: Use a unique `tablePrefix` for each app to separate logs in the same database.  
- **Other Databases**: For PostgreSQL or MSSQL, you can use `errsole-postgres` or `errsole-mssql` respectively with similar configurations.  
- **Log Rotation**: If your logs become very large, consider implementing database cleanup or archiving.

For more details, refer to the official [Errsole Documentation](https://github.com/errsole/errsole.js)).

---

## License

This project is open-source. You can use and modify it under the terms specified in the [LICENSE](LICENSE) file (if provided) or adapt to your preferred license.

---

**Happy Logging!**  

If you find this repository helpful, feel free to ⭐ star it or open an issue for any suggestions or improvements!
