# Use Node.js base image
FROM node:10-alpine
# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining project files to the working directory
COPY . .

# Build TypeScript to JavaScript
RUN npm run build

# Expose the port on which your application runs
EXPOSE 3000

# Start the application when the container is run
CMD [ "npm", "run", "start:prod" ]