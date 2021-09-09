export enum Gender {
    Male,
    Female,
}

export interface User {
    "id": string,
    "title": string,
    "firstName": string,
    "lastName": string,
    "picture": string,
    "gender": Gender,
    "email": string,
    "dateOfBirth": Date,
    "phone": number,
    "location": {
        "street": string,
        "city": string,
        "state": string,
        "country": string,
        "timezone": string
    }

}