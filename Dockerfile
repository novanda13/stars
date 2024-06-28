FROM mysql:latest

# Copy custom configuration file (optional)
COPY my.cnf /etc/mysql/my.cnf

# Initialize MySQL database
RUN mysql_install_db --user=mysql --datadir=/var/lib/mysql

# Set environment variables (recommended for credentials)
ENV MYSQL_ROOT_PASSWORD=root_password
ENV MYSQL_DATABASE=menua
ENV MYSQL_USER=admin
ENV MYSQL_PASSWORD=aaaabbbb123

# Expose the port
EXPOSE 3306

# Start the MySQL service
CMD ["mysqld"]
