import React from 'react';

const TradeBook = React.lazy(() => import('./component/tradebook'));
const Portfolio = React.lazy(() => import('./component/portfolio'));
const Fundbook = React.lazy(() => import('./component/fundbook'));
const KYC = React.lazy(() => import('./component/KYC'));
const Creditcard = React.lazy(() => import('./component/Creditcard'));
const ChangePassword = React.lazy(() => import('./component/ChangePassword'));

const routes = [
  { path: '/trading-orders', name: 'trading-orders', component: TradeBook },
  { path: '/portfolio', name: 'portfolio', component: Portfolio },
  { path: '/fundbook', name: 'fundbook', component: Fundbook },
  { path: '/KYC', name: 'KYC', component: KYC },
  { path: '/credit-card', name: 'credit-card', component: Creditcard },
  { path: '/change-password', name: 'change-password', component: ChangePassword },
];

export default routes;
