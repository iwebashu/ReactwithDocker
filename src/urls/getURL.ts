import { BASE_URL } from "./baseURL";


/*=======================Part (A)============================*/
export const LOGGED_IN = BASE_URL + '';
export const FORGOT_PASSWORD = BASE_URL + '';
export const CHANGE_PASSWORD = BASE_URL + '';
export const GET_MENU = BASE_URL + '';
export const GET_APP_CONFIGURATION = BASE_URL + '';



/*=======================Part (B)============================*/

/*-----------Advertisement Endpoint-----------*/
export const ADVT_LIST = BASE_URL + 'GetAdvertisementLists';
export const ADVT_VIEW = BASE_URL + 'GetAdvertisementDetails';
export const ADVT_LIST_FILES = BASE_URL + 'GetFilesByAdvertsiement';


/*-----------Post Endpoint-----------*/
export const POST_LIST = BASE_URL + 'GetPostLists';
export const POST_VIEW = BASE_URL + 'GetPostDetails';
export const POST_LIST_FILES = BASE_URL + 'GetFilesByPostId';


/*-----------Masters Endpoint-----------*/
export const DEPARTMENT_LIST = BASE_URL + 'DepartmentLists';
export const FEE_LIST_CATEGORY_WISE = BASE_URL + 'GetCategoryWiseFeeList';


/*-----------Payment Endpoint-----------*/
export const PAYMENT_LIST = BASE_URL + 'PaymentLists';
export const PAYMENT_VIEW = BASE_URL + 'GetPaymentView';


/*-----------Registratons Endpoint-----------*/
export const REG_LIST = BASE_URL + 'RegistrationLists';
export const REG_VIEW = BASE_URL + 'RegistrationDetailsById';
export const REG_VIEW_BULK = BASE_URL + 'RegistrationDetails';


/*-----------Applications Endpoint-----------*/
export const APPL_LIST = BASE_URL + 'ApplicationLists';
export const APPL_VIEW = BASE_URL + 'ApplicationDetailsById';
export const APPL_VIEW_BULK = BASE_URL + 'ApplicationDetails';


/*-----------Admit Card Endpoint-------------*/
export const ADMIT_CARD_LIST = BASE_URL + 'AdmitCardLists';
export const ADMIT_CARD_VIEW = BASE_URL + 'AdmitCardViewById';
export const ADMIT_CARD_VIEW_BULK = BASE_URL + 'ApplicationDetails';


/*-----------Result Endpoint-----------*/
export const RESULT_LIST = BASE_URL + 'ResultLists';
export const RESULT_VIEW = BASE_URL + 'ResultViewById';
export const RESULT_VIEW_BULK = BASE_URL + 'ApplicationDetails';