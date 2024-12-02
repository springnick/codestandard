# # 使用 Node.js 作为构建阶段
# FROM node:latest AS build

# # 设置工作目录
# WORKDIR /app

# # 复制 package.json 和 package-lock.json
# COPY package*.json ./

# # 安装依赖
# RUN npm install

# # 复制应用源代码
# COPY . .

# # 运行构建命令
# RUN npm run docs:build

# 使用 Nginx 作为最终运行环境
FROM nginx:latest

# 设置工作目录
WORKDIR /usr/share/nginx/html

# 从构建阶段复制构建好的静态文件到 Nginx 的工作目录
COPY docs/.vuepress/dist .

# 暴露端口
EXPOSE 80

# 启动 Nginx 服务
CMD ["nginx", "-g", "daemon off;"] 
