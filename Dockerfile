# Use nginx base image
FROM nginx:alpine

# Copy all files from current directory to nginx web root
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
