import { IsNotEmpty, IsString } from "class-validator";

export class CreateLaboratoryDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  address: string;
}
