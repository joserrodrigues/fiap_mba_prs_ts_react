import { FC } from "react";
import { ButtonMaxSize, MainStack, TitlePage } from './DetailStyle'

interface iProps {
  infoID: string | undefined;
  onBackButton: Function;
}
const DetailView: FC<iProps> = ({ infoID, onBackButton }) => {
  return (
    <>
      <MainStack spacing={2} className="box">
        <TitlePage
          gutterBottom
          variant="h3"
          className="text"
          color="primary.main"
        >
          Detail = {infoID}
        </TitlePage>
        <ButtonMaxSize variant="primary" onClick={() => onBackButton()}>
          Voltar
        </ButtonMaxSize>
      </MainStack>
    </>
  );
};

export default DetailView;
