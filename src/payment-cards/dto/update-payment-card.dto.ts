import { PartialType } from '@nestjs/swagger';
import { CreatePaymentCardDto } from './create-payment-card.dto';

export class UpdatePaymentCardDto extends PartialType(CreatePaymentCardDto) {
    plataform_name: string
    plataform_id: string
    card_number_prefix: number
    card_number_sufix: number
    card_brand: string
}
