# Step 1: Use the official Node.js image to build the app
FROM node:18-alpine as build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the app's files into the container
COPY . .

# Step 6: Build the React app for production
RUN npm run build

# Step 7: Use a lightweight web server to serve the build folder
FROM nginx:alpine

# Step 8: Copy the build folder from the previous step into nginx's public folder
COPY --from=build /app/dist /usr/share/nginx/html

# Replace default nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Step 9: Expose the port the app will run on
EXPOSE 80

# Step 10: Start nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]
