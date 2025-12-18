
FROM php:8.4-fpm

# Update package list and install PHP + system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libjpeg-dev \
    libwebp-dev \
    libxpm-dev \
    libfreetype6-dev \
    libzip-dev \
    zip \
    unzip \
    git \
    bash \
    fcgiwrap \
    libmcrypt-dev \
    libonig-dev \
    libpq-dev \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-configure gd --with-freetype --with-jpeg --with-webp \
    && docker-php-ext-install gd \
    && docker-php-ext-install pdo pdo_pgsql mbstring zip exif pcntl bcmath opcache

# Install Composer
COPY --from=composer/composer:latest-bin /composer /usr/bin/composer

# Install Node.js & npm
RUN curl -fsSL https://deb.nodesource.com/setup_24.x | bash - \
    && apt-get install -y nodejs

# Copy PHP application code
COPY . /var/www/html/

# Copy Composer files and install PHP dependencies
# COPY composer.json composer.lock /var/www/html/ # kan semuanya udah kekopi
RUN composer install --no-dev --optimize-autoloader

# Copy Node.js dependency files and install Node modules
# COPY package*.json /var/www/html/ # kan semuanya udah kekopi
RUN npm install
RUN npm run build

# Set ownership and permissions
RUN chown -R www-data:www-data /var/www/html/

# Expose PHP-FPM port
EXPOSE 9000

# Start PHP-FPM
CMD ["php-fpm"]
