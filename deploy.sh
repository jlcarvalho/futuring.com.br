npm i -g now@4.7.0
URL=$(now deploy -t $ZEIT_TOKEN -e NODE_ENV=production)
echo "running simple check on $URL"
curl --silent -i -L $URL
now alias set $URL futuring.com.br -t $ZEIT_TOKEN
now alias set $URL futuring -t $ZEIT_TOKEN