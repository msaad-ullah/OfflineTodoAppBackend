# OfflineTodoAppBackend

## Set up the project:

1. Install dependencies:
```
npm i
```

2. Get your MongoDB connection uri string and put it in the connectDb function in `index.js` file:
```js
const response = await mongoose.connect(
   "<Paste your connection string with your username and password>"
);
```

3. Run the project:
```
npm run dev
```




