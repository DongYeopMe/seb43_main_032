// 기타 타입 선언을 해주시면 됩니다. 특정 타입들은 새 파일을 생성해주세요.

export type DefaultObj = {
  [key: string]: string;
};

export type ArrObj = { [key: string]: string[] };

export type BannerProps = {
  imgWidth?: boolean;
  isScrolled?: boolean;
  showImg?: boolean;
};
