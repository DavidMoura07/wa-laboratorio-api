import { IsIn, IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export abstract class PaginationDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, type: String })
  public term: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Type(() => Number)
  @ApiProperty({ required: true, type: Number, minimum: 0 })
  public page: number;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  @ApiProperty({ required: true, type: Number, minimum: 1 })
  public pageSize: number;

  @IsString()
  @IsOptional()
  @IsIn(['asc', 'desc', null, undefined])
  @ApiProperty({ required: false, enum: ['asc', 'desc'] })
  public orderDirection: 'asc' | 'desc';

  public abstract orderBy: string;
}