import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: "https://bitblocks.finance",
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: "Exchange",
        href: "http://exchange.bitblocks.finance//#/swap",
      },
      {
        label: "Liquidity",
        href: "http://exchange.bitblocks.finance//#/pool",
      },
      {
        label: "Exchange V1",
        href: "http://v1exchange.bitblocks.finance//#/swap",
      },
      {
        label: "Liquidity V1",
        href: "http://v1exchange.bitblocks.finance//#/pool",
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://bitblocks.finance/farms',
  },
  {
    label: 'Blocks Factory',
    icon: 'PoolIcon',
    href: 'https://bitblocks.finance/nests',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://bitblocks.finance/lottery'
  },
  {
    label: 'Buy BBKFI',
    icon: 'IfoIcon',
    href: 'https://exchange.bitblocks.finance//#/swap?inputCurrency=BNB&outputCurrency=0xfc8e68e30350c6603d3d29fcc8e676380c28fcf4',
  },
  {
    label: '+ BBKFI to Metamask',
    icon: 'LayerIcon',
    href: 'https://cutt.ly/addbbkfi',
  },
  {
    label: '+ wBBK to Metamask',
    icon: 'LayerIcon',
    href: 'https://cutt.ly/addwbbk',
  },
  {
    label: 'Roadmap',
    icon: 'RoadmapIcon',
    href: 'https://bitblocksproject.gitbook.io/bitblocks-finance/roadmap',
  },
  {
    label: 'Tools',
    icon: 'NftIcon',
    items: [
      {
        label: 'Lp Worth calculator',
        href: 'https://lp-calc.web.app/',
      },
      {
        label: 'Farm stats',
        href: 'https://bitblocksfinance.web.app/farm.html',
      },

    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Docs',
        href: 'https://bitblocksproject.gitbook.io/bitblocks-finance',
      },
      {
        label: 'Github',
        href: 'https://github.com/BitBlocksProject',
      },
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xfC8E68E30350c6603D3d29fCc8E676380C28FCf4',
      },

    ],
  },
  {
    label: 'Audit by TechRate',
    icon: 'AuditIcon',
    href: 'https://bitblocks.finance/files/Techrate-audit.pdf',
  },
  {
    label: 'BitBlocks Website',
    icon: 'MoreIcon',
    href: 'https://bitblocksproject.com/',
  },
]

export default config
