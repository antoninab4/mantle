import { EcosystemCampaign } from '../types';

export const CAMPAIGNS: EcosystemCampaign[] = [
    {
        id: "bybit-canton",
        title: "Bybit Launchpool: Canton",
        description: "Стейкинг MNT, CC или BBSOL на бирже Bybit для получения токенов Canton Network (CC).",
        platform: "Bybit CEX",
        apy: "Launchpool 🔥",
        status: "Active",
        tags: ["Limited Time", "CEX"],
        link: "https://announcements.bybit.com/"
    },
    {
        id: "cook-feast",
        title: "COOK Feast",
        description: "Удерживайте mETH или cmETH на кошельке. Награды: Поинты Powder -> Токен $COOK.",
        platform: "Mantle Rewards Station",
        apy: "Points + Yield",
        status: "Active",
        tags: ["Staking", "Airdrop"],
        link: "https://meth.mantle.xyz/campaigns"
    },
    {
        id: "mnt-booster",
        title: "MNT Booster (S3)",
        description: "Блокировка MNT для получения дополнительных наград в MNT. Продлится до конца 2025 года.",
        platform: "Mantle Rewards",
        apy: "~15-20%",
        status: "Active",
        tags: ["Lockdrop", "Native Yield"],
        link: "https://rewards.mantle.xyz"
    },
    {
        id: "methamorphosis",
        title: "Methamorphosis S3",
        description: "Используйте mETH в DeFi (Merchant Moe, INIT), чтобы фармить Powder.",
        platform: "Mantle Ecosystem",
        apy: "Multi-Yield",
        status: "Active",
        tags: ["DeFi", "Season 3"],
        link: "https://www.mantle.xyz/blog"
    }
];