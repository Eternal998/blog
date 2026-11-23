# Runtime image for the prebuilt Next.js standalone bundle.
# Build the bundle first: pnpm build (see README-DEPLOY.md).
# node:24-slim (glibc) matches the platform the bundle was built on,
# so sharp's prebuilt binaries load without recompilation.
FROM node:24-slim

WORKDIR /app

ENV NODE_ENV=production \
    PORT=3000 \
    HOSTNAME=0.0.0.0 \
    TZ=Asia/Shanghai

COPY .next/standalone ./
COPY .next/static ./.next/static
COPY public ./public
COPY LICENSE ./LICENSE

# ISR revalidation writes to .next/cache at runtime.
RUN chown -R node:node /app
USER node

EXPOSE 3000
CMD ["node", "server.js"]
