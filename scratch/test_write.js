const apiKey = "AIzaSyDo529Vcr8UGrvanBxE1XvwT549k8hdQLo";
const projectId = "my-gallery-app-ca7ef";

async function testWrite() {
  const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/test_quota?key=${apiKey}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fields: { test: { stringValue: "hello" } } })
  });
  const data = await res.json();
  console.log(JSON.stringify(data, null, 2));
}
testWrite();
