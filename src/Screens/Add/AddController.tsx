import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AddView from "./AddView";
import * as Yup from "yup";
import "yup-phone";
import useAPI from "../../Services/APIs/Common/useAPI";
import { addPersons } from "../../Services/APIs/Persons/Persons";
import { FormikHelpers } from "formik";
import { AssertsShape, ObjectShape, TypeOfShape } from "yup/lib/object";
import { ObjectSchema } from "yup";
import { AnyObject } from "yup/lib/types";

type LocationProps = {
  lat: number;
  lng: number;
};

export type FormDataType = {
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  latitude: number;
  longitude: number;
};

const AddController = () => {
  const addPersonsAPI = useAPI(addPersons);
  const location = useLocation();

  let { lat, lng }: LocationProps = location.state! as LocationProps;

  const [connectMessage, setConnectMessage] = useState("");
  const [connectCode, setConnectCode] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  let navigate = useNavigate();

  const onBackButton = () => {
    navigate(-1);
  };

  const onSubmit = (
    values: FormDataType,
    formikHelpers: FormikHelpers<FormDataType>
  ) => {
    // navigate(-1);
    console.log(values);

    let info = {
      firstName: values.firstName,
      lastName: values.lastName,
      phone: values.phone,
      address: values.address,
      latitude: values.latitude,
      longitude: values.longitude,
      image: "https://reqres.in/img/faces/1-image.jpg",
    };

    setIsLoading(true);
    addPersonsAPI
      .requestPromise(info)
      .then((info: any) => {
        console.log(info);
        setIsLoading(false);
        setConnectCode(1);
        setConnectMessage("Colaborador adicionada com sucesso");
        setTimeout(() => {
          navigate(-1);
        }, 3000);
      })
      .catch((error: any) => {
        setIsLoading(false);
        setConnectCode(-1);
        setConnectMessage(
          "O servidor retornou um erro= " + error.response.status
        );
      });
  };

  const personSchema: ObjectSchema<
    ObjectShape,
    AnyObject,
    TypeOfShape<ObjectShape>,
    AssertsShape<ObjectShape>
  > = Yup.object().shape({
    firstName: Yup.string().required("O nome ?? obrigat??rio"),
    lastName: Yup.string().required("O sobrenome ?? obrigat??rio"),
    phone: Yup.string()
      .phone("BR", true, "O telefone est?? inv??lido")
      .required("Telefone ?? obrigat??rio"),

    address: Yup.string()
      .required("Endere??o ?? obrigat??rio")
      .min(10, "Endere??o ?? muito curto"),
  });

  return (
    <AddView
      onBackButton={onBackButton}
      latitude={lat}
      longitude={lng}
      onSubmit={onSubmit}
      signInSchema={personSchema}
      isLoading={isLoading}
      connectMessage={connectMessage}
      connectCode={connectCode}
    />
  );
};

export default AddController;
