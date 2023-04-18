import * as yup from "yup"

export const schema = yup.object().shape({
    name: yup
        .string()
        .min(2, "Por favor, preencha todos os campos!")
        .required("Por favor, preencha todos os campos!"),
    event: yup.string(),
    otherEvent: yup.string().when("event", {
            is: "Outro",
            then: (schema) => schema.min(0),
        }),
    minPeople: yup
        .number()
        .integer()
        .typeError("Por favor, preencha todos os campos!")
        .required("Por favor, preencha todos os campos!"),
    maxPeople: yup
        .number()
        .integer()
        .typeError("Por favor, preencha todos os campos!")
        .required("Por favor, preencha todos os campos!"),
    email: yup
        .string()
        .email()
        .typeError("Por favor, preencha todos os campos!")
        .required("Por favor, preencha todos os campos!"),
    cpf: yup
        .number()
        .test(
            "len",
            "Por favor, preencha todos os campos!",
            (val) => val.toString().length >= 11)
        .typeError("Por favor, preencha todos os campos!")
        .required("Por favor, preencha todos os campos!"),
    theme: yup.string(),
    age: yup
        .string()
        .typeError("")
        .when("eventType", {
        is: "Aniversário",
        then: (schema) =>
            schema
            .typeError("Por favor, preencha todos os campos!!")
            .required("Por favor, preencha todos os campos!"),
        otherwise: (schema) => schema.min(0),
        }),
    gender: yup.string().when("eventType", {
        is: "Aniversário",
        then: (schema) => schema.required("Por favor, preencha todos os campos!"),
        otherwise: (schema) => schema.min(0),
    }),
    where: yup.string(),
    otherWhere: yup.string().when("where", {
        is: "Outro",
        then: (schema) => schema.min(0),
    }),
});

export const schemaBase = {
  name: "Nome Completo/Razão Social",
  event: "Tipo do Evento",
  otherEvent: "Qual tipo?",
  minPeople: "Mínimo de Pessoas",
  maxPeople: "Máximo de Pessoas",
  email: "E-mail",
  cpf: "CPF/CNPJ",
  theme: "Tema",
  age: "Idade",
  gender: "Gênero",
  where: "Por onde nos conheceu",
  otherWhere: "Como chegou até nós?",
};