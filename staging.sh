npm i -g now
URL=$(now -t $ZEIT_TOKEN)
echo "Running simple check on $URL"
curl --silent -i -L $URL
now alias $URL staging.futuring.com.br -t $ZEIT_TOKEN