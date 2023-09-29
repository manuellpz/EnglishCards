<?php
	require_once("./database.php");
	$db = new Database();
	$con = $db->conectar();


	if(isset($_GET['consulta'])) {
		$query = $con->prepare("SELECT * FROM cards");
		$query->execute();
		$result = $query->fetchAll(PDO::FETCH_ASSOC);
		$data = array(); 

		foreach($result as $row) {
			$data[] = array(
				'id' => $row['id'],
				'word' => $row['word'],
				'meaning' => $row['meaning']
			);
		}
		echo json_encode($data);
	}

?>