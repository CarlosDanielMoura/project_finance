import { IsBoolean, IsEmail, IsString, Length, Matches } from "class-validator";

export class CreateStoreDto {

  @Length(2, 200, {
    message: 'O nome deve conter entre 2 e 200 caracteres',
  })
  @IsString({
    message: 'O nome deve ser uma string',
  })
  nome: string;

  @Matches(
    /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/,
    {
      message:
        'O cnpj/cpf deve estar no formato 00.000.000/0000-00 ou 000.000.000-00',
    },
  )
  @Length(14, 18, {
    message: 'O cnpj deve conter entre 14 e 18 caracteres',
  })
  cnpj: string;


  @IsString({
    message: 'A rua deve ser uma string',
  })
  @Length(2, 200, {
    message: 'A rua deve conter entre 2 e 200 caracteres',
  })
  rua :string;

  @IsString({
    message: 'O número deve ser uma string',
    })
  @Length(1, 10, {
    message: 'O número deve conter entre 1 e 10 caracteres',
    })  
  numero:string

  @IsString({
    message: 'O bairro deve ser uma string',
    })
    @Length(2, 50, {
        message: 'O bairro deve conter entre 2 e 50 caracteres',
    })
  bairro:string

    @IsString({
    message: 'A cidade deve ser uma string',
    })
    @Length(2, 100, {
        message: 'A cidade deve conter entre 2 e 100 caracteres',
    })
  cidade:string

    @IsString({
    message: 'O cep deve ser uma string',
    })
    @Length(8, 9, {
        message: 'O cep deve conter entre 8 e 9 caracteres',
    })
    @Matches(/^\d{5}-?\d{3}$/, {
        message: 'O cep deve estar no formato 00000-000 ou 00000000',
    })
  cep:string

    @IsString({
    message: 'O telefone deve ser uma string',
    })
    @Length(10, 15, {
        message: 'O telefone deve conter entre 10 e 15 caracteres',
    })
    @Matches(/^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/, {
        message: 'O telefone deve estar no formato (00) 0000-0000 ou (00) 00000-0000',
    })
  telefone:string

  @IsBoolean({
    message: 'O campo "ativa" deve ser ativo ou inativo',
  })
  ativa:boolean

  @IsEmail({}, {
    message: 'O email deve ser um endereço de email válido',
  })
  email:string

    @IsString({
    message: 'O estado deve ser uma string',
    })
    @Length(2, 2, {
        message: 'O estado deve conter exatamente 2 caracteres',
    })
  estado:string
}
