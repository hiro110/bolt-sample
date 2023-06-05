# イメージ作成。必要なファイルだけコピーする。
FROM node:18-alpine AS runner
ENV TZ=Asia/Tokyo
RUN apk --no-cache add tzdata

WORKDIR /app
