export default function Home() {
  return (
    <>
   
  <div className="container">  
    <h1 className="title">Cadastro de Clientes</h1>

   <form id="register" className="form">
     <div className="boxlarge">
       <label className="label-form">Nome
        <input className="spacing" name="name" type="text" placeholder="Nome completo" />
       </label>
        <label className="label-form">Email
          <input name="email" type="email" placeholder="Digite seu email" />
         
        </label>
    </div>

    <div className="boxsm">
    <label className="label-form"> CPF/CNPJ
      <input type="text" placeholder="Digite CPF ou CNPJ"/>
    </label>
    <label className="label-form">Telefone
    <input type="text" placeholder="telefone" />
    </label>
    <label className="label-form">CEP:
    <input name="CEP" id="CEP" required pattern="\d{5}-\d{3}"/>
    </label>
    <label className="label-form">Logradouro</label>
		<input id="logradouro" type="text" required/>
    <label className="label-form">Número</label>
		<input id="numero" type="text" />
    <label className="label-form">Bairro</label>
		<input id="bairro" type="text" required/>
    <label className="label-form">Cidade</label>
		<input id="bairro" type="text" required/>

    <label className="label-form estado">Estado</label>
		<select>
			<option value="AC">Acre</option>
			<option value="AL">Alagoas</option>
			<option value="AP">Amapá</option>
			<option value="AM">Amazonas</option>
			<option value="BA">Bahia</option>
			<option value="CE">Ceará</option>
			<option value="DF">Distrito Federal</option>
			<option value="ES">Espírito Santo</option>
			<option value="GO">Goiás</option>
			<option value="MA">Maranhão</option>
			<option value="MT">Mato Grosso</option>
			<option value="MS">Mato Grosso do Sul</option>
			<option value="MG">Minas Gerais</option>
			<option value="PA">Pará</option>
			<option value="PB">Paraíba</option>
			<option value="PR">Paraná</option>
			<option value="PE">Pernambuco</option>
			<option value="PI">Piauí</option>
			<option value="RJ">Rio de Janeiro</option>
			<option value="RN">Rio Grande do Norte</option>
			<option value="RS">Rio Grande do Sul</option>
			<option value="RO">Rondônia</option>
			<option value="RR">Roraima</option>
			<option value="SC">Santa Catarina</option>
			<option value="SP">São Paulo</option>
			<option value="SE">Sergipe</option>
			<option value="TO">Tocantins</option>
      </select>
      

      <div className="cadastar">
      <input type="checkbox" name="agreement" className="agreement" />
      <label className="agreement-label">Eu li e aceito os <a href="#">termos de uso</a></label>
        <div className="boxlarge">
          <input type="submit" value="Cadastrar"  />
          </div>
        </div>
      </div>
    </form> 
    </div>
 

    </>
  
  )
}
