import styled from 'styled-components/macro'
import { Link as ReachRouterLink } from 'react-router-dom'

export const Background = styled.div`
  background-color: #f3f3f3;
  width: 100%;
  padding-top: 40px;
  padding: 25px;
`

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
// //   justify-content: center;
// //   padding-top: 40px;
// //   padding-left: 40px;
//     max-width: 900px;
//     margin: auto;
//     padding: 40px;
//   background-color: #f3f3f3;
//   display: grid;
//   grid-template-columns: auto;
//   grid-gap: 5px;
//   padding-top: 40px;
//   padding: 25px;
// `;

// export const Title = styled.h1`
//     font-size: 1.5rem;
//     color: #757575;
//     margin-bottom: 40px;
//     // padding-left: 40px;
//     text-align: left;
// `;
export const Frame = styled.div`
  // display: grid;
  // grid-template-columns: 1fr 1fr;
  // padding-left: 40px;
`

// export const InnerContainer = styled.div`
// //   padding: 150px 0 500px 0;
// //   flex-direction: column;
// //   align-items: normal;
// //   width: 50%;

// //   @media (max-width: 1100px) {
// //     display: none;
// //   }
//     background-color: #fff;
//     padding: 10px;
//     border: 1px solid #bababa;;
//     line-height: 2.65rem;
// `;
// export const SubContainer = styled.div`
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     // padding: 40px 40px;
//     // flex-direction: column;
//     // align-items: flex-end;
//     // width: 100%;
//     // text-align: right;

// `;
// export const Br = styled.br`
// `;

// export const Side_Title = styled.p`
//     text-transform: uppercase;
//     color: #999999;
//     font-size: 1rem;
//     text-align: left;
// `;

// export const CancelBtn = styled.button`
//     // background-color: #dfdfdf;
//     // border: 0;
//     // padding: 12px;
//     // font-size: 1rem;
//     // width: 25%;
//     // font-weight: bold;

//     background-color: #dfdfdf;
//     border: 0;
//     padding: 12px;
//     margin: 0px 0px 20px 0px;

//     width: 220px;
//     font-weight: bold;
//     display: inline-block;

//     &:hover {
//         background-color: #999999;
//     }

// `;

// export const Email = styled.p`
//     color: #808080;
//     // text-overflow: ellipsis;
//     font-size: 16px;
// `;

export const Password = styled.div`
  color: #999999;
  // margin-bottom: 5px;
  // font-size: 16px;
`
export const Phone = styled.div`
  color: #999999;
  // margin-bottom: 5px;
  // font-size: 16px;
`

export const Text = styled.p`
  color: #999999;
`

// export const Row = styled.div`
//     cursor: pointer;
//     line-height: 3.65rem;
//     position: relative;
// `;

// export const Link = styled.div`
//     color: #2a94fc;
//     margin-bottom: 5px;
//     text-decoration: none;
//     // position: absolute;
//     // display: inline;
//     right: 0;
//     // line-height: 3rem;
//     // font-size: 1.2rem;
//     cursor: pointer;
// `;
// export const TextLink = styled.a`
//     // color: #2a94fc;
//     // margin-bottom: 20px;
//     // text-decoration: none;
//     // // position: absolute;
//     // // display: inline;
//     // right: 0;
//     // line-height: 3rem;
//     // font-size: 1.2rem;
//     // cursor: pointer;
// `;

// export const Break = styled.div`
//     flex-basis: 100%;
//     height: 0;
//     text-decoration: underline;

//     ::before {
//         display: block;
//         content: "";
//         border-top: 0.05rem solid #999999;
// `;

// export const cancelBtnMobile = styled.button`
//     box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
//     background-color: #e6e6e6;
//     color: #000;
//     border-width: 0;
//     padding: 10px 20px;
//     border-radius: 5px;
//     max-width: 130px;
//     font-weight: bold;
//     font-size: 20px;
//     margin-top: 10px;
//     cursor: pointer;
//     transition: background-color 0.5s ease;
// `;

export const Picture = styled.img`
  border: 3px solid none;
  cursor: pointer;
  width: 48px;
  height: auto;
  object-fit: contain;

  @media (min-width: 478px) {
    width: 48px;
    height: 48px;
  }
`

export const Main = styled.div`
  padding-top: 40px;
  background-color: #f3f3f3;
`

export const Container = styled.div`
  padding: 25px;
  display: grid;
  grid-template-columns: auto;
  grid-gap: 5px;

  @media screen and (min-width: 478px) {
    max-width: 900px;
    margin: auto;
    padding: 40px;
  }
`

export const Title = styled.div`
  font-size: 1.5rem;
`

export const InnerContainer = styled.div`
  background-color: #fff;
  padding: 10px;
  border: 1px solid bababa;
  line-height: 2.65rem;

  @media (min-width: 478px) {
    background-color: #f3f3f3;
    border-top: 1px solid black;
    border-left: 0px;
    border-right: 0px;
    border-bottom: 0px;
    padding: 5px 0 5px 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    font-size: 0.8rem;
    line-height: 2rem;
  }
`
export const Info_Details = styled.div`
    grid-template-rows: 1fr 1fr 1fr;
    display: grid;

    @media (min-width: 478px) {
        &div:not(:first-child) {
            border-top: 1px solid black;
            border-left: 0px;
            border-right: 0px;
            border-bottom: 0px;
    }
`

export const Side_Title = styled.p`
  text-transform: uppercase;
  color: #999999;
  font-size: 1rem;
`

export const CancelBtn = styled.button`
  display: none;
  :hover {
    background-color: #bababa;
  }
  @media (min-width: 478px) {
    background-color: #dfdfdf;
    border: 0;
    padding: 12px;
    margin: 0px 0px 20px 0px;

    width: 220px;
    font-weight: bold;
    display: inline-block;
  }
`

export const SubContainer = styled.div`
  @media screen and (min-width: 478px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export const Email = styled.div`
  font-weight: bold;
`
export const Input = styled.input`
  font-weight: bold;
`

export const Row = styled.div`
  cursor: pointer;
  line-height: 3.65rem;
  position: relative;

  @media (min-width: 478px) {
    line-height: 2rem;
    padding: 2px;
  }
`

export const Link_style = styled.div`
  :hover {
    text-decoration: underline;
  }

  ::before {
    display: block;
    content: '';
    border-top: 0.05rem solid #999999;
  }

  @media screen and (min-width: 478px) {
    ::before {
      display: none;
    }
  }
`

export const Link = styled.div`
  color: #2a94fc;
  font-weight: bold;
  text-align: right;
`

export const CancelBtnMobile = styled.button`
  background-color: #dfdfdf;
  border: 0;
  padding: 12px;
  font-size: 1rem;
  width: 100%;
  font-weight: bold;

  @media (min-width: 478px) {
    display: none;
  }
`

export const VisaIcon = styled.div`
  font-size: 2rem;
`

export const Redeem = styled.span`
  // font-size: 2rem;
`

// export const ArrowIcon = styled.i`
//     color: bababa;
//     position: absolute;
//     display: inline;
//     right: 0;
//     line-height: 3rem;
//     font-size: 1.2rem;

//     @media (min-width: 478px) {
//         visibility: hidden;
//     }
// `;

// export const Link_style = styled.div``;
// export const creditCardIcon = styled.div``;
// export const alignRight = styled.div``;
// export const Phone = styled.div``;
// export const subContainer = styled.div``;
// export const container = styled.div``;
