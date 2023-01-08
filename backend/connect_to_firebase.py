import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Use a service account.
cred = credentials.Certificate('secret_key.json')

app = firebase_admin.initialize_app(cred)

db = firestore.client()

users_ref = db.collection(u'accounts_balance')
docs = users_ref.stream()

for doc in docs:
    account_value_to_display = f'{doc.id} => {doc.to_dict()}'
    print(account_value_to_display)
    
