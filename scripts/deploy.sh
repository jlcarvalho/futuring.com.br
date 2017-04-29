npm i -g now
URL=$(now -t $ZEIT_TOKEN)
echo "<script>window.location.replace('$URL');</script><p>Deployment url: <a href='$URL'>$URL</a></p>" > $CIRCLE_ARTIFACTS/index.html