FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# expose just conatiner comunication ko lagi ho nand host lai expose grne vnneko kura ho jun hamile
#  docker-compose.yml ma garesi esko use dekhina maile
# Expose ports without publishing them to the host machine - they’ll only be accessible to linked services. Only the internal port can be specified.
# expose impact kunai xena aile ko time ma
EXPOSE 4443  
CMD ["npm","start"]