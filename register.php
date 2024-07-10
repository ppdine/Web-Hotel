<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>
    <title>Register</title>
    <style>
        .error {
            color: red;
        }
    </style>
</head>
<body id="login">
    <?php
        $nameErr = $passErr = $confirmPassErr = "";
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            if (empty($_POST['username'])) {
                $nameErr = "Username cannot be left blank!";
            }
            if (empty($_POST['password'])) {
                $passErr = "Password cannot be left blank!";
            }
            if (empty($_POST['confirm_password'])) {
                $confirmPassErr = "Confirm Password cannot be left blank!";
            } elseif ($_POST['password'] !== $_POST['confirm_password']) {
                $confirmPassErr = "Passwords do not match!";
            }
        }
    ?>
    <form action="login.php" method="post" name="form">
        <h1>Register</h1>
        <label>User Name</label>
        <br>
        <input type="text" id="username" name="username" placeholder="Enter UserName">
        <span class="error" id="username-error"><?php echo $nameErr; ?></span>
        <br>
        <label>Password</label>
        <br>
        <input type="text" id="password" name="password" placeholder="Enter Password">
        <span class="error" id="password-error"><?php echo $passErr; ?></span>
        <br>
        <label>Confirm Password</label>
        <br>
        <input type="text" id="confirm_password" name="confirm_password" placeholder="Enter Password Again">
        <span class="error" id="confirm-password-error"><?php echo $confirmPassErr; ?></span>
        <br>
        <center><input type="submit" name="submit" value="Create"></center>
        <br>
    </form>
</body>
</html>
