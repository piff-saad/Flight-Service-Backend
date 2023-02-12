FROM golang
WORKDIR /app/
ADD ./ ./
RUN go mod tidy
RUN go mod download
RUN go build
CMD ["./auth-service"]
