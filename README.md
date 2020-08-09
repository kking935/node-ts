# Node Typescript
## Development
To start for development, run 
```
npm run dev
```

During development, write your typescript code in the `app.ts` file.

## Production
To build for production, run 
```
npm build
```

This will compile the typescript code into javascript and add it to the `dist` folder

## Configurations
Change the `target` value in the `tsconfig.json` to specify the ES version (current default is ES6)