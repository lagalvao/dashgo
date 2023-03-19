import { Stack } from "@chakra-ui/react";
import {
  RiDashboardLine,
  RiUserLine,
  RiSettingsLine,
  RiArticleLine,
  RiProductHuntFill,
  RiPassportLine,
  RiBarChartBoxLine
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} href="/dashboard">
          Dashboard
        </NavLink>
        <NavLink icon={RiUserLine} href="/users">
          Usuários
        </NavLink>
        <NavLink icon={RiPassportLine} href="/customers">
          Clientes
        </NavLink>
        <NavLink icon={RiProductHuntFill} href="/products">
          Produtos
        </NavLink>
        <NavLink icon={RiBarChartBoxLine} href="/sales">
          Vendas
        </NavLink>
        <NavLink icon={RiArticleLine} href="/service-order">
          Ordem de Serviços
        </NavLink>
      </NavSection>

      <NavSection title="CONFIGURAÇÕES">
        <NavLink icon={RiSettingsLine} href="/settings">
          Configurações
        </NavLink>
      </NavSection>
    </Stack>
  );
}
