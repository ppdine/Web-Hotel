<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="reset.css">
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>
    <title>Login</title>
    <style>
        .error {
            color: red;
        }
    </style>
</head>
<body id="login">
    <?php
    $nameErr = $passErr = "";
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (empty($_POST['username'])) {
            $nameErr = "Username cannot be left blank!";
        }
        if (empty($_POST['password'])) {
            $passErr = "Password cannot be left blank!";
        }
    }
    ?>
    <form action="index.php" method="post" name="form">
        <h1 class="h1login">Login</h1>
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
        <center><input type="submit" name="submit" value="Log in"></center>
        <br>
        <label>Do you have an account yet? <a href="register.php">Register</a></label>
    </form>
</body>
</html>
