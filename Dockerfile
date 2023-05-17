# Specify the base image to use
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install \
          vue3-charts --save \
          resize-observer-polyfill --save-dev

# Copy the rest of the application files to the container
COPY . .

# Build the application
RUN npm run build

# Install serve as a global dependency
RUN npm install -g serve

# Set the port to 8080
ENV PORT=80

# Expose the port
EXPOSE 80

# Set the command to run when the container starts
CMD ["serve", "-s", "-l", "80", "dist"]
