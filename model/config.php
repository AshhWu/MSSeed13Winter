<?php
    try {
    $conn = new PDO("sqlsrv:server = tcp:msseed13winter.database.windows.net,1433; Database = msseed13winter", "msseed13", "Ms131313");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "success!"
}
catch (PDOException $e) {
    print("Error connecting to SQL Server.");
    die(print_r($e));
}
?>