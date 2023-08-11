# 依赖的环境
FROM nginx:1.15
# 它将本地文件系统中 build 文件内容复制到正在构建的 Docker 镜像中的 /etc/nginx/html 目录
COPY src /etc/nginx/html
# 它将本地文件系统中 conf 文件内容复制到正在构建的 Docker 镜像中的 /etc/nginx/html 目录
COPY conf /etc/nginx/
# 指定工作路径，类似于执行 cd /etc/nginx/html
WORKDIR /etc/nginx/html
