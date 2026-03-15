const IS_DEV = import.meta.env.DEV;

export const WEBHOOK_URL = IS_DEV
    ? 'https://fluxo-n8n.axmxa0.easypanel.host/webhook-test/lp_v1'
    : 'https://fluxo-n8n.axmxa0.easypanel.host/webhook/lp_v1';
