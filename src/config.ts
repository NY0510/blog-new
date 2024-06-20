import type { LicenseConfig, NavBarConfig, ProfileConfig, SiteConfig } from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "NY64의 무한삽질 블로그",
	subtitle: "⚒️ 끝이 없는 삽질",
	lang: "ko_kr", // 'en', 'zh_CN', 'zh_TW', 'ja'
	themeColor: {
		hue: 300, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: true, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "assets/images/demo-banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, defaults center
	},
	favicon: [
		{
			src: "/favicon/favicon-16x16.png",
			sizes: "16x16",
		},
		{
			src: "/favicon/favicon-32x32.png",
			sizes: "32x32",
		},
		{
			src: "/favicon/favicon-96x96.png",
			sizes: "96x96",
		},
		{
			src: "/favicon/favicon-180x180.png",
			sizes: "180x180",
		},
		{
			src: "/favicon/favicon-192x192.png",
			sizes: "192x192",
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		// {
		//   name: 'GitHub',
		//   url: 'https://github.com/saicaca/fuwari',     // Internal links should not include the base path, as it is automatically added
		//   external: true,                               // Show an external link icon and will open in a new tab
		// },
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "NY64 | 김가온",
	bio: "삽질조아",
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/NY0510",
		},
		{
			name: "Discord",
			icon: "fa6-brands:discord",
			url: "https://discord.com/users/690148325604720660",
		},
		{
			name: "Buy me a coffee",
			icon: "fa6-solid:mug-hot",
			url: "https://toss.me/nyny64",
		},
		{
			name: "Email",
			icon: "fa6-solid:envelope",
			url: "mailto:me@ny64.kr",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: false,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};
