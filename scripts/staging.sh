URL=$(echo $(now open -t $ZEIT_TOKEN) | grep -Eo 'https://[^ >]+' | head -1)
echo "Running simple check on $URL"
curl --silent -i -L $URL
now alias $URL staging.futuring.com.br -t $ZEIT_TOKEN