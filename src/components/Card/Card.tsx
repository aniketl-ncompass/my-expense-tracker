import {
  Card as MUICard,
  CardContent,
  Typography,
  Stack,
  Avatar,
  LinearProgress,
} from "@mui/material";
import CardStyles from "./card.module.css";
import { CurrencyDollar, ListBullets } from "@phosphor-icons/react";
import DrawerStyles from "../Drawer/drawer.module.css";

interface ICard {
  name: string;
}

function Card({ name }: ICard) {
  return (
    <MUICard variant="outlined" className={CardStyles["mui-card"]}>
      <CardContent className={CardStyles["mui-card-content"]}>
        <Stack gap="1.5rem" height="100%" justifyContent="space-between">
          <Stack flexDirection="row" justifyContent="space-between">
            <Stack>
              <Typography
                gutterBottom
                color="text.secondary"
                variant="overline"
                fontWeight="medium"
              >
                {name}
              </Typography>
              <Typography variant="h4" fontWeight="medium">
                {name === "Budget" ? "$ 24k" : "75.5%"}
              </Typography>
            </Stack>
            <Avatar
              variant="circular"
              className={`${CardStyles["mui-card-icon"]} ${
                name === "Budget"
                  ? CardStyles["mui-card-primary"]
                  : CardStyles["mui-card-secondary"]
              }`}
            >
              {name === "Budget" ? (
                <CurrencyDollar
                  className={DrawerStyles["action-active"]}
                  color="white"
                />
              ) : (
                <ListBullets
                  className={DrawerStyles["action-active"]}
                  color="white"
                />
              )}
            </Avatar>
          </Stack>
          <Stack
            flexDirection="row"
            justifyContent="flex-start"
            gap="1rem"
            width={"100%"}
          >
            {name === "Budget" ? (
              <Typography color="text.secondary" variant="caption">
                Same as last month
              </Typography>
            ) : (
              <LinearProgress
                variant="determinate"
                value={75}
                sx={{ width: "100%", mb: ".5rem" }}
              />
            )}
          </Stack>
        </Stack>
      </CardContent>
    </MUICard>
  );
}

export default Card;
