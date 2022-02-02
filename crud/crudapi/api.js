var raw = "{\n    \"Password\": \"elijah$$$$\",\n    \"UserName\": \"0743770216\"\n}";

var requestOptions = {
    method: 'POST',
    body: raw,
    redirect: 'follow'
};

fetch("https://api.lulusms.com/v4/live/Login", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));