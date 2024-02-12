
export class CreateAddressDto {
    street_address: string;
    number: string;
    additional_details: string;
    neighborhood: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
    landmark?: string;
    main_address: boolean;
    user_id: string;
}
// json
// {
//     "street_address": "Rua das Flores",
//     "number": "123",
//     "additional_details": "Casa",
//     "neighborhood": "Centro",
//     "city": "São Paulo",
//     "state": "São Paulo",
//     "country": "Brasil",
//     "zipCode": "12345-678",
//     "landmark": "Perto do mercado",
//     "main_address": true,
//     "user_id": "1"
// }