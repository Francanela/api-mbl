export class CreateAddressDto {
    user_id: number;
    street: string;
    number: string;
    complement: string;
    district: string;
    city: string;
    state: string;
    country: string;
    zip_code: string;
    is_main: boolean;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
