FROM node:lts

WORKDIR /app/next-app

COPY . .

## ferramentas de rede para dev
#RUN apt update -y
#RUN apt install -y iputils-ping nmap

# Next.js collects completely anonymous telemetry data about general usage. Learn more here: https://nextjs.org/telemetry
# Uncomment the following line to disable telemetry at run time
ENV NEXT_TELEMETRY_DISABLED 1


CMD npm run start:dev