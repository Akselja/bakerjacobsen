axios({
    method: "POST",
    url: "http://localhost:4000/"
}).then(function(response) {
    console.log(response);
})