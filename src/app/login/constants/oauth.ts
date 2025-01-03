import googleIcon from '@assets/icons/google.svg';
import kakaoIcon from '@assets/icons/kakao.svg';

type Oauth = {
  oauth: string;
  icon: string;
  color: string;
  alt: string;
};

const OAuth: Oauth[] = [
  {
    oauth: '구글',
    icon: googleIcon,
    color: '#fff',
    alt: '구글로 간편 로그인하기',
  },
  {
    oauth: '카카오',
    icon: kakaoIcon,
    color: '#FAE100',
    alt: '카카오로 간편 로그인하기',
  },
];

export default OAuth;
