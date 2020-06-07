dependencias necessárias npm  
1 - npm install --save live-server  
    adicionar no script do package.json o trecho  
    "scripts": {  
        ...,  
        "start": "live-server"  
    } para utilizar o restart automático do servidor,  
    e utilizar o comando 'npm start' para inicializar o servidor  

2 - npm start para inicializar o servidor local rodando na porta 8080  
3 - execute o comando tsc -w, ele executará em tempo real,  
e as alterações feitas dentro do arquivo basico.ts, serão atualizadas dentro do diretório dist