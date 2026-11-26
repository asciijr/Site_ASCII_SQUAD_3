
# ---------- base ----------
FROM node:24-alpine AS base

WORKDIR /app

COPY package*.json ./


# ---------- desenvolvimento ----------
FROM base AS dev

RUN npm ci

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]


# ---------- build ----------
FROM base AS build

RUN npm ci

COPY . .

RUN npm run build


# ---------- produção ----------
FROM nginx:1.27-alpine AS prod

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
