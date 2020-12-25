import React from 'react';
import { Container, Title, Side_Title, Name,Frame,
  SubContainer,Br,Background,TextLink,InnerContainer,
  Main,Info_Details,Link_style,CancelBtnMobile,
  Password,Text,Link,Break,CancelBtn,Picture,Row,Phone,VisaIcon } from './styles/account';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Account({ children, ...restProps }) {
    return <Account {...restProps}>{children}</Account>;
  }
  
Account.Title = function AccountTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
// Account.Background = function AccountBackground({ children, ...restProps }) {
//   return <Background {...restProps}>{children}</Background>;
// };

Account.Frame = function AccountFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};
Account.SubContainer = function AccountSubContainer({ children, ...restProps }) {
  return <SubContainer {...restProps}>{children}</SubContainer>;
};
Account.InnerContainer = function AccountInnerContainer({ children, ...restProps }) {
  return <InnerContainer {...restProps}>{children}</InnerContainer>;
};
Account.Info_Details = function AccountInfo_Details({ children, ...restProps }) {
  return <Info_Details {...restProps}>{children}</Info_Details>;
};

Account.Picture = function AccountPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'} />;
};
Account.Side_Title = function AccountSide_Title({ children, ...restProps }) {
  return <Side_Title {...restProps}>{children}</Side_Title>;
};
Account.Name = function AccountName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};
Account.Password = function AccountPassword({ children, ...restProps }) {
  return <Password {...restProps}>{children}</Password>;
};
Account.Phone = function AccountPhone({ children, ...restProps }) {
  return <Phone {...restProps}>{children}</Phone>;
};
Account.Text = function AccountText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
// Account.TextLink = function AccountTextLink({ children, ...restProps }) {
//   return <TextLink {...restProps}>{children}</TextLink>;
// };
// Account.Br = function AccountBr({ children, ...restProps }) {
//   return <Br {...restProps}>{children}</Br>;
// };
Account.Row = function AccountRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};
Account.Link_style = function AccountLink_style({ children, ...restProps }) {
  return <Link_style {...restProps}>{children}</Link_style>;
};

// Account.Break = function AccountBreak({ ...restProps }) {
//   return <Break {...restProps} />;
// };
Account.Link = function AccountLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
Account.CancelBtn = function AccountCancelBtn({ children, ...restProps }) {
  return <CancelBtn {...restProps}>{children}</CancelBtn>;
};
Account.CancelBtnMobile = function AccountCancelBtnMobile({ children, ...restProps }) {
  return <CancelBtnMobile {...restProps}>{children}</CancelBtnMobile>;
};

Account.Main = function AccountMain({ children, ...restProps }) {
  return <Main {...restProps}>{children}</Main>;
};
Account.Container = function AccountContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
Account.VisaIcon = function AccountVisaIcon({ children, ...restProps }) {
  return <FontAwesomeIcon {...restProps}>{children}</FontAwesomeIcon>;
};