<?php
// sleep(3);
$db = new SQLite3( 'sample.sqlite3' );
$update_sql = 'UPDATE user set sort_id = '. $_REQUEST['sort_id'] . ' WHERE id = ' . $_REQUEST['id'];
$db->query($update_sql);
print('user_id'.$_REQUEST['id'].'のsort_idを、'.$_REQUEST['sort_id'].'に上書きしました。');
?>
