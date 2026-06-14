const apiKey = "AIzaSyDo529Vcr8UGrvanBxE1XvwT549k8hdQLo";
const projectId = "my-gallery-app-ca7ef";

async function checkChats() {
  const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents:runQuery?key=${apiKey}`;
  const query = {
    structuredQuery: {
      from: [{ collectionId: 'chats' }],
      where: {
        fieldFilter: {
          field: { fieldPath: 'participants' },
          op: 'ARRAY_CONTAINS',
          value: { stringValue: 'yonisharabi19955@gmail.com' }
        }
      }
    }
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(query)
  });

  const data = await res.json();
  console.log(JSON.stringify(data, null, 2));
}

checkChats();
