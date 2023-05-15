# Create T3 Web3 App

- Uses [t3](https://create.t3.gg/) + web3 stack
    - nextjs
    - typescript
    - tailwind
    - nextauth
    - prisma (postgres)

    Web3
    - rainbowsdk
    - wagmi
    - ethersjs
    - hardhat

## Deploy
1. clone
2. `npm i`
3. `docker compose up -d` -- postgres docker image
4. `npx prisma migrate dev`
5. `npm run dev`