$.get(
  "base64.txt",
  function (data) {
    console.log(data);
    $("img").attr("src", data);
  },
  "text"
);
