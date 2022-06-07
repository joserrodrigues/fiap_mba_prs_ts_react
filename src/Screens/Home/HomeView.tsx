import * as React from "react";
import Grid from "@mui/material/Grid";
import { AllPersons } from "../../Models/Person";
import { Title, Main, CustomLink } from "./HomeStyle";

interface IProps {
  info: number;
  person: AllPersons | null;
}

const HomeView: React.FC<IProps> = ({ info, person }) => {
  let name = "";
  if (person) {
    name = person.persons[0].firstName + " " + person.persons[0].lastName;
  }  
  return (
    <Main>
      <Grid
        container
        spacing={0}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Title gutterBottom variant="h1" color="primary.dark">
          Person {name}
        </Title>
        <Title gutterBottom variant="h1" color="secondary.dark">
          Info {info}
        </Title>

        <CustomLink to="detail/1" >
          Detail 1
        </CustomLink>
        <CustomLink to="detail/2" >
          Detail 2
        </CustomLink>
      </Grid>
    </Main>
  );
};

export default HomeView;