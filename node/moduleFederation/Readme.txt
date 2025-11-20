switch to moduleFederation directory and install angular cli:
1. Install Angular cli
npm install @angular/cli@15 --save-dev
2. Create Angular Worspace (Creates angular.json file)
npx ng new moduleFederation --create-application=false
Move files to outside folder and delete the inner one
1. Create host app
npx ng generate application shell
2. Create remote app
npx ng generate application mfe1
3. Install MF plugin in  moduleFederation root
npm install @angular-architects/module-federation@15 ngx-build-plus@15 --save-dev
4. Initialize Module Federation
host
npx ng add @angular-architects/module-federation@15 --project shell
remote
npx ng add @angular-architects/module-federation@15 --project mfe1