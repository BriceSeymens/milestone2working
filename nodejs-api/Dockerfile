# use latest node image as basis
FROM node:latest

# Create and set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if present) to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy all application files to the working directory
COPY app.js ./

# Expose a port that the app listens on
EXPOSE 3000

# Define the command to start the app
CMD ["node", "app.js"]