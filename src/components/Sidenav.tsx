import resumo from '../assets/icons/resumo.svg'
import vendas from '../assets/icons/vendas.svg'
import webhooks from '../assets/icons/webhooks.svg'
import configuracoes from '../assets/icons/configuracoes.svg'
import contato from '../assets/icons/contato.svg'
import sair from '../assets/icons/sair.svg'
import FintechSVG from './FintechSVG'
import { NavLink } from 'react-router-dom'

const Sidenav = () => {
  return (
    <nav className="sidenav box bg-3">
      <FintechSVG title="Fintech Logo" />
      <ul>
        <li>
          <span>
            <img src={resumo} alt="Home Icon" />
          </span>
          <NavLink to="/">Resumo</NavLink>
        </li>
        <li>
          <span>
            <img src={vendas} alt="Icon" />
          </span>
          <NavLink to="/vendas">Vendas</NavLink>
        </li>
        <li>
          <span>
            <img src={webhooks} alt="Icon" />
          </span>
          <a>Webhooks</a>
        </li>
        <li>
          <span>
            <img src={configuracoes} alt="Icon" />
          </span>
          <a>Configurações</a>
        </li>
        <li>
          <span>
            <img src={contato} alt="Icon" />
          </span>
          <a>Contato</a>
        </li>
        <li>
          <span>
            <img src={sair} alt="Icon" />
          </span>
          <a>Sair</a>
        </li>
      </ul>
    </nav>
  )
}

export default Sidenav
