import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import {
  IsEthereumAddress,
  IsNotEmpty,
} from "class-validator";
import { Transformation } from "src/common/helpers/transform.helper";

export class NonceQueryDTO {
  @ApiProperty({
    type: String,
    description: "Etherium address",
    example: "0xf605417f2D70BB260DC9b8E9952c02509C00D1E2",
  })
  @IsNotEmpty()
  @IsEthereumAddress()
  @Transform(({ value }) => Transformation.lowerCaseAndTrimString(value))
  walletAddress: string;
}
