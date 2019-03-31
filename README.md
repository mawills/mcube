# mcube

## Deployment

* Install and configure [zeit's now cli](https://github.com/zeit/now-cli)
* Setup up [Cloud Firestore](https://firebase.google.com/docs/firestore/quickstart) (Choose locked mode for your security rules)
* Follow the node.js "Initialize on your own server" steps to generate a service account private key and download the json file
* Add the firebase secrets to your zeit now account (you can get their values from the json file you downloaded)
```bash
# The firebase private key should be base64 encoded, so that it has no newlines so it's compatible with firebase's
# keystore, here is a bash one-liner to acheive that if you have jq installed
export FIREBASE_PRIVATE_KEY=$(cat <firebase-project-json> | jq --raw-output .private_key | base64 --wrap 0)

now secrets add firebase-project-id "<project_id>"
now secrets add firebase-project-email "<project_email>"
now secrets add firebase-private-key "${FIREBASE_PRIVATE_KEY}"
```
* Deploy to your now account by running `now` from the root directory
