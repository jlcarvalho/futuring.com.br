npm i -g now
URL=$(now -t $ZEIT_TOKEN)
echo "Running simple check on $URL"
curl --silent -i -L $URL
now alias $URL futuring.com.br -t $ZEIT_TOKEN
now alias $URL futuring -t $ZEIT_TOKEN