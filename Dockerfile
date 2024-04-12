FROM node:18

WORKDIR /app/sharma_anmol_final_site
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD npm run dev