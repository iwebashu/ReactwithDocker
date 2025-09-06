import { BASE_URL } from "./baseURL";

/*----------- Advertisement Endpoint -----------*/
export const ADVT_ADD = BASE_URL + 'SaveAdvertisement';
export const ADVT_FILES_ADD = BASE_URL + 'SaveAdvertisementFiles';


/*----------- Post Endpoint -----------*/
export const POST_ADD = BASE_URL + 'SavePost';
export const POST_FILES_ADD = BASE_URL + 'SavePostFiles';


/*----------- Masters Endpoint -----------*/
export const DEPARTMENT_ADD = BASE_URL + 'AddDepartment';
export const CATEGORY_WISE_FEE_ADD = BASE_URL + 'AddFeeCategoryWise';


/*----------- Payment Endpoint -----------*/
export const MAKE_PAYMENT = BASE_URL + 'MakeRegistrationPayment';
export const CHECK_PAYMENT_STATUS = BASE_URL + 'CheckPendingRegistrationPayment';


/*----------- Registratons Endpoint  -----------*/
export const REGISTRATION_SAVE = BASE_URL + 'SaveRegistration';


/*----------- Applications Endpoint -----------*/
export const APPLICATION_SAVE = BASE_URL + 'AddApplication';


/*----------- Admit Card Endpoint  -------------*/
export const GENERATE_ADMITCARD = BASE_URL + 'GenerateAdmitCard';


/*----------- Result Endpoint -----------*/
export const GENERATE_RESULT = BASE_URL + 'GenerateResult';