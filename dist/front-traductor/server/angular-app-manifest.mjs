
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 216, hash: '4cc9f901a739ba92e454d010b93d63d82ed5c6b415af6d042a32c1053d6e9bce', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 756, hash: '43b305434d218b02e7440b98a4d3ef364b7d7e9b065e70188d8693de1dd5bba0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}
  },
};
