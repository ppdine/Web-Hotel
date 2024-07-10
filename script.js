document.addEventListener("DOMContentLoaded", (event) => {
  document
    .getElementById("username")
    .addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("password").focus();
      }
    });

  // Form validation
  document.querySelector("form").addEventListener("submit", function (event) {
    let username = document.getElementsByName("username")[0].value;
    let password = document.getElementsByName("password")[0].value;
    let confirmPasswordElement = document.getElementsByName("confirm_password");
    let confirmPassword =
      confirmPasswordElement.length > 0
        ? confirmPasswordElement[0].value
        : null;
    let valid = true;

    if (!username) {
      document.getElementById("username-error").textContent =
        "Username cannot be left blank!";
      valid = false;
    } else {
      document.getElementById("username-error").textContent = "";
    }

    if (!password) {
      document.getElementById("password-error").textContent =
        "Password cannot be left blank!";
      valid = false;
    } else {
      document.getElementById("password-error").textContent = "";
    }

    if (confirmPassword !== null) {
      if (!confirmPassword) {
        document.getElementById("confirm-password-error").textContent =
          "Confirm Password cannot be left blank!";
        valid = false;
      } else if (password !== confirmPassword) {
        document.getElementById("confirm-password-error").textContent =
          "Passwords do not match!";
        valid = false;
      } else {
        document.getElementById("confirm-password-error").textContent = "";
      }
    }

    if (!valid) {
      event.preventDefault();
    }
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector("form").addEventListener("submit", function (event) {
    let username = document.getElementsByName("username")[0].value;
    let password = document.getElementsByName("password")[0].value;
    let confirmPassword =
      document.getElementsByName("confirm_password")[0].value;
    let valid = true;

    if (!username) {
      document.getElementById("username-error").textContent =
        "Username cannot be left blank!";
      valid = false;
    } else {
      document.getElementById("username-error").textContent = "";
    }

    if (!password) {
      document.getElementById("password-error").textContent =
        "Password cannot be left blank!";
      valid = false;
    } else {
      document.getElementById("password-error").textContent = "";
    }

    if (!confirmPassword) {
      document.getElementById("confirm-password-error").textContent =
        "Confirm Password cannot be left blank!";
      valid = false;
    } else if (password !== confirmPassword) {
      document.getElementById("confirm-password-error").textContent =
        "Passwords do not match!";
      valid = false;
    } else {
      document.getElementById("confirm-password-error").textContent = "";
    }

    if (!valid) {
      event.preventDefault();
    }
  });
});
