
install node.js

// install typescript
npm install -g typescript

// check your typescript version
tsc -v

// COMPILE ts file to js file

    // Compile a single file:
    tsc app.ts

    // Compile multiple files
    tsc app1.ts app2.ts, app3.ts

    // Join files
    tsc app1.ts app2.ts --out app.js

    // Watch File ( Auto Compile)
    tsc app.ts --watch
