[1mdiff --git a/package-lock.json b/package-lock.json[m
[1mindex 3fb683e..cf62869 100644[m
[1m--- a/package-lock.json[m
[1m+++ b/package-lock.json[m
[36m@@ -11,6 +11,7 @@[m
       "dependencies": {[m
         "dotenv": "^16.3.1",[m
         "express": "^4.18.2",[m
[32m+[m[32m        "express-async-errors": "^3.1.1",[m
         "express-rate-limit": "^6.8.0",[m
         "jsonwebtoken": "^9.0.1"[m
       },[m
[36m@@ -329,6 +330,14 @@[m
         "node": ">= 0.10.0"[m
       }[m
     },[m
[32m+[m[32m    "node_modules/express-async-errors": {[m
[32m+[m[32m      "version": "3.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/express-async-errors/-/express-async-errors-3.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-h6aK1da4tpqWSbyCa3FxB/V6Ehd4EEB15zyQq9qe75OZBp0krinNKuH4rAY+S/U/2I36vdLAUFSjQJ+TFmODng==",[m
[32m+[m[32m      "peerDependencies": {[m
[32m+[m[32m        "express": "^4.16.2"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "node_modules/express-rate-limit": {[m
       "version": "6.8.0",[m
       "resolved": "https://registry.npmjs.org/express-rate-limit/-/express-rate-limit-6.8.0.tgz",[m
[1mdiff --git a/package.json b/package.json[m
[1mindex 8b39a5d..15114bc 100644[m
[1m--- a/package.json[m
[1m+++ b/package.json[m
[36m@@ -17,6 +17,7 @@[m
   "dependencies": {[m
     "dotenv": "^16.3.1",[m
     "express": "^4.18.2",[m
[32m+[m[32m    "express-async-errors": "^3.1.1",[m
     "express-rate-limit": "^6.8.0",[m
     "jsonwebtoken": "^9.0.1"[m
   }[m
[1mdiff --git a/src/index.js b/src/index.js[m
[1mindex 772ba51..3aece83 100644[m
[1m--- a/src/index.js[m
[1m+++ b/src/index.js[m
[36m@@ -1,4 +1,5 @@[m
 require('dotenv').config()[m
[32m+[m[32mrequire('express-async-errors')[m
 const express = require('express')[m
 const router = require('./routes/authRoutes')[m
 const app = express()[m
[36m@@ -6,6 +7,12 @@[m [mconst app = express()[m
 app.use(express.json())[m
 app.use(router)[m
 [m
[32m+[m[32mapp.use((error, req, res, next) => {[m
[32m+[m
[32m+[m	[32mconsole.log('============= ERROR HANDLER =============')[m
[32m+[m	[32mconsole.log(error)[m
[32m+[m	[32mres.sendStatus(500)[m
[32m+[m[32m})[m
 [m
 app.listen(process.env.PORT, () => {[m
   console.log(`Server initialized with success in http://localhost:${process.env.PORT}`)[m
