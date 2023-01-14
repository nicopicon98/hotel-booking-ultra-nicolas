import { TypeWithKey } from '../models';

export const getValidationError = (errorCode: any) => {
  const codeMatcher: TypeWithKey<string> = {
    ERR_NETWORK: 'Se rompió la red',
    ERR_TIMEOUT: 'Se acabó el tiempo',
    ERR_CANCEL: 'Se canceló la petición',
    ERR_UNKNOWN: 'Error desconocido',
    ERR_NAME_NOT_RESOLVED: 'Hay un problema con la url ingresada',
    ERR_400: 'Error 400',
    ERR_401: 'Error 401',
    ERR_403: 'Error 403',
    ERR_429: 'Se ha excedido la quota para esta api',
  };
  return codeMatcher[errorCode];
};