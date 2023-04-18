import * as yup from "yup"

export const schema = yup.object().shape({
    name: yup.string().required("Por favor, preencha o nome do evento!"),
    theme: yup.string(),
    event: yup.string(),
    otherEvent: yup.string().when("event", {
            is: "Outro",
            then: (schema) => schema.min(0),
        }),
    minPeople: yup.number().integer().typeError("Por favor, informe o número estimado!").required("Por favor, informe o número estimado!"),
    maxPeople: yup.number().integer().typeError("Por favor, informe o número estimado!").required("Por favor, informe o número estimado!"),
    email: yup.string().email().typeError("Por favor, insira um e-mail válido!").required("Por favor, informe um e-mail!"),
    cpf: yup.number()
        .test(
            "len",
            "Por favor, informe o CPF!",
            (val) => val.toString().length >= 0)
        .typeError("Por favor, informe o CPF")
        .required("Por favor, informe o CPF!"),
    age: yup.string().when("eventType", {
        is: "Aniversário",
        then: (schema) =>
            schema
            .required("Por favor, informe a idade!"),
        otherwise: (schema) => schema.min(0),
        }),
    gender: yup.string().when("eventType", {
        is: "Aniversário",
        then: (schema) => schema.required("Por favor, informe o gênero!"),
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