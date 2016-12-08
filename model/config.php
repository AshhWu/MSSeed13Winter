<?php
    
    $connstr = getenv("MS_TableConnectionString");
        echo $connstr;
        // Initialize array.
        $conn_array = array();
 
        // Split conn string on semicolons. Results in array of "parts".
        $parts = explode(";", $connstr);
 
 
        // Loop through array of parts. (Each part is a string.)
        foreach($parts as $part){
 
            // Separate each string on equals sign. Results in array of 2 items.
            $temp = explode("=", $part);
 
            // Make items key=>value pairs in returned array.
            $conn_array[$temp[0]] = $temp[1];
        }
        $connArr = $conn_array;
        try  
        {  
            $serverName = $connArr['Data Source'];  
            $connectionOptions = array("Database"=>$connArr['Initial Catalog'],  
                "Uid"=>$connArr['User ID'], "PWD"=>$connArr['Password']);  
            $conn = sqlsrv_connect($serverName, $connectionOptions);  
            if($conn == false)  
                die(FormatErrors(sqlsrv_errors()));
            
        }
        catch(Exception $e)
        {  
            echo("Error!");
        }  
?>