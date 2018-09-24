<?php
// sleep(3);
$db = new SQLite3( 'sample.sqlite3' );
$update_sql = 'UPDATE user set  age = '. $_REQUEST['age'] . ' WHERE id = ' . $_REQUEST['id'];
$db->query($update_sql);
echo $sql;
// $db->close();
print('user_id'.$_REQUEST['id'].'の年齢を、'.$_REQUEST['age'].'歳に上書きしました。');
?>
