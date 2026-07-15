import 'server-only';

import {
  getDataConnect,
  type ConnectorConfig,
  type OperationOptions,
} from 'firebase-admin/data-connect';

import { connectorConfig as clientConnectorConfig } from '@dataconnect/generated';
import { firebaseAdminApp } from '@/infrastructure/firebase/admin';

// El Admin SDK usa nombres de campo distintos a los del SDK cliente generado
// (serviceId en vez de service), así que se remapean en vez de duplicar los valores a mano.
const connectorConfig: ConnectorConfig = {
  location: clientConnectorConfig.location,
  serviceId: clientConnectorConfig.service,
  connector: clientConnectorConfig.connector,
};

/**
 * Instancia de Data Connect con privilegios de administrador: ignora las
 * directivas @auth del esquema. Solo debe usarse desde código server-only
 * ya protegido por una comprobación de rol ADMIN.
 */
export const dataConnectAdmin = getDataConnect(connectorConfig, firebaseAdminApp);

/**
 * Ejecuta una query/mutation como si la hiciera ese usuario: las políticas @auth
 * basadas en "auth.uid" del esquema se evalúan de verdad (no se bypasean), a
 * diferencia de una llamada sin impersonar. Usarlo para leer datos propios del
 * usuario (intentos, revisión) preserva la protección a nivel de esquema.
 */
export function impersonateAs(userId: string): OperationOptions {
  return { impersonate: { authClaims: { sub: userId } } };
}
