# Используем официальный образ Node.js
FROM node:20-alpine

# Устанавливаем директорию приложения в контейнере
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код приложения в контейнер
COPY . .

# Экспортируем порт, который слушает приложение Next.js
EXPOSE 3000

# Запускаем приложение
CMD ["sh", "-c", "npm run build && npm run start"]
