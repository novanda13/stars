# Use the official Node.js 14 image
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Membangun aplikasi Next.js
RUN npm run build
# Jika Anda menggunakan Yarn, gunakan perintah berikut
# RUN yarn build

# Tentukan variabel lingkungan PORT
ENV PORT 8080

# Expose port aplikasi
EXPOSE 8080

# Command to run the application
CMD ["npm", "start"]
