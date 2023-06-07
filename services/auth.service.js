import createAuth0Client from '@auth0/auth0-spa-js';
import authConfig from '@/auth.config.js';

async function createAuth0Instance() {
    const auth0Client = await createAuth0Client({
        domain: authConfig.domain,
        client_id: authConfig.clientId,
        audience: authConfig.audience,
        redirect_uri: window.location.origin,
    });

    return auth0Client;
}

export const auth0 = createAuth0Instance();
