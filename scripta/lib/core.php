<?php
namespace scripta\lib;
use Zend\Crypt\Password\Bcrypt;

/**
 * Classe de operações, utilizada para executar várias das funções necessárias.
 * NOTA: a lógica dos "OK" está invertida. OK com TRUE quer dizer que houve um problema;
 * OK com 0 quer dizer que foi bem sucedido.
 * @author <lucasbarreiros2009@gmail.com>
 * @copyright 2019 Okituké/Scripta 
 * @version 1.1
 */
class core{
	/**
	 * Constructor
	 */
	public function __construct(){
		require_once('db.php');
		$this->hash 	= new Bcrypt();
		$this->dsn	 	= $dsn;
		if ($this->dsn['enable'] == true) {
			try{
				$this->db = new \PDO('mysql:host='.$this->dsn['host'].';dbname='.$this->dsn['bank'].';charset=utf8', $this->dsn['user'], $this->dsn['pass']);
				$this->db->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
			}catch(PDOException $e){
				echo 'ERROR: ' . $e->getMessage();
				//echo "Um erro foi encontrado...";
				//header("refresh:3;url=../");
			}
		}
	}
	/**
	 * Validação de usuário
	 * $u = usuario ou email
	 * $s = senha 
	 * $lembrar = checkbox do cookie [Lembrar de mim]
	 * @return JSON
	 */
	public function logar($usuario = "", $senha = "", $lembrar = "off"){

		
		$sql = $this->db->prepare("SELECT * FROM `compras_usr` WHERE `login` = :usuario OR `email` = :usuario LIMIT 1");
		$sql->execute(array(':usuario' => $usuario));
		$usuario = $sql->fetch();
		$contagem = $sql->rowCount();

		if($contagem == 0){
			$erro = 1;
			$msg = "Email ou usuário não encontrados...";
		}else{
			if ($this->hash->verify($senha, $usuario['senha'])){
				$erro = 0;
				$msg = "Login realizado! Carregando pagina inicial...";
				if($lembrar == "on"){
					session_start([
						'cookie_lifetime' => 888400,
					]);
				}else{
					session_start();
				}
				$_SESSION['compras']['idUsuario'] = $usuario['id'];
				$_SESSION['compras']['nomeUsuario'] = $usuario['nome'];
				$_SESSION['compras']['tipoUsuario'] = $usuario['avbn'];
				$_SESSION['compras']['localUsuario'] = $usuario['local'];
				$_SESSION['compras']['anunciosUsuario'] = $usuario['anuncios'];
				$_SESSION['compras']['configUsuario'] = json_decode($usuario['config'], true); //Configurações estão em json
			}else{
				$erro = 1;
				$msg = "Senha incorreta!";
			}
		}
		print_r(json_encode(array('OK' => $erro, 'mensagem' => $msg)));
	}
	/**
	 * Fecha sessão da lista de compras
	 * @return JSON
	 */
	public function sair(){
		session_start();
		unset($_SESSION['compras']);
		print_r(json_encode(array('OK' => "OK", 'mensagem' => "Você saiu com sucesso! Voltando à tela inicial...")));
	}
	/**
	 * Adiciona o anunciante à lista do usuário
	 * $id = id do usuário
	 * $anun = anunciante
	 * @return void
	 */
	public function adicionarAnunciante($id, $anun){
		$sql = $this->db->prepare("SELECT (`anunciantes`) FROM `compras_usr` WHERE `id` = ?");
		$sql->execute(array($id));
		$anunciantes = $sql->fetch();
		$anunciantes = json_decode($anunciantes[0], true);
		$anunciantes[] = $anun;

		$sql = $this->db->prepare("UPDATE `compras_usr` SET `anunciantes` = ? WHERE `id` = ?");
		$sql->execute(array(json_encode(array_unique($anunciantes)), $id));
	}
	/**
	 * Checa se o ID que está pedindo para fazer uma operação tem permissão
	 * $uid = id do usuário
	 * $operacao = operacao requisitada
	 * @return true|false
	 */
	private function checarAutoridade($uid = 0, $tipo = 0, $operacao = ""){

		switch ($operacao) {
			case "criarConta":
				if($tipo > 0 || $uid == 1){
					return true;
				}else{
					return false;
				}
				break;
			case "apagarConta":
				if($tipo > 0 && $uid == 1){
					return true;
				}else{
					return false;
				}
				break;
			case 'editarConta':
				if ($tipo == 0) {
					$sql = $this->db->prepare("SELECT (`id`) FROM `compras_usr` WHERE `id` = :uid");
					$sql->execute(array(':uid' => $uid));
					$sql = $sql->fetch();
					if($sql[0] == $uid){
						return true;
					}else{	
						return false;
					}
				}elseif($tipo > 0){
					$sql = $this->db->prepare("SELECT (`avbn`) FROM `compras_usr` WHERE `avbn` = :uid");
					$sql->execute(array(':uid' => $uid));
					$sql = $sql->fetch();
					if($sql[0] == $uid){
						return true;
					}else{	
						return false;
					}
				}elseif($uid == 1){
					return true;
				}else{
					return false;
				}
				break;
		}
	}
	/**
	 * Checa se o ID que está pedindo a modificação na lista é o proprietário dono dela
	 * $id = id da lista
	 * $uid = id do usuário
	 * @return true|false
	 */
	private function checarPropriedade($id = 0, $uid = 0){
		$sql = $this->db->prepare("SELECT (`dono`) FROM `compras_listas` WHERE `id` = :id AND `dono` = :uid");
		$sql->execute(array(':id' => $id, ':uid' => $uid));
		$sql = $sql->fetch();
		if($sql[0] == $uid){
			return true;
		}else{	
			return false;
		}
	}
	/**
	 * Ler [IDs das] listas do usuário
	 * $id = id do usuário
	 * @return JSON
	 */
	public function lerListas($id = 0){
		$sql = $this->db->prepare("SELECT (`listas`) FROM `compras_usr` WHERE `id` = :id LIMIT 1");
		$sql->execute(array(':id' => $id));
		$listas = $sql->fetchColumn();
		return json_decode($listas, true);
	}
	/**
	 * Função para leitura de lista de modelo. Retorna os IDs das mesmas
	 * $id = id do usuário
	 */
	public function lerListasModelo($id = 0){
		$sql = $this->db->prepare("SELECT `id` FROM `compras_listas` WHERE `dono` = ? AND `tipo` = 1");
		$sql->execute(array($id));
		return $sql->fetchAll();
	}
	/**
	 * Função para leitura dos anunciantes
	 * $id = ID do usuário
	 */
	public function lerAnunciantes($id = 0){
		$sql = $this->db->prepare("SELECT `anunciantes` FROM `compras_usr` WHERE `id` = ? AND `anuncios` = 1");
		$sql->execute(array($id));
		$sql = $sql->fetch();
		return json_decode($sql['anunciantes'], true);
	}
	/**
	 * Puxar a lista do banco de dados
	 * $id = id da lista
	 * @return Array
	 */
	public function pegarLista($id = 0, $tipo = 0){
		if($tipo == 0){
			$sql = $this->db->prepare("SELECT * FROM `compras_listas` WHERE `id` = :id");
		}elseif($tipo == 1){
			$sql = $this->db->prepare("SELECT * FROM `compras_listas` WHERE `id` = :id AND `tipo` = '1'");
		}
		$sql->execute(array(':id' => $id));
		$lista = $sql->fetch();
		return $lista;
	}
	/**
	 * Função de edição de lista
	 * Usada junto com a função "Lista"
	 * $id = id da lista
	 * $lista = array com todas as informações da lista
	 * @return true|false
	 */
	private function editarLista($id = 0, $lista = array()){
		$titulo = $lista['titulo'];
		$conteudo = json_encode($lista['conteudo']);
		$total = $lista['total'];
		$sql = $this->db->prepare("UPDATE `compras_listas` SET `titulo` = :titulo, `conteudo` = :conteudo, `total` = :total WHERE `id` = :id");
		if($sql->execute(array(':titulo' => $titulo, ':conteudo' => $conteudo, ':total' => $total, ':id' => $id))){
			return true;
		}else{
			return false;
		}
	}
	/**
	 * Função privada utilizada para adicionar listas ao banco de dados
	 * Usada junto com a função "Lista"
	 * $uid = id do usuário
	 * $lista = array com todas as informações da lista;
	 * @return INT(ID da lista)|FALSE
	 */
	private function adicionarLista($uid = 0, $lista = array()){
		$titulo = $lista['titulo'];
		$tipo = $lista['tipo'];
		$conteudo = json_encode($lista['conteudo']);
		$total = $lista['total'];
		$usuarios = json_encode(array($uid));

		$sql = $this->db->prepare("INSERT INTO `compras_listas` (`id`, `dono`, `titulo`, `conteudo`, `total`, `tipo`, `usuarios`) VALUES (null,?,?,?,?,?,?)");
			if($sql->execute(array($uid, $titulo, $conteudo, $total, $tipo, $usuarios))){
				$sql = $this->db->prepare("SELECT (`id`) FROM `compras_listas` WHERE `titulo` = :titulo ORDER BY `id` DESC LIMIT 1");
				if($sql->execute(array(':titulo' => $titulo))){
					$idLista = $sql->fetch();
					$idLista = $idLista[0];
					return $idLista;
				}else{
					return false;
				}
			}else{
				return false;
			}
	}
	/**
	 * Função privada de apagar lista.
	 * Usada junto com função "Lista"
	 * $id = id da lista
	 * 
	 */
	private function apagarLista($id = 0){
		$sql = $this->db->prepare("DELETE FROM `compras_listas` WHERE `compras_listas`.`id` = :id");
		if($sql->execute(array(':id' => $id))){
			return true;
		}else{
			return false;
		}
	}
	/**
	 * Modifica a array de listas de compras do usuário
	 * $id = id da lista
	 * $uid = id do usuário
	 * $operacao = "operacao"
	 * @return void
	 */
	private function modificarListasUsuario($id = 0, $uid = 0, $operacao = ""){
		$sql = $this->db->prepare("SELECT (`listas`) FROM `compras_usr` WHERE id = :uid");
		$sql->execute(array(':uid' => $uid));
		$lista = $sql->fetch();
		$lista = json_decode($lista[0], true);
		if ($operacao == "adicionar"){
			$lista[] = $id;
			$lista = json_encode(array_unique($lista));
		}elseif($operacao == "remover"){
			$index = array_search($id, $lista);
			unset($lista[$index]);
			$lista = json_encode(array_unique($lista));
		}
		$sql = $this->db->prepare('UPDATE `compras_usr` SET `listas` = :lista WHERE id = :uid');
		
		if($sql->execute(array(':lista' => $lista, ':uid' => $uid))){
			return true;
		}else{
			return false;
		}
		
	}
	/**
	 * Função de modificação de propriedade (dono) de uma lista
	 * $id = id da lista
	 * $uid = id do usuário que receberá
	 */
	private function modificarPropriedade($id = 0, $uid = 0){
		$sql = $this->db->prepare("UPDATE `compras_listas` SET `dono` = ?, `usuarios` = ? WHERE `id` = ?");
		if($sql->execute(array($uid, json_encode(array($uid)), $id))){
			return true;
		}else{
			return false;
		}
	}
	/**
	 * Modifica a array de listas de adeptos do modelo
	 * $id = id da lista
	 * $uid = id do usuário
	 * $operacao = operacao
	 * @return void
	 */
	private function modificarListasCompras($id = 0, $uid = 0, $operacao = ""){
		
		$sql = $this->db->prepare("SELECT (`usuarios`) FROM `compras_listas` WHERE id = :id");
		$sql->execute(array(':id' => $id));
		$lista = $sql->fetch();
		$lista = json_decode($lista[0], true);
		if ($operacao == "adicionar"){
			$lista[] = $uid;
			$lista = json_encode(array_unique($lista));
		}elseif($operacao == "remover"){
			$index = array_search($uid, $lista);
			unset($lista[$index]);
			$lista = json_encode(array_unique($lista));
		}
		$sql = $this->db->prepare('UPDATE `compras_listas` SET `usuarios` = :lista WHERE id = :id');
		if($sql->execute(array(':lista' => $lista, ':id' => $id))){
			return true;
		}else{
			return false;
		}
	}
	/**
	 * Adicionar ou Editar lista
	 * $id = id da lista
	 * $uid = id do usuário
	 * $lista = array da lista
	 * $operacao = default em adicionar
	 * @return JSON
	 */
	public function Lista($id = 0, $uid = 0, $lista = array(), $operacao = ""){
		if($operacao == "adicionar"){
			$idLista = $this->adicionarLista($uid, $lista);
			if(!empty($idLista)){
				if($this->modificarListasUsuario($idLista, $uid, $operacao)){
					print_r(json_encode(array('OK' => 0, 'mensagem' => "Lista adicionada com sucesso!")));
				}else{
					print_r(json_encode(array('OK' => 1, 'mensagem' => "Houve um erro interno ao adicionar sua lista. Por favor, entre em contato com a sua AVBN.")));
				}
			}else{
				print_r(json_encode(array('OK' => 1, 'mensagem' => "Falha ao adicionar lista. Tente novamente mais tarde...")));
			}
		}elseif($operacao == "editar"){
			if($this->checarPropriedade($id, $uid)){
				if($this->editarLista($id, $lista)){
					print_r(json_encode(array('OK' => 0, 'mensagem' => "Lista editada com sucesso!")));
				}else{
					print_r(json_encode(array('OK' => 1, 'mensagem' => "Houve um problema ao editar sua lista! Tente novamente mais tarde...")));
				}
			}else{
				print_r(json_encode(array('OK' => 1, 'mensagem' => "Falha ao editar lista. Você não tem permissão...")));
			}
		}elseif($operacao == "remover"){
			if($this->checarPropriedade($id, $uid)){
				$array_usuarios = $this->pegarLista($id);
				$array_usuarios = json_decode($array_usuarios['usuarios'], true);
				foreach ($array_usuarios as $usuario) {
					//Dentro de IF para evitar retorno
					if($this->modificarListasUsuario($id, $usuario, $operacao)){}
					if($this->modificarListasCompras($id, $uid, $operacao)){}
				}
				if($this->apagarLista($id)){
					print_r(json_encode(array('OK' => 0, 'mensagem' => "Deletada com sucesso!")));
				}
			}else{
				if($this->modificarListasCompras($id, $uid, $operacao)){
					if($this->modificarListasUsuario($id, $uid, $operacao)){
						print_r(json_encode(array('OK' => 0, 'mensagem' => "A lista/modelo foi removido da sua tela inicial!")));
					}else{
						print_r(json_encode(array('OK' => 0, 'mensagem' => "Houve um erro ao remover a lista/modelo da sua tela inicial!")));
					}
				}else{
					print_r(json_encode(array('OK' => 0, 'mensagem' => "Houve um erro ao remover a lista/modelo da sua tela inicial!")));
				}
			}
		}
	}
	/**
	 * Função de conta
	 */
	public function Conta($POST = array(), $operacao = ""){
		session_start();
		$usuario = $_SESSION['compras'];
		$tipo = $usuario['tipoUsuario'];
		$uid = $usuario['idUsuario'];

		if($operacao == "criarConta"){
			if($this->checarExistenciaUsuario($POST['login'], $POST['email'])){
				if($this->checarAutoridade($uid, $tipo, $operacao)){
					$idContaCriada = $this->criarConta($POST, $uid);
					if($idContaCriada != false){
						print_r(json_encode(array('OK' => 0, 'mensagem' => "Conta criado com sucesso!")));
					}else{
						print_r(json_encode(array('OK' => 1, 'mensagem' => "Erro desconhecido ao criar conta! Tente novamente mais tarde.")));
					}
				}else{
					print_r(json_encode(array('OK' => 1, 'mensagem' => "Falha ao criar conta. Você não tem permissão para fazer isso!")));
				}
			}else{
				print_r(json_encode(array('OK' => 1, 'mensagem' => "Login ou email já em uso! Tente com outro.")));
			}
		}elseif($operacao == "editarConta"){
			$id = $POST['identificacao'];
			$this->editarConta($POST, $id);
		}elseif($operacao == "apagarConta"){ //Não será feito ainda; não há necessidade

		}
	}
	/**
	 * Função privada de criação de conta (pela plataforma)
	 * Contas criadas aqui são dadas o ID do criador (AVBN ou Fábrica)
	 * $info = array com todas as informações
	 * $uid = quem está criando a conta
	 */
	private function criarConta($info = array(), $uid = 0){
		$avbn = $uid; //ID da avbn que criou e não o tipo
		$tipo = $info['avbn']; //Defaulta em 0 quando a AVBN cria //$tipo = tipo da conta (int); 0 = usuario; 1+ = avbn
		$nome = $info['nome'];
		$login = $info['login'];
		$senha = $this->hash->create($info['senha']);
		$email = $info['email'];
		$local = $info['local'];
		$telefone = $info['telefone'];
		$anuncios = $info['anuncios'];
		if(isset($info['listas']) && count($info['listas']) > 0){
			foreach ($info['listas'] as $index => $valor) {
				$lista = $this->pegarLista($valor);
				if($lista['tipo'] == 1){
					$lista['tipo'] = 0;
					$lista['conteudo'] = json_decode($lista['conteudo'], true); //Decodificar antes de recodificar
					$idLista = $this->adicionarLista($uid, $lista);
					$info['listas'][$index] = $idLista;
				}
			}
			$listas = json_encode($info['listas']);
		}else{
			$listas = json_encode(array());
		}
		
		$config = "";
		$sql = $this->db->prepare("INSERT INTO `compras_usr` (`avbn`, `avbn_id`, `nome`, `login`, `senha`, `email`, `local`, `telefone`, `anuncios`, `listas`, `config`) VALUES (:avbn, :avbnID, :nome, :login, :senha, :email, :local, :telefone, :anuncios, :listas, :config)");
		
		$bind = array(':avbn' => $tipo, ':avbnID' => $avbn, ':nome' => $nome, ':login' => $login, ':senha' => $senha, ':email' => $email, ':local' => $local, ':telefone' => $telefone, ':anuncios' => $anuncios, ':listas' => $listas, ':config' => $config);

		if($sql->execute($bind)){
			$sql = $this->db->prepare("SELECT (`id`) FROM `compras_usr` WHERE `login` = ? AND `email` = ?");
			$sql->execute(array($login, $email));
			$id = $sql->fetch();
			foreach (json_decode($listas, true) as $idLista){
				$this->modificarPropriedade($idLista, $id[0]);
			}
			return $id[0];
		}else{
			return false;
		}
	}
	/**
	 * Checa a existência de um usuário
	 * $login = usuário/login
	 * $email = email
	 * @return TRUE|FALSE
	 */
	private function checarExistenciaUsuario($login = "", $email = ""){
		$sql = $this->db->prepare("SELECT * FROM `compras_usr` WHERE `login` = :login OR `email` = :email");
		$sql->execute(array(':login' => $login, ':email' => $email));
		if($sql->rowCount() == 0){
			return true;
		}else{
			return false;
		}
	}
	/**
	 * Pega as informações de um usuário
	 * $id = id do usuário
	 * $uid = User id de quem solicita
	 * @return array
	 */
	public function pegarUsuario($id = 0, $uid = 0){
		$sql = $this->db->prepare("SELECT * FROM `compras_usr` WHERE `id` = ?");
		$sql->execute(array($id));
		$sql = $sql->fetch();
		if($sql['avbn_id'] == $uid || $uid == 1 || $uid = $sql['id']){
			return $sql;
		}else{
			return false;
		}
	}
	/**
	 * Lê os usuários de determinado administrador
	 * $uid = User ID do administrador
	 * @return array 
	 */
	public function lerUsuarios($uid = 0){
		$sql = $this->db->prepare("SELECT * FROM `compras_usr` WHERE `avbn_id` = :uid");
		$sql->execute(array(':uid' => $uid));
		return $sql->fetchAll();
	} 
	/**
	 * Função para salvar as modificações no usuário
	 * $POST = informações
	 * $id = id do usuário
	 * @return JSON
	 */
	private function editarConta($info = array(), $id = 0){
		$nome = $info['nome'];
		$email = $info['email'];
		$local = $info['local'];
		$telefone = $info['telefone'];

		$sql = $this->db->prepare("UPDATE `compras_usr` SET `nome` = :nome, `email` = :email, `local` = :local, `telefone` = :telefone WHERE `id` = :id");
		
		$bind = array(':nome' => $nome, ':email' => $email, ':local' => $local, ':telefone' => $telefone, ':id' => $id);

		if($sql->execute($bind)){
			if(isset($info['senha']) && strlen($info['senha']) > 4){
				$senha = $this->hash->create($info['senha']);
				$sql = $this->db->prepare("UPDATE `compras_usr` SET `senha` = ? WHERE `id` = ?");
				if($sql->execute(array($senha, $id))){
					print_r(json_encode(array('OK' => 0, 'mensagem' => "Conta e senha modificados com sucesso!")));
				}else{
					print_r(json_encode(array('OK' => 0, 'mensagem' => "A conta foi atualizada mas a senha não.")));
				}
			}else{
				print_r(json_encode(array('OK' => 0, 'mensagem' => "Conta modificada com sucesso! Nenhuma alteração na senha foi feita.")));
			}
		}else{
			print_r(json_encode(array('OK' => 1, 'mensagem' => "Erro desconhecido ao editar conta! Tente novamente mais tarde.")));
		}
	}
	/**
	 * Função para enviar uma cópia da lista para um usuário
	 * $listas = array com as listas
	 * $uid = ID de quem está recebendo as listas
	 * @return JSON
	 */
	public function enviarLista($listas = array(), $uid = 0){
		foreach ($listas as $index => $valor) {
			$lista = $this->pegarLista($valor);
			if($lista['tipo'] == 1){
				$lista['tipo'] = 0;
				$lista['conteudo'] = json_decode($lista['conteudo'], true); //Decodificar antes de recodificar no próximo passo
				$idLista = $this->adicionarLista($uid, $lista);
				$listas[$index] = $idLista;
			}
		}
		$adicionadas = 0;
		foreach ($listas as $lista) {
			if($this->modificarListasUsuario($lista, $uid, "adicionar")){
				$adicionadas++;
			}
		}
		if(count($listas) == $adicionadas){
			print_r(json_encode(array('OK' => 0, 'mensagem' => "Listas enviadas com sucesso!")));
		}else{
			print_r(json_encode(array('OK' => 1, 'mensagem' => "Houve uma falha ao enviar as listas. Algumas listas podem ter ficado em falta.")));
		}
	}
}

?>