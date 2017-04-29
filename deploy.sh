npm i -g now
URL=$(now deploy -t $ZEIT_TOKEN -e NODE_ENV=production)
echo "running simple check on $URL"
curl --silent -i -L $URL
now alias $URL futuring.com.br -t $ZEIT_TOKEN
now alias $URL futuring -t $ZEIT_TOKEN