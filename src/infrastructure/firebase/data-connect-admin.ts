import 'server-only';

import { getDataConnect, type ConnectorConfig } from 'firebase-admin/data-connect';

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
