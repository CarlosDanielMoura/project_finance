FROM node:20

WORKDIR /app


#copia package primeira (melhora cache)
COPY package*.json ./

RUN npm install


# Copia o resto do projeto 
COPY . . 

# Gera cliente do Prisma
RUN npx prisma generate

#Expoe a porta do Nest
EXPOSE 3000

CMD ["npm","run","start:dev"]

