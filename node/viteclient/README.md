# Command To Create Certificate and Private Key on windows Git bash

openssl req -x509 -newkey rsa:2048 -nodes -keyout localhost-key.pem -out localhost-cert.pem -days 365 -subj "//CN=localhost"



