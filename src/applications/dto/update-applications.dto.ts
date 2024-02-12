import { PartialType } from '@nestjs/swagger';
import { CreateApplicationsDto } from './create-applications.dto';

export class UpdateAddressDto extends PartialType(CreateApplicationsDto) {}
