import { FC } from 'react'
import styled from 'styled-components'
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Colors from "../../Utils/Common/Colors";

export const Main = styled.div`
  margin-top: 180px;
`;

export const Title = styled(Typography)`
&& {
  text-align: center;
  line-height: 60px
}`;

export const CustomLink = styled(Link)`
  && {
    text-align: center;
    font-size: 16vm;
    color: ${Colors.PrimaryMedium};
  }
`;

type CustomBoxType = {
  color: string;
};
const Box2 = styled(Main)`
  && {
    text-align: center;
    width: 200px;
    height: 60px;
    background-color: ${(props: CustomBoxType) =>
      props.color || "blue"};
  }
`;

export const CustomBox: FC<CustomBoxType> = ({ color }) => {
  return <Box2 color={color} />;
};