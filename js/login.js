const password = $("#pass").val();
let username = $("#name").val();
let button = $("#login");

submit_id = button.addEventListener("click", (e) => {
  if (username == "" || password.value == "") {
    alert("invalid");
    return;
  } else {
    const data = { username: username, password: password };
    $.ajax({
      url: "./php/login.php",
      method: "post",
      data: data,
      datatype: "html",
      success: function (res) {
        console.log(res);
      },
    });

    console.log(data);
  }
});
