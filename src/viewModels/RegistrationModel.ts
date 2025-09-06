interface RegistrationViewModel {
    RegistrationNo: number,
    // FKAdvertisementId: number,
    // AdvertisementShortCode: string,
    // FKPostId: number,
    // PostShortCode: string,
    FirstName: string,
    //MiddleName?: string,
    //LastName: string
}

interface RegistrationListViewModel {
    RegistraionNo: number
}

export type {
    RegistrationViewModel,
    RegistrationListViewModel
}