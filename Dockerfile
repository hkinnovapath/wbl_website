# Use the official Node.js image with version 18
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port Next.js app runs on (usually 3000)
EXPOSE 3000

# Command to run the Next.js app
CMD ["npm", "start"]







# Use the official Node.js image with version 18
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Set build-time argument for the environment
ARG NODE_ENV=production

# Set environment variable
ENV NODE_ENV $NODE_ENV

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code to the working directory
COPY . .

# Copy the appropriate environment file based on the build argument
COPY .env.$NODE_ENV .env

# Build the Next.js app
RUN npm run build

# Expose the port Next.js app runs on (usually 3000)
EXPOSE 3000

# Command to run the Next.js app
CMD ["npm", "start"]