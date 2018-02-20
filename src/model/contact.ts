export interface Contact {
  icon: string;
  text: string;
  link: string;
  color?: string;
}

const blue = 'primary';
const red = 'danger';
const green = 'secondary';
export const Contacts: Contact[] = [
  {icon: 'ionic', text: 'BeenoTung Homepage', link: "https://beeno-tung.surge.sh"}
  , {icon: 'send', text: 'Telegram @beenotung', link: "https://t.me/beenotung", color: blue}
  , {icon: 'logo-facebook', text: 'Messenger @beenotung', link: "https://m.me/beenotung", color: blue}
  , {icon: 'logo-twitter', text: 'Twitter @beenotung', link: "https://twitter.com/beenotung", color: blue}
  , {icon: 'logo-google', text: 'GMail', link: "mailto:tungcheungleong@gmail.com", color: blue}
  , {icon: 'logo-yahoo', text: 'YMail', link: "mailto:aabbcc1241@yahoo.com.hk", color: red}
  , {icon: 'ios-chatbubbles', text: 'Wechat @beenotung', link: "", color: green}
];
