# Use the official Node.js image with version 18
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Set build-time argument for the environment
ARG NODE_ENV=production

# Set environment variable
ENV NODE_ENV=${NODE_ENV}

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Print environment variables for debugging
RUN echo "NODE_ENV is set to: $NODE_ENV"

# Always build the Next.js app to ensure the .next directory exists
RUN npm run build || { echo 'Build failed'; exit 1; }

# Copy the appropriate environment file based on the build argument
# COPY .env.$NODE_ENV .env

# Expose the port Next.js app runs on (usually 3000)
EXPOSE 3000

# Command to run the Next.js app
CMD [ "sh", "-c", "if [ \"$NODE_ENV\" = \"production\" ]; then npm run start; else npm run dev; fi" ]