const password = $("password1").val();
let username = $("username").val();
let button = $("#signup_button");

console.log(password, username);
submit_id = button.addEventListener("click", (e) => {
  if (username == "" || password == "" || password !== $("#password2").val()) {
    alert("invalid");
    return;
  } else {
    const data = { username: username, password: password };
    $.ajax({
      url: "./php/register.php",
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
