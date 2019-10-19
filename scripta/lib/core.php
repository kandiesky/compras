<?php
namespace scripta\lib;
use Zend\Crypt\Password\Bcrypt;

/**
 * Classe de operações, utilizada para executar várias das funções necessárias
 * @author <lucasbarreiros2009@gmail.com>
 * @copyright 2014-2019 Okituké/Scripta 
 * @version 1.0
 */
class core{
	/**
	 * Constructor
	 */
	public function __construct(){
		require_once('db.php');
		$this->hash = new Bcrypt();
		$this->dsn	 = $dsn;
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
	 * $c = checkbox do cookie
	 * @return JSON
	 */
	public function logar($suario = "", $senha = "", $lembrar = "off"){
		
		if($lembrar == "on"){
			$cookie = 86400;
		}else{
			$cookie = 24000;
		}

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
				session_start([
					'cookie_lifetime' => $cookie,
				]);
				$_SESSION['compras']['idUsuario'] = $usuario['id'];
				$_SESSION['compras']['nomeUsuario'] = $usuario['nome'];
				$_SESSION['compras']['tipoUsuario'] = $usuario['avbn'];
				$_SESSION['compras']['localUsuario'] = $usuario['local'];
				$_SESSION['compras']['anunciosUsuario'] = $usuario['anuncios'];
				$_SESSION['compras']['configUsuario'] = json_decode($usuario['config']); //Configurações estão em json
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
	 * Checa se o ID que está pedindo para fazer uma operação tem permissão
	 * $uid = id do usuário
	 * $operacao = operacao requisitada
	 * @return true|false
	 */
	private function checarAutoridade($uid = 0, $tipo = 0, $operacao = ""){

		switch ($operacao) {
			case "criarConta":
				if($tipo > 0){
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
	 * $offset = de onde começa a puxar listas
	 * @return JSON
	 */
	public function lerListas($id = 0, $offset = 0){
		$sql = $this->db->prepare("SELECT (`listas`) FROM `compras_usr` WHERE `id` = :id LIMIT 1");
		$sql->execute(array(':id' => $id));
		$listas = $sql->fetchColumn();
		return json_decode($listas, true);
	}
	/**
	 * Puxar a lista do banco de dados
	 * $id = id da lista
	 * @return Array
	 */
	public function pegarLista($id = 0){
		$sql = $this->db->prepare("SELECT * FROM `compras_listas` WHERE `id` = :id");
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

		$sql = $this->db->prepare("UPDATE `compras_listas` SET (`titulo`, `conteudo`, `total`) VALUES (:titulo, :conteudo, :total) WHERE `id` = :id");
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
	 * @return INT(ID da lista) 
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
		$sql = $this->db->prepare("DELETE FROM `compras_listas` WHERE `id` = :id");
		$sql->execute(array(':id' => $id));
	}
	/**
	 * Função privada para tira a lista dos usuários que a tem
	 * Usada junto com a função "listas"
	 * $id = id da lista
	 * $uids = array com ids dos usuários
	 */
	private function limparListas($id = 0, $uid = array()){
		foreach ($uids as $uid) {
			$this->modificarListasUsuario($id, $uid, 2);
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
		
		$sql = $this->db->prepare("SELECT (`listas`) FROM `compras_usr` WHERE id = :id");
		$sql->execute(array(':id' => $uid));
		$lista = $sql->fetch();
		$lista = json_decode($lista[0]);
		if ($operacao == "adicionar"){
			$lista[] = $id;
			$lista = json_encode(array_unique($lista));
		}elseif($operacao == "remover"){
			$index = array_search($id, $lista);
			if($index != false){
				unset($lista[$index]);
			}
			$lista = json_encode(array_unique($lista));
		}
		$sql = $this->db->prepare('UPDATE `compras_usr` SET `listas` = :listas WHERE id = :uid');
		$sql->execute(array(':listas' => $lista, ':uid' => $uid));
	}
	/**
	 * Modifica a array de listas de adeptos do modelo
	 * $id = id da lista
	 * $uid = id do usuário
	 * $operacao = operacao
	 * @return void
	 */
	private function modificarListasCompras($id = 0, $uid = 0, $operacao = ""){
		
		$sql = $this->db->prepare("SELECT (`listas`) FROM `compras_usr` WHERE id = :id");
		$sql->execute(array(':id' => $uid));
		$lista = $sql->fetch();
		$lista = json_decode($lista[0]);
		if ($operacao == "adicionar"){
			$lista[] = $id;
			$lista = json_encode(array_unique($lista));
		}elseif($operacao == "remover"){
			$index = array_search($id, $lista);
			if($index != false){
				unset($lista[$index]);
			}
			$lista = json_encode(array_unique($lista));
		}
		$sql = $this->db->prepare('UPDATE `compras_usr` SET `listas` = :listas WHERE id = :uid');
		$sql->execute(array(':listas' => $lista, ':uid' => $uid));
	}
	/**
	 * Adicionar ou Editar lista
	 * $id = id da lista
	 * $uid = id do usuário
	 * $lista = array da lista
	 * $operacao = default em adicionar
	 * @return JSON
	 */
	public function Lista($id = 0, $uid = 0, $lista = array(), $operacao = 1){
		if($operacao == "adicionar"){
			if(is_int($this->adicionarLista($uid, $lista))){
				print_r(json_encode(array('OK' => 0, 'mensagem' => "Lista adicionada com sucesso! Voltando à página inicial...")));
			}else{
				print_r(json_encode(array('OK' => 1, 'mensagem' => "Falha ao adicionar lista. Tente novamente mais tarde...")));
			}
		}elseif($operacao == "editar"){
			
		}elseif($operacao == "remover"){
			if($this->checarPropriedade($id, $uid)){
				session_start();
				if($_SESSION['compras']['tipoUsuario'] != 0){

				}else{

				}
			}
			
		}
		//print_r(array($uid, $titulo, $conteudo, $total, $tipo));
		//print_r(json_encode(array('OK' => '$erro', 'mensagem' => '$msg')));
	}
	public function Conta($POST = array(), $operacao = ""){
		session_start();
		$tipo = $_SESSION['tipoUsuario'];
		$uid = $_SESSION['idUsuario'];
		if($operacao == "criarConta"){
			if($this->checarAutoridade($uid, $tipo, $operacao)){
				if($this->criarConta($POST, $uid)){
					print_r(json_encode(array('OK' => 0, 'mensagem' => "Usuário criado! Você será redirecionado para a tela inicial...")));
				}else{
					print_r(json_encode(array('OK' => 1, 'mensagem' => "O usuário não foi criado! Tente novamente mais tarde...")));
				}
			}else{
				print_r(json_encode(array('OK' => 1, 'mensagem' => "Falha ao criar conta. Você não tem permissão para fazer isso!")));
			}
		}
	}
	/**
	 * Função privada de criação de conta (pela plataforma)
	 * Contas criadas aqui são dadas o ID do criador (AVBN ou Fábrica)
	 * $info = array com todas as informações
	 * $uid = quem está criando a conta
	 */
	private function criarConta($info = array(), $uid = 0){
		$avbn = $info['avbn']; //ID da avbn que criou e não o tipo
		$tipo = $info['tipo']; //Defaulta em 0 quando a AVBN cria //$tipo = tipo da conta (int); 0 = usuario; 1+ = avbn
		$nome = $info['nome'];
		$login = $info['login'];
		$senha = $this->hash->create($info['senha']);
		$email = $info['email'];
		$local = $info['local'];
		$telefone = $info['telefone'];
		$anuncios = $info['anuncios'];
		$listas = json_encode($info['listas']);
		$config = "";

		$sql = $this->db->prepare("INSERT INTO `compras_usr` (`avbn`, `avbn_id`, `nome`, `login`, `senha`, `email`, `local`, `telefone`, `anuncios`, `listas`, `config`) VALUES (:avbn, :tipo, :nome, :login, :senha, :email, :local, :telefone, :anuncios, :listas, :config)");
		
		$bind = array(':avbn' => $avbn, ':tipo' => $tipo, ':nome' => $nome, ':login' => $login, ':senha' => $senha, ':email' => $email, ':local' => $local, ':telefone' => $telefone, ':anuncios' => $anuncios, ':listas' => $listas, ':config' => $config);

		if($sql->execute($bind)){
			return true;
		}else{
			return false;
		}
	}
}

?>