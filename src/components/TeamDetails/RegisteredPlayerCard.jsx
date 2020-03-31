import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export const RegisteredPlayerCard = props => {
  const { firstName, lastName } = props.player;

  return (
    <Card className="cardItem">
      <CardContent className="cardEntityName">
        <Typography display="inline" variant="h6" component="h2">
          {firstName} {lastName}
        </Typography>
      </CardContent>
    </Card>
  );
};
