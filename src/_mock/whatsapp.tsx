import SpeedIcon from "@mui/icons-material/Speed";
import GroupIcon from "@mui/icons-material/Group";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import SecurityUpdateGoodIcon from "@mui/icons-material/SecurityUpdateGood";
import LocalConvenienceStoreIcon from "@mui/icons-material/LocalConvenienceStore";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import { COLORS } from "../constants/cssVariables";

export const advantagesMock = (fontSize: string) => [
  {
    title: "Atendimento",
    description: "Consiga realizar diversos atendimentos ao mesmo tempo",
    icon: (
      <GroupIcon
        sx={{
          color: COLORS.darkPrimary,
          fontSize,
          m: "0 auto",
          width: "100%",
        }}
      />
    ),
  },
  {
    title: "Facilidade",
    description:
      "Com o robô você tem mais tempo para pensar nas suas estratégias de Marketing",
    icon: (
      <VolunteerActivismIcon
        sx={{
          color: COLORS.darkPrimary,
          fontSize,
          m: "0 auto",
          width: "100%",
        }}
      />
    ),
  },
  {
    title: "Atualizado",
    description:
      "Você também tem a liberdade de atualizá-lo a qualquer momento com nossa equipe!",
    icon: (
      <SecurityUpdateGoodIcon
        sx={{
          color: COLORS.darkPrimary,
          fontSize,
          m: "0 auto",
          width: "100%",
        }}
      />
    ),
  },
  {
    title: "Constância",
    description:
      "Com o robô, você atenderá seus clientes 24 horas por dia todos os 7 dias da semana!",
    icon: (
      <LocalConvenienceStoreIcon
        sx={{
          color: COLORS.darkPrimary,
          fontSize,
          m: "0 auto",
          width: "100%",
        }}
      />
    ),
  },
  {
    title: "Rapidez",
    description:
      "Consequentemente com o robô, você não perderá mais vendas, por demora de atendimento.",
    icon: (
      <SpeedIcon
        sx={{
          color: COLORS.darkPrimary,
          fontSize,
          m: "0 auto",
          width: "100%",
        }}
      />
    ),
  },
  {
    title: "CRM com Leads",
    description:
      "Tenha um painél só seu dos resultados de seu robô, e monte sua estratégia de marketing com os gráficos!",
    icon: (
      <LeaderboardIcon
        sx={{
          color: COLORS.darkPrimary,
          fontSize,
          m: "0 auto",
          width: "100%",
        }}
      />
    ),
  },
];
