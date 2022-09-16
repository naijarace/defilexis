import {
	BarChart2,
	Book,
	Bookmark,
	Clock,
	CloudDrizzle,
	Code,
	DollarSign,
	HelpCircle,
	Icon,
	Link,
	List,
	Map,
	Percent,
	PieChart,
	PlusCircle,
	Pocket,
	RefreshCcw,
	Share2,
	Shield,
	ShoppingCart,
	TrendingUp,
	Compass,
	Droplet
} from 'react-feather'
import { PaperIcon } from './shared'

export interface IMainLink {
	name: string
	path: string
	icon: Icon
	newTag?: boolean
	subMenuHeader?: boolean
	hideOnMobile?: boolean
}

interface IFooterLink {
	name: string
	path: string
	external?: boolean
}

interface IButtonLink {
	name: string
	onClick: () => void
}

interface ILinks {
	[key: string]: {
		main: Array<IMainLink>
		footer: Array<IFooterLink | IButtonLink>
	}
}

export const navLinks: ILinks = {
	defi: {
		main: [
			{ name: 'Yields', path: '/yields', icon: Percent, subMenuHeader: true },
			{ name: 'Stablecoins', path: '/stablecoins/chains', icon: DollarSign, subMenuHeader: true },
			{ name: 'Chains', path: '/chains', icon: Link },
			{ name: 'Directory', path: '/directory', icon: Compass },
			{ name: 'Liquidations', path: '/liquidations/eth', icon: Droplet },
			{ name: 'Roundup', path: '/roundup', icon: PaperIcon },
			{ name: 'Airdrops', path: '/airdrops', icon: CloudDrizzle },
			{ name: 'Oracles', path: '/oracles', icon: Shield },
			{ name: 'Forks', path: '/forks', icon: Share2 },
			{ name: 'Watchlist', path: '/watchlist', icon: Bookmark },
			{ name: 'Top Protocols', path: '/top-protocols', icon: Map },
			{ name: 'Categories', path: '/categories', icon: RefreshCcw },
			{ name: 'Recent Listing', path: '/recent', icon: Clock },
			{ name: 'Languages', path: '/languages', icon: Code },
			{ name: 'About', path: '/about', icon: HelpCircle },
			{ name: 'List Your Project', path: 'https://docs.llama.fi/list-your-project/submit-a-project', icon: PaperIcon },
			{
				name: 'Donate',
				path: 'https://etherscan.io/address/0x48dC010162095E122abAa420Ff5DD94f93115FaD',
				icon: DollarSign
			}
		],
		footer: [
			{
				name: 'Twitter',
				path: 'https://twitter.com/DefiLexis',
				external: true
			},
			{
				name: 'Download Data',
				onClick: downloadDefiDataset
			}
		]
	},
	yields: {
		main: [
			{ name: 'DeFi', path: '/', icon: BarChart2, subMenuHeader: true, hideOnMobile: true },
			{ name: 'Stablecoins', path: '/stablecoins/chains', icon: DollarSign, subMenuHeader: true, hideOnMobile: true },
			{ name: 'Overview', path: '/yields/overview', icon: PieChart },
			{ name: 'Pools', path: '/yields', icon: TrendingUp },
			{ name: 'Stablecoin Pools', path: '/yields/stablecoins', icon: Pocket },
			{ name: 'Projects', path: '/yields/projects', icon: List },
			{ name: 'Watchlist', path: '/yields/watchlist', icon: Bookmark },
			{ name: 'List your protocol', path: 'https://github.com/DefiLexis/yield-server#readme', icon: PlusCircle }
		],
		footer: [
			{
				name: 'API Docs',
				path: '/docs/api'
			},
			{
				name: 'Download Data',
				path: 'https://datasets.llama.fi/yields/yield_rankings.csv',
				external: true
			}
		]
	},
	stablecoins: {
		main: [
			{ name: 'DeFi', path: '/', icon: BarChart2, subMenuHeader: true, hideOnMobile: true },
			{ name: 'Yields', path: '/yields', icon: Percent, subMenuHeader: true, hideOnMobile: true },
			{ name: 'Overview', path: '/stablecoins', icon: PieChart },
			{ name: 'Chains', path: '/stablecoins/chains', icon: Link }
		],
		footer: [
			{
				name: 'API Docs',
				path: '/docs/api'
			}
		]
	},
	nfts: {
		main: [
			{ name: 'DeFi', path: '/', icon: BarChart2, subMenuHeader: true, hideOnMobile: true },
			{ name: 'Overview', path: '/nfts', icon: TrendingUp },
			{ name: 'Chains', path: '/nfts/chains', icon: Link },
			{ name: 'Marketplaces', path: '/nfts/marketplaces', icon: ShoppingCart },
			{ name: 'About', path: '/nfts/about', icon: HelpCircle }
		],
		footer: [
			{
				name: 'API Docs',
				path: '/docs/api'
			}
		]
	}
}

function downloadDefiDataset() {
	if (
		confirm(`This data export contains a lot of data and is not well suited for most types of analysis.
We heavily recommend to use the csv exports available on other pages through the ".csv" buttons, since this export is hard to analyze unless you make heavy use of code.

Do you still wish to download it?`)
	) {
		window.open('https://datasets.llama.fi/all.csv', '_blank')
	}
}
