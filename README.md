# Pixel-Puppy

```
npm create vite@latest pixel-puppy -- --template react
cd pixel-puppy
npm install
```

# Dependencies

Install development dependencies

```
npm install electron concurrently cross-env electron-builder --save-dev
```

# Development Mode

```
npm run start
```

This should open the app in your browser at http://localhost:5173

# Production Mode

Build vite to create a dist folder.

```
npm run build
```

Build Electron

```
npm run electron:prod
```